import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  Info,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useLang } from "../i18n";
import { ACTIVITIES, DRINKS, FESTIVALS, FOODS, IMG, type Festival, type Food } from "../data";
import { Img, Reveal, SectionHead, TiltCard } from "./ui";

export default function StudentLife() {
  const { t, lang } = useLang();
  const [food, setFood] = useState<Food | null>(null);
  const [fest, setFest] = useState<Festival | null>(null);

  return (
    <section id="studentenleben" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-ink/60 to-midnight" />
      <div className="pointer-events-none absolute -right-48 top-24 h-[480px] w-[480px] rounded-full bg-[#2f6f9e]/15 blur-[130px]" />
      <div className="pointer-events-none absolute -left-48 bottom-1/4 h-[480px] w-[480px] rounded-full bg-[#4a3d94]/20 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead chapter={t.studentlife.chapter} title={t.studentlife.title} sub={t.studentlife.sub} />

        {/* ---------------- A · Die Gewandung ---------------- */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <Reveal>
              <figure className="vignette relative overflow-hidden rounded-3xl border border-gold/25 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
                <Img
                  src={IMG.regaliaMain}
                  alt={t.studentlife.dress.captionMain}
                  className="h-[480px] w-full object-cover object-top transition-transform duration-[2.5s] hover:scale-105"
                />
                <figcaption className="absolute bottom-0 z-10 w-full bg-gradient-to-t from-ink/90 to-transparent px-5 pb-4 pt-10 text-[10px] uppercase tracking-[0.25em] text-goldsoft/90">
                  {t.studentlife.dress.captionMain}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={160}>
              <figure className="vignette absolute -bottom-10 -right-4 hidden w-[52%] overflow-hidden rounded-2xl border border-gold/30 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.95)] sm:block">
                <Img
                  src={IMG.regaliaDetail}
                  alt={t.studentlife.dress.captionDetail}
                  className="h-[210px] w-full object-cover transition-transform duration-[2.5s] hover:scale-105"
                />
                <figcaption className="absolute bottom-0 z-10 w-full bg-gradient-to-t from-ink/90 to-transparent px-4 pb-3 pt-8 text-[9px] uppercase tracking-[0.25em] text-goldsoft/90">
                  {t.studentlife.dress.captionDetail}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <h3 className="font-display text-3xl font-semibold text-goldsoft">{t.studentlife.dress.title}</h3>
              <p className="mt-2 text-sm italic text-parchment/50">{t.studentlife.dress.sub}</p>
            </Reveal>
            <div className="mt-8 space-y-4">
              {t.studentlife.dress.items.map(([title, text], i) => (
                <Reveal key={title} delay={i * 70}>
                  <div className="card flex gap-4 p-5 transition-transform duration-500 hover:-translate-y-0.5">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                      <Check className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-parchment">{title}</h4>
                      <p className="mt-1 text-[13px] leading-relaxed text-parchment/55">{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={380}>
              <p className="mt-6 border-l-2 border-gold/50 pl-4 font-display text-[15px] italic text-goldsoft/85">
                {t.studentlife.dress.note}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ---------------- B · Die Große Halle ---------------- */}
        <div className="mt-32">
          <Reveal className="flex items-start gap-4">
            <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
              <UtensilsCrossed className="h-5 w-5 text-gold" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-3xl font-semibold text-goldsoft sm:text-4xl">
                {t.studentlife.dining.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-parchment/55">
                {t.studentlife.dining.sub}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {FOODS.map((f, i) => (
              <Reveal key={f.name} delay={(i % 4) * 70}>
                <button
                  onClick={() => setFood(f)}
                  className="group block w-full text-left"
                  aria-label={`${f.name} – ${t.food.open}`}
                >
                  <article className="card h-full overflow-hidden !rounded-3xl transition-transform duration-500 group-hover:-translate-y-1.5">
                    <div className="relative h-44 overflow-hidden">
                      <Img
                        src={f.img}
                        alt={f.alt[lang]}
                        className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
                      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 bg-ink/70 text-gold opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <h4 className="font-display absolute bottom-3 left-4 right-4 text-xl font-semibold text-parchment">
                        {f.name}
                      </h4>
                    </div>
                    <p className="p-4 text-[12.5px] leading-relaxed text-parchment/55">{f.desc[lang]}</p>
                  </article>
                </button>
              </Reveal>
            ))}
          </div>

          {/* drinks */}
          <Reveal delay={120}>
            <h4 className="eyebrow mt-12 flex items-center gap-3">
              {t.studentlife.dining.drinks}
              <span className="h-px max-w-[140px] flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
            </h4>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {DRINKS.map((d, i) => (
              <Reveal key={d.name} delay={i * 90}>
                <button onClick={() => setFood(d)} className="group block w-full text-left" aria-label={`${d.name} – ${t.food.open}`}>
                  <article className="card flex items-stretch overflow-hidden !rounded-3xl transition-transform duration-500 group-hover:-translate-y-1.5">
                    <div className="relative w-36 shrink-0 overflow-hidden sm:w-44">
                      <Img
                        src={d.img}
                        alt={d.alt[lang]}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 p-5">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display text-xl font-semibold text-parchment">{d.name}</h4>
                        <Sparkles className="h-4 w-4 shrink-0 text-gold/50 transition-colors group-hover:text-gold" aria-hidden="true" />
                      </div>
                      <p className="mt-2 text-[12.5px] leading-relaxed text-parchment/55">{d.desc[lang]}</p>
                    </div>
                  </article>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ---------------- C · Feste ---------------- */}
        <div className="mt-32">
          <Reveal className="text-center">
            <h3 className="font-display text-3xl font-semibold text-goldsoft sm:text-4xl">{t.studentlife.fest.title}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-parchment/55">{t.studentlife.fest.sub}</p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {FESTIVALS.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title.de} delay={(i % 3) * 80}>
                  <TiltCard max={4}>
                    <button onClick={() => setFest(f)} className="group block h-full w-full text-left" aria-label={f.title[lang]}>
                      <article className="card flex h-full flex-col overflow-hidden !rounded-3xl">
                        <div className="relative h-52 overflow-hidden">
                          <Img
                            src={f.img}
                            alt={f.alt[lang]}
                            className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.07]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
                          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-ink/70 px-3 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-sm">
                            <CalendarDays className="h-3 w-3" aria-hidden="true" />
                            {f.when[lang]}
                          </span>
                          <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-ink/60 backdrop-blur transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold/20">
                            <Icon className="h-4.5 w-4.5 text-gold" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <h4 className="font-display text-2xl font-semibold text-parchment">{f.title[lang]}</h4>
                          <p className="mt-2 text-[13px] leading-[1.8] text-parchment/55">{f.desc[lang]}</p>
                          <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold/70 transition-colors group-hover:text-gold">
                            {t.food.open}
                            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                          </span>
                        </div>
                      </article>
                    </button>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ---------------- D · Aktivitäten ---------------- */}
        <div className="mt-32">
          <Reveal className="text-center">
            <h3 className="font-display text-3xl font-semibold text-goldsoft sm:text-4xl">{t.studentlife.act.title}</h3>
            <p className="mt-3 text-sm italic text-parchment/50">{t.studentlife.act.sub}</p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ACTIVITIES.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={a.title.de} delay={(i % 4) * 70}>
                  <TiltCard max={6}>
                    <div className="card group h-full overflow-hidden !rounded-3xl">
                      <div className="relative h-36 overflow-hidden">
                        <Img
                          src={a.img}
                          alt={a.alt[lang]}
                          className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                        <span className="absolute bottom-3 left-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-ink/70 text-gold backdrop-blur transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_-8px_rgba(198,166,106,0.6)]">
                          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="p-5">
                        <h4 className="font-display text-lg font-semibold leading-snug text-parchment">
                          {a.title[lang]}
                        </h4>
                        <p className="mt-2 text-[12.5px] leading-relaxed text-parchment/55">{a.desc[lang]}</p>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {food && <FoodModal food={food} onClose={() => setFood(null)} />}
      {fest && <FestModal fest={fest} onClose={() => setFest(null)} />}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Food detail modal                                                  */
/* ------------------------------------------------------------------ */
function useModalLock(onClose: () => void) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [onClose]);
}

function FoodModal({ food, onClose }: { food: Food; onClose: () => void }) {
  const { t, lang } = useLang();
  useModalLock(onClose);

  return (
    <div className="fade-enter fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={food.name}>
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={onClose} />
      <div className="modal-enter relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-gold/30 bg-gradient-to-b from-charcoal to-ink shadow-[0_60px_140px_-40px_rgba(0,0,0,1)]">
        <button
          onClick={onClose}
          aria-label={t.food.close}
          className="absolute right-4 top-4 z-10 rounded-full border border-gold/30 bg-ink/70 p-2.5 text-parchment/80 backdrop-blur transition-colors hover:border-gold hover:text-gold"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative h-64 overflow-hidden sm:h-80">
          <Img src={food.img} alt={food.alt[lang]} eager className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />
          <div className="absolute bottom-0 left-0 p-7">
            <span className="eyebrow">{t.studentlife.dining.title.split("–")[0]}</span>
            <h3 className="font-display mt-2 text-4xl font-bold text-parchment">{food.name}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gold/80">
              {t.food.meaning}: {food.nameEn.en}
            </p>
          </div>
        </div>

        <div className="p-7 sm:p-9">
          <p className="font-display text-lg italic leading-relaxed text-goldsoft/90">{food.desc[lang]}</p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-gold/20 bg-gold/[0.05] p-5">
              <h4 className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                <UtensilsCrossed className="h-4 w-4" aria-hidden="true" />
                {t.food.tradition}
              </h4>
              <p className="mt-3 text-[13px] leading-[1.9] text-parchment/65">{food.tradition[lang]}</p>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-[#463a8c]/20 p-5">
              <h4 className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                <Info className="h-4 w-4" aria-hidden="true" />
                {t.food.fact}
              </h4>
              <p className="mt-3 text-[13px] leading-[1.9] text-parchment/65">{food.fact[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Festival detail modal                                              */
/* ------------------------------------------------------------------ */
function FestModal({ fest, onClose }: { fest: Festival; onClose: () => void }) {
  const { t, lang } = useLang();
  useModalLock(onClose);
  const Icon = fest.icon;

  return (
    <div className="fade-enter fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={fest.title[lang]}>
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={onClose} />
      <div className="modal-enter relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-gold/30 bg-gradient-to-b from-charcoal to-ink shadow-[0_60px_140px_-40px_rgba(0,0,0,1)]">
        <button
          onClick={onClose}
          aria-label={t.fest.close}
          className="absolute right-4 top-4 z-10 rounded-full border border-gold/30 bg-ink/70 p-2.5 text-parchment/80 backdrop-blur transition-colors hover:border-gold hover:text-gold"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative h-64 overflow-hidden sm:h-80">
          <Img src={fest.img} alt={fest.alt[lang]} eager className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />
          <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ink/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {fest.when[lang]}
          </span>
          <span className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-ink/70 backdrop-blur">
            <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
          </span>
          <div className="absolute bottom-0 left-0 p-7">
            <span className="eyebrow">{t.studentlife.fest.title}</span>
            <h3 className="font-display mt-2 text-4xl font-bold text-parchment">{fest.title[lang]}</h3>
          </div>
        </div>

        <div className="p-7 sm:p-9">
          <p className="font-display text-lg italic leading-relaxed text-goldsoft/90">{fest.desc[lang]}</p>

          <div className="mt-7 space-y-5">
            <div className="rounded-2xl border border-gold/20 bg-gold/[0.05] p-5">
              <h4 className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {t.fest.celebrate}
              </h4>
              <p className="mt-3 text-[13px] leading-[1.9] text-parchment/65">{fest.celebration[lang]}</p>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-[#24506b]/25 p-5">
              <h4 className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                {t.fest.meaning}
              </h4>
              <p className="mt-3 text-[13px] leading-[1.9] text-parchment/65">{fest.meaning[lang]}</p>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-[#463a8c]/20 p-5">
              <h4 className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {t.fest.aetheria}
              </h4>
              <p className="mt-3 text-[13px] leading-[1.9] text-parchment/65">{fest.special[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
