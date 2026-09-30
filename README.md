# Golden Grains Group — landing site

Static site (HTML/CSS/JS), three languages (EN/RU/KA). Pages: `index.html`, `investors.html`, `privacy.html`.

Deploys automatically to Vercel on every push to `main` (Vercel GitHub integration). `.github/workflows/deploy.yml` is a manual fallback (Actions → Run workflow).

Production: https://ggg-ruby.vercel.app
Local preview: `python3 -m http.server 8765` inside this folder.
