"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fade-and-rise on scroll.
 * Without JavaScript nothing is hidden. With JavaScript, anything already on screen
 * shows straight away and everything below fades in as you scroll to it.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));
    const viewH = window.innerHeight;
    // Mark what is already in view before hiding anything, so there is no flicker.
    for (const el of items) {
      const r = el.getBoundingClientRect();
      if (r.top < viewH && r.bottom > 0) el.classList.add("is-visible");
    }
    document.documentElement.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    items.forEach((el) => !el.classList.contains("is-visible") && io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
