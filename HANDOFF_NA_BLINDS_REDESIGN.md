# NA Blinds site redesign – handoff for full implementation

## What went wrong

A previous implementation only updated **some** files (Home, CTASection, MobileStickyCTA, ThankYouConsultation). The **rest of the site still uses teal** (`ocean` / `#5b8fa3`), so the site still looks teal. The plan’s “mostly nude” base and full palette were not applied site-wide.

## Design direction (from competitive analysis / plan)

- **Overall feel:** Mostly **warm and neutral** (“nude”) – not dark. Cream, taupe, soft neutrals as the base.
- **Primary (main background):** Warm Cream `#F5F1E8`
- **Secondary:** Taupe `#A89B8A`
- **Accent / highlight:** Navy `#2C3E50` and Charcoal `#3A3A3A` in **small doses only** – e.g. one primary CTA button, key headings, or links. Not large areas.
- **Phone CTAs:** Green accent for “Call” buttons (e.g. `#2d7a5e` or similar).
- **Do not:** Use teal/ocean (`#5b8fa3`) as the main brand color on the public site.

So: **site = mostly nude (warm cream, taupe, soft sand); navy/charcoal only as accents** (primary CTA, important text/links). Teal should be removed from customer-facing UI.

## Tech stack

- **Repo:** `/Users/christopher/Projects/nablinds`
- **Stack:** Vite + React + TypeScript, Tailwind CSS, React Router.
- **Tailwind config:** `tailwind.config.js` – colors already include `navy`, `charcoal`, `phone`; `ocean` is still there (can keep for internal docs only or remove from main UI).

## What’s already done (partial)

- **Tailwind:** `navy` (#2C3E50), `charcoal` (#3A3A3A), `phone` (#2d7a5e) added.
- **Home.tsx:** Hero CTA and trust row use navy; testimonial quote and “Product Warranty” in trust row added; other Home accents switched to navy.
- **CTASection.tsx:** Primary button navy, Call outline navy.
- **MobileStickyCTA.tsx:** Primary button navy, Call button green (`phone`).
- **ThankYouConsultation.tsx:** Ocean replaced with navy.

## What still uses teal (ocean) – must be updated

Apply the plan palette (navy/charcoal for primary CTAs and key links; phone green for Call; no ocean on public pages).

### Shared components (these make the site look teal on every page)

| File | What to change |
|------|----------------|
| `src/components/Header.tsx` | Nav active/hover and all CTA buttons: `text-ocean`, `hover:text-ocean`, `bg-ocean` → use `navy` (and `phone` for a Call button if present). |
| `src/components/Footer.tsx` | All link hovers and icons: `hover:text-ocean`, `group-hover:text-ocean` → `hover:text-navy` (or keep neutral). |
| `src/components/PromoBar.tsx` | `bg-ocean` → e.g. `bg-navy` or `bg-charcoal` (accent bar). |
| `src/components/ContactInfo.tsx` | Phone/email/map/clock icons and text use `text-ocean`, `bg-ocean` – switch to `navy` (or `phone` for phone number). |
| `src/components/ContactForm.tsx` | Focus rings `focus:ring-ocean`, submit button `bg-ocean`, secondary `border-ocean` / `text-ocean` → `navy`. |
| `src/components/ConsultationPopup.tsx` | Both buttons use `bg-ocean` / `border-ocean` / `text-ocean` → `navy`. |

### Other customer-facing pages

| File | What to change |
|------|----------------|
| `src/pages/ThankYou.tsx` | Same as ThankYouConsultation: replace `ocean` with `navy` (and `phone` for call CTA if desired). |

### Optional: apply “mostly nude” base

- In `tailwind.config.js`: ensure **Warm Cream** `#F5F1E8` and **Taupe** `#A89B8A` are the primary/secondary (e.g. `warm-cream`, `taupe`). Align `warm-white` / `soft-sand` with the plan if needed.
- Use warm cream / taupe / soft sand for **page backgrounds and cards** so the site feels “mostly nude”; use navy/charcoal only for CTAs, key headings, and links.

### Internal docs (optional)

- `src/pages/docs/*` – many use `text-ocean`, `bg-ocean`, `border-ocean`. Can leave as-is or switch to `navy` for consistency; not required for the “no more teal” public site.

## How to verify

1. Run: `cd /Users/christopher/Projects/nablinds && npm run dev` (or `npx vite`).
2. Open http://localhost:5173/
3. Check: header, footer, promo bar, contact page, consultation flow, thank-you pages – no teal; primary CTAs and key links use navy (or charcoal); Call actions can use green (`phone`).
4. Resize to mobile and confirm MobileStickyCTA uses navy + green as intended.

## Summary for the next model

- **Goal:** Site should follow the plan: **mostly nude (warm cream, taupe), navy/charcoal as accents only, no teal on public pages.**
- **Action:** Replace all `ocean` (and any raw teal) in **Header, Footer, PromoBar, ContactInfo, ContactForm, ConsultationPopup, ThankYou**, and any other customer-facing pages/components. Optionally add warm cream/taupe as the main background palette. Use this file and the codebase as the single source of truth.
