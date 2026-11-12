import { useEffect, useMemo, useState } from "react";
import { ArrowRight, RefreshCw, Sparkles, WandSparkles, X } from "lucide-react";
import { useLang } from "../i18n";
import { HOUSES, QUIZ, type House, type HouseId } from "../data";
import { HouseEmblem, Img, Reveal, SectionHead, Diamond, TiltCard } from "./ui";

export default function Houses() {
  const { t } = useLang();
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <section id="haeuser" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-ink to-midnight" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gold/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead chapter={t.houses.chapter} title={t.houses.title} sub={t.houses.sub} />

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {HOUSES.map((house, i) => (
            <Reveal key={house.id} delay={i * 90}>
              <HouseCard house={house} />
            </Reveal>
          ))}
        </div>

        {/* quiz call */}
        <Reveal delay={140}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-charcoal via-midnight to-ink p-10 text-center shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 90% at 20% 0%, rgba(96,78,205,0.32), transparent 60%), radial-gradient(60% 90% at 80% 100%, rgba(36,92,150,0.30), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                <WandSparkles className="h-6 w-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-display mt-6 text-3xl font-semibold text-parchment sm:text-4xl">
                {t.houses.quizCta}
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-parchment/60">{t.houses.quizNote}</p>
              <button onClick={() => setQuizOpen(true)} className="btn btn-solid mt-8">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {t.quiz.title}
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {quizOpen && <QuizModal onClose={() => setQuizOpen(false)} />}
    </section>
  );
}

/* ------------------------------------------------------------------ */
function HouseCard({ house }: { house: House }) {
  const { t, lang } = useLang();
  return (
    <TiltCard max={5}>
      <article className="card group relative h-full overflow-hidden !rounded-3xl">
        {/* magical banner artwork */}
        <div className="absolute inset-0">
          <Img
            src={house.art}
            alt={`${house.name} – ${house.animal[lang]}`}
            className="h-full w-full object-cover opacity-45 transition-all duration-[1.8s] ease-out group-hover:scale-[1.05] group-hover:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-70"
            style={{ background: `linear-gradient(160deg, ${house.color}66, transparent 55%)` }}
          />
        </div>

        {/* floating embers */}
        <span className="floaty left-[12%] top-[30%] h-1.5 w-1.5" style={{ color: house.color }} aria-hidden="true" />
        <span className="floaty left-[78%] top-[18%] h-1 w-1" style={{ color: house.color, animationDelay: "1.8s" }} aria-hidden="true" />
        <span className="floaty left-[62%] top-[58%] h-2 w-2" style={{ color: house.color, animationDelay: "3.2s" }} aria-hidden="true" />

        <div className="relative p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <span
                className="font-display text-[13px] font-semibold italic tracking-wider"
                style={{ color: house.color }}
              >
                {house.latin}
              </span>
              <h3 className="font-display mt-1.5 text-3xl font-semibold text-parchment sm:text-4xl">
                {house.name}
              </h3>
              <p className="mt-1 text-[11px] italic text-parchment/45">{house.latinDe[lang]}</p>
            </div>
            <span
              style={{ color: house.color }}
              className="shrink-0 drop-shadow-[0_0_22px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-110"
            >
              <HouseEmblem icon={house.icon} color={house.color} className="h-20 w-20" />
            </span>
          </div>

          <div className="mt-6 space-y-1.5 text-[12px] uppercase tracking-[0.18em] text-parchment/50">
            <p>
              <span className="text-gold/80">{t.houses.colours}:</span> {house.colours[lang]}
            </p>
            <p>
              <span className="text-gold/80">{t.houses.animal}:</span> {house.animal[lang]}
            </p>
            <p>
              <span className="text-gold/80">{t.houses.founder}:</span>{" "}
              <span className="normal-case tracking-normal text-parchment/65">{house.founder[lang]}</span>
            </p>
          </div>

          <p className="mt-5 text-sm leading-[1.85] text-parchment/70">{house.desc[lang]}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {house.values[lang].map((v) => (
              <span
                key={v}
                className="rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm"
                style={{ borderColor: `${house.color}88`, color: house.color, background: `${house.color}1f` }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        <span
          className="absolute inset-x-8 bottom-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `linear-gradient(90deg, transparent, ${house.color}, transparent)` }}
          aria-hidden="true"
        />
      </article>
    </TiltCard>
  );
}

/* ------------------------------------------------------------------ */
function QuizModal({ onClose }: { onClose: () => void }) {
  const { t, lang } = useLang();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<HouseId[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  const result: House | null = useMemo(() => {
    if (!done) return null;
    const counts: Record<HouseId, number> = { drachenfels: 0, silberwald: 0, nachtkraehe: 0, gruenquell: 0 };
    answers.forEach((a) => counts[a]++);
    const best = (Object.keys(counts) as HouseId[]).reduce((a, b) => (counts[a] >= counts[b] ? a : b));
    return HOUSES.find((h) => h.id === best) ?? null;
  }, [done, answers]);

  const question = QUIZ[step];

  const choose = (house: HouseId) => {
    const next = [...answers, house];
    setAnswers(next);
    if (step + 1 >= QUIZ.length) setDone(true);
    else setStep(step + 1);
  };

  const progress = done ? 100 : (step / QUIZ.length) * 100;

  return (
    <div className="fade-enter fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={t.quiz.title}>
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={onClose} />
      <div className="modal-enter relative w-full max-w-2xl overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-b from-charcoal to-ink shadow-[0_60px_140px_-40px_rgba(0,0,0,1)]">
        <div className="h-1 w-full bg-parchment/5">
          <div
            className="h-full bg-gradient-to-r from-golddeep via-gold to-goldsoft transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          onClick={onClose}
          aria-label={t.quiz.close}
          className="absolute right-4 top-4 z-10 rounded-full border border-gold/25 bg-ink/60 p-2 text-parchment/70 transition-colors hover:border-gold/70 hover:text-gold"
        >
          <X className="h-4 w-4" />
        </button>

        {!done || !result ? (
          <div key={step} className="panel-enter p-8 sm:p-12">
            <div className="flex items-center gap-3">
              <Diamond />
              <span className="eyebrow">
                {t.quiz.question} {step + 1} {t.quiz.of} {QUIZ.length}
              </span>
              <Diamond />
            </div>
            <h3 className="font-display mt-6 text-2xl font-semibold leading-snug text-parchment sm:text-3xl">
              {question.q[lang]}
            </h3>
            <div className="mt-8 space-y-3">
              {question.options.map((opt) => (
                <button
                  key={opt.t.de}
                  onClick={() => choose(opt.house)}
                  className="group flex w-full items-center justify-between gap-4 rounded-xl border border-gold/15 bg-parchment/[0.03] px-5 py-4 text-left text-sm text-parchment/80 transition-all duration-300 hover:border-gold/60 hover:bg-gold/10 hover:text-parchment"
                >
                  {opt.t[lang]}
                  <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="panel-enter relative overflow-hidden p-8 text-center sm:p-12">
            {/* result banner art */}
            <div className="absolute inset-x-0 top-0 h-56 overflow-hidden">
              <Img src={result.art} alt={result.animal[lang]} eager className="h-full w-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/60 to-ink" />
            </div>
            <div className="relative">
              <span className="eyebrow">{t.quiz.result}</span>
              <div className="mx-auto mt-24 flex justify-center drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]" style={{ color: result.color }}>
                <HouseEmblem icon={result.icon} color={result.color} className="h-32 w-32" />
              </div>
              <h3 className="font-display mt-6 text-4xl font-bold text-parchment">{result.name}</h3>
              <p className="font-display mt-1 text-sm italic" style={{ color: result.color }}>
                {result.latin} — {result.latinDe[lang]}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {result.values[lang].map((v) => (
                  <span
                    key={v}
                    className="rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
                    style={{ borderColor: `${result.color}66`, color: result.color }}
                  >
                    {v}
                  </span>
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-md text-sm leading-[1.9] text-parchment/75">{result.result[lang]}</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <button
                  className="btn btn-ghost"
                  onClick={() => {
                    setStep(0);
                    setAnswers([]);
                    setDone(false);
                  }}
                >
                  <RefreshCw className="h-4 w-4" />
                  {t.quiz.again}
                </button>
                <a href="#haeuser" className="btn btn-solid" onClick={onClose}>
                  {t.quiz.close}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
