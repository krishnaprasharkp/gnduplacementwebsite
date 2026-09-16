# GNDU Placement and Career Enhancement Website

Responsive university placement website built with React, TypeScript, Tailwind CSS and Vinext.

## Run locally

Install Node.js 22.13 or later, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000/.

## Build

```sh
npm run build
```

## Content

- `app/`: homepage, university, leadership, technology, coding, recruiters, events and placement pages.
- `components/`: shared interface, moving logo rows, event carousels and expandable job cards.
- `data/`: university information, leadership messages, certification providers, recruitment notices and Instagram event references.
- `public/`: university photographs, portraits, company logos and event images.
- `scripts/`: content and asset maintenance utilities used during development.

Recruitment application buttons use the supplied external forms and respect closing dates. The recruiter enquiry backend is not configured. The site currently retains draft/noindex settings.

## Upload to GitHub

Upload this folder's contents to the root of your repository. Include `.openai/hosting.json`: the Vite configuration imports it. Dot-prefixed configuration files are included in this package and must also be uploaded. Do not upload the ZIP itself as a replacement for the source files.

Dependencies, generated builds, local caches and the showcase-video production files are excluded. Run `npm ci` to install dependencies.

Uploading the source to GitHub stores the code; it does not automatically deploy this server-rendered website to GitHub Pages.
