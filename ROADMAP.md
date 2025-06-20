# 🛠️ Real Estate Appraisal Website — Developer Roadmap

This roadmap outlines the phases of development, focusing on SEO, performance, accessibility, and clean UI. Tasks are grouped by priority and build stage.

---

## 📍 Phase 1: Core Functionality & Layout

- [x] Build homepage layout (hero, services, about, testimonials)
- [x] Add navigation bar with routes to Services, Journal, Contact
- [x] Add "Appraise My Home" order form page
- [X] Wire up Contact Form backend (FastAPI or other)
- [x] Add persistent CTA component across multiple pages
- [ ] Set up responsive layout (mobile/tablet support)

---

## 📍 Phase 2: SEO & Performance

- [ ] Add meta tags per page (title, description, Open Graph)
- [ ] Add structured data (JSON-LD for LocalBusiness schema)
- [ ] Optimize images (size, lazy loading, `alt` text)
- [ ] Implement lazy-loading for non-critical JS (like UserWay)
- [ ] Set up sitemap and robots.txt
- [ ] Use Lighthouse to audit for performance and fix Core Web Vitals

---

## 📍 Phase 3: Native Accessibility (replace UserWay)

- [x] Use semantic HTML (`<main>`, `<section>`, `<header>`, etc.)
- [ ] Label all form inputs with `label` or `aria-label`
- [ ] Add `aria-live` and `aria-describedby` for dynamic content
- [ ] Ensure keyboard navigability (tab index, skip to content link)
- [ ] High contrast + readable font sizes
- [ ] Responsive layout tested with screen readers

---

## 📍 Phase 4: Content & Polish

- [ ] Write journal/blog entries (real estate tips, trends, FAQ)
- [ ] Add testimonials dynamically (CMS or static JSON file)
- [ ] Add favicon and brand colors
- [ ] Refine mobile touch areas (button sizes, spacing)
- [ ] Add animation or transitions (deferred until final polish)

---

## 📍 Phase 5: Advanced Features (Future Stretch Goals)

- [ ] Admin dashboard to view contact/order form submissions
- [ ] Integrate Google Maps API for property lookup
- [ ] Hook into CRM or email autoresponder

---

### ✅ Legend

- `[x]` Complete
- `[ ]` To Do
