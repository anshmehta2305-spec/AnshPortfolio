"use client";

import { useEffect } from "react";

/**
 * ScrollBlurObserver automatically watches all elements with the `.reveal-blur` class
 * using the Intersection Observer API.
 * 
 * - Threshold: 0.15 (triggers when 15% of element is in viewport)
 * - Single trigger: unobserves element immediately once revealed
 * - MutationObserver: automatically detects any dynamically mounted elements
 */
export default function ScrollBlurObserver() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal-blur").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal-blur").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Only animate once: stop observing once revealed
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal-blur:not(.is-revealed)");
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observation pass
    observeElements();

    // Watch for dynamically rendered elements or route changes
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

