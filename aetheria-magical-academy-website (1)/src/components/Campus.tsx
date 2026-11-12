import { useEffect, useRef, useState, type PointerEvent as RPointerEvent } from "react";
import { Eye, GraduationCap, MapPin, Maximize2, MousePointerClick, ScrollText, ZoomIn, ZoomOut } from "lucide-react";
import { useLang } from "../i18n";
import { CAMPUS, MAP_IMAGE } from "../data";
import { Img, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

interface View {
  s: number;
  x: number;
  y: number;
}

const clampView = (v: View, rect: { w: number; h: number }): View => {
  const s = Math.min(Math.max(v.s, 1), 2.6);
  const maxX = (rect.w * (s - 1)) / 2;
  const maxY = (rect.h * (s - 1)) / 2;
  return { s, x: Math.min(Math.max(v.x, -maxX), maxX), y: Math.min(Math.max(v.y, -maxY), maxY) };
};

export default function Campus() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const [view, setView] = useState<View>({ s: 1, x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const vpRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef<{ px: number; py: number; vx: number; vy: number; moved: boolean } | null>(null);

  const spot = CAMPUS[active];

  const rectOf = () => {
    const r = vpRef.current?.getBoundingClientRect();
    return { w: r?.width ?? 800, h: r?.height ?? 500 };
  };

  /* non-passive wheel zoom: the map owns the gesture while hovered */
  useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      const factor = e.deltaY > 0 ? 0.88 : 1.14;
      setView((v) => clampView({ ...v, s: v.s * factor }, rectOf()));
    };
    vp.addEventListener("wheel", handler, { passive: false });
    return () => vp.removeEventListener("wheel", handler);
  }, []);

  const onPointerDown = (e: RPointerEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).closest("button.pin") ? null : e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { px: e.clientX, py: e.clientY, vx: view.x, vy: view.y, moved: false };
    setDragging(true);
  };

  const onPointerMove = (e: RPointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.px;
    const dy = e.clientY - drag.current.py;
    if (Math.abs(dx) + Math.abs(dy) > 4) drag.current.moved = true;
    setView((v) => clampView({ ...v, x: drag.current!.vx + dx, y: drag.current!.vy + dy }, rectOf()));
  };

  const endDrag = () => {
    drag.current = null;
    setDragging(false);
  };

  const zoom = (factor: number) => setView((v) => clampView({ ...v, s: v.s * factor }, rectOf()));
  const reset = () => setView({ s: 1, x: 0, y: 0 });

  const zoomed = view.s > 1.04;

  return (
    <section id="campus" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-charcoal/60 to-midnight" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[460px] w-[460px] rounded-full bg-[#2f6f9e]/12 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead chapter={t.campus.chapter} title={t.campus.title} sub={t.campus.sub} />

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.3em] text-gold/70">
          <span className="flex items-center gap-2">
            <MousePointerClick className="h-4 w-4" aria-hidden="true" />
            {t.campus.hint}
          </span>
          <span className="hidden h-3 w-px bg-gold/30 sm:block" aria-hidden="true" />
          <span className="text-parchment/40">{t.campus.explore}</span>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[7fr_5fr]">
          {/* ---------------- map viewport ---------------- */}
          <Reveal>
            <div className="vignette relative overflow-hidden rounded-3xl border border-gold/30 bg-ink shadow-[0_50px_110px_-50px_rgba(0,0,0,1)]">
              <div
                ref={vpRef}
                className={cn("map-vp relative aspect-[16/10] w-full select-none overflow-hidden", dragging && "grabbing")}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerLeave={endDrag}
                role="application"
                aria-label={t.campus.title}
              >
                <div
                  className={cn("map-ctx absolute inset-0 will-change-transform", dragging && "no-anim")}
                  style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.s})` }}
                >
                  <Img
                    src={MAP_IMAGE}
                    alt={lang === "de" ? "Illustrierte Karte des Aetheria-Campus" : "Illustrated map of the Aetheria campus"}
                    eager
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-ink/15" />
                  {CAMPUS.map((s, i) => (
                    <button
                      key={s.id}
                      className={cn("pin", i === active && "active")}
                      style={{ left: `${s.x}%`, top: `${s.y}%` }}
                      onClick={() => setActive(i)}
                      aria-label={s.name[lang]}
                      aria-pressed={i === active}
                    >
                      <span className="pin-label">{s.name[lang]}</span>
                      <span className="pin-dot" />
                      <span className="pin-stem" />
                    </button>
                  ))}
                </div>
              </div>

              {/* compass rose */}
              <svg viewBox="0 0 60 60" className="pointer-events-none absolute left-4 top-4 z-10 h-12 w-12 text-gold/80" aria-hidden="true">
                <circle cx="30" cy="30" r="27" fill="rgba(11,13,22,0.55)" stroke="currentColor" strokeWidth="1" />
                <path d="M30 8 L34 30 L30 52 L26 30 Z" fill="currentColor" opacity="0.9" />
                <path d="M8 30 L30 26 L52 30 L30 34 Z" fill="currentColor" opacity="0.45" />
                <text x="30" y="15.5" textAnchor="middle" fontSize="8" fill="#e8dcc2" fontFamily="serif">N</text>
              </svg>

              {/* zoom controls */}
              <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
                <button
                  onClick={() => zoom(1.3)}
                  aria-label={t.campus.zoomIn}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-ink/70 text-gold backdrop-blur transition-all hover:bg-gold hover:text-midnight"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <button
                  onClick={() => zoom(0.77)}
                  aria-label={t.campus.zoomOut}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-ink/70 text-gold backdrop-blur transition-all hover:bg-gold hover:text-midnight"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <button
                  onClick={reset}
                  aria-label={t.campus.resetView}
                  disabled={!zoomed}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur transition-all",
                    zoomed
                      ? "border-gold/40 bg-ink/70 text-gold hover:bg-gold hover:text-midnight"
                      : "cursor-default border-gold/15 bg-ink/40 text-parchment/20",
                  )}
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* ---------------- dossier panel ---------------- */}
          <Reveal delay={120}>
            <aside className="card flex h-full flex-col overflow-hidden !rounded-3xl border-gold/25">
              <div className="relative h-52 shrink-0 overflow-hidden sm:h-60">
                <Img
                  key={spot.id}
                  src={spot.img}
                  alt={spot.alt[lang]}
                  className="panel-enter h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                <span className="absolute left-5 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-ink/70 px-3 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {spot.level[lang]}
                </span>
              </div>
              <div key={spot.id + "-body"} className="panel-enter flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-display text-3xl font-semibold text-parchment">{spot.name[lang]}</h3>
                <p className="text-[13.5px] leading-[1.9] text-parchment/60">{spot.desc[lang]}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-gold/15 bg-parchment/[0.03] p-4">
                    <h4 className="flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-gold/80">
                      <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                      {t.campus.doing}
                    </h4>
                    <p className="mt-2 text-[12px] leading-relaxed text-parchment/55">{spot.doing[lang]}</p>
                  </div>
                  <div className="rounded-xl border border-gold/15 bg-parchment/[0.03] p-4">
                    <h4 className="flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-gold/80">
                      <ScrollText className="h-3.5 w-3.5" aria-hidden="true" />
                      {t.campus.lore}
                    </h4>
                    <p className="mt-2 text-[12px] leading-relaxed text-parchment/55">{spot.lore[lang]}</p>
                  </div>
                </div>

                <div className="mt-auto rounded-2xl border border-gold/20 bg-gold/[0.06] p-4">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    {t.campus.detail}
                  </div>
                  <p className="mt-2 font-display text-[15px] italic leading-relaxed text-goldsoft/85">
                    {spot.detail[lang]}
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>

        {/* quick list — keyboard & touch friendly */}
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CAMPUS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
                  i === active
                    ? "border-gold bg-gold text-midnight shadow-[0_8px_24px_-8px_rgba(198,166,106,0.7)]"
                    : "border-gold/25 text-parchment/55 hover:border-gold/60 hover:text-goldsoft",
                )}
              >
                {s.name[lang]}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
