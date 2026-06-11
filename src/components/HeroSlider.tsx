"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────
   Slide data
───────────────────────────────────────────────────────── */
const SLIDES = [
  {
    bg: "/hero.jpg",
    badge: "✦ WordPress & WooCommerce Developer",
    heading: (
      <>
        Building{" "}
        <em className="not-italic text-accent">Websites</em>{" "}
        That Work For Your Business
      </>
    ),
    intro:
      "Hi, I'm Jhon — a freelance WordPress developer helping businesses and entrepreneurs launch fast, beautiful, and conversion-focused websites.",
    cta: { label: "Start Your Project", href: "/contact" },
    accent: "#3b82f6",
  },
  {
    bg: "/hero_code.png",
    badge: "⚡ Full-Stack WordPress Expert",
    heading: (
      <>
        Crafting{" "}
        <em className="not-italic text-sky-400">Clean Code</em>{" "}
        For Powerful Digital Experiences
      </>
    ),
    intro:
      "From pixel-perfect themes to high-performance plugins, I write maintainable WordPress code that scales with your ambitions and keeps your site running at peak speed.",
    cta: { label: "View My Work", href: "/portfolio" },
    accent: "#38bdf8",
  },
  {
    bg: "/hero_ecommerce.png",
    badge: "🛒 WooCommerce Specialist",
    heading: (
      <>
        Launch Your{" "}
        <em className="not-italic text-amber-400">eCommerce</em>{" "}
        Store & Start Selling Today
      </>
    ),
    intro:
      "I build feature-rich WooCommerce stores with smooth checkout flows, payment gateway integrations, and inventory management — turning visitors into loyal customers.",
    cta: { label: "Explore Services", href: "/services" },
    accent: "#f59e0b",
  },
] as const;

/* Timing constants */
const INTERVAL_MS   = 3000; // slide stays on screen for this long
const BG_FADE_MS    = 800;  // background crossfade duration
const TEXT_OUT_MS   = 250;  // text fades out before bg swap
const TEXT_IN_DELAY = 180;  // wait after bg swap starts, then text enters

/* ─────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────── */
export function HeroSlider() {
  const count = SLIDES.length;

  /* Which slide is showing */
  const [current, setCurrent]         = useState(0);
  /* Per-slide bg opacity array — crossfade by setting target=1 rest=0 */
  const [bgOpacity, setBgOpacity]     = useState<number[]>(() => SLIDES.map((_, i) => (i === 0 ? 1 : 0)));
  /* Whether text is visible (drives inline transition) */
  const [textIn, setTextIn]           = useState(true);
  /* Incremented every slide change to restart the progress bar animation */
  const [progressKey, setProgressKey] = useState(0);

  /* Refs so callbacks always have fresh values without recreating them */
  const currentRef    = useRef(0);
  const animatingRef  = useRef(false);
  const intervalRef   = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Keep ref in sync */
  useEffect(() => { currentRef.current = current; }, [current]);

  /* Core: transition to slide `next` */
  const transitionTo = (next: number) => {
    if (animatingRef.current) return;
    if (next === currentRef.current) return;

    animatingRef.current = true;

    // Step 1 — fade text out quickly
    setTextIn(false);

    // Step 2 — after text is gone, swap backgrounds
    setTimeout(() => {
      setCurrent(next);
      currentRef.current = next;
      setBgOpacity(SLIDES.map((_, i) => (i === next ? 1 : 0)));
      setProgressKey((k) => k + 1);

      // Step 3 — let bg fade play a moment, then bring text in
      setTimeout(() => {
        setTextIn(true);
        animatingRef.current = false;
      }, TEXT_IN_DELAY);

    }, TEXT_OUT_MS);
  };

  /* Auto-advance timer — starts once, never recreated */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const next = (currentRef.current + 1) % count;
      transitionTo(next);
    }, INTERVAL_MS);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Manual dot click: jump to slide & reset auto-advance */
  const handleDot = (i: number) => {
    if (i === currentRef.current || animatingRef.current) return;
    // Stop auto-advance, do transition, restart timer
    if (intervalRef.current) clearInterval(intervalRef.current);
    transitionTo(i);
    intervalRef.current = setInterval(() => {
      const next = (currentRef.current + 1) % count;
      transitionTo(next);
    }, INTERVAL_MS);
  };

  const slide = SLIDES[current];

  /* Builds inline style for each staggered text element */
  const textStyle = (delayIn: number): React.CSSProperties => ({
    opacity:    textIn ? 1 : 0,
    transform:  textIn ? "translateY(0px)" : "translateY(20px)",
    transition: `opacity ${textIn ? 480 : 200}ms cubic-bezier(0.4,0,0.2,1) ${textIn ? delayIn : 0}ms,
                 transform ${textIn ? 480 : 200}ms cubic-bezier(0.4,0,0.2,1) ${textIn ? delayIn : 0}ms`,
    willChange: "opacity, transform",
  });

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-68px)] flex items-center justify-center py-24 px-[5%]">

      {/* ── All background layers (stacked, opacity crossfades) ── */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            opacity:    bgOpacity[i],
            transition: `opacity ${BG_FADE_MS}ms cubic-bezier(0.4,0,0.2,1)`,
            willChange: "opacity",
          }}
        >
          <Image
            src={s.bg}
            alt=""
            fill
            className="object-cover"
            style={{ opacity: 0.28 }}
            priority={i === 0}
          />
          {/* Bottom fade so content below hero blends cleanly */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg" />
          {/* Side depth fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-transparent" />
        </div>
      ))}

      {/* ── Decorative floating orbs ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="orb orb-1" style={{ "--orb-color": slide.accent, transition: `background ${BG_FADE_MS}ms ease` } as React.CSSProperties} />
        <div className="orb orb-2" style={{ "--orb-color": slide.accent, transition: `background ${BG_FADE_MS}ms ease` } as React.CSSProperties} />
        <div className="orb orb-3" />
      </div>

      {/* ── Hero text content ── */}
      <div className="relative z-10 w-full flex flex-col items-center text-center max-w-4xl mx-auto mt-[-5vh]">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-surface/50 backdrop-blur-sm border border-border text-accent text-xs font-bold tracking-wider uppercase px-5 py-2 rounded-full mb-8 shadow-sm"
          style={textStyle(0)}
        >
          {slide.badge}
        </div>

        {/* H1 */}
        <h1
          className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8"
          style={textStyle(70)}
        >
          {slide.heading}
        </h1>

        {/* Intro paragraph */}
        <p
          className="text-xl md:text-2xl text-muted mb-12 max-w-[700px] mx-auto leading-relaxed font-medium"
          style={textStyle(140)}
        >
          {slide.intro}
        </p>

        {/* Skill tags */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          style={textStyle(210)}
        >
          <span className="bg-surface/60 backdrop-blur-sm border border-border text-text text-sm font-semibold px-5 py-2 rounded-lg">⚡ WordPress Expert</span>
          <span className="bg-surface/60 backdrop-blur-sm border border-border text-text text-sm font-semibold px-5 py-2 rounded-lg">🛒 WooCommerce Stores</span>
          <span className="bg-surface/60 backdrop-blur-sm border border-border text-text text-sm font-semibold px-5 py-2 rounded-lg">📱 Mobile Responsive</span>
          <span className="bg-surface/60 backdrop-blur-sm border border-border text-text text-sm font-semibold px-5 py-2 rounded-lg">🔍 SEO Ready</span>
        </div>

        {/* CTA button */}
        <Link
          href={slide.cta.href}
          className="inline-block text-white font-bold text-lg px-10 py-4 rounded-xl hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98]"
          style={{
            ...textStyle(280),
            background:  `linear-gradient(135deg, ${slide.accent}, ${slide.accent}bb)`,
            boxShadow:   `0 8px 32px ${slide.accent}50`,
            // merge with the hover transitions
            transition:  [
              `opacity   ${textIn ? 480 : 200}ms cubic-bezier(0.4,0,0.2,1) ${textIn ? 280 : 0}ms`,
              `transform 200ms cubic-bezier(0.4,0,0.2,1)`,
              `background ${BG_FADE_MS}ms ease`,
              `box-shadow ${BG_FADE_MS}ms ease`,
            ].join(", "),
          }}
        >
          {slide.cta.label}
        </Link>
      </div>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="hero-dot"
            style={{
              width:      i === current ? 28 : 8,
              height:     8,
              background: i === current ? s.accent : "var(--border)",
              opacity:    i === current ? 1 : 0.5,
              boxShadow:  i === current ? `0 0 10px ${s.accent}90` : "none",
              transition: "width 350ms cubic-bezier(0.4,0,0.2,1), background 400ms ease, box-shadow 400ms ease, opacity 400ms ease",
              borderRadius: 9999,
              border: "none",
              cursor: i === current ? "default" : "pointer",
            }}
          />
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20 overflow-hidden" style={{ background: "var(--border)", opacity: 0.35 }}>
        <div
          key={progressKey}
          className="h-full hero-progress"
          style={{
            background:         slide.accent,
            animationDuration:  `${INTERVAL_MS}ms`,
          }}
        />
      </div>
    </section>
  );
}
