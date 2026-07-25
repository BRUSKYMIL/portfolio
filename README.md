# Personal Portfolio

![React](https://img.shields.io/badge/React-18.3.1-61DAFB)
![Netlify](https://img.shields.io/badge/deployed-Netlify-00C7B7)

> Bilingual (EN/ES) single-page portfolio for Luis Moreno-Torres Marqués, built with React and no build step.

**Live site: [luismoreno-torres.netlify.app](https://luismoreno-torres.netlify.app)**

A one-page developer portfolio: profile, experience, a featured project, a live list of public GitHub
repositories and a working contact form. React runs directly in the browser — JSX is compiled at page
load by Babel standalone, so there is no bundler, no `package.json` and no compile step between
editing a file and seeing the result.

## Stack

- React 18.3.1 and ReactDOM 18.3.1 (UMD development builds, loaded from unpkg with SRI hashes)
- Babel standalone 7.29.0, compiling the `.jsx` files in the browser via `<script type="text/babel">`
- Plain CSS in a single `<style>` block in `index.html`, using `oklch()` colours and CSS custom
  properties
- Google Fonts: Inter and JetBrains Mono
- GitHub REST API (`/users/BRUSKYMIL/repos`) for the projects section
- Netlify Forms for the contact form, plus Netlify for static hosting
- No build tooling, no npm dependencies, no framework CLI

## What it does

- **Bilingual UI.** An EN/ES toggle in the top bar switches every string on the page. The choice is
  saved to `localStorage` and applied to `<html lang>` on load.
- **Animated hero terminal.** A fake shell session (`whoami`, `cat profile.json`, `./run.sh`) with
  hand-rolled JSON syntax colouring, localised per language.
- **Content sections.** About, a "Currently" status block for the current role, and an experience
  timeline covering education and professional milestones.
- **Featured project.** A dedicated card for GamerZone, the author's own real-time communication
  platform, with a screenshot and a link to the production instance.
- **Live GitHub projects.** Fetches up to 100 public repositories on mount, drops forks, sorts by last
  push and renders the 9 most recent with language colour dots and dates. Loading, empty and error
  states are all handled — if the API is unreachable the section says so instead of breaking.
- **Skills section.** Grouped languages, frameworks, tooling and practices, plus the AI assistants in
  regular rotation.
- **Contact form.** Posts URL-encoded data to Netlify Forms (`form-name=contact`) and declares a
  `bot-field` honeypot. A hidden static form in `index.html` exists purely so Netlify can detect the
  form at deploy time; the visible, styled form is rendered by React. If the request fails, the
  message is stashed in `localStorage` so it is not lost during local development.
- **CV download** linking to `assets/CV-Luis-Moreno-Torres.pdf`.

## Getting started

There is nothing to install and nothing to build. However, the page **must be served over HTTP** —
opening `index.html` directly with `file://` will not work, because Babel fetches `content.jsx` and
`app.jsx` over the network and those requests are blocked by CORS on the `file://` origin.

Any static file server will do. From the project root:

```bash
git clone https://github.com/BRUSKYMIL/portfolio.git
cd portfolio
```

```bash
# Python (no install needed)
python -m http.server 8000
```

```bash
# or Node
npx serve .
```

Then open <http://localhost:8000>.

Two things behave differently on localhost:

- The contact form has no Netlify backend, so submissions fail and fall back to `localStorage`.
- The GitHub API is unauthenticated and rate-limited by IP (60 requests/hour), so the projects
  section may show its error state after repeated reloads.

To edit content, change `content.jsx`; to change layout or behaviour, change `app.jsx`. Reload the
page — there is no watch process.

## Project structure

```
index.html      Document shell: <head> metadata, the entire stylesheet, the hidden
                Netlify form-detection stub, the #root mount point, and the React /
                Babel <script> tags that load the two .jsx files
app.jsx         All UI. React components (TopBar, Hero, HeroTerminal, About, Now,
                Experience, FeaturedProject, Projects, Skills, Contact, Footer),
                the GitHub fetch, the form submit handler, language state, and the
                ReactDOM.createRoot() call that mounts <App />
content.jsx     All copy and data, no UI. A COPY object with parallel `en` and `es`
                trees (section titles, bios, experience entries, skill groups, form
                labels) and a PROFILE object (name, GitHub, LinkedIn, CV path).
                Both are published on `window` for app.jsx to read
assets/
  CV-Luis-Moreno-Torres.pdf   CV linked from the page
  gamerzone-preview.png       Screenshot used by the featured-project card
DEPLOY.md       Deployment guide (Spanish)
```

`app.jsx` and `content.jsx` are deliberately separated so the wording of the site can be updated in
one file without touching any component code.

## Deployment

Deployed on Netlify from `main` with an empty build command and `.` as the publish directory. Full
instructions, including the Netlify Forms setup and two alternative hosting routes, are in
[DEPLOY.md](DEPLOY.md).

## Status

Live and maintained — this is the author's active portfolio, updated as roles and projects change.
The no-build-step approach is a deliberate trade-off: it keeps the repository dependency-free and
instantly editable, at the cost of shipping React's development builds and compiling JSX in the
browser on every page load.

## License

Released under the MIT License — see [LICENSE](LICENSE).
