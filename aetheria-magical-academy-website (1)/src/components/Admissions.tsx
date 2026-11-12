import { useMemo, useState, type FormEvent } from "react";
import { BadgeCheck, CalendarDays, Check, Mail, RotateCcw, Send, ShieldAlert, Sparkles, Stamp } from "lucide-react";
import { useLang } from "../i18n";
import { HOUSES } from "../data";
import { AetheriaCrest, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function Admissions() {
  const { t } = useLang();

  return (
    <section id="bewerbung" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-ink/70 to-midnight" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead chapter={t.admissions.chapter} title={t.admissions.title} sub={t.admissions.sub} />

        <div className="mt-20 grid gap-10 lg:grid-cols-[5fr_6fr]">
          {/* ---------------- left column ---------------- */}
          <div className="space-y-10">
            <Reveal>
              <div className="card p-7">
                <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-goldsoft">
                  <BadgeCheck className="h-5 w-5 text-gold" aria-hidden="true" />
                  {t.admissions.reqTitle}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {t.admissions.reqs.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-parchment/65">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                        <Check className="h-3 w-3 text-gold" aria-hidden="true" />
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card p-7">
                <h3 className="font-display text-2xl font-semibold text-goldsoft">{t.admissions.stepsTitle}</h3>
                <ol className="mt-6 space-y-6">
                  {t.admissions.steps.map(([title, text], i) => (
                    <li key={title} className="group flex gap-5">
                      <span className="font-fraktur flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/[0.07] text-2xl text-gold transition-colors group-hover:bg-gold/20">
                        {["I", "II", "III", "IV"][i]}
                      </span>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-parchment">{title}</h4>
                        <p className="mt-1 text-[13px] leading-relaxed text-parchment/55">{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="card border-gold/30 bg-gradient-to-br from-gold/[0.08] to-transparent p-7">
                <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-goldsoft">
                  <CalendarDays className="h-5 w-5 text-gold" aria-hidden="true" />
                  {t.admissions.yearTitle}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.9] text-parchment/65">{t.admissions.yearText}</p>
              </div>
            </Reveal>
          </div>

          {/* ---------------- form ---------------- */}
          <Reveal delay={120}>
            <ApplicationForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
type Errors = Partial<Record<"name" | "email" | "age" | "why", string>>;

function ApplicationForm() {
  const { t, lang } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [house, setHouse] = useState("");
  const [why, setWhy] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const appNumber = useMemo(
    () => `AETH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    [done],
  );

  const validate = (): boolean => {
    const e: Errors = {};
    if (name.trim().length < 3) e.name = t.admissions.form.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) e.email = t.admissions.form.errors.email;
    const a = parseInt(age, 10);
    if (!Number.isFinite(a) || a < 16 || a > 99) e.age = t.admissions.form.errors.age;
    if (why.trim().length < 20) e.why = t.admissions.form.errors.why;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    if (sending) return;
    if (!validate()) return;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setDone(true);
    }, 1100);
  };

  const reset = () => {
    setDone(false);
    setName("");
    setEmail("");
    setAge("");
    setHouse("");
    setWhy("");
    setErrors({});
  };

  return (
    <div className="card relative h-full !rounded-3xl border-gold/30 bg-gradient-to-b from-charcoal to-ink p-7 shadow-[0_50px_120px_-50px_rgba(0,0,0,1)] sm:p-9">
      {!done ? (
        <>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl font-semibold text-parchment">{t.admissions.form.title}</h3>
              <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-gold/70">{t.admissions.form.sub}</p>
            </div>
            <AetheriaCrest className="h-12 w-auto shrink-0 text-gold/80" />
          </div>

          <form onSubmit={submit} noValidate className="mt-8 space-y-5">
            <div>
              <label htmlFor="f-name" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-parchment/60">
                {t.admissions.form.name}
              </label>
              <input
                id="f-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.admissions.form.namePh}
                className={cn("field", errors.name && "field-error")}
                autoComplete="off"
              />
              {errors.name && <ErrorMsg msg={errors.name} />}
            </div>

            <div className="grid gap-5 sm:grid-cols-[2fr_1fr]">
              <div>
                <label htmlFor="f-email" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-parchment/60">
                  {t.admissions.form.email}
                </label>
                <input
                  id="f-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.admissions.form.emailPh}
                  className={cn("field", errors.email && "field-error")}
                  autoComplete="off"
                />
                {errors.email && <ErrorMsg msg={errors.email} />}
              </div>
              <div>
                <label htmlFor="f-age" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-parchment/60">
                  {t.admissions.form.age}
                </label>
                <input
                  id="f-age"
                  type="number"
                  min={16}
                  max={99}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder={t.admissions.form.agePh}
                  className={cn("field", errors.age && "field-error")}
                />
                {errors.age && <ErrorMsg msg={errors.age} />}
              </div>
            </div>

            <div>
              <label htmlFor="f-house" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-parchment/60">
                {t.admissions.form.house}
              </label>
              <select id="f-house" value={house} onChange={(e) => setHouse(e.target.value)} className="field">
                <option value="">{t.admissions.form.houseAny}</option>
                {HOUSES.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="f-why" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-parchment/60">
                {t.admissions.form.why}
              </label>
              <textarea
                id="f-why"
                rows={4}
                value={why}
                onChange={(e) => setWhy(e.target.value)}
                placeholder={t.admissions.form.whyPh}
                className={cn("field resize-none", errors.why && "field-error")}
              />
              {errors.why && <ErrorMsg msg={errors.why} />}
            </div>

            <button type="submit" className="btn btn-solid w-full justify-center" disabled={sending}>
              {sending ? (
                <>
                  <Stamp className="h-4 w-4 animate-pulse" aria-hidden="true" />
                  {t.admissions.form.sending}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {t.admissions.form.submit}
                </>
              )}
            </button>

            <p className="flex items-start gap-2 text-[11px] leading-relaxed text-parchment/40">
              <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/50" aria-hidden="true" />
              {t.admissions.form.demo}
            </p>
          </form>
        </>
      ) : (
        /* ---------------- confirmation ---------------- */
        <div className="panel-enter flex h-full flex-col items-center justify-center py-6 text-center">
          <div className="relative">
            <span className="absolute inset-0 -m-6 rounded-full bg-gold/15 blur-2xl" aria-hidden="true" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/60 bg-[#3a2f79]/60 shadow-[0_0_40px_rgba(198,166,106,0.35)]">
              <AetheriaCrest className="h-10 w-auto text-gold" />
            </span>
          </div>
          <h3 className="font-display mt-8 text-3xl font-bold text-goldsoft">{t.admissions.form.successTitle}</h3>
          <p className="mt-4 max-w-sm text-[13.5px] leading-[1.9] text-parchment/70">
            {t.admissions.form.successText(name.trim())}
          </p>
          <div className="mt-6 rounded-2xl border border-dashed border-gold/50 bg-gold/[0.06] px-8 py-4">
            <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold/70">
              {t.admissions.form.successNum}
            </div>
            <div className="font-display mt-1 text-2xl font-bold tracking-[0.15em] text-parchment">{appNumber}</div>
          </div>
          <p className="mt-5 flex items-center gap-2 text-[11.5px] text-parchment/45">
            <Mail className="h-3.5 w-3.5 text-gold/60" aria-hidden="true" />
            {t.admissions.form.successNote}
          </p>
          {house && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-goldsoft/80">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {HOUSES.find((h) => h.id === house)?.name}
            </p>
          )}
          <button onClick={reset} className="btn btn-ghost mt-9">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {t.admissions.form.again}
          </button>
          <span className="sr-only">{lang === "de" ? "Bewerbung erfolgreich" : "Application successful"}</span>
        </div>
      )}
    </div>
  );
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <p role="alert" className="mt-1.5 text-[11px] font-medium tracking-wide text-[#d98a97]">
      {msg}
    </p>
  );
}
