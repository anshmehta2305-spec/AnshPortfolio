"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  Bot,
  Server,
  Cloud,
  Database,
  Box,
  ShieldCheck,
  Terminal,
  CreditCard,
  FileCode2,
  Gauge,
  KeyRound,
  Smartphone,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const ROW_1: ServiceItem[] = [
  {
    id: "full-stack",
    title: "Full-Stack Web Development",
    category: "Architecture",
    icon: Layers,
    tag: "Next.js 14 / React 18",
  },
  {
    id: "ai-ml",
    title: "AI & ML Production Solutions",
    category: "Intelligence",
    icon: Cpu,
    tag: "Scikit-Learn / TF-IDF",
  },
  {
    id: "automation",
    title: "Web Scraping & Automation",
    category: "Workflows",
    icon: Bot,
    tag: "Python / Headless CDP",
  },
  {
    id: "rest-apis",
    title: "High-Throughput REST APIs",
    category: "Backend",
    icon: Server,
    tag: "FastAPI / Express.js",
  },
  {
    id: "cloud-devops",
    title: "Cloud & Microservices Deployment",
    category: "Infrastructure",
    icon: Cloud,
    tag: "AWS / Vercel / Render",
  },
];

const ROW_2: ServiceItem[] = [
  {
    id: "db-design",
    title: "Relational DB Modeling & ORM",
    category: "Data Stores",
    icon: Database,
    tag: "PostgreSQL / Prisma / MySQL",
  },
  {
    id: "3d-webgl",
    title: "3D WebGL & Creative Visuals",
    category: "Frontend",
    icon: Box,
    tag: "Three.js / GSAP / Canvas",
  },
  {
    id: "security",
    title: "Security & AES-256 Encryption",
    category: "Integrity",
    icon: ShieldCheck,
    tag: "TOTP 2FA / HMAC Webhooks",
  },
  {
    id: "qa-testing",
    title: "Automated QA & CDP Testing",
    category: "Testing",
    icon: Terminal,
    tag: "Headless Chrome DevTools",
  },
  {
    id: "payments",
    title: "Payment & Idempotency Engines",
    category: "FinTech",
    icon: CreditCard,
    tag: "Order Deduplication",
  },
];

const ROW_3: ServiceItem[] = [
  {
    id: "nlp",
    title: "Natural Language Processing",
    category: "AI/NLP",
    icon: FileCode2,
    tag: "Legal & Text Classifiers",
  },
  {
    id: "perf-opt",
    title: "Core Web Vitals & Speed Optimization",
    category: "Performance",
    icon: Gauge,
    tag: "Sub-100ms DOM-Ready",
  },
  {
    id: "rbac",
    title: "Role-Based Access Control (RBAC)",
    category: "Auth",
    icon: KeyRound,
    tag: "JWT & Multi-Tier Governance",
  },
  {
    id: "spa-pwa",
    title: "Responsive SPA & PWA Systems",
    category: "Client",
    icon: Smartphone,
    tag: "Mobile-First Fluid UI",
  },
  {
    id: "cicd",
    title: "Continuous Integration & Delivery",
    category: "DevOps",
    icon: GitBranch,
    tag: "GitHub Actions Automation",
  },
];

interface MarqueeRowProps {
  items: ServiceItem[];
  direction: "left" | "right";
  speed?: number;
}

function MarqueeRow({ items, direction, speed = 32 }: MarqueeRowProps) {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden py-1.5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedItems.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={`${service.id}-${index}`}
              className="w-72 sm:w-80 p-5 rounded-lg bg-bg-card border border-line-primary hover:border-crimson/50 shadow-theme hover:shadow-theme-hover transition-all duration-200 group cursor-default select-none flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-md bg-bg-tertiary border border-line-primary group-hover:border-crimson/40 flex items-center justify-center text-txt-primary group-hover:text-crimson transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-txt-muted uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>

                <h4 className="text-sm font-sans font-semibold text-txt-primary group-hover:text-crimson transition-colors leading-snug">
                  {service.title}
                </h4>
              </div>

              <div className="mt-4 pt-3 border-t border-line-primary flex items-center justify-between text-[11px] font-mono text-txt-secondary">
                <span>{service.tag}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-txt-muted group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function ServicesMarqueeSection() {
  return (
    <section id="services" className="py-28 relative border-t border-line-primary bg-bg-primary overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-line-primary reveal-blur">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson inline-block" />
              <span className="text-xs font-mono text-txt-muted uppercase tracking-widest">
                02 &bull; Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-txt-primary tracking-tight">
              What I Offer
            </h2>
            <p className="mt-3 text-sm text-txt-secondary leading-relaxed">
              Full-lifecycle web and systems development spanning architecture, cloud deployment, and machine learning solutions.
            </p>
          </div>

          <div className="text-xs font-mono text-txt-muted">
            Hover to pause stream
          </div>
        </div>
      </div>

      {/* Infinite Marquee Rows with Soft Gradient Vignettes */}
      <div className="relative w-full space-y-3">
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

        <MarqueeRow items={ROW_1} direction="left" speed={30} />
        <MarqueeRow items={ROW_2} direction="right" speed={34} />
        <MarqueeRow items={ROW_3} direction="left" speed={32} />
      </div>
    </section>
  );
}
