import { BookOpen, Eye, FlaskConical, KeyRound, Moon, Quote, Telescope, Waypoints } from "lucide-react";
import { useLang } from "../i18n";
import { FACTS, IMG, TIMELINE } from "../data";
import { CountUp, Reveal, SectionHead, Img } from "./ui";

const SECRET_ICONS = [Moon, Telescope, FlaskConical, Waypoints, KeyRound];

export default function Academy() {
  const { t, lang } = useLang();

  return (
    <section id="akademie" className="relative overflow-hidden py-28">
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-charcoal/60 to-midnight" />
        <div className="absolute -left-40 top-40 h-[480px] w-[480px] rounded-full bg-[#4a3d94]/20 blur-[120px]" />
        <div className="absolute -right-40 top-[55%] h-[480px] w-[480px] rounded-full bg-[#2f6f9e]/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead chapter={t.academy.chapter} title={t.academy.title} sub={t.academy.sub} />

        {/* story + imagery */}
        <div className="mt-20 grid items-start gap-14 lg:grid-cols-2">
          <div className="space-y-10">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold text-goldsoft">{t.academy.historyTitle}</h3>
              <p className="mt-5 leading-[1.9] text-parchment/70">{t.academy.intro1}</p>
              <p className="mt-4 leading-[1.9] text-parchment/70">{t.academy.intro2}</p>
            </Reveal>

            <Reveal delay={120}>
              <figure className="relative rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/10 via-transparent to-burgundy/10 p-7">
                <Quote className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-midnight p-1.5 text-gold" aria-hidden="true" />
                <blockquote className="font-display text-xl italic leading-relaxed text-parchment/90">
                  {t.academy.quote}
                </blockquote>
                <figcaption className="mt-4 text-[11px] uppercase tracking-[0.25em] text-gold/80">
                  {t.academy.quoteBy}
                </figcaption>
              </figure>
            </Reveal>

            {/* facts */}
            <div>
              <Reveal>
                <h4 className="eyebrow">{t.academy.factsTitle}</h4>
              </Reveal>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {FACTS.map((f, i) => (
                  <Reveal key={f.label.de} delay={i * 90}>
                    <div className="card p-5 text-center">
                      <div className="font-display text-4xl font-semibold text-goldsoft">
                        <CountUp to={f.n} />
                        {f.suffix}
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-parchment/50">
                        {f.label[lang]}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* imagery collage */}
          <div className="relative">
            <Reveal delay={100}>
              <figure className="vignette relative overflow-hidden rounded-2xl border border-gold/25 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
                <Img
                  src={IMG.academyCastle}
                  alt={lang === "de" ? "Schloss bei Sonnenuntergang in den Alpen" : "Castle at sunset in the Alps"}
                  className="h-[420px] w-full object-cover transition-transform duration-[2.5s] hover:scale-105"
                />
              </figure>
            </Reveal>
            <Reveal delay={220}>
              <figure className="vignette relative z-10 -mt-16 ml-auto w-[72%] overflow-hidden rounded-2xl border border-gold/30 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]">
                <Img
                  src={IMG.alpsLake}
                  alt={lang === "de" ? "Der Aethersee in den Bayerischen Alpen" : "The Aethersee in the Bavarian Alps"}
                  className="h-[240px] w-full object-cover"
                />
                <figcaption className="absolute bottom-0 w-full bg-gradient-to-t from-ink/90 to-transparent px-4 pb-3 pt-8 text-[10px] uppercase tracking-[0.25em] text-goldsoft/90">
                  {lang === "de" ? "Das Aethertal · Bayerische Alpen" : "The Aether valley · Bavarian Alps"}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* secrets */}
        <div className="mt-24">
          <Reveal className="flex items-center gap-3">
            <Eye className="h-4 w-4 text-gold" aria-hidden="true" />
            <h3 className="font-display text-2xl font-semibold text-goldsoft">{t.academy.secretsTitle}</h3>
            <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.academy.secrets.map(([title, text], i) => {
              const Icon = SECRET_ICONS[i];
              return (
                <Reveal key={title} delay={i * 80}>
                  <div className="card group h-full p-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold transition-colors group-hover:bg-gold/15">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <h4 className="font-display mt-4 text-lg font-semibold text-parchment">{title}</h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-parchment/55">{text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* timeline */}
        <div className="mt-24">
          <Reveal className="flex items-center gap-3">
            <BookOpen className="h-4 w-4 text-gold" aria-hidden="true" />
            <h3 className="font-display text-2xl font-semibold text-goldsoft">{t.academy.timelineTitle}</h3>
            <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
          </Reveal>

          <div className="relative mt-12 pl-8 sm:pl-12">
            <span className="absolute bottom-4 left-2 top-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent sm:left-4" aria-hidden="true" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year + i} delay={i * 60}>
                  <div className="group relative grid gap-2 sm:grid-cols-[110px_1fr] sm:gap-8">
                    <span
                      className="absolute -left-8 top-1.5 h-3 w-3 rotate-45 border border-gold bg-midnight transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_12px_rgba(198,166,106,0.9)] sm:-left-[26px]"
                      aria-hidden="true"
                    />
                    <div className="font-display text-2xl font-bold tracking-wider text-goldsoft/90">
                      {item.year}
                    </div>
                    <div className="border-l border-gold/10 pb-2 pl-0 sm:pl-2">
                      <h4 className="font-display text-xl font-semibold text-parchment">{item.title[lang]}</h4>
                      <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-parchment/60">
                        {item.text[lang]}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
