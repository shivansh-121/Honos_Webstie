# Honos Protection Services — Website

Cinematic, scroll-driven marketing site for Honos Protection Services.

## Stack

- Next.js 14 (App Router)
- Three.js + React Three Fiber + Drei + Postprocessing
- GSAP + ScrollTrigger
- Lenis smooth scroll
- Framer Motion
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Open **[http://127.0.0.1:3000](http://127.0.0.1:3000)** (or `http://localhost:3000`).

**Windows:** double-click `start-website.bat` in the project folder.

### "Connection error" in the browser?

1. The dev server must be running — you should see `Ready` in the terminal.
2. **First visit after starting** can take **30–60 seconds** while the site compiles; wait, then refresh.
3. Do not close the terminal window while viewing the site.
4. If the port is stuck, run: `npx kill-port 3000` then `npm run dev` again.

## Build

```bash
npm run build
npm start
```

## Pages

- `/` — Cinematic home experience
- `/services` — Service details
- `/about` — Philosophy & story
- `/contact` — Contact form & CTA
