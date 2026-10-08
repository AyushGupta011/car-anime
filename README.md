# Scroll-Driven Hero Animation

A high-performance, responsive, scroll-driven hero section built with Next.js (App Router), Tailwind CSS, and GSAP. 

Live Demo: [GitHub Pages Link Here]

## Features & Animation Decisions

- **Intro Sequence**: Handled via `useHeroIntro.ts` which uses a GSAP timeline to gracefully stagger the headline characters, stat items, and the car visual upon page load.
- **Scroll-Driven Parallax**: Handled via `useHeroScroll.ts`. The hero section is pinned using GSAP's `ScrollTrigger`, and as the user scrubs down the page, the car scales and translates out while the typography fades away dynamically.
- **Performance Optimized**: We strictly animate `transform` and `opacity` properties using hardware acceleration (`will-change: transform`) avoiding expensive repaints and reflows. 
- **Accessibility & UX**: All motion respects `prefers-reduced-motion` settings. The staggered letter headline remains fully accessible to screen readers using ARIA labels, while splitting the letters visually for GSAP.
- **Static Export**: The project is configured for GitHub Pages using `output: "export"`.

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` to view the animation.

## Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the `out/` directory to GitHub Pages upon pushing to `main`.
