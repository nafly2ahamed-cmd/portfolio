# Portfolio site: S. Nafly Ahamed

Folders: `index.html`, `css/style.css`, `js/main.js`, `images/portrait.jpg` (already cropped to 800x1000), `files/` (put `Nafly_CV.pdf` here).

## Site map and layout
| Page (hash) | Desktop | Mobile |
|---|---|---|
| #home | Navy hero: text left, portrait right; highlight cards; about and skills in two columns | Single column, portrait below text |
| #about, #academic, #qualifications, #reflections, #contact | Centred 760px column; academic and qualifications use a vertical timeline | Same column, full width |
| #skills, #projects, #certificates | 3-column card grid (projects have filter chips) | 1-column cards |

## Image guidance
- Portrait: 800x1000 px (4:5), JPEG, under 150 KB.
- Certificates: 800x600 px (4:3), JPEG or WebP, under 120 KB each. Use real names, e.g. `images/cert-1.jpg`.
- Open Graph image: 1200x630 px, under 200 KB.
- Icons: simple outline SVG, 24 px, 2 px stroke, single colour.

## Run locally
Open `index.html` by double-clicking it. Fonts need an internet connection; system fonts are used otherwise.

## Host on GitHub Pages
1. Create a free GitHub account and a new public repository (e.g. `portfolio`).
2. Click Add file, Upload files, drag in everything inside this folder (keep the sub-folders), then Commit.
3. Open Settings, Pages, choose Deploy from a branch, branch `main`, folder `/ (root)`, Save.
4. After a minute your link appears at the top of the Pages screen.

## Host on Netlify Drop
1. Go to app.netlify.com/drop and sign in.
2. Drag this whole folder onto the page. Netlify shows your live link.
3. To update later, drag the folder again (or use the site's Deploys tab).

## Replace these placeholders (search the files for "EDIT:")
- LinkedIn URL: Home button and Contact button (`href="#"`).
- CV: add `files/Nafly_CV.pdf`.
- Project document links: enable each "View document" button; confirm the MYOB contribution; fill the 3 upcoming-project cards.
- Certificates: images, titles, institutions, years, descriptions (Qualifications and Certificates pages).
- Study dates on the Academic page; your own learning-experience text.
- Reflection entries (dates, text) and the philosophy lines if you want your own wording.
- Contact form: connect Formspree or similar, otherwise it only shows "Thank you" locally.
- Favicon and `og:image` tag.

## Quality-control checklist
- All menu links and buttons work; Back button moves between pages.
- No sideways scrolling at 360 px width.
- Text is readable (gold is used on navy or as lines, not as text on white).
- Tab through every page; focus outline is visible; Esc closes the menu and the lightbox.
- Mobile menu opens, closes and keeps focus inside.
- Spelling checked; no invented facts, grades or percentages.
- No home address, date of birth or exam results shown.
- Images are compressed; page loads quickly.

Note: this code has not been tested in a browser by me. Open it and run the checklist above.
