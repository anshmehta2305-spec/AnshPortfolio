# Ansh Mehta — Personal Portfolio & Full-Stack Engineering Studio

> **Portfolio:** [https://anshmehta.in](https://anshmehta.in)  
> **GitHub:** [https://github.com/anshmehta2305-spec](https://github.com/anshmehta2305-spec)  
> **LinkedIn:** [https://www.linkedin.com/in/ansh-mehta-b86528406](https://www.linkedin.com/in/ansh-mehta-b86528406)  
> **Email:** `ansh.mehta2305@gmail.com`  
> **Location:** India

---

## ⚡ Tech Stack & Architecture

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Styling & Design System:** Tailwind CSS with rich dark theme (`#0a0a0a` & `#121212`), high-contrast crimson accents (`#e50914`), and frosted glassmorphism.
- **Dynamic Sticky Pill Navigation:** Morphing header that fluidly transitions from full-width transparent to a floating, rounded frosted capsule upon scrolling.
- **Smooth Scrolling:** `@studio-freight/lenis` inertia scrolling.
- **Transitions & UI:** Framer Motion spring physics + CSS hardware-accelerated transforms.
- **Infinite Marquee Grid:** 3-row seamless looping services grid ("What I Offer") with hover-pause.
- **Single Data Source:** All portfolio projects, credentials, and resume milestones live in `/data/content.ts`.

---

## 🚀 Featured Projects & Live Deployments

1. **Portfolio Pro: Advisor-Client Mutual Fund Platform**
   - **Live Demo:** [https://portfoliopro-rho-rouge.vercel.app/](https://portfoliopro-rho-rouge.vercel.app/)
   - **Stack:** Next.js 14, TypeScript, Prisma, NextAuth, PostgreSQL, Tailwind CSS, Vercel
   - **Highlights:** 37 pages, 17 REST APIs, 13 financial calculation modules, AES-256-GCM encryption, idempotency engine.

2. **AI Legal Text Clustering & IPC Classifier**
   - **Live Demo:** [https://ai-legal-web-mauve.vercel.app/](https://ai-legal-web-mauve.vercel.app/)
   - **Stack:** Python, FastAPI, Scikit-Learn, React, Vite, Tailwind CSS, Render, Vercel
   - **Highlights:** Multi-model classification (KNN, SVM, Random Forest, Extra Trees), custom TF-IDF feature pipeline, TOTP 2FA, OCR document upload, FIR generator.

3. **Avenor: Men's Grooming Salon Website**
   - **Live Demo:** [https://avenor-salon.vercel.app/](https://avenor-salon.vercel.app/)
   - **Stack:** React 18, Vite, Three.js, GSAP, Tailwind CSS
   - **Highlights:** 72 ms DOM-interactive, 300 ms full load, WCAG AAA contrast compliance, 5-step booking flow, 24-test automated QA suite.

4. **Online Auction System**
   - **Stack:** HTML5, CSS3, JavaScript, PHP, MySQL
   - **Highlights:** Real-time bidding engine, ACID-compliant transactions, responsive dashboard, automated auction expiration.

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
- WCAG AAA contrast ratio compliance (>= 15:1).
- Complete data integrity across all 4 production projects, 3 job simulations, and 3 certifications.

### Production Build
```bash
npm run build
```

---

## 📝 How to Edit Content (`/data/content.ts`)

All content across the website is decoupled into a single configuration file: `data/content.ts`.

- **Personal Details & Links:** Update `PERSONAL_INFO` (email, phone, LinkedIn, GitHub, bio).
- **Projects:** Add or edit items in `PROJECTS` (live URLs, GitHub repos, metrics, architecture diagrams).
- **Skills:** Add or organize technical competencies in `SKILL_CATEGORIES`.
- **Experience:** Update job simulation details in `EXPERIENCES`.
- **Education & Certs:** Edit `EDUCATION` and `CERTIFICATIONS`.

---

## 🌐 Deploying to Vercel (One-Click)

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete award-level portfolio for Ansh Mehta"
   git branch -M main
   git remote add origin https://github.com/anshmehta2305-spec/<your-repo-name>.git
   git push -u origin main
   ```

2. Go to [Vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Next.js 14 will be automatically detected. Click **"Deploy"**.
5. Connect your custom domain in Vercel **Settings &rarr; Domains**.
