import { useEffect, useRef } from "react";

/**
 * Decorative ambient background with magenta/pink orbs and side waves.
 * Uses passive scroll listener + rAF to drive a subtle parallax via CSS vars.
 */
export function AmbientBackground({
  intensity = 1,
  className = "",
}: {
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let target = 0;

    const onScroll = () => {
      target = window.scrollY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          el.style.setProperty("--py", `${target * 0.15 * intensity}px`);
          el.style.setProperty("--py-slow", `${target * 0.06 * intensity}px`);
          el.style.setProperty("--py-fast", `${target * 0.25 * intensity}px`);
        });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [intensity]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      style={{
        // defaults so the layout is stable before scroll fires
        ["--py" as any]: "0px",
        ["--py-slow" as any]: "0px",
        ["--py-fast" as any]: "0px",
      }}
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.985_0.02_340)] via-background to-background" />

      {/* grid */}
      <div className="absolute inset-0 grid-pattern opacity-[0.35]" />

      {/* LEFT magenta orb */}
      <div
        className="absolute -left-40 top-[-10%] h-[42rem] w-[42rem] rounded-full opacity-70 blur-3xl will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.72 0.24 340 / 0.55), oklch(0.72 0.24 340 / 0) 65%)",
          transform: "translate3d(0, calc(var(--py-slow) * -1), 0)",
        }}
      />

      {/* RIGHT pink/coral orb */}
      <div
        className="absolute -right-48 top-[18%] h-[38rem] w-[38rem] rounded-full opacity-70 blur-3xl will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, oklch(0.78 0.2 350 / 0.55), oklch(0.78 0.2 350 / 0) 65%)",
          transform: "translate3d(0, var(--py), 0)",
        }}
      />

      {/* CENTER-BOTTOM violet glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-12rem] h-[36rem] w-[60rem] rounded-full opacity-60 blur-3xl will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.65 0.25 320 / 0.45), oklch(0.65 0.25 320 / 0) 60%)",
          transform: "translate3d(0, calc(var(--py-fast) * -1), 0)",
        }}
      />

      {/* small accent orb top right */}
      <div
        className="absolute right-[12%] top-[8%] h-40 w-40 rounded-full opacity-80 blur-2xl will-change-transform"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.22 20 / 0.45), transparent 70%)",
          transform: "translate3d(0, var(--py-fast), 0)",
        }}
      />

      {/* LEFT wave */}
      <svg
        className="absolute left-0 top-1/4 h-[120%] w-[55%] opacity-[0.18] will-change-transform"
        viewBox="0 0 600 1200"
        fill="none"
        preserveAspectRatio="none"
        style={{ transform: "translate3d(0, calc(var(--py-slow) * -1), 0)" }}
      >
        <defs>
          <linearGradient id="wL" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.24 340)" />
            <stop offset="100%" stopColor="oklch(0.7 0.22 20)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-50,200 C150,300 250,500 100,700 C-50,900 200,1000 -50,1200 L-50,0 Z"
          stroke="url(#wL)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M-100,400 C200,500 300,700 150,900 C0,1100 250,1200 -100,1300 L-100,200 Z"
          stroke="url(#wL)"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* RIGHT wave */}
      <svg
        className="absolute right-0 top-0 h-[120%] w-[55%] opacity-[0.18] will-change-transform"
        viewBox="0 0 600 1200"
        fill="none"
        preserveAspectRatio="none"
        style={{ transform: "translate3d(0, var(--py), 0) scaleX(-1)" }}
      >
        <defs>
          <linearGradient id="wR" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.7 0.22 350)" />
            <stop offset="100%" stopColor="oklch(0.6 0.22 265)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-50,150 C150,280 280,460 120,680 C-40,900 220,1000 -50,1250 L-50,0 Z"
          stroke="url(#wR)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M-100,350 C180,480 320,660 160,880 C0,1100 240,1200 -100,1350 L-100,150 Z"
          stroke="url(#wR)"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* subtle noise/grain for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* fade to background at the bottom for clean handoff */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
