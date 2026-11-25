#!/usr/bin/env python3
"""Builds help/index.html from help/en.md and help/pt.md.

The two Markdown files are the source of the help page. Edit them, then run:

    python3 help/build.py

The deploy workflow runs this on every push, so the built page is not kept in git.
Needs markdown-it-py (pip install markdown-it-py).

The Portuguese file keeps the English in-page link targets, for example
(#speed-pressure-and-blade); the build points them at the matching Portuguese heading. For that
to work, both files must have the same headings in the same order, and the build stops if they
don't.
"""
import re
import sys
import unicodedata
from html import unescape
from pathlib import Path

from markdown_it import MarkdownIt

HERE = Path(__file__).resolve().parent


def slug(value):
    value = unicodedata.normalize("NFC", value).lower()
    value = re.sub(r"[^\w\s-]", "", value)
    return re.sub(r"\s", "-", value.strip())


def render(path):
    md = MarkdownIt("commonmark", {"html": True}).enable("table")
    html = md.render(path.read_text(encoding="utf-8"))
    toc, levels = [], []

    def heading(m):
        level, inner = m.group(1), m.group(2)
        ident = slug(unescape(re.sub(r"<[^>]+>", "", inner)))
        levels.append(level)
        if level == "2":
            toc.append(f'<li><a href="#{ident}">{inner}</a></li>')
        return f'<h{level} id="{ident}">{inner}</h{level}>'

    html = re.sub(r"<h([23])>(.*?)</h\1>", heading, html)
    html = html.replace("<table>", '<div class="tablewrap"><table>').replace("</table>", "</table></div>")
    return html, "".join(toc), levels


def main():
    en_html, en_toc, en_levels = render(HERE / "en.md")
    pt_html, pt_toc, pt_levels = render(HERE / "pt.md")

    if en_levels != pt_levels:
        sys.exit("help/en.md and help/pt.md don't have the same headings in the same order "
                 f"({len(en_levels)} in English, {len(pt_levels)} in Portuguese). "
                 "Add, remove or reorder sections in both files.")
    en_ids = re.findall(r'<h[23] id="([^"]+)"', en_html)
    pt_ids = re.findall(r'<h[23] id="([^"]+)"', pt_html)
    dupes = {i for i in en_ids + pt_ids if (en_ids + pt_ids).count(i) > 1}
    if dupes:
        sys.exit(f"These headings produce the same link target twice: {', '.join(sorted(dupes))}. Reword one.")
    anchors = dict(zip(en_ids, pt_ids))
    pt_html = re.sub(r'href="#([^"]+)"', lambda m: f'href="#{anchors.get(m.group(1), m.group(1))}"', pt_html)
    for name, html, ids in (("en.md", en_html, en_ids), ("pt.md", pt_html, pt_ids)):
        broken = [a for a in re.findall(r'href="#([^"]+)"', html) if a not in ids]
        if broken:
            sys.exit(f"help/{name} links to sections that don't exist: {', '.join(broken)}")

    page = (HERE / "template.html").read_text(encoding="utf-8")
    for key, value in {"EN_TOC": en_toc, "PT_TOC": pt_toc, "EN_BODY": en_html, "PT_BODY": pt_html}.items():
        page = page.replace("{{" + key + "}}", value)
    (HERE / "index.html").write_text(page, encoding="utf-8")
    print(f"help/index.html written ({len(page) // 1024} KB)")


if __name__ == "__main__":
    main()
