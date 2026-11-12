import { ArrowUp, MapPin, Send } from "lucide-react";
import { useLang } from "../i18n";
import { AetheriaCrest } from "./ui";

export default function Footer() {
  const { t } = useLang();

  const navLinks: [string, string][] = [
    ["#start", t.nav.home],
    ["#akademie", t.nav.academy],
    ["#haeuser", t.nav.houses],
    ["#professoren", t.nav.professors],
    ["#studentenleben", t.nav.studentlife],
    ["#campus", t.nav.campus],
    ["#bewerbung", t.nav.admissions],
    ["#archive", t.nav.archives],
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[560px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[4fr_3fr_3fr_4fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-4">
              <AetheriaCrest className="h-14 w-auto text-gold" />
              <div>
                <div className="font-display text-2xl font-bold tracking-[0.28em] text-parchment">{t.brand.name}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gold/80">{t.brand.sub}</div>
              </div>
            </div>
            <p className="font-display mt-5 text-xl italic text-goldsoft/90">{t.brand.motto}</p>
            <p className="mt-4 max-w-xs text-[12px] leading-relaxed text-parchment/45">{t.footer.note}</p>
          </div>

          {/* quick nav */}
          <nav aria-label="Footer">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/70">{t.footer.navTitle}</h4>
            <ul className="mt-5 grid grid-cols-1 gap-2.5">
              {navLinks.slice(0, 4).map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[13px] text-parchment/55 transition-colors hover:text-goldsoft">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer 2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/70">{t.footer.acadTitle}</h4>
            <ul className="mt-5 grid grid-cols-1 gap-2.5">
              {navLinks.slice(4).map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[13px] text-parchment/55 transition-colors hover:text-goldsoft">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* visit */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/70">{t.footer.visitTitle}</h4>
            <p className="mt-5 flex items-start gap-2.5 text-[13px] leading-relaxed text-parchment/55">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" aria-hidden="true" />
              {t.footer.address}
            </p>
            <p className="mt-3 flex items-start gap-2.5 text-[12.5px] leading-relaxed text-parchment/45">
              <Send className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/60" aria-hidden="true" />
              {t.footer.travel}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gold/10 pt-7 sm:flex-row">
          <p className="text-center text-[11px] tracking-wide text-parchment/40">
            © 1187–{year} AETHERIA — {t.brand.sub} · {t.footer.rights}
          </p>
          <a
            href="#start"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/70 transition-colors hover:text-gold"
          >
            {t.footer.top}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold">
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
