import { useEffect, useState } from "react";
import { ArrowUpRight, Clapperboard, Quote, ScrollText, Star, User, X } from "lucide-react";
import { useLang } from "../i18n";
import { PROFESSORS, type Professor } from "../data";
import { Img, Reveal, SectionHead, TiltCard } from "./ui";

export default function Professors() {
  const { t } = useLang();
  const [selected, setSelected] = useState<Professor | null>(null);

  return (
    <section id="professoren" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-charcoal/70 to-midnight" />
      <div className="pointer-events-none absolute -left-52 top-1/3 h-[560px] w-[560px] rounded-full bg-[#4a3d94]/20 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead chapter={t.professors.chapter} title={t.professors.title} sub={t.professors.sub} />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {PROFESSORS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 80}>
              <ProfessorCard p={p} onOpen={() => setSelected(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ProfessorModal p={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

/* ------------------------------------------------------------------ */
function ProfessorCard({ p, onOpen }: { p: Professor; onOpen: () => void }) {
  const { t, lang } = useLang();
  const Icon = p.icon;
  return (
    <TiltCard max={5}>
      <article className="card group flex h-full flex-col overflow-hidden !rounded-3xl">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Img
            src={p.img}
            alt={p.imgAlt[lang]}
            style={p.imgPos ? { objectPosition: p.imgPos } : undefined}
            initials={p.name.replace(/^Prof\.?\s*/, "").split(/[\s.]+/).filter(Boolean).map((s) => s[0]).slice(0, 2).join("")}
            className="prof-img h-full w-full object-cover object-top transition-transform duration-[1.6s] ease-out group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(70%_45%_at_50%_0%,rgba(198,166,106,0.18),transparent_70%)]" />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-ink/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-sm">
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            {p.subject[lang]}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="font-display text-[26px] font-semibold leading-tight text-parchment">{p.name}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-gold/85">
              {p.portrayed ? `${t.professors.portrayed}: ${p.portrayed}` : p.film[lang]}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-[13px] leading-[1.8] text-parchment/60">{p.intro[lang]}</p>
          <p className="mt-4 border-l-2 border-gold/40 pl-3 text-[11px] font-medium uppercase leading-relaxed tracking-[0.14em] text-goldsoft/75">
            {p.specialty[lang]}
          </p>
          <button
            onClick={onOpen}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-gold/35 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-goldsoft transition-all duration-300 hover:border-gold hover:bg-gold hover:text-midnight hover:shadow-[0_12px_30px_-10px_rgba(198,166,106,0.6)]"
          >
            {t.professors.meet}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </article>
    </TiltCard>
  );
}

/* ------------------------------------------------------------------ */
function ProfessorModal({ p, onClose }: { p: Professor; onClose: () => void }) {
  const { t, lang } = useLang();
  const Icon = p.icon;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  const meta: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }[] = [
    { icon: User, label: t.professors.portrayed, value: p.portrayed ?? "—" },
    { icon: Clapperboard, label: t.professors.from, value: p.film[lang] },
    { icon: ScrollText, label: t.professors.since, value: p.since },
  ];

  return (
    <div className="fade-enter fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={p.name}>
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={onClose} />
      <div className="modal-enter relative grid max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-gold/30 bg-gradient-to-b from-charcoal to-ink shadow-[0_60px_140px_-40px_rgba(0,0,0,1)] md:grid-cols-[2fr_3fr] md:overflow-hidden">
        <button
          onClick={onClose}
          aria-label={t.professors.close}
          className="absolute right-4 top-4 z-10 rounded-full border border-gold/30 bg-ink/70 p-2.5 text-parchment/80 backdrop-blur transition-colors hover:border-gold hover:text-gold"
        >
          <X className="h-4 w-4" />
        </button>

        {/* portrait in its gilt frame */}
        <div className="relative min-h-[300px] overflow-hidden md:min-h-full">
          <Img
            src={p.img}
            alt={p.imgAlt[lang]}
            eager
            style={p.imgPos ? { objectPosition: p.imgPos } : undefined}
            initials={p.name.replace(/^Prof\.?\s*/, "").split(/[\s.]+/).filter(Boolean).map((s) => s[0]).slice(0, 2).join("")}
            className="prof-img absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-ink/30 md:bg-gradient-to-r" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-midnight">
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {p.subject[lang]}
            </span>
          </div>
          <span className="pointer-events-none absolute inset-3 rounded-xl border border-gold/40" aria-hidden="true" />
        </div>

        {/* dossier */}
        <div className="p-7 sm:p-9">
          <span className="eyebrow">{t.professors.chapter.split("·")[0]}</span>
          <h3 className="font-display mt-3 text-3xl font-bold leading-tight text-parchment sm:text-4xl">{p.name}</h3>

          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {meta.map((m) => {
              const MIcon = m.icon;
              return (
                <div key={m.label} className="rounded-xl border border-gold/15 bg-parchment/[0.03] px-3.5 py-3">
                  <div className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-gold/70">
                    <MIcon className="h-3 w-3" aria-hidden="true" />
                    {m.label}
                  </div>
                  <div className="mt-1.5 text-[12px] font-medium leading-snug text-parchment/85">{m.value}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
              <Star className="h-3.5 w-3.5" aria-hidden="true" />
              {t.professors.specialty}
            </h4>
            <p className="mt-2 font-display text-lg italic text-goldsoft/90">{p.specialty[lang]}</p>
          </div>

          <div className="mt-6">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">{t.professors.bio}</h4>
            <p className="mt-2 text-[13.5px] leading-[1.9] text-parchment/65">{p.bio[lang]}</p>
          </div>

          <figure className="mt-6 rounded-2xl border border-gold/20 bg-gold/[0.06] p-5">
            <Quote className="h-5 w-5 text-gold/70" aria-hidden="true" />
            <blockquote className="font-display mt-2 text-lg italic leading-relaxed text-parchment/90">
              {p.quote[lang]}
            </blockquote>
            <figcaption className="mt-2 text-[10px] uppercase tracking-[0.25em] text-gold/70">
              {t.professors.quote}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
