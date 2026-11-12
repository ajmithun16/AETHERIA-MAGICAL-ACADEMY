import { useLang } from "../i18n";
import { AetheriaCrest, Diamond, Reveal } from "./ui";

const CREATORS = ["KEVIN", "PIYUSH", "YUVRAJ", "PRISCILLA", "ANUSH", "MITHUN"];

export default function Credits() {
  const { t } = useLang();

  return (
    <section id="credits" aria-label="Project credits" className="relative overflow-hidden border-t border-gold/10 bg-[#080c22] py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[720px] -translate-x-1/2 rounded-full bg-gold/[0.05] blur-[110px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <AetheriaCrest className="mx-auto h-12 w-auto text-gold/70" />
        </Reveal>
        <Reveal delay={90}>
          <p className="eyebrow mt-8">{t.credits.eyebrow}</p>
        </Reveal>
        <Reveal delay={160}>
          <h3 className="font-display text-goldgrad mt-5 text-4xl font-bold tracking-[0.12em] sm:text-5xl">
            {t.credits.title}
          </h3>
        </Reveal>
        <Reveal delay={220}>
          <p className="mx-auto mt-4 max-w-md text-[13.5px] italic leading-relaxed text-parchment/55">
            {t.credits.sub}
          </p>
        </Reveal>

        <Reveal delay={280}>
          <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 sm:gap-4">
            {CREATORS.map((name, i) => (
              <li key={name} className="flex items-center gap-3 sm:gap-4">
                {i > 0 && <Diamond className="hidden h-1.5 w-1.5 opacity-60 sm:block" />}
                <span className="rounded-full border border-gold/25 bg-gold/[0.04] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.34em] text-goldsoft/90 shadow-[0_0_24px_-8px_rgba(198,166,106,0.45)] transition-all duration-500 hover:border-gold/60 hover:bg-gold/10 hover:text-goldsoft hover:shadow-[0_0_34px_-6px_rgba(198,166,106,0.75)]">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={340}>
          <div className="rule mx-auto mt-12 max-w-xs">
            <Diamond className="h-2.5 w-2.5" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
