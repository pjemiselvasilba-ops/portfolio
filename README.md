# Jemi Selvasilba P — Portfolio

MERN Stack Developer portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Run locally
npm install
npm run dev

## Build
npm run build

## Preview production build
npm run preview

## Deploy — Vercel
1. Push this repo to GitHub.
2. Import it at vercel.com → "Add New Project".
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Deploy — GitHub Pages
1. `npm run build` (outputs to `dist/`).
2. `vite.config.js` is already set with `base: '/portfolio/'` to match this repo's Pages URL.
3. Push `dist/` to a `gh-pages` branch (e.g. via the `gh-pages` npm package), or use a GitHub Actions workflow that runs `npm run build` and publishes `dist/`.

## Still to do
- Add a real résumé PDF at `public/resume.pdf` and set `resumeUrl: "/resume.pdf"` in `src/data/portfolio.js`.
- Add GitHub repo / live demo URLs for each project in `src/data/portfolio.js` (currently `null` — buttons are hidden until filled in).
- Fill in the exact NPTEL certificate title (and dates for both certificates) in `src/data/portfolio.js`.
