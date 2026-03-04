# Therapist Landing Page — Template

A modern, high-end RTL landing page for therapists, built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Designed as a reusable template — swapping between therapists requires editing a single file.

---

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS 3** with CSS custom properties for theming
- **Framer Motion** for scroll-triggered animations
- **Lucide React** for icons
- **Google Fonts** — Heebo + Assistant (Hebrew support)
- **TypeScript** strict mode
- RTL layout (`dir="rtl"`, `lang="he"`)

---

## Swapping to a New Therapist

**Only one file needs to change:** `lib/therapistData.ts`

1. Drop the therapist's photo in `public/images/`
2. Update the config object in `lib/therapistData.ts`
3. Run `npm run dev` — done

### Config fields

| Field | Description |
|---|---|
| `name`, `title`, `credentials` | Displayed in header, about, and footer |
| `heroHeadline` | Two lines separated by `\n` |
| `heroSubtext` | Subtitle under the headline |
| `aboutText` | Array of 2–3 paragraph strings |
| `specialties` | Pill tags shown in the Hero section |
| `services` | Array of 6 `{ icon, title, description }` objects |
| `highlights` | 3 bullet points in the About section (address auto-appended) |
| `stats` | `{ experience, clients, satisfaction }` — shown in TrustBar and Hero |
| `heroImage` / `profileImage` | Path to image in `public/images/` |
| `palette` | Full color scale (`50`–`900`, `bg`, `gradStart`, `gradEnd`) — drives the entire theme |
| `whatsappNumber` | International format, digits only (e.g. `972501234567`) |
| `email`, `address` | Shown in the contact section |
| `trustLogos` | Array of `{ name, abbr }` — professional certifications |

### Adding new service icons

Icons come from [Lucide React](https://lucide.dev/icons/). If a new therapist uses an icon not yet in the map, add it to the import and `iconMap` in `components/ServicesGrid.tsx`.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
├── app/
│   ├── layout.tsx        # Injects CSS theme vars from therapistData.palette
│   ├── page.tsx          # Page composition + footer
│   └── globals.css       # Base styles, gradient-text, scrollbar
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── ServicesGrid.tsx  # Add new icons here when needed
│   ├── AboutSection.tsx
│   └── ContactSection.tsx
├── lib/
│   └── therapistData.ts  # ← THE ONLY FILE YOU EDIT PER THERAPIST
├── public/
│   └── images/           # Drop therapist photos here
└── tailwind.config.ts    # cp-* colors point to CSS vars — never changes
```
