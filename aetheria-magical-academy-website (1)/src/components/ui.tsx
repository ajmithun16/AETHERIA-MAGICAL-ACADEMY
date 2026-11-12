import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as RPointerEvent,
  type ReactNode,
} from "react";
import { Sparkles, Volume2, VolumeX } from "lucide-react";
import { cn } from "../utils/cn";
import { ambient } from "../audio";
import { useLang } from "../i18n";

/* ------------------------------------------------------------------ */
/*  Reveal on scroll                                                   */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={cn("rv", className)}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section heading                                                    */
/* ------------------------------------------------------------------ */
export function SectionHead({
  chapter,
  title,
  sub,
  align = "center",
}: {
  chapter: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal className={cn(centered && "text-center")}>
      <div className={cn("flex items-center gap-3", centered && "justify-center")}>
        <Diamond />
        <span className="eyebrow">{chapter}</span>
        <Diamond />
      </div>
      <h2 className="font-display mt-5 text-4xl font-semibold leading-[1.08] text-parchment sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[15px] leading-relaxed text-parchment/60",
            centered && "mx-auto",
          )}
        >
          {sub}
        </p>
      )}
      <div className={cn("rule mt-8", centered ? "mx-auto max-w-xs" : "max-w-[220px]")}>
        <Diamond className="h-2.5 w-2.5" />
      </div>
    </Reveal>
  );
}

export function Diamond({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      className={cn("h-1.5 w-1.5 rotate-45 fill-gold/90", className)}
    >
      <rect width="10" height="10" rx="1" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Image with graceful fallback                                       */
/* ------------------------------------------------------------------ */
export function Img({
  src,
  alt,
  className,
  style,
  eager = false,
  initials,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  eager?: boolean;
  initials?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-charcoal via-midnight to-ink",
          className,
        )}
        style={style}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 text-gold/70">
          <Sparkles className="h-6 w-6" />
          {initials && (
            <span className="font-display text-3xl font-semibold tracking-widest">{initials}</span>
          )}
        </div>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      style={style}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Aetheria crest                                                     */
/* ------------------------------------------------------------------ */
export function AetheriaCrest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 96" fill="none" aria-hidden="true" className={className}>
      <path
        d="M40 4 L72 15 V48 C72 70 58 84 40 92 C22 84 8 70 8 48 V15 Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M40 10 L66 19.5 V48 C66 66 54 78 40 85 C26 78 14 66 14 48 V19.5 Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.55"
      />
      <path d="M40 18 L42.2 23.8 L48 26 L42.2 28.2 L40 34 L37.8 28.2 L32 26 L37.8 23.8 Z" fill="currentColor" />
      <path
        d="M20 62 L31 40 L37 50 L43 37 L56 62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 69 C31 66.5 36 66.5 40 69 C44 66.5 49 66.5 54 69 V76 C49 73.5 44 73.5 40 76 C36 73.5 31 73.5 26 76 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  House emblem (shield + icon)                                       */
/* ------------------------------------------------------------------ */
export function HouseEmblem({
  icon: Icon,
  color,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-flex items-center justify-center", className)}>
      <svg viewBox="0 0 80 92" fill="none" className="h-full w-full" aria-hidden="true">
        <path
          d="M40 5 L71 15.5 V46 C71 66.5 58 79 40 87 C22 79 9 66.5 9 46 V15.5 Z"
          stroke={color}
          strokeWidth="2"
          fill={`${color}1f`}
        />
        <path
          d="M40 11 L65 20 V46 C65 62 54.5 73 40 80 C25.5 73 15 62 15 46 V20 Z"
          stroke={color}
          strokeWidth="0.75"
          opacity="0.6"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center pb-1.5">
        <Icon className="h-[38%] w-[38%]" />
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Golden particle canvas                                             */
/* ------------------------------------------------------------------ */
interface P {
  x: number;
  y: number;
  r: number;
  s: number;
  o: number;
  ph: number;
  sw: number;
}

export function Particles({ density = 80, className }: { density?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let parts: P[] = [];

    const seed = () => {
      parts = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.7,
        s: 0.08 + Math.random() * 0.32,
        o: 0.12 + Math.random() * 0.5,
        ph: Math.random() * Math.PI * 2,
        sw: 0.2 + Math.random() * 0.6,
      }));
    };

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y -= p.s;
        p.x += Math.sin(t / 1600 + p.ph) * 0.08 * p.sw;
        if (p.y < -6) {
          p.y = h + 6;
          p.x = Math.random() * w;
        }
        const tw = 0.65 + 0.35 * Math.sin(t / 900 + p.ph * 3);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 205, 151, ${p.o * tw})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={cn("pointer-events-none absolute inset-0", className)} aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/*  Count-up number                                                    */
/* ------------------------------------------------------------------ */
export function CountUp({
  to,
  duration = 1600,
  plain = false,
  locale = "de-DE",
}: {
  to: number;
  duration?: number;
  plain?: boolean;
  locale?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  const fmt = (n: number) => (plain ? String(n) : n.toLocaleString(locale));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started || !ref.current) return;
    const el = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = fmt(to);
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, to, duration, plain, locale]);

  return <span ref={ref}>{plain ? "0" : (0).toLocaleString(locale)}</span>;
}

/* ------------------------------------------------------------------ */
/*  3D tilt card with localised light                                  */
/* ------------------------------------------------------------------ */
export function TiltCard({
  children,
  className,
  max = 6,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef(0);
  const fine = typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

  const onMove = (e: RPointerEvent<HTMLDivElement>) => {
    if (!fine || !ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(950px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateY(-4px)`;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    });
  };

  const onLeave = () => {
    if (!ref.current) return;
    cancelAnimationFrame(frame.current);
    ref.current.style.transform = "perspective(950px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn("tilt relative h-full", glare && "glow-hover", className)}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Magical cursor light                                               */
/* ------------------------------------------------------------------ */
export function MagicCursor() {
  const [enabled, setEnabled] = useState(false);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let gx = mx;
    let gy = my;
    let dx = mx;
    let dy = my;
    let raf = 0;
    let lastEmber = 0;
    let lastMX = mx;
    let lastMY = my;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const now = performance.now();
      const moved = Math.hypot(mx - lastMX, my - lastMY);
      if (now - lastEmber > 200 && moved > 26) {
        lastEmber = now;
        lastMX = mx;
        lastMY = my;
        spawnEmber(mx, my);
      }
    };

    const spawnEmber = (x: number, y: number) => {
      const layer = layerRef.current;
      if (!layer || layer.childElementCount > 24) return;
      const s = document.createElement("span");
      s.className = "ember";
      s.style.left = `${x + (Math.random() * 24 - 12)}px`;
      s.style.top = `${y + (Math.random() * 24 - 12)}px`;
      s.style.setProperty("--ex", `${Math.random() * 28 - 14}px`);
      layer.appendChild(s);
      window.setTimeout(() => s.remove(), 1150);
    };

    const tick = () => {
      gx += (mx - gx) * 0.06;
      gy += (my - gy) * 0.06;
      dx += (mx - dx) * 0.24;
      dy += (my - dy) * 0.24;
      if (glowRef.current) glowRef.current.style.transform = `translate(${gx - 210}px, ${gy - 210}px)`;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dx - 3.5}px, ${dy - 3.5}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={layerRef} className="pointer-events-none fixed inset-0 z-[79]" aria-hidden="true" />
      <div ref={glowRef} className="magic-glow" aria-hidden="true" />
      <div ref={dotRef} className="magic-dot" aria-hidden="true" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Ambient sound control                                              */
/* ------------------------------------------------------------------ */
export function SoundControl() {
  const { t } = useLang();
  const [on, setOn] = useState(false);
  const [vol, setVol] = useState(0.55);

  const toggle = () => {
    const next = !on;
    setOn(next);
    if (next) ambient.start(vol);
    else ambient.stop();
  };

  const changeVol = (v: number) => {
    setVol(v);
    ambient.setVolume(v);
  };

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={toggle}
        aria-label={on ? t.sound.off : t.sound.on}
        aria-pressed={on}
        title={t.sound.label}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300",
          on
            ? "border-gold/80 bg-gold/15 text-gold shadow-[0_0_18px_rgba(198,166,106,0.45)]"
            : "border-gold/25 text-parchment/55 hover:border-gold/60 hover:text-gold",
        )}
      >
        {on ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </button>
      <span
        className={cn(
          "grid transition-all duration-500",
          on ? "w-[108px] opacity-100" : "w-0 overflow-hidden opacity-0",
        )}
      >
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={vol}
          onChange={(e) => changeVol(parseFloat(e.target.value))}
          className="vol ml-2 self-center"
          aria-label={t.sound.volume}
        />
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Rune divider                                                       */
/* ------------------------------------------------------------------ */
export function RuneDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
      <span className="h-px w-24 bg-gradient-to-r from-transparent to-gold/40" />
      <svg viewBox="0 0 40 40" className="spin-slow h-7 w-7 text-gold/50" style={{ animationDuration: "40s" }}>
        <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M20 6 L22.5 17.5 L34 20 L22.5 22.5 L20 34 L17.5 22.5 L6 20 L17.5 17.5 Z" fill="currentColor" opacity="0.7" />
      </svg>
      <span className="h-px w-24 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}
