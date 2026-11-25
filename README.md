# recorte.cookiebytes.pt

Landing page for [Recorte](https://github.com/cookiebytespt/Recorte), the macOS cutting studio by [CookieBytes](https://cookiebytes.pt).

Plain static site, no build step:

```
index.html                 the page (English in the markup)
assets/style.css           styles
assets/app.js              EN/PT switch; the Portuguese strings live here
assets/screenshots/        app screenshots (rendered from the SwiftUI previews in the Recorte project)
assets/icon.svg            app icon (copy of docs/brand/recorte-icon.svg)
CNAME                      custom domain for GitHub Pages
.nojekyll                  serve the files as they are (no Jekyll build)
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

## Updating screenshots

The screenshots come from the `#Preview`s in `App/Recorte/Views/MainView.swift` and
`App/Recorte/Help/GettingStartedView.swift` (light appearance; the hero uses the dark one),
saved as WebP. The preview
window title is removed: painted out on the editor shots, cropped off on the dialogs.

## Publishing

1. In the repository settings, set **Pages ▸ Source** to **Deploy from a branch**, branch `main`, folder `/ (root)`.
2. Point a DNS `CNAME` record for `recorte` at `cookiebytespt.github.io`.
3. Push to `main`.
