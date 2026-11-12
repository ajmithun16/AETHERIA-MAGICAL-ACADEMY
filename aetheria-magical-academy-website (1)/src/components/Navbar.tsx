import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  GraduationCap,
  Info,
  Languages,
  Menu,
  Search,
  Sparkles,
  ScrollText,
  X,
} from "lucide-react";
import { useLang, type Lang } from "../i18n";
import { AetheriaCrest, SoundControl } from "./ui";
import { HOUSES, PROFESSORS } from "../data";
import { cn } from "../utils/cn";

const SECTION_IDS = [
  "start",
  "akademie",
  "haeuser",
  "professoren",
  "studentenleben",
  "campus",
  "bewerbung",
  "archive",
] as const;

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("start");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const discoverRef = useRef<HTMLDivElement | null>(null);

  const links: { id: (typeof SECTION_IDS)[number]; label: string }[] = [
    { id: "start", label: t.nav.home },
    { id: "akademie", label: t.nav.academy },
    { id: "haeuser", label: t.nav.houses },
    { id: "professoren", label: t.nav.professors },
    { id: "studentenleben", label: t.nav.studentlife },
    { id: "campus", label: t.nav.campus },
    { id: "archive", label: t.nav.archives },
    { id: "bewerbung", label: t.nav.admissions },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const probe = window.scrollY + window.innerHeight * 0.38;
      let current: string = "start";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anyOverlay = mobileOpen || searchOpen || infoOpen;
  useEffect(() => {
    document.body.style.overflow = anyOverlay ? "hidden" : "";
    const esc = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMobileOpen(false);
      setSearchOpen(false);
      setInfoOpen(false);
      setDiscoverOpen(false);
    };
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [anyOverlay]);

  useEffect(() => {
    if (!discoverOpen) return;
    const onDown = (e: MouseEvent) => {
      if (discoverRef.current && !discoverRef.current.contains(e.target as Node)) setDiscoverOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [discoverOpen]);

  const jump = (hash: string) => {
    setMobileOpen(false);
    setSearchOpen(false);
    setInfoOpen(false);
    setDiscoverOpen(false);
    window.location.hash = hash;
  };

  const LangSwitch = () => (
    <div
      className="flex items-center overflow-hidden rounded-[3px] border border-gold/50 bg-[#0a0f28]/70"
      role="group"
      aria-label="Language / Sprache"
    >
      <Languages className="ml-2 mr-1 h-3 w-3 text-gold/70" aria-hidden="true" />
      {(["de", "en"] as Lang[]).map((code, i) => (
        <span key={code} className="flex items-center">
          {i > 0 && <span className="h-3 w-px bg-gold/30" aria-hidden="true" />}
          <button
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={cn(
              "px-2 py-1.5 text-[10px] font-semibold tracking-[0.16em] transition-colors",
              lang === code ? "bg-gold/90 text-[#0b1028]" : "text-parchment/60 hover:text-goldsoft",
            )}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );

  const iconBtn =
    "flex h-8 w-8 items-center justify-center rounded-[3px] border border-gold/25 text-parchment/65 transition-colors hover:border-gold/70 hover:text-gold";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* ---------- tier 1 : identity / controls ---------- */}
        <div
          className={cn(
            "border-b border-gold/15 bg-[#080c22]/90 backdrop-blur-xl transition-shadow duration-500",
            scrolled && "shadow-[0_18px_44px_-24px_rgba(0,0,0,0.9)]",
          )}
        >
          <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <a href="#start" className="group flex items-center gap-3" aria-label="AETHERIA">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/55 bg-[#0b1028]">
                <AetheriaCrest className="h-6 w-auto text-gold transition-transform duration-500 group-hover:-rotate-3" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[19px] font-bold tracking-[0.34em] text-parchment">
                  AETHERIA
                </span>
                <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.28em] text-gold/85 sm:text-[8.5px]">
                  {t.brand.sub}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <span className="hidden lg:block">
                <SoundControl />
              </span>
              <LangSwitch />
              <button onClick={() => setSearchOpen(true)} className={cn(iconBtn, "hidden sm:flex")} aria-label={t.nav.search}>
                <Search className="h-3.5 w-3.5" />
              </button>
              <button onClick={() => setInfoOpen(true)} className={cn(iconBtn, "hidden sm:flex")} aria-label={t.nav.info}>
                <Info className="h-3.5 w-3.5" />
              </button>
              <a
                href="#bewerbung"
                className="hidden items-center gap-2 rounded-[3px] border border-gold/60 px-3.5 py-2 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-goldsoft transition-all duration-300 hover:bg-gold hover:text-[#0b1028] md:inline-flex"
              >
                <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                {t.nav.portal}
              </a>
              <button
                className="rounded-[3px] border border-gold/30 p-2 text-parchment transition-colors hover:border-gold/70 hover:text-gold lg:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label={t.nav.menuOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ---------- tier 2 : navigation ---------- */}
        <div className="hidden border-b border-gold/10 bg-[#0a0f2a]/90 backdrop-blur-xl lg:block">
          <div className="mx-auto flex h-[44px] max-w-[1440px] items-center justify-between px-8">
            <nav className="flex items-center gap-6 xl:gap-7" aria-label="Hauptnavigation">
              {links.map((l) => (
                <a key={l.id} href={`#${l.id}`} className={cn("navrow-link", active === l.id && "active")}>
                  {l.label}
                </a>
              ))}
            </nav>

            <div ref={discoverRef} className="relative">
              <button
                onClick={() => setDiscoverOpen((v) => !v)}
                aria-expanded={discoverOpen}
                aria-haspopup="true"
                className="flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.24em] text-gold/85 transition-colors hover:text-goldsoft"
              >
                {t.nav.discover}
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", discoverOpen && "rotate-180")} />
              </button>
              {discoverOpen && (
                <div className="panel-enter absolute right-0 top-9 w-72 overflow-hidden rounded-md border border-gold/30 bg-[#0b1028]/97 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.95)] backdrop-blur-xl">
                  <p className="border-b border-gold/15 px-4 py-2.5 text-[8.5px] font-semibold uppercase tracking-[0.28em] text-gold/60">
                    {t.nav.quickLinks}
                  </p>
                  {[
                    { icon: Sparkles, label: t.quiz.title, href: "haeuser" },
                    { icon: ScrollText, label: t.nav.archives, href: "archive" },
                    { icon: GraduationCap, label: t.credits.title, href: "credits" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.href}
                        onClick={() => jump(item.href)}
                        className="group flex w-full items-center gap-3 px-4 py-3 text-left text-[12px] text-parchment/70 transition-colors hover:bg-gold/10 hover:text-goldsoft"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-gold/70" aria-hidden="true" />
                        <span className="flex-1">{item.label}</span>
                        <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ---------- mobile drawer ---------- */}
      <div
        className={cn(
          "fixed inset-0 z-[70] flex flex-col bg-[#070a1c]/95 backdrop-blur-2xl transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.menuOpen}
      >
        <div className="flex h-[76px] items-center justify-between border-b border-gold/15 px-5">
          <div className="flex items-center gap-3">
            <AetheriaCrest className="h-7 w-auto text-gold" />
            <span className="font-display text-[17px] font-bold tracking-[0.3em] text-parchment">AETHERIA</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label={t.nav.menuClose}
            className="rounded-[3px] border border-gold/30 p-2 text-parchment hover:border-gold/70 hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-0.5 overflow-y-auto px-7 py-6" aria-label="Mobile Navigation">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setMobileOpen(false)}
              className="group flex items-baseline justify-between border-b border-gold/10 py-3"
            >
              <span className="font-display text-2xl font-semibold text-parchment transition-colors group-hover:text-gold">
                {l.label}
              </span>
              <span className="font-fraktur text-sm text-gold/40">{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="#bewerbung" onClick={() => setMobileOpen(false)} className="btn-hero btn-hero-solid flex-1">
              {t.nav.portal}
            </a>
            <SoundControl />
          </div>
        </nav>
      </div>

      {/* ---------- search overlay ---------- */}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} onNavigate={jump} />}

      {/* ---------- about overlay ---------- */}
      {infoOpen && (
        <div className="fade-enter fixed inset-0 z-[85] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={t.nav.info}>
          <div className="absolute inset-0 bg-[#05081a]/85 backdrop-blur-md" onClick={() => setInfoOpen(false)} />
          <div className="modal-enter relative w-full max-w-lg rounded-xl border border-gold/30 bg-gradient-to-b from-charcoal to-[#080c22] p-8 shadow-[0_60px_140px_-40px_rgba(0,0,0,1)]">
            <button
              onClick={() => setInfoOpen(false)}
              aria-label={t.nav.close}
              className="absolute right-4 top-4 rounded-full border border-gold/25 p-2 text-parchment/70 hover:border-gold/70 hover:text-gold"
            >
              <X className="h-4 w-4" />
            </button>
            <AetheriaCrest className="h-12 w-auto text-gold" />
            <h2 className="font-display mt-5 text-2xl font-semibold text-parchment">{t.nav.info}</h2>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gold/80">{t.brand.motto}</p>
            <p className="mt-5 text-[13px] leading-relaxed text-parchment/65">{t.footer.note}</p>
            <p className="mt-4 border-l-2 border-gold/40 pl-3 text-[12px] leading-relaxed text-parchment/50">
              {t.footer.address}
            </p>
            <button onClick={() => setInfoOpen(false)} className="btn-hero mt-7 w-full">
              {t.nav.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
function SearchOverlay({ onClose, onNavigate }: { onClose: () => void; onNavigate: (hash: string) => void }) {
  const { t, lang } = useLang();
  const [q, setQ] = useState("");

  const entries: { title: string; meta: string; href: string }[] = [
    { title: t.nav.home, meta: t.brand.sub, href: "start" },
    { title: t.nav.academy, meta: t.academy.sub, href: "akademie" },
    { title: t.nav.houses, meta: t.houses.sub, href: "haeuser" },
    { title: t.nav.professors, meta: t.professors.sub, href: "professoren" },
    { title: t.nav.studentlife, meta: t.studentlife.dress.title, href: "studentenleben" },
    { title: t.nav.campus, meta: t.campus.hint, href: "campus" },
    { title: t.nav.archives, meta: t.archives.title, href: "archive" },
    { title: t.nav.admissions, meta: t.admissions.title, href: "bewerbung" },
    ...HOUSES.map((h) => ({ title: h.name, meta: h.animal[lang], href: "haeuser" })),
    ...PROFESSORS.map((p) => ({ title: p.name, meta: p.subject[lang], href: "professoren" })),
  ];

  const needle = q.trim().toLowerCase();
  const results = needle ? entries.filter((e) => `${e.title} ${e.meta}`.toLowerCase().includes(needle)).slice(0, 8) : entries.slice(0, 8);

  return (
    <div className="fade-enter fixed inset-0 z-[85] flex items-start justify-center p-4 pt-24 sm:pt-32" role="dialog" aria-modal="true" aria-label={t.nav.searchTitle}>
      <div className="absolute inset-0 bg-[#05081a]/85 backdrop-blur-md" onClick={onClose} />
      <div className="modal-enter relative w-full max-w-xl overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-b from-charcoal to-[#080c22] shadow-[0_60px_140px_-40px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-3 border-b border-gold/15 px-5 py-4">
          <Search className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.nav.searchPh}
            className="w-full bg-transparent text-sm text-parchment outline-none placeholder:text-parchment/35"
            aria-label={t.nav.searchPh}
          />
          <button onClick={onClose} aria-label={t.nav.close} className="rounded p-1 text-parchment/50 hover:text-gold">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-[52vh] overflow-y-auto">
          {results.length === 0 ? (
            <p className="px-5 py-6 text-[12.5px] text-parchment/50">{t.nav.searchEmpty}</p>
          ) : (
            results.map((r, i) => (
              <button
                key={`${r.href}-${r.title}-${i}`}
                onClick={() => onNavigate(r.href)}
                className="group flex w-full items-center gap-3 border-b border-gold/10 px-5 py-3 text-left transition-colors last:border-0 hover:bg-gold/10"
              >
                <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" aria-hidden="true" />
                <span className="flex-1">
                  <span className="block font-display text-[15px] font-semibold text-parchment">{r.title}</span>
                  <span className="mt-0.5 block truncate text-[10.5px] uppercase tracking-[0.14em] text-parchment/40">
                    {r.meta}
                  </span>
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
