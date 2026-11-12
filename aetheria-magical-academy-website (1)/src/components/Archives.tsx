import { useState } from "react";
import { Eye, Lock, LockOpen, ScrollText } from "lucide-react";
import { useLang } from "../i18n";
import { Particles, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function Archives() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <section id="archive" className="relative overflow-hidden py-32">
      {/* darker, heavier atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_0%,#151b42,#070a1d_75%)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{ background: "radial-gradient(circle, rgba(198,166,106,0.10), transparent 62%)" }}
      />
      <Particles density={55} className="opacity-50" />

      {/* rotating sigil */}
      <svg
        viewBox="0 0 200 200"
        aria-hidden="true"
        className={cn(
          "spin-slow pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 text-gold/20 transition-opacity duration-1000",
          open ? "opacity-100" : "opacity-40",
        )}
      >
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 5" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 4" />
        {/* five rays */}
        {[0, 72, 144, 216, 288].map((deg) => (
          <line
            key={deg}
            x1="100"
            y1="30"
            x2="100"
            y2="70"
            stroke="currentColor"
            strokeWidth="0.8"
            transform={`rotate(${deg} 100 100)`}
          />
        ))}
        {[36, 108, 180, 252, 324].map((deg) => (
          <circle key={deg} cx="100" cy="26" r="2.4" fill="currentColor" transform={`rotate(${deg} 100 100)`} />
        ))}
      </svg>

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <SectionHead chapter={t.archives.chapter} title={t.archives.title} sub={t.archives.sub} />

        <Reveal delay={120}>
          <p className="mx-auto mt-12 max-w-2xl leading-[1.95] text-parchment/65">{t.archives.p1}</p>
          <p className="mx-auto mt-5 max-w-2xl leading-[1.95] text-parchment/65">{t.archives.p2}</p>
        </Reveal>

        <Reveal delay={200}>
          <button onClick={() => setOpen((v) => !v)} className="btn btn-solid mt-12" aria-expanded={open}>
            {open ? <Lock className="h-4 w-4" aria-hidden="true" /> : <LockOpen className="h-4 w-4" aria-hidden="true" />}
            {open ? t.archives.hideBtn : t.archives.revealBtn}
          </button>
        </Reveal>

        {/* revealed fragment */}
        <div
          className={cn(
            "grid transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "mt-14 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0",
          )}
          aria-hidden={!open}
        >
          <div className="overflow-hidden">
            <div className="panel-enter parchment relative mx-auto max-w-2xl rounded-xl p-8 text-left shadow-[0_50px_120px_-40px_rgba(0,0,0,0.9)] sm:p-10">
              <span className="pointer-events-none absolute inset-3 rounded-lg border border-[#8a7547]/60" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6b5a35]">
                    <ScrollText className="h-4 w-4" aria-hidden="true" />
                    {t.archives.fragTitle}
                  </span>
                  <span className="font-fraktur text-lg text-[#642d3a]">MCDXCII</span>
                </div>
                <div className="font-display mt-6 space-y-1 text-center text-xl italic leading-relaxed text-[#2c2618] sm:text-2xl">
                  {t.archives.riddle.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#8a7547] to-transparent" />
                <p className="mt-5 text-center text-[13px] leading-[1.9] text-[#4c422c]">{t.archives.outro}</p>
                <p className="mt-6 flex items-center justify-center gap-2 text-[9.5px] font-semibold uppercase tracking-[0.3em] text-[#6b5a35]/80">
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.archives.fragNo}
                </p>
              </div>
            </div>
          </div>
        </div>

        {!open && (
          <Reveal delay={280}>
            <p className="mt-10 text-[10px] uppercase tracking-[0.35em] text-gold/40">{t.archives.sealed}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
