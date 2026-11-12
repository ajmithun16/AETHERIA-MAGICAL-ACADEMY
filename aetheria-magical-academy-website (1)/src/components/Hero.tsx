import { useEffect, useRef, useState } from "react";
import { Castle, ChevronDown, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useLang } from "../i18n";
import { IMG } from "../data";
import { Particles, CountUp, AetheriaCrest } from "./ui";

const STAT_ICONS = [Castle, ShieldCheck, Users];

export default function Hero() {
  const { t, lang } = useLang();
  const layerRef = useRef<HTMLDivElement | null>(null);
  const fogARef = useRef<HTMLDivElement | null>(null);
  const fogBRef = useRef<HTMLDivElement | null>(null);
  const [fine] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (!fine) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (layerRef.current)
          layerRef.current.style.transform = `translate3d(${nx * -16}px, ${ny * -10}px, 0)`;
        if (fogARef.current)
          fogARef.current.style.transform = `translate3d(${nx * 26}px, ${ny * 12}px, 0)`;
        if (fogBRef.current)
          fogBRef.current.style.transform = `translate3d(${nx * -30}px, ${ny * -14}px, 0)`;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [fine]);

  const locale = lang === "de" ? "de-DE" : "en-US";

  return (
    <section id="start" className="vignette relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* backdrop */}
      <div ref={layerRef} className="absolute -inset-6 will-change-transform">
        <img
          src={IMG.hero}
          alt="Schloss Aetheria in den Bayerischen Alpen bei Nacht"
          className="hero-bg h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* blue-violet cinematic grading */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060a1c]/78 via-[#0d1230]/48 to-[#0b1028]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_65%_at_62%_28%,rgba(96,84,214,0.3),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_46%_46%,rgba(216,183,111,0.16),transparent_66%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070a1c]/72 via-transparent to-[#070a1c]/45" />

      {/* fog banks */}
      <div ref={fogARef} className="fog fog-a left-[-10%] top-[52%] h-[38vh] w-[72vw] bg-[#8f9fd8]/14" />
      <div ref={fogBRef} className="fog fog-b right-[-15%] top-[26%] h-[42vh] w-[62vw] bg-[#a998e0]/12" />

      <Particles density={90} className="z-[5] opacity-85" />

      {/* content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-24 pt-40 text-center">
        <div className="cine" style={{ ["--d" as never]: "0.25s" }}>
          <AetheriaCrest className="flicker mx-auto h-14 w-auto text-gold/90" />
        </div>

        <div className="cine mt-8" style={{ ["--d" as never]: "0.45s" }}>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70" />
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70" />
          </div>
        </div>

        <div className="cine" style={{ ["--d" as never]: "0.72s" }}>
          <h1 className="mt-6">
            <span className="font-display text-goldgrad shimmer block text-[16.5vw] font-bold leading-[0.95] tracking-[0.1em] drop-shadow-[0_10px_40px_rgba(0,0,0,0.55)] sm:text-7xl md:text-8xl lg:text-[7.6rem]">
              {t.brand.name}
            </span>
          </h1>
        </div>

        <div className="cine" style={{ ["--d" as never]: "1.02s" }}>
          <p className="font-display mt-6 text-[12px] font-semibold uppercase tracking-[0.44em] text-parchment/95 sm:text-base sm:tracking-[0.5em]">
            {t.brand.sub}
          </p>
        </div>

        <div className="cine" style={{ ["--d" as never]: "1.24s" }}>
          <p className="mt-5 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-gold/90">
            <span className="h-px w-7 bg-gold/50" />
            {t.brand.motto}
            <span className="h-px w-7 bg-gold/50" />
          </p>
        </div>

        <div className="cine" style={{ ["--d" as never]: "1.45s" }}>
          <p className="mx-auto mt-8 max-w-xl text-[14.5px] leading-relaxed text-parchment/80">
            {t.hero.intro}
          </p>
        </div>

        <div className="cine" style={{ ["--d" as never]: "1.68s" }}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a href="#akademie" className="btn-hero">
              <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {t.hero.cta1}
            </a>
            <a href="#bewerbung" className="btn-hero">
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* statistics strip */}
      <div className="relative z-10 border-t border-gold/15 bg-[#070b20]/55 backdrop-blur-md">
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-gold/10 px-2 py-6">
          {t.hero.stats.map((stat, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <div key={stat.label} className="cine px-2 text-center sm:px-4" style={{ ["--d" as never]: `${1.8 + i * 0.14}s` }}>
                <Icon className="mx-auto h-4 w-4 text-gold/70" aria-hidden="true" />
                <div className="font-display mt-2 text-3xl font-semibold text-goldsoft sm:text-4xl">
                  <CountUp to={stat.n} plain={stat.plain} locale={locale} duration={2000} />
                </div>
                <div className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.24em] text-parchment/50 sm:text-[10px] sm:tracking-[0.28em]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#akademie"
        aria-label={t.hero.scroll}
        className="scroll-cue absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-gold/80 md:flex"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.4em]">{t.hero.scroll}</span>
        <ChevronDown className="h-4 w-4" />
      </a>
    </section>
  );
}
