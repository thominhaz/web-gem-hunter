import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Sistema único de reveal por scroll.
 * - Elementos com `data-reveal` aparecem ao entrar no viewport.
 * - Containers com `data-reveal-group` cascateiam seus filhos `data-reveal`.
 * - Elementos com `data-reveal-scale` recebem um scale leve em vez do translateY.
 * Cada elemento anima apenas uma vez (unobserve). Respeita prefers-reduced-motion via CSS.
 */
export function RevealObserver() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stagger = 80;
    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          if (el.hasAttribute("data-reveal-group")) {
            el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((child, i) =>
              setTimeout(() => child.classList.add("in"), i * stagger),
            );
          } else {
            el.classList.add("in");
          }
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );

    const groups = document.querySelectorAll<HTMLElement>("[data-reveal-group]");
    groups.forEach((el) => io.observe(el));

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (!el.closest("[data-reveal-group]")) io.observe(el);
    });

    document
      .querySelectorAll<HTMLElement>("[data-reveal-scale]")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
