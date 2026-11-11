export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  problem: string;
  keyFeatures: string[];
  measurableResults: string[];
  architectureDiagram?: string[];
  tag: string;
  highlightMetric: string;
  highlightLabel: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
    badge?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  type: string;
  description: string;
  deliverables: string[];
  skillsGained: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  periodOrYear: string;
  grade?: string;
  details?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  completionDate: string;
  score?: string;
  credentialUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Ansh Mehta",
  fullName: "Ansh Minesh Mehta",
  role: "Full-Stack Developer",
  subtitles: [
    "Full-Stack Developer",
    "MERN & Next.js Engineer",
    "AI-Powered Apps Builder",
  ],
  status: "Available for Full-Time Roles",
  location: "Gujarat, India",
  email: "ansh.mehta2305@gmail.com",
  phone: "+91 9724585704",
  github: "https://github.com/anshmehta2305-spec",
  githubUsername: "anshmehta2305-spec",
  linkedin: "https://www.linkedin.com/in/ansh-mehta-b86528406",
  portfolioDomain: "https://anshmehta.in",
  cvDownloadPath: "/resume.pdf",
  bio: `Final-year B.Tech Computer Science & Engineering student and full-stack developer with hands-on experience building and deploying production-style web applications using the MERN stack and Python/FastAPI. Strong foundation in data structures, algorithms and OOP, with practical skills in REST API development, database design (MySQL, MongoDB, PostgreSQL), authentication (JWT, 2FA), cloud deployment (AWS, Render, Vercel), and applying AI/ML to real-world problems. Seeking a Full-Stack Developer / Software Engineer role.`,
};

export const KEY_METRICS = [
  { value: "4", label: "Production Projects", detail: "End-to-end architectures" },
  { value: "50+", label: "Automated Tests", detail: "26 unit/integration + 24 CDP QA" },
  { value: "3", label: "Job Simulations", detail: "Deloitte, Walmart & Tata" },
  { value: "3", label: "Industry Certs", detail: "AWS Cloud & IBM AI Certified" },
];

export const PROJECTS: Project[] = [
  {
    id: "portfolio-pro",
    title: "Portfolio Pro",
    subtitle: "Advisor-Client Mutual Fund Platform",
    role: "Full-Stack Engineer & Architect",
    period: "Oct – Nov 2026",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Prisma ORM",
      "NextAuth",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    liveUrl: "https://portfolio-pro-demo.vercel.app", // Placeholder
    githubUrl: "https://github.com/anshmehta2305-spec/portfolio-pro", // Placeholder
    description:
      "A white-label wealth management & mutual fund distribution platform connecting distributors and investors with granular portfolio tracking, automated reporting, and role-segregated control panels.",
    problem:
      "Mutual fund distributors operate on disjointed legacy spreadsheets and struggle with compliance, real-time client NAV reconciliation, multi-tier commission governance, and tax calculation complexities.",
    keyFeatures: [
      "37 production pages & 17 robust REST APIs with segregated investor, advisor, and super-admin workflows.",
      "13 financial calculation modules (SIP, SWP, Step-Up SIP, CAGR, LTCG/STCG tax) with interactive chart analytics.",
      "17-model relational database schema in Prisma ensuring foreign-key integrity, Zod validation, and automated migrations.",
      "Enterprise security: AES-256-GCM data encryption, HMAC-verified external webhooks, and 8-tier Role-Based Access Control (RBAC).",
      "Modular transaction execution engine with pluggable payment/exchange adapters and idempotency layers preventing duplicate orders.",
    ],
    measurableResults: [
      "26 automated test suites covering edge cases and financial computation precision.",
      "Sub-200ms API response latency on complex multi-asset portfolio reconciliations.",
      "Zero idempotency collision across high-frequency simulated transaction batches.",
    ],
    architectureDiagram: [
      "Client (Next.js 14 App Router + React Server Components)",
      "Auth Layer (NextAuth + JWT + RBAC 8 Tiers)",
      "API Engine (17 REST Endpoints + Zod Request Validation)",
      "Security Shield (AES-256-GCM + HMAC Webhook Verification)",
      "ORM & DB (Prisma Client -> Managed PostgreSQL Database)",
      "Idempotency Cache & Transaction Adapter Queue",
    ],
    tag: "FinTech / SaaS",
    highlightMetric: "37 Pages & 17 APIs",
    highlightLabel: "Full-Stack Enterprise Architecture",
  },
  {
    id: "avenor-salon",
    title: "Avenor",
    subtitle: "Men's Luxury Grooming Salon Experience",
    role: "Frontend Lead & 3D WebGL Developer",
    period: "Sep – Oct 2026",
    stack: [
      "React 18",
      "Vite",
      "Three.js",
      "GSAP",
      "Tailwind CSS",
      "Vercel",
    ],
    liveUrl: "https://avenor-salon.vercel.app",
    githubUrl: "https://github.com/anshmehta2305-spec/avenor-salon",
    description:
      "A cinematic, high-speed single-page web experience for a premium men's grooming brand featuring interactive Three.js 3D WebGL visuals, smooth GSAP transitions, and an end-to-end booking flow.",
    problem:
      "Luxury grooming brands often sacrifice web performance for visual flair, resulting in slow load times (>3s) and clunky appointment flows that drive high mobile bounce rates.",
    keyFeatures: [
      "Ultra-optimized architecture achieving 72ms DOM-interactive and sub-300ms full load measured via Chrome DevTools Protocol.",
      "Custom dark/light theming via CSS variables and persistent localStorage with zero page flash.",
      "Full WCAG AAA color contrast compliance on primary interactive buttons (11.3:1 to 15.9:1 ratio).",
      "5-step appointment reservation pipeline with interactive date/time slot validation, cart drawer, and responsive state management.",
      "Interactive 3D WebGL scenes using Three.js and choreographed scroll triggers with GSAP.",
    ],
    measurableResults: [
      "72ms DOM-Interactive speed & <300ms total page load time.",
      "24-test automated QA test harness (Node.js + headless Chrome CDP) covering 5 responsive viewports (360px to 1920px).",
      "100% test pass rate on accessibility labels, XSS sanitization, and external link rel security.",
    ],
    architectureDiagram: [
      "Vite Build Pipeline (Tree-shaken ES Modules + PostCSS)",
      "Presentation Layer (React 18 + Component Architecture)",
      "3D Graphics Engine (Three.js WebGL Canvas + Optimized Shaders)",
      "Animation Timeline (GSAP ScrollTrigger + Custom Easing)",
      "State Management (React Hooks + LocalStorage Cache)",
      "QA Harness (Headless Chrome DevTools Protocol Test Suite)",
    ],
    tag: "E-Commerce / 3D WebGL",
    highlightMetric: "72ms DOM-Interactive",
    highlightLabel: "WCAG AAA & 24 Automated QA Tests",
  },
  {
    id: "ai-legal-clustering",
    title: "AI Legal Text Clustering",
    subtitle: "Indian Penal Code (IPC) Classifier & Case Intelligence",
    role: "Full-Stack Developer & ML Engineer",
    period: "Aug – Sep 2026",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "Tailwind CSS",
      "Scikit-Learn",
      "Render",
      "Vercel",
    ],
    liveUrl: "https://ai-legal-clustering-demo.vercel.app", // Placeholder
    githubUrl: "https://github.com/anshmehta2305-spec/ai-legal-clustering", // Placeholder
    description:
      "An intelligent legal tech web platform that analyzes unstructured case descriptions and predicts applicable Indian Penal Code (IPC) sections using ensemble machine learning and structural NLP.",
    problem:
      "Legal professionals and law enforcement face massive backlogs manually cataloging case narratives and cross-referencing complex penal code subsections with inconsistent terminology.",
    keyFeatures: [
      "Multi-model ML classification benchmark comparing KNN, Linear SVM, Decision Tree, Random Forest, and Extra Trees Classifier.",
      "Custom NLP feature engineering: TF-IDF vectorization augmented with domain indicators (weapon tokens, malicious intent signals, financial crime heuristics) across 8+ IPC sections.",
      "High-throughput FastAPI backend with JWT session auth, TOTP 2FA, rate limiting, and structured audit logs.",
      "OCR pipeline allowing instant PDF/image text extraction, automated First Information Report (FIR) drafting, and multi-language translation.",
      "Comprehensive Admin intelligence dashboard with user session audits, query volume analytics, and ban/unban moderation.",
    ],
    measurableResults: [
      "High IPC section classification accuracy across ambiguous legal filings.",
      "Automated FIR report generation in under 1.5 seconds from raw incident text.",
      "Secure end-to-end multi-tenant session isolation with TOTP two-factor authentication.",
    ],
    architectureDiagram: [
      "Frontend UI (React + Vite + OCR Dropzone)",
      "API Gateway (FastAPI + JWT + TOTP 2FA + Rate Limiter)",
      "NLP Engine (TF-IDF + Structural Feature Extractor)",
      "Inference Pipeline (Random Forest / Extra Trees / SVM)",
      "Document Generator (Report Builder -> FIR PDF Export)",
      "Admin Observability (Session Logs + Analytics Database)",
    ],
    tag: "AI / LegalTech / NLP",
    highlightMetric: "8+ IPC Classifications",
    highlightLabel: "Ensemble ML + TOTP 2FA Backend",
  },
  {
    id: "online-auction-system",
    title: "Online Auction System",
    subtitle: "Real-Time Bidding & Marketplace Engine",
    role: "Frontend Developer, DB Architect & Project Lead",
    period: "2025 – 2026",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "AI-Assisted Tools",
    ],
    liveUrl: "https://online-auction-demo.vercel.app", // Placeholder
    githubUrl: "https://github.com/anshmehta2305-spec/online-auction-system", // Placeholder
    description:
      "A dynamic marketplace platform facilitating competitive real-time auction bidding, product listing lifecycle management, and secure buyer/seller transactional validation.",
    problem:
      "Traditional classifieds lack dynamic price discovery mechanisms and trustworthy automated bid verification for second-hand asset liquidity.",
    keyFeatures: [
      "Engineered comprehensive relational schema in MySQL with transactional ACID compliance for concurrent bid increments.",
      "Custom responsive frontend dashboard featuring countdown timers, auction status indicators, and live bid tracking.",
      "User authentication, seller verification, and automated winner determination upon auction expiration.",
      "Led end-to-end project coordination, database entity-relationship modeling, and UI component architecture.",
    ],
    measurableResults: [
      "Zero concurrency deadlocks during simulated rapid multi-bidder load.",
      "Clean separation of concerns with structured modular PHP controllers.",
    ],
    architectureDiagram: [
      "Responsive Client (Semantic HTML5 + Custom CSS Grid + JS)",
      "Application Server (PHP RESTful Request Handlers)",
      "Session & Auth Manager (Cookie Tokens + Role Checks)",
      "Data Store (MySQL Relational Tables + Foreign Key Constraints)",
    ],
    tag: "Marketplace / Full-Stack",
    highlightMetric: "ACID Bidding Engine",
    highlightLabel: "Database Architecture & Project Lead",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Engineering",
    description: "Building accessible, high-performance user interfaces and 3D web environments",
    skills: [
      { name: "React.js", level: "Advanced", featured: true },
      { name: "Next.js 14", level: "Advanced", featured: true },
      { name: "TypeScript", level: "Advanced", featured: true },
      { name: "JavaScript (ES6+)", level: "Advanced", featured: true },
      { name: "Tailwind CSS", level: "Advanced", featured: true },
      { name: "Three.js (WebGL)", level: "Proficient", featured: true, badge: "3D Graphics" },
      { name: "GSAP", level: "Proficient", featured: true },
      { name: "Vite", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Mastery" },
      { name: "Responsive Design", level: "Mastery" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Architecting scalable RESTful microservices, auth flows, and robust APIs",
    skills: [
      { name: "Node.js", level: "Advanced", featured: true },
      { name: "Express.js", level: "Advanced", featured: true },
      { name: "FastAPI", level: "Advanced", featured: true, badge: "Python" },
      { name: "PHP", level: "Proficient" },
      { name: "REST API Design", level: "Advanced", featured: true },
      { name: "JWT Authentication", level: "Advanced", featured: true },
      { name: "2FA (TOTP)", level: "Advanced", badge: "Security" },
      { name: "Session Management", level: "Advanced" },
    ],
  },
  {
    category: "Databases & ORM",
    description: "Designing normalized schemas, query indexing, and data models",
    skills: [
      { name: "PostgreSQL", level: "Advanced", featured: true },
      { name: "MongoDB", level: "Advanced", featured: true },
      { name: "MySQL", level: "Advanced", featured: true },
      { name: "Prisma ORM", level: "Advanced", featured: true },
      { name: "Relational Schema Design", level: "Advanced" },
      { name: "Query Optimization", level: "Proficient" },
    ],
  },
  {
    category: "Cloud, DevOps & Tools",
    description: "Deploying resilient infrastructure with CI/CD and version control",
    skills: [
      { name: "AWS (EC2, S3, IAM, VPC)", level: "Certified", featured: true, badge: "AWS Certified" },
      { name: "Git & GitHub", level: "Advanced", featured: true },
      { name: "CI/CD Pipelines", level: "Proficient" },
      { name: "Vercel", level: "Advanced" },
      { name: "Render", level: "Advanced" },
    ],
  },
  {
    category: "Security & Integrity",
    description: "Defense-in-depth security practices applied across the stack",
    skills: [
      { name: "RBAC (Role-Based Access)", level: "Advanced", featured: true },
      { name: "AES-256 Encryption", level: "Advanced", featured: true },
      { name: "HMAC Webhooks", level: "Proficient" },
      { name: "Input Validation (Zod)", level: "Advanced", featured: true },
    ],
  },
  {
    category: "Data & Artificial Intelligence",
    description: "Applying practical machine learning, NLP, and algorithmic inference",
    skills: [
      { name: "Python", level: "Advanced", featured: true },
      { name: "Machine Learning (Scikit-Learn)", level: "Proficient", featured: true },
      { name: "Natural Language Processing (NLP)", level: "Proficient" },
      { name: "TF-IDF Vectorization", level: "Proficient" },
      { name: "Prompt Engineering", level: "Proficient" },
      { name: "AI-Assisted Development", level: "Advanced" },
    ],
  },
  {
    category: "CS Fundamentals & Testing",
    description: "Theoretical grounding and rigorous quality assurance",
    skills: [
      { name: "Data Structures & Algorithms", level: "Strong Foundation", featured: true },
      { name: "Object-Oriented Programming (OOP)", level: "Strong Foundation", featured: true },
      { name: "DBMS & Operating Systems", level: "Strong Foundation" },
      { name: "Software Development Life Cycle (SDLC)", level: "Advanced" },
      { name: "Automated CDP Testing (Chrome DevTools)", level: "Advanced", badge: "E2E QA" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "deloitte-simulation",
    company: "Deloitte",
    title: "Data Analytics & Technology Job Simulation",
    period: "Jul 2026",
    type: "Industry Job Simulation (Forage)",
    description:
      "Engaged in forensic data analytics and systems engineering challenges for simulated enterprise client engagements.",
    deliverables: [
      "Conducted forensic data analysis to detect integrity anomalies and transaction discrepancies.",
      "Authored, verified, and debugged analytical scripts against enterprise client requirements.",
      "Delivered structured technical briefings outlining forensic findings and mitigation strategies.",
    ],
    skillsGained: [
      "Forensic Data Analysis",
      "Code Auditing & Debugging",
      "Client Communication",
      "Problem Solving",
    ],
  },
  {
    id: "walmart-simulation",
    company: "Walmart Global Tech",
    title: "Advanced Software Engineering Job Simulation",
    period: "Sep 2026",
    type: "Industry Job Simulation (Forage)",
    description:
      "Architected complex distributed data structures and relational schemas modeled on Walmart's hyper-scale supply chain needs.",
    deliverables: [
      "Implemented advanced data structures optimized for high-throughput inventory routing.",
      "Drafted high-level software architecture blueprints for decoupled microservices.",
      "Designed normalized relational database schemas ensuring transactional integrity under peak load.",
    ],
    skillsGained: [
      "Software Architecture",
      "Advanced Data Structures",
      "Relational Database Design",
      "Scalability Planning",
    ],
  },
  {
    id: "tata-simulation",
    company: "Tata Group",
    title: "GenAI-Powered Data Analytics Job Simulation",
    period: "Sep 2026",
    type: "Industry Job Simulation (Forage)",
    description:
      "Harnessed Generative AI and predictive modeling to evaluate credit delinquency risk and formulate data-driven debt recovery strategies.",
    deliverables: [
      "Executed exploratory data analysis across large-scale financial delinquency datasets.",
      "Trained predictive risk indicators identifying early delinquency probabilities.",
      "Synthesized an executive AI-driven collections strategy report recommending personalized engagement pathways.",
    ],
    skillsGained: [
      "Generative AI Analytics",
      "Exploratory Data Analysis (EDA)",
      "Predictive Risk Modeling",
      "Strategic Business Reporting",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Parul University",
    degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering",
    location: "Vadodara, Gujarat, India",
    periodOrYear: "Currently Pursuing (Final Year)",
    details:
      "Core Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Cloud Computing.",
  },
  {
    institution: "Government Polytechnic, Dahod (GTU)",
    degree: "Diploma in Computer Engineering",
    location: "Dahod, Gujarat, India",
    periodOrYear: "Completed 2024",
    grade: "CGPA: 6.57",
    details:
      "Graduated under Gujarat Technological University (GTU) with practical focus on programming fundamentals, web technologies, and systems maintenance.",
  },
  {
    institution: "Shree Swaminarayan School",
    degree: "Central Board of Secondary Education (CBSE)",
    location: "Bharuch, Gujarat, India",
    periodOrYear: "High School",
    details: "Science and mathematics foundation.",
  },
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    completionDate: "26/08/2025",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    completionDate: "25/08/2025",
    score: "Score: 95.57%",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    completionDate: "10/09/2025",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const COMMAND_PALETTE_ITEMS = [
  { id: "about", title: "Go to About", category: "Navigation", icon: "User", action: "#about" },
  { id: "services", title: "View What I Offer (Services)", category: "Navigation", icon: "Cpu", action: "#services" },
  { id: "projects", title: "View Featured Projects", category: "Navigation", icon: "Code", action: "#projects" },
  { id: "skills", title: "Inspect Tech Stack & Skills", category: "Navigation", icon: "Cpu", action: "#skills" },
  { id: "experience", title: "View Job Simulations Experience", category: "Navigation", icon: "Briefcase", action: "#experience" },
  { id: "education", title: "View Education & Certifications", category: "Navigation", icon: "GraduationCap", action: "#education" },
  { id: "contact", title: "Jump to Contact Form", category: "Navigation", icon: "Mail", action: "#contact" },
  { id: "copy-email", title: "Copy Email: ansh.mehta2305@gmail.com", category: "Actions", icon: "Copy", action: "copy-email" },
  { id: "download-cv", title: "Download Curriculum Vitae (PDF)", category: "Actions", icon: "FileText", action: "download-cv" },
  { id: "github", title: "Open GitHub Profile (@anshmehta2305-spec)", category: "External", icon: "Github", action: "https://github.com/anshmehta2305-spec" },
  { id: "linkedin", title: "Open LinkedIn Profile", category: "External", icon: "Linkedin", action: "https://www.linkedin.com/in/ansh-mehta-b86528406" },
  { id: "theme-toggle", title: "Toggle Light / Dark Mode", category: "Preferences", icon: "Sun", action: "toggle-theme" },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  • about     - Display engineer summary & background
  • projects  - List key production projects
  • skills    - Display categorized technical competencies
  • exp       - List job simulations & timeline
  • certs     - Show verified cloud & AI certifications
  • contact   - Print direct reach-out coordinates
  • clear     - Clear terminal history
  • sudo      - Try it at your own risk :)`,
  about: `ANSH MEHTA // FINAL YEAR B.TECH CSE (PARUL UNIVERSITY)
Full-Stack Developer specializing in MERN Stack, Next.js 14, and Python/FastAPI.
Obsessed with sub-100ms response times, enterprise security, and clean engineering.`,
  projects: `FEATURED ARCHITECTURES:
  1. Portfolio Pro [Next.js 14, Prisma, PostgreSQL, NextAuth] - 37 pages, 17 APIs, 13 calculators
  2. Avenor [React 18, Three.js, GSAP, Tailwind] - 72ms DOM-interactive, WCAG AAA, 24 CDP tests
  3. AI Legal Text Clustering [Python, FastAPI, Scikit-Learn] - TF-IDF NLP + TOTP 2FA backend
  4. Online Auction System [PHP, MySQL, JavaScript] - ACID compliant real-time bidding`,
  skills: `STACK BREAKDOWN:
  [Frontend] React 18, Next.js 14, TypeScript, Tailwind CSS, Three.js WebGL, GSAP
  [Backend]  Node.js, Express, FastAPI, PHP, REST APIs, JWT, TOTP 2FA, Zod
  [Database] PostgreSQL, MongoDB, MySQL, Prisma ORM
  [Cloud]    AWS (EC2, S3, IAM, VPC), Vercel, Render, Git/GitHub, CI/CD
  [QA]       Chrome DevTools Protocol Automated Testing`,
  exp: `JOB SIMULATIONS (FORAGE):
  • Deloitte (07/2026): Forensic Data Analysis & Client Systems Debugging
  • Walmart Global Tech (09/2026): Advanced Data Structures & Relational Scalability
  • Tata Group (09/2026): GenAI-Powered Delinquency Modeling & Strategy`,
  certs: `VERIFIED CREDENTIALS:
  • AWS Cloud Practitioner Essentials (26/08/2025)
  • AWS Academy Cloud Foundations - Score: 95.57% (25/08/2025)
  • IBM SkillsBuild Artificial Intelligence Fundamentals (10/09/2025)`,
  contact: `DIRECT CHANNELS:
  • Email:    ansh.mehta2305@gmail.com
  • Phone:    +91 9724585704
  • LinkedIn: linkedin.com/in/ansh-mehta-b86528406
  • GitHub:   github.com/anshmehta2305-spec
  • Location: Gujarat, India`,
  sudo: `[SECURITY NOTICE] Access granted: Ansh Mehta is ready for deployment to your engineering team.`,
};

