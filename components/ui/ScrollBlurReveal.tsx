"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollBlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function ScrollBlurReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  yOffset = 22,
}: ScrollBlurRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: yOffset }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

