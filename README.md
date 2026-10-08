# Nidhi: Portfolio

Personal portfolio built with **React + Vite**, styled with plain CSS, with **Framer Motion** for a few subtle animations and **Lucide** for icons. Dark mode by default, with a light mode toggle.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the production build locally
```

Requires Node 18 or newer.

---

## Before you publish: 4 files to add

Nothing breaks if these are missing. The page shows a clear placeholder instead. Put them in `public/assets/`:

| File | What it is |
| --- | --- |
| `profile.jpg` | Your photo. Portrait crop around 4:5 (for example 800×1000) works best. |
| `Nidhi-Resume.pdf` | Your resume. The Download / View buttons switch on automatically once the file exists. |
| `projects/ai-chatbot.png`, `amazon-clone.png`, `netflix-clone.png`, `todo-list.png`, `abtalks-website.png` | Project screenshots, about 1600×1000. |
| `logos/sopra-steria.svg` (optional) | Only if you have the **official** logo. Then set `logo` in `src/data/achievements.js`. Without it, a plain text badge is shown. |

Then, in `index.html`, add your real deployed URL as `canonical` and `og:url`, and a 1200×630 `og:image` (instructions are in the comment near the top of that file).

## Hiding the "[Add ...]" placeholders

Missing details (a credential link, a screenshot, the resume) show as dashed `[Add ...]` markers so nothing is silently invented. When you are ready to publish, set this in `src/data/site.js`:

```js
export const SHOW_PLACEHOLDERS = false;
```

---

## Updating your content

All content lives in `src/data/`. You should not need to touch components.

| File | Controls |
| --- | --- |
| `site.js` | Name, contact details, social links, About text, profile card, contact-form settings |
| `projects.js` | Projects (see below) |
| `skills.js` | Skill groups and their status labels |
| `achievements.js` | LeetCode numbers, Sopra Steria scholarship, coding activities |
| `certifications.js` | Certifications and hackathon / event records |
| `education.js` | Education timeline and CGPA |
| `learning.js` | "Currently Learning" list |

### Projects and links

Every project currently links to your GitHub profile, and **no Live Demo button is shown**. To change that for a project, edit its entry in `src/data/projects.js`:

```js
{
  name: 'AI Chatbot',
  github: 'https://github.com/nidhirathor6260-ui/your-exact-repo', // replace the profile link with the repo
  live: 'https://your-real-deployed-url.vercel.app',                // add ONLY a real URL
}
```

- `live: null` shows only **View on GitHub**.
- A real `live` URL adds a **Live Demo** button automatically.
- `features` should list only things that really exist in the repo. Add or remove labels to match.
- `technologies` for ABTalks is empty on purpose. Fill it in with what the repository actually uses.

### Certificate links

In `src/data/certifications.js`, set `credentialUrl` to the real link and a **View Credential** button appears. Leave it `null` until you have one. Never paste a guess.

---

## Contact form

The form validates input, but it **does not send email until you connect a service**. With nothing configured, submitting opens the visitor's email app with the message filled in, and the form says so.

To connect one, copy `.env.example` to `.env` and fill in **one** option:

- **Formspree**: create a form at formspree.io and set `VITE_FORMSPREE_ENDPOINT`.
- **EmailJS**: set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`. Your template can use `from_name`, `reply_to` and `message`.

On Vercel, add the same variables under **Project Settings → Environment Variables**, then redeploy. These keys are public by design (they ship in the browser bundle), so use the public keys only.

---

## Project structure

```
src/
├── assets/
├── components/    Navbar, Footer, Button, SectionTitle, cards, modal, icons...
├── data/          all content: projects, skills, certifications, achievements...
├── hooks/         useTheme, useActiveSection, useResumeStatus
├── sections/      Hero, About, Skills, Projects, Achievements, Certifications,
│                  Hackathons, Education, Learning, ResumeCTA, Contact
├── App.jsx
├── main.jsx
└── index.css      design tokens (dark + light) and all styles
public/
├── favicon.svg
└── assets/        profile.jpg, resume PDF, project screenshots
```

Design tokens (colours, radii, fonts) are CSS variables at the top of `src/index.css`. To change the accent colour, edit `--accent`, `--accent-text` and the button variables in both the dark and light blocks.

---

## Deploy

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/nidhirathor6260-ui/YOUR-REPO-NAME.git
git push -u origin main
```

Create the empty repository on github.com first. `node_modules`, `dist` and `.env` are already in `.gitignore`.

### 2. Deploy on Vercel

1. Sign in at [vercel.com](https://vercel.com) with GitHub and choose **Add New → Project**.
2. Import the repository. Vercel detects **Vite** automatically (build command `npm run build`, output directory `dist`), so keep the defaults.
3. Add the contact-form environment variables if you set them up, then click **Deploy**.
4. Every later `git push` to `main` redeploys automatically.

After the first deploy, put the live URL into `index.html` (`canonical`, `og:url`, `og:image`) and into the `live` field of this portfolio's entry if you list it anywhere.

---

## Accessibility and performance notes

- Semantic landmarks, one `h1`, ordered headings, a skip link, visible focus states, and labelled controls.
- Animations are limited to one hero entrance and one small reveal per block. They switch off for visitors with `prefers-reduced-motion`.
- Framer Motion loads through `LazyMotion` (the small `domAnimation` feature set) and is split into its own chunk. Project images are lazy-loaded and fall back to a placeholder if missing.
