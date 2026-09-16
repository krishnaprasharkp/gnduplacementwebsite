# GNDU placement & corporate relations portal

Institutional draft built with TypeScript, React, Tailwind CSS and Vinext (Next.js-compatible routing).

## Run and check

- `npm install`
- `npm run dev`
- `npm run build`
- `npx tsc --noEmit`
- `node --experimental-strip-types recruitment.test.mjs`
- `node --experimental-strip-types placements.test.mjs`

## Content

- `data/site.ts`: navigation, university facts, technology domains, events and official contact placeholders.
- `data/redesign.ts`: technology topic lists, collective coding metrics, photography credits and leadership content.
- `data/placements.ts`: previous recruiters, recent drives and upcoming recruitment notices.
- The supplied GNDU crest is used in the header, footer and site icon. The supplied Maharaja Ranjit Singh Bhawan photograph is the homepage background.
- The Projects page and all project showcase links were removed at the user's request. Technology content describes fields of learning and project work without invented project outcomes.
- The previous-recruiter names were supplied by the user. A past recruitment relationship does not imply a currently open vacancy.

## Recent and upcoming drives

The recent-drives and upcoming-company arrays are intentionally empty until official notices are provided. Explicitly labelled preview cards show the interface without inventing company visits, vacancies or outcomes.

Populate `recentDrives` with official company, date, role and outcome records. Populate `upcomingCompanies` with eligibility, role, selection process, ISO 8601 deadline (including timezone), drive date and an HTTPS application URL. Set `placeholder: false` only for an actual approved notice. Optional `logoIndex` refers to the previous-recruiter list.

Upcoming cards expand with accessible accordion controls. Application links open the supplied external application portal; this site never simulates an application receipt. Expired, malformed, missing or preview application records cannot produce an active application button.

## Motion

- Route changes use a short exit fade and a 400ms entrance.
- Section reveals and a subtle campus-photo entrance add restrained movement.
- Events advance one at a time; recent drives scroll horizontally using the installed Embla carousel.
- Carousels pause on interaction, hover, keyboard focus and hidden tabs. They have manual controls.
- Recruiter logos move in continuous rows without a visible pause button, as requested. Hover pauses the rows and reduced-motion preferences show a static layout.
- Reduced-motion preferences disable automatic transitions and movement.

## Recruiter enquiry integration

`lib/recruitment.ts` owns validation and the submission adapter. Its endpoint is intentionally null. No form data or document is sent or persisted, and a missing receiving service never produces a success message. Entries remain in React memory until navigation or refresh.

Before enabling an endpoint, implement server-side validation, rate limiting, bot verification, document size/type/signature checks, malware checks, durable receipt and approved privacy/retention arrangements. Client checks and the honeypot are not sufficient server security.

The same-origin endpoint must accept multipart FormData, return non-2xx on failure, and return `{ "success": true, "reference": "actual-receipt-reference" }` only after durable receipt.

## Release status

Draft pages remain noindex until university approval. Official contacts, event photographs, verified placement notices, approved policies and a live enquiry backend are pending. No browser interaction audit or Lighthouse certification is claimed. Local previews remain available; no new Git publication is attempted following the earlier declined permission.
