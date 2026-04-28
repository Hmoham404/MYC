# MYC Monastir Industrial Portfolio

Single-page React portfolio for industrial digital transformation, built with Vite, Tailwind CSS, Framer Motion, Recharts, and an optional Express proxy for AI chat.

## What is included

- Industrial Futurism UI with charcoal backgrounds, cyan accents, and glassmorphism cards.
- Smooth scroll reveals, staggered grid animations, and a dynamic typing hero.
- Simulated Live Operations dashboard with KPI cards and an animated operations chart.
- MYC Monastir bento-grid solutions section with a dark-mode Google Maps embed.
- Filterable portfolio grid for ATS AI CV Analyzer, Energy ML Optimizer, and Embedded Systems Controller.
- Creative Intelligence section explaining Leonardo AI and Canva workflow.
- Floating AI chatbot with context-injected system prompt and optional backend proxy.

## Key files

- [Tailwind config](tailwind.config.js)
- [Vite config](vite.config.js)
- [AI system prompt](src/config/aiPrompt.js)
- [Portfolio data](src/data/siteData.js)
- [Express AI proxy](server/index.js)

## Run locally

1. Install dependencies.
2. Copy `.env.example` to `.env` and set your AI API key.
3. Start the proxy with `npm run server`.
4. Start the frontend with `npm run dev`.

## Notes

- The chatbot calls `/api/ai`, which is proxied to the Express server in development.
- The map embed is intentionally stylized with CSS filters for a dark industrial look."# MYC" 
