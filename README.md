# Priority Experience Microsite

A four page, customer facing microsite built with Next.js 14 (App Router) and Tailwind CSS.

Academic prototype only. Not affiliated with Uber Technologies, Inc.

## Pages

| Route | Page |
|---|---|
| `/` | Home / Value Proposition |
| `/offering` | Product or Service Offering |
| `/pricing` | Pricing / Commercial Structure |
| `/trust` | Trust + Call to Action |

## Requirements

- Node.js 18.17 or later
- npm (comes with Node.js)

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser. Edit files in `app/` and `components/` and the site reloads automatically.

To test a production build locally:

```bash
npm run build
npm start
```

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Priority Experience microsite"
```

Create a new empty repository on GitHub (no README, no gitignore), then:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 4. Deploy to Vercel

Option A, dashboard (recommended):

1. Go to https://vercel.com and sign in with your GitHub account.
2. Click "Add New" then "Project".
3. Import the repository you just pushed.
4. Vercel detects Next.js automatically. Leave all settings as default.
5. Click "Deploy". Your public link appears in about a minute.

Option B, CLI:

```bash
npm i -g vercel
vercel
```

Follow the prompts, then run `vercel --prod` for the production URL.

After deployment, test the public link in an incognito browser window to confirm it loads without login.

## Project structure

```
app/
  layout.jsx        Shared layout, nav, footer, fonts, metadata
  globals.css       Tailwind and shared styles
  page.jsx          Home
  offering/page.jsx
  pricing/page.jsx
  trust/page.jsx
components/
  Nav.jsx
  Footer.jsx
  CtaBlock.jsx
```

## Pre-publish checklist

- [ ] Value proposition visible above the fold on the home page
- [ ] Four pages only: `/`, `/offering`, `/pricing`, `/trust`
- [ ] Pricing / commercial structure visible with the three plan options
- [ ] CTA present on every page ("Join the Priority Experience" / "Get Early Access")
- [ ] No internal strategy language (no V1, V2, capstone, financial model, ICP, or assignment references)
- [ ] Trust signals and policy clarity included on the Trust page
- [ ] All evidence placeholders replaced with verified sources before submission:
  - [ ] `[Insert verified customer review theme]`
  - [ ] `[Insert verified support policy source]`
  - [ ] `[Insert verified app store rating or review evidence]`
  - [ ] `[Insert verified delivery or membership proof point]`
  - [ ] `[Insert verified price or range]` (Pricing page, both paid plans)
  - [ ] `[Insert verified fee structure]` (Pricing page, Standard plan)
- [ ] Mobile responsive (check at 375px, 768px, and desktop widths)
- [ ] Footer disclaimer present: "Academic prototype only. Not affiliated with Uber Technologies, Inc."
- [ ] Public Vercel link tested in an incognito browser window
