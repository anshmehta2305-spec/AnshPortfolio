# Ansh Mehta — Award-Level Personal Portfolio & Engineering Studio

> **Portfolio Domain:** [https://anshmehta.in](https://anshmehta.in)  
> **GitHub:** [https://github.com/anshmehta2305-spec](https://github.com/anshmehta2305-spec)  
> **LinkedIn:** [https://www.linkedin.com/in/ansh-mehta-b86528406](https://www.linkedin.com/in/ansh-mehta-b86528406)  
> **Email:** `ansh.mehta2305@gmail.com`

---

## ⚡ Tech Stack & Architecture

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Styling & Design System:** Tailwind CSS with dynamic CSS variable tokens (`data-theme="dark"` / `data-theme="light"`), blueprint grid background, and glassmorphism.
- **3D Graphics:** Three.js WebGL interactive data core and particle field responding smoothly to mouse vectors with performance capping.
- **Smooth Scrolling:** `@studio-freight/lenis` smooth wheel and touch inertia scrolling.
- **Transitions & UI:** Framer Motion spring physics + CSS hardware-accelerated transforms.
- **Single Data Source:** All portfolio projects, credentials, and resume milestones live in `/data/content.ts`.

---

## 🚀 Key Features

1. **Cinematic Intro Loader:** Animated engineer boot sequence with monogram reveal (`AM`) and progress bar.
2. **Interactive 3D Hero Scene:** Mouse-reactive WebGL geometry and orbiting particle constellation with automatic fallback for `prefers-reduced-motion`.
3. **Rotating Role HUD:** Cycling titles: *Full-Stack Developer*, *MERN & Next.js Engineer*, *AI-Powered Apps Builder*.
4. **Command Palette (`Cmd+K` / `Ctrl+K`):** Global spotlight launcher with keyboard navigation for jumping to sections, copying email, switching themes, or opening GitHub/LinkedIn.
5. **Horizontal Pinned Projects Gallery:** Responsive carousel on desktop and card stack on mobile.
6. **Case Study Modals:** Full technical breakdowns for every project (Problem statement, Role, Tech stack, Key features, Measurable impact, and Architecture pipeline).
7. **Classified Skills Radar:** Interactive categorized skill cluster with level badges and hover tooltips.
8. **Enterprise Job Simulations Timeline:** Animated SVG milestone track for Deloitte, Walmart Global Tech, and Tata Group.
9. **Live GitHub Activity:** Dynamic stats (public repos, stars, followers) fetching from GitHub API for `@anshmehta2305-spec` with cached resilience.
10. **Secure Transmission Form:** Client-side input sanitization against XSS injections, anti-bot honeypot field, and instant confirmation.
11. **Engineer Terminal Easter Egg (`ansh@portfolio:~$`):** Floating CLI widget with executable commands (`help`, `about`, `projects`, `skills`, `exp`, `certs`, `contact`, `clear`, `sudo`).

---

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js 18.18+ or 20+ (Node 22 supported)
- npm or pnpm

### Installation & Development
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Running Automated Verification Tests
```bash
npm test
```
Runs the automated test suite verifying:
- Input sanitization & XSS immunity.
- WCAG AAA contrast ratio compliance (>= 10:1).
- Complete data integrity across all 4 production projects, 3 job simulations, and 3 certifications.

---

## 📝 How to Edit Content (`/data/content.ts`)

All content across the website is decoupled into a single configuration file: `data/content.ts`.

- **Personal Details & Links:** Update `PERSONAL_INFO` (email, phone, LinkedIn, GitHub, bio).
- **Projects:** Add or edit items in `PROJECTS`. You can update live URLs, GitHub repos, metrics, and architecture diagrams.
- **Skills:** Add or organize technical competencies in `SKILL_CATEGORIES`.
- **Experience:** Update job simulation details in `EXPERIENCES`.
- **Education & Certs:** Edit `EDUCATION` and `CERTIFICATIONS`.

---

## 🌐 Deploying to Vercel (One-Click)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: award-level portfolio for Ansh Mehta"
   git branch -M main
   git remote add origin https://github.com/anshmehta2305-spec/portfolio.git
   git push -u origin main
   ```

2. Go to [Vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Next.js 14 will be automatically detected. Click **"Deploy"**.
5. Connect your custom domain `anshmehta.in` in Vercel **Settings &rarr; Domains**.
