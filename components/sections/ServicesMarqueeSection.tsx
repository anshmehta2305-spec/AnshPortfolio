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
  Sparkles,
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

  // Duplicate items array 3 times for a completely seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden py-1"
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
              className="w-72 sm:w-80 p-4 rounded-sm bg-[#11141a] border border-border hover:border-brand-lime transition-all duration-200 group cursor-default select-none flex-shrink-0 shadow-cad hover:shadow-[0_8px_24px_rgba(212,255,0,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Card Top Pill Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-sm bg-[#161a22] border border-border group-hover:border-brand-lime/80 flex items-center justify-center text-brand-lime transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono-hud text-text-muted uppercase">
                    [{service.category}]
                  </span>
                </div>

                {/* Service Title */}
                <h4 className="text-sm font-display font-extrabold text-foreground group-hover:text-brand-lime transition-colors leading-snug">
                  {service.title}
                </h4>
              </div>

              {/* Bottom Tag & Micro Arrow */}
              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono-hud text-text-muted">
                <span className="text-brand-lime font-semibold">
                  {service.tag}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-brand-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
    <section id="services" className="py-24 relative border-b border-border bg-[#090a0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-brand-lime inline-block" />
              <span className="text-xs font-mono-hud text-brand-lime uppercase font-bold tracking-widest">
                SERVICES // PRODUCTION EXPERTISE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase text-foreground tracking-tight leading-none">
              What I Offer
            </h2>
            <p className="mt-3 text-sm text-text-muted font-sans leading-relaxed">
              Full-lifecycle software engineering from high-throughput backend APIs and database schemas to reactive 3D interfaces and machine learning pipelines.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono-hud text-xs text-text-muted">
            <span className="flex items-center gap-1.5 text-brand-lime font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HOVER TO PAUSE STREAM</span>
            </span>
            <span className="text-white/20">|</span>
            <span>15 CORE SERVICES</span>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Stage with Edge Vignette Gradient Masks */}
      <div className="relative w-full space-y-4">
        {/* Left & Right Fade Gradient Vignettes */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#090a0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#090a0d] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left */}
        <MarqueeRow items={ROW_1} direction="left" speed={30} />

        {/* Row 2: Right */}
        <MarqueeRow items={ROW_2} direction="right" speed={34} />

        {/* Row 3: Left */}
        <MarqueeRow items={ROW_3} direction="left" speed={32} />
      </div>
    </section>
  );
}
