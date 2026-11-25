# recorte.cookiebytes.pt

Landing page for [Recorte](https://github.com/cookiebytespt/Recorte), the macOS cutting studio by [CookieBytes](https://cookiebytes.pt).

Plain static site. Only the help page is built, from Markdown (see below):

```
index.html                 the page (English in the markup)
assets/style.css           styles
assets/app.js              EN/PT switch; the Portuguese strings live here
assets/screenshots/        app screenshots (rendered from the SwiftUI previews in the Recorte project)
assets/icon.svg            app icon (copy of docs/brand/recorte-icon.svg)
help/en.md, help/pt.md     the help text, English and Portuguese (edit these)
help/build.py              builds help/index.html from them
help/template.html         page shell for the help page
CNAME                      custom domain for GitHub Pages
.nojekyll                  serve the files as they are (no Jekyll build)
.github/workflows/deploy.yml  builds the help page and deploys to GitHub Pages
```

## Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

Add `?lang=pt` or `?lang=en` to force a language.

## Editing text

Every translatable element has a `data-i18n` key (`data-i18n-html` when it contains markup,
`data-i18n-alt` for image descriptions). Change the English in `index.html` and the Portuguese
under the same key in `assets/app.js`. Portuguese terms follow the app's own localisation
(Imprimir e Cortar, Só cortar, Saída, Marcas de registo…).

## The help page

This repository is the source of the Recorte help. The text lives in two Markdown files:

- `help/en.md` (English)
- `help/pt.md` (Portuguese; menu and button names follow the app's Portuguese strings)

Edit both and push; the deploy workflow builds `help/index.html` from them. The built page is not
kept in git. To preview it locally:

```sh
pip install markdown-it-py        # once
python3 help/build.py
```

Both files need the same headings in the same order; the build stops with a message if they
differ. In-page links in `pt.md` use the English targets, for example `(#speed-pressure-and-blade)`,
and the build points them at the Portuguese heading.

## Updating screenshots

The screenshots come from the `#Preview`s in `App/Recorte/Views/MainView.swift` and
`App/Recorte/Help/GettingStartedView.swift` (light appearance; the hero uses the dark one),
saved as WebP. The preview
window title is removed: painted out on the editor shots, cropped off on the dialogs.

## Publishing

`.github/workflows/deploy.yml` runs on every push to `main` (and on demand): it builds the help
page and deploys the site to GitHub Pages.

One-time setup:

1. **Settings ▸ Pages ▸ Source**: GitHub Actions.
2. Point a DNS `CNAME` record for `recorte` at `cookiebytespt.github.io`.
