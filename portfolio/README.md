# Manvendra Chaturvedi — Portfolio

A premium, glassmorphism developer-style portfolio built with **Next.js 15 (App Router)**,
**TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React** — repurposed
around the real content of Manvendra Chaturvedi's resume: Food Safety & Quality
Management (HACCP, FSMS, FSSC 22000, ISO 22000, ISO 45001, FSSAI compliance).

All resume-derived content lives in one place: `lib/constants.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/            App Router pages, layout, metadata, sitemap, robots
components/     All UI sections + shared building blocks (glass cards, cursor,
                magnetic buttons, aurora background, nav, footer)
hooks/          useMousePosition, useHoverCapable, useScrollReveal
lib/            constants.ts (all content), utils.ts (cn helper)
public/         favicon.svg, resume PDF (served by the "Download Resume" button)
```

## Notes on content honesty

- The "Download Resume" button links to the actual uploaded resume PDF in `public/`.
- There are no GitHub stats / contribution graph / live project demos, because
  the source resume has no coding projects or GitHub activity to show — adding
  those would have meant inventing data. The **Projects** section instead
  showcases the two real projects listed on the resume (bulk vended milk HACCP
  plan, and the retinol/HPLC lab project).
- The hero avatar is a monogram ("MC") rather than a photo, since no headshot
  was provided.
- The contact form is wired up client-side only (it simulates a send). Before
  going to production, connect it to a real endpoint — e.g. an API route
  calling Resend/SendGrid, or a service like Formspree.

## Before deploying to Vercel

1. Update `siteUrl` in `app/layout.tsx`, and the URLs in `app/sitemap.ts` /
   `app/robots.ts`, to your real domain.
2. Replace the placeholder `href`s in `lib/constants.ts` → `SOCIALS` with real
   GitHub/LinkedIn/X profile links.
3. Wire the contact form to a real backend (see note above).
4. `vercel --prod` or connect the repo in the Vercel dashboard — no other
   config is required, this is a stock Next.js App Router project.
