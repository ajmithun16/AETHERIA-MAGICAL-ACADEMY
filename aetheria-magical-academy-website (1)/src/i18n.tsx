import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "de" | "en";

/* ------------------------------------------------------------------ */
/*  GERMAN — the default voice of the academy                          */
/* ------------------------------------------------------------------ */
const de = {
  brand: {
    name: "AETHERIA",
    sub: "Die Akademie der Magie",
    motto: "Wissen. Mut. Magie.",
  },
  nav: {
    home: "Startseite",
    academy: "Die Akademie",
    houses: "Die Häuser",
    professors: "Professoren",
    studentlife: "Studentenleben",
    campus: "Campus",
    admissions: "Bewerbung",
    archives: "Archive",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    portal: "Schülerportal",
    search: "Suchen",
    searchTitle: "Die Akademie durchsuchen",
    searchPh: "Suche nach Orten, Häusern, Professoren …",
    searchEmpty: "Keine Treffer gefunden. Versuche es mit „Bibliothek“ oder „Drachenfels“.",
    info: "Über das Projekt",
    close: "Schließen",
    discover: "Entdecken",
    quickLinks: "Schnellzugriff",
  },
  sound: {
    label: "Der Klang der Akademie",
    on: "Klang einschalten",
    off: "Klang ausschalten",
    volume: "Lautstärke",
  },
  hero: {
    eyebrow: "Bayerische Alpen · Gegründet 1187",
    intro:
      "Verborgen zwischen den majestätischen Gipfeln der Bayerischen Alpen liegt Aetheria – eine Akademie, in der Wissen auf Magie trifft und das Unmögliche Wirklichkeit wird.",
    cta1: "Die Akademie entdecken",
    cta2: "Jetzt bewerben",
    scroll: "Hinabsteigen",
    stats: [
      { n: 1187, plain: true, label: "Gegründet" },
      { n: 4, plain: true, label: "Häuser der Akademie" },
      { n: 1200, plain: false, label: "Studenten" },
    ],
  },
  academy: {
    chapter: "Kapitel I · Die Akademie",
    title: "Eine Legende aus Stein und Sternenlicht",
    sub: "Geschichte und Geheimnisse der ältesten Akademie Europas",
    historyTitle: "Die Geschichte",
    intro1:
      "Verborgen in einem Seitental der Bayerischen Alpen, dort, wo sich der Aethersee an die schroffen Wände des Hohenkamm schmiegt, erhebt sich seit über acht Jahrhunderten eine Burg, die auf keiner Landkarte verzeichnet ist. Im Jahr 1187 gründete die Gelehrte und Erzmagierin Walburga von Hohenfels hier eine Schule – an einem Ort, an dem sich nach alter Überlieferung die unsichtbaren Kraftlinien der Welt kreuzen.",
    intro2:
      "Was als ein einzelner Wachtturm über dem See begann, wuchs zu einem Schloss aus sieben Höfen, vier Türmen und mehr als vierhundert Räumen. Generationen von Baumeistern, Astronomen und Alchemisten haben Aetheria geformt – und jede Generation hat ihre eigenen Geheimnisse im Mauerwerk hinterlassen.",
    quote: "„Wissen ohne Mut ist ein verschlossenes Buch. Mut ohne Magie ein unbeschriebenes.“",
    quoteBy: "Walburga von Hohenfels · Gründerin der Akademie",
    timelineTitle: "Chronik der Akademie",
    factsTitle: "Das Schloss in Zahlen",
    secretsTitle: "Was die Mauern verbergen",
    secrets: [
      ["Mondbibliothek", "Sieben Etagen unter der Erde – manche Bücher sind nur bei Vollmond lesbar."],
      ["Astronomieturm", "Ein Observatorium aus dem Jahr 1311, dessen große Linse bis heute kein Glasbläser erklären kann."],
      ["Alchemielabore", "Kupferkessel und Bergkristallphiolen, älter als manches Königreich."],
      ["Wandernde Treppen", "143 Treppen verbinden das Schloss – einige davon ändern nachts ihre Richtung."],
      ["Das Versiegelte Archiv", "Vier Schlüssel, vier Häuser, ein Eid. Nur auserwählte Studenten treten ein."],
    ],
  },
  houses: {
    chapter: "Kapitel II · Die Häuser",
    title: "Vier Banner über dem Aethertal",
    sub: "Seit dem Jahr 1203 trägt jede Studentin und jeder Student die Farben eines der vier Häuser – eine Gemeinschaft, ein Wappentier, ein Versprechen.",
    values: "Werte",
    animal: "Wappentier",
    colours: "Farben",
    founder: "Hausgründer",
    quizCta: "Welches Haus passt zu dir?",
    quizNote:
      "Das Zeremonielle Spiegelverfahren der Akademie: Fünf Fragen, ehrlich beantwortet – und der Spiegel zeigt dein Haus.",
  },
  quiz: {
    title: "Das Zeremonielle Spiegelverfahren",
    question: "Frage",
    of: "von",
    next: "Weiter",
    result: "Der Spiegel hat gesprochen",
    yourHouse: "Dein Haus",
    again: "Erneut versuchen",
    close: "Verfahren schließen",
  },
  professors: {
    chapter: "Kapitel III · Die Professoren",
    title: "Meister ihrer Fächer",
    sub: "Zwölf außergewöhnliche Persönlichkeiten lehren an Aetheria – jede Lehrstuhlgeschichte eine Legende für sich.",
    meet: "Professor kennenlernen",
    portrayed: "Gespielt von",
    from: "Bekannt aus",
    since: "An Aetheria berufen",
    specialty: "Akademischer Schwerpunkt",
    bio: "Aus der Chronik der Fakultät",
    quote: "Leitspruch des Lehrstuhls",
    close: "Profil schließen",
  },
  food: {
    open: "Entdecken",
    meaning: "Englisch",
    tradition: "Tradition & Zubereitung",
    fact: "Aus der Akademieküche",
    close: "Schließen",
  },
  fest: {
    celebrate: "So wird gefeiert",
    meaning: "Tradition & Bedeutung",
    aetheria: "Magie des Festes",
    close: "Schließen",
  },
  studentlife: {
    chapter: "Kapitel IV · Das Studentenleben",
    title: "Leben zwischen Talar und Tracht",
    sub: "Roben mit Hirschhornknöpfen, dampfende Spätzle in der Großen Halle, Laternen über dem See – das Leben in Aetheria ist bayerisch geerdet und magisch erhoben.",
    dress: {
      title: "Die Gewandung der Akademie",
      sub: "Eleganz statt Kostüm – eine Gewandung, die acht Jahrhunderte Tradition atmet.",
      captionMain: "Die feierliche Gewandung · Westflügel",
      captionDetail: "Hausfarben & Insignien",
      items: [
        ["Die Akademierobe", "Schwerer Talar aus dunkelblauer Alpenwolle, gefüttert in den Hausfarben, mit gesticktem Aetheria-Wappen über dem Herzen."],
        ["Die Trachtenweste", "Weißes Hemd und dunkle Weste mit Hirschhornknöpfen – eine Hommage an den bayerischen Janker."],
        ["Das Hausabzeichen", "Ein vergoldeter Anstecker in Gestalt des Wappentiers, verliehen beim Seefest des ersten Jahres."],
        ["Der Winterumhang", "Gefütterter Reiseumhang mit Silberkettenspange, dazu Lederhandschuhe und die berühmte Aetheria-Wollmütze – wer in den Alpen zaubert, zaubert auch bei minus zwölf."],
        ["Der Sommertalar", "Leichtes Leinen für die Sonnensemonate, gern getragen auf den Touren des Alpenvereins."],
      ],
      note: "Die Gewandung ist bei Zeremonien Pflicht – und an kalten Bergmorgen freiwillig geliebt.",
    },
    dining: {
      title: "Die Große Halle – Ein Fest für alle Sinne",
      sub: "Unter der verzauberten Decke der Halle kocht die Akademieküche nach bayerischer Tradition: ehrlich, deftig, unvergesslich. Berühre eine Speise, um ihre Geschichte zu lesen.",
      drinks: "Aus der Schenkstube",
    },
    fest: {
      title: "Feste & Traditionen",
      sub: "Der akademische Kalender folgt den Jahreszeiten der Alpen – und keinem Fest fehlt es an Licht, Musik und Magie. Tippe auf ein Fest, um mehr zu erfahren.",
    },
    act: {
      title: "Vereine & Aktivitäten",
      sub: "Zwischen Vorlesung und Mondschein bleibt keine Langeweile.",
    },
  },
  campus: {
    chapter: "Kapitel V · Der Campus",
    title: "Ein Labyrinth aus Licht",
    sub: "Eine Karte der Akademie, wie sie die Kartographen von 1741 zeichneten – jeder Punkt ein Ort, jeder Ort eine Geschichte.",
    hint: "Tippe auf die goldenen Punkte",
    explore: "Ziehen zum Verschieben · Scrollen zum Zoomen",
    zoomIn: "Karte vergrößern",
    zoomOut: "Karte verkleinern",
    resetView: "Gesamtansicht",
    detail: "Verborgenes Detail",
    doing: "Was hier geschieht",
    lore: "Aus der Chronik",
    lvl: "Ebene",
  },
  admissions: {
    chapter: "Kapitel VI · Die Bewerbung",
    title: "Deine Reise beginnt hier.",
    sub: "Aetheria sucht keine Perfektion. Aetheria sucht Charakter: einen aufgeweckten Geist, ein unerschrockenes Herz und eine Hand, die nach den Sternen greift.",
    reqTitle: "Zulassungsvoraussetzungen",
    reqs: [
      "Mindestalter 16 Jahre – Ausnahmen bei außergewöhnlicher Begabung",
      "Abgeschlossene Schulbildung oder vergleichbare Befähigung",
      "Ein aufgeweckter Geist und ein unerschrockenes Herz",
      "Empfehlung eines Paten aus einem der vier Häuser (erwünscht, nicht erforderlich)",
    ],
    stepsTitle: "Der Weg zur Aufnahme",
    steps: [
      ["Bewerbung einreichen", "Bis zum 31. Mai über das Portal der Akademie – Eulenpost wird ebenfalls akzeptiert."],
      ["Prüfung der Vier Elemente", "Schriftlich (Wissen), praktisch (Mut), arkan (Magie) – drei Tage im Hochsommer."],
      ["Gespräch mit dem Wappen", "Ein ehrliches Gespräch unter den Augen der vier Gründer. Es ist strenger, aber gerechter als jede Kommission."],
      ["Die Entscheidung", "Per Eulenpost binnen drei Wochen. Unsere Eulen finden jeden Briefkasten – sogar deinen."],
    ],
    yearTitle: "Das akademische Jahr",
    yearText:
      "Das Akademische Jahr beginnt am 1. September mit dem Seefest und dem feierlichen Anlegen der Roben. Es endet im Juli mit der Großen Abschlusszeremonie. Zwölf Monate, vier Jahreszeiten, tausend Möglichkeiten.",
    form: {
      title: "Bewerbungsbogen",
      sub: "Demonstrationsformular der Akademie",
      name: "Vollständiger Name",
      namePh: "z. B. Lena Bergmann",
      email: "E-Mail-Adresse",
      emailPh: "name@beispiel.de",
      age: "Alter",
      agePh: "z. B. 18",
      house: "Bevorzugtes Haus",
      houseAny: "Keine Präferenz – das Wappen entscheidet",
      why: "Warum möchtest du nach Aetheria?",
      whyPh: "Erzähle uns von deinem Funken …",
      submit: "Bewerbung absenden",
      sending: "Wird versiegelt …",
      demo: "Dies ist ein Demonstrationsformular. Es werden keine Daten gespeichert, übertragen oder an Dritte weitergegeben.",
      errors: {
        name: "Bitte gib deinen vollständigen Namen an.",
        email: "Bitte gib eine gültige E-Mail-Adresse ein.",
        age: "Bitte gib ein Alter zwischen 16 und 99 an.",
        why: "Erzähl uns etwas mehr – mindestens 20 Zeichen.",
      },
      successTitle: "Aufnahmebescheid (vorläufig)",
      successText: (name: string) =>
        `${name}, deine Bewerbung wurde entgegengenommen und versiegelt. Die Eulenpost ist unterwegs. Deine Bewerbungsnummer lautet:`,
      successNum: "Bewerbungsnummer",
      successNote: "Bewahre diese Nummer sorgfältig auf – du wirst sie beim Seefest brauchen.",
      again: "Neue Bewerbung stellen",
    },
  },
  archives: {
    chapter: "Kapitel VII · Die Geheimen Archive",
    title: "Die Legende vom fünften Turm",
    sub: "Vier Türme trägt das Schloss in alle Winde. Der Grundriss von 1187 zeichnet einen fünften.",
    p1: "Im Originalplan der Akademie, verwahrt unter Glas in der Mondbibliothek, zeichnete Walburgas eigene Hand einen fünften Turm – dort, wo heute die Mauer des Ostgartens steht. Kein Stein wurde je gefunden, keine Chronik erwähnt sein Verschwinden.",
    p2: "Ein Manuskriptfragment mit der Signatur MCDXCII spricht von einer Kammer ohne Schloss, einem Symbol aus fünf Strahlen und einem Licht, das „nur den Fragenden“ leuchte. Das Kollegium schweigt. Die Häuser spekulieren. Und jedes Jahr verschwindet ein mutiger Neuling für genau eine Nacht – und kehrt schweigend, lächelnd zurück.",
    revealBtn: "Das Geheimnis entdecken",
    hideBtn: "Das Geheimnis wieder versiegeln",
    fragTitle: "Fragment MCDXCII · transkribiert 1994",
    fragNo: "Archivsignatur AETH-V/1492",
    riddle: [
      "Fünf Türme trug der Grundriss einst,",
      "vier stehen heut im Licht.",
      "Der fünfte schläft, in Stein gehüllt –",
      "er wartet auf Gesicht.",
    ],
    outro:
      "Das größte Geheimnis Aetherias wurde nie hinter Mauern verborgen. Es wartet – in jenen, die mutig genug sind, Fragen zu stellen.",
    sealed: "Versiegelt · Zutritt nur für die Fragenden",
  },
  credits: {
    eyebrow: "Projekt-Credits · Konzept, Design & Entwicklung",
    title: "THE CREATORS",
    sub: "Erschaffen mit Fantasie, Kreativität und einem Hauch von Magie.",
  },
  footer: {
    navTitle: "Navigation",
    acadTitle: "Die Akademie",
    visitTitle: "Anreise",
    address: "Aetheria 1 · 83471 Aethersee · Bayerische Alpen, Deutschland",
    travel: "Mit der Eule bis Maurach am Aethersee, dann dem Nebelpfad folgen. Wer gesucht wird, findet den Weg.",
    note: "Aetheria ist ein fiktives Hochschulprojekt. Lehrstühle, Orte und Geschichten sind frei erfunden; die Gastprofessuren dienen der Freude am Erzählen.",
    rights: "Alle Rechte vorbehalten.",
    top: "Nach oben",
  },
};

export type Dict = typeof de;

/* ------------------------------------------------------------------ */
/*  ENGLISH — the guest tongue of the academy                          */
/* ------------------------------------------------------------------ */
const en: Dict = {
  brand: {
    name: "AETHERIA",
    sub: "The Academy of Magic",
    motto: "Knowledge. Courage. Magic.",
  },
  nav: {
    home: "Home",
    academy: "The Academy",
    houses: "The Houses",
    professors: "Professors",
    studentlife: "Student Life",
    campus: "Campus",
    admissions: "Admissions",
    archives: "Archives",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    portal: "Student Portal",
    search: "Search",
    searchTitle: "Search the Academy",
    searchPh: "Search places, houses, professors …",
    searchEmpty: "No results found. Try “Library” or “Drachenfels”.",
    info: "About the project",
    close: "Close",
    discover: "Discover",
    quickLinks: "Quick access",
  },
  sound: {
    label: "The sound of the Academy",
    on: "Turn sound on",
    off: "Turn sound off",
    volume: "Volume",
  },
  hero: {
    eyebrow: "Bavarian Alps · Founded 1187",
    intro:
      "Hidden among the majestic peaks of the Bavarian Alps lies Aetheria – an academy where knowledge meets magic and the impossible becomes reality.",
    cta1: "Discover the Academy",
    cta2: "Apply now",
    scroll: "Descend",
    stats: [
      { n: 1187, plain: true, label: "Founded" },
      { n: 4, plain: true, label: "Houses of the Academy" },
      { n: 1200, plain: false, label: "Students" },
    ],
  },
  academy: {
    chapter: "Chapter I · The Academy",
    title: "A legend of stone and starlight",
    sub: "The history and mysteries of Europe's oldest academy",
    historyTitle: "The History",
    intro1:
      "Hidden in a side valley of the Bavarian Alps, where the Aethersee nestles against the rugged walls of the Hohenkamm, a castle has stood for more than eight centuries – one that appears on no map. In the year 1187, the scholar and arch-enchantress Walburga von Hohenfels founded a school here, in a place where, according to ancient lore, the invisible ley lines of the world intersect.",
    intro2:
      "What began as a single watchtower above the lake grew into a castle of seven courtyards, four towers and more than four hundred rooms. Generations of master builders, astronomers and alchemists have shaped Aetheria – and every generation has left its own secrets in the masonry.",
    quote: "“Knowledge without courage is a closed book. Courage without magic, an unwritten one.”",
    quoteBy: "Walburga von Hohenfels · Founder of the Academy",
    timelineTitle: "Chronicle of the Academy",
    factsTitle: "The castle in numbers",
    secretsTitle: "What the walls conceal",
    secrets: [
      ["The Moon Library", "Seven floors beneath the earth – some books can only be read by full moon."],
      ["The Astronomy Tower", "An observatory from the year 1311 whose great lens no glassblower can explain to this day."],
      ["Alchemy laboratories", "Copper cauldrons and rock-crystal phials, older than many a kingdom."],
      ["Wandering staircases", "143 staircases connect the castle – some of them change direction at night."],
      ["The Sealed Archive", "Four keys, four houses, one oath. Only chosen students may enter."],
    ],
  },
  houses: {
    chapter: "Chapter II · The Houses",
    title: "Four banners above the Aether valley",
    sub: "Since the year 1203, every student has worn the colours of one of the four houses – a community, a heraldic beast, a promise.",
    values: "Values",
    animal: "Heraldic beast",
    colours: "Colours",
    founder: "House founder",
    quizCta: "Which house suits you?",
    quizNote:
      "The Academy's Ceremonial Mirror Sorting: five questions, answered honestly – and the mirror will show you your house.",
  },
  quiz: {
    title: "The Ceremonial Mirror Sorting",
    question: "Question",
    of: "of",
    next: "Continue",
    result: "The mirror has spoken",
    yourHouse: "Your house",
    again: "Try again",
    close: "Close the ceremony",
  },
  professors: {
    chapter: "Chapter III · The Professors",
    title: "Masters of their disciplines",
    sub: "Twelve extraordinary personalities teach at Aetheria – each chair a legend of its own.",
    meet: "Meet the professor",
    portrayed: "Portrayed by",
    from: "Known from",
    since: "Appointed to Aetheria",
    specialty: "Academic specialty",
    bio: "From the faculty chronicle",
    quote: "Motto of the chair",
    close: "Close profile",
  },
  food: {
    open: "Discover",
    meaning: "English",
    tradition: "Tradition & preparation",
    fact: "From the Academy kitchen",
    close: "Close",
  },
  fest: {
    celebrate: "How it is celebrated",
    meaning: "Tradition & significance",
    aetheria: "The magic of the feast",
    close: "Close",
  },
  studentlife: {
    chapter: "Chapter IV · Student Life",
    title: "Life between gown and Tracht",
    sub: "Robes with stag-horn buttons, steaming Spätzle in the Great Hall, lanterns above the lake – life at Aetheria is Bavarian at heart and magical in spirit.",
    dress: {
      title: "The Academy regalia",
      sub: "Elegance rather than costume – regalia that breathes eight centuries of tradition.",
      captionMain: "The ceremonial regalia · West Wing",
      captionDetail: "House colours & insignia",
      items: [
        ["The Academy robe", "A heavy gown of midnight-blue alpine wool, lined in the house colours, the Aetheria crest embroidered above the heart."],
        ["The Tracht waistcoat", "A white shirt and dark waistcoat with stag-horn buttons – a tribute to the Bavarian Janker."],
        ["The house badge", "A gilded pin in the shape of the heraldic beast, awarded at the Lake Festival of the first year."],
        ["The winter cloak", "A lined travelling cloak with a silver chain clasp, leather gloves and the famous Aetheria woollen cap – whoever casts spells in the Alps casts them at twelve below."],
        ["The summer gown", "Light linen for the sunny months, gladly worn on the Alpine Society's expeditions."],
      ],
      note: "The regalia is mandatory at ceremonies – and voluntarily beloved on cold mountain mornings.",
    },
    dining: {
      title: "The Great Hall – A feast for all senses",
      sub: "Beneath the enchanted ceiling of the hall, the Academy kitchen cooks in the Bavarian tradition: honest, hearty, unforgettable. Touch a dish to read its story.",
      drinks: "From the taproom",
    },
    fest: {
      title: "Festivals & traditions",
      sub: "The academic calendar follows the seasons of the Alps – and no celebration lacks light, music and magic. Tap a festival to learn more.",
    },
    act: {
      title: "Clubs & activities",
      sub: "Between lectures and moonlight, boredom does not stand a chance.",
    },
  },
  campus: {
    chapter: "Chapter V · The Campus",
    title: "A labyrinth of light",
    sub: "A map of the Academy as the cartographers drew it in 1741 – every point a place, every place a story.",
    hint: "Tap the golden points",
    explore: "Drag to pan · Scroll to zoom",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    resetView: "Full view",
    detail: "Hidden detail",
    doing: "What happens here",
    lore: "From the chronicle",
    lvl: "Level",
  },
  admissions: {
    chapter: "Chapter VI · Admissions",
    title: "Your journey begins here.",
    sub: "Aetheria does not seek perfection. Aetheria seeks character: an awakened mind, an undaunted heart and a hand that reaches for the stars.",
    reqTitle: "Admission requirements",
    reqs: [
      "Minimum age of 16 – exceptions for extraordinary talent",
      "Completed secondary education or an equivalent qualification",
      "An awakened mind and an undaunted heart",
      "A recommendation from a sponsor of one of the four houses (welcome, not required)",
    ],
    stepsTitle: "The path to admission",
    steps: [
      ["Submit your application", "By 31 May via the Academy portal – owl post is equally accepted."],
      ["The Trial of the Four Elements", "Written (knowledge), practical (courage), arcane (magic) – three days in high summer."],
      ["The audience with the Crest", "An honest conversation beneath the eyes of the four founders. Stricter, yet fairer than any committee."],
      ["The decision", "By owl post within three weeks. Our owls find every letterbox – even yours."],
    ],
    yearTitle: "The academic year",
    yearText:
      "The academic year begins on 1 September with the Lake Festival and the ceremonial donning of the robes. It ends in July with the Grand Graduation Ceremony. Twelve months, four seasons, a thousand possibilities.",
    form: {
      title: "Application form",
      sub: "Demonstration form of the Academy",
      name: "Full name",
      namePh: "e.g. Lena Bergmann",
      email: "Email address",
      emailPh: "name@example.com",
      age: "Age",
      agePh: "e.g. 18",
      house: "Preferred house",
      houseAny: "No preference – the Crest decides",
      why: "Why do you want to join Aetheria?",
      whyPh: "Tell us about your spark …",
      submit: "Submit application",
      sending: "Sealing …",
      demo: "This is a demonstration form. No data is stored, transmitted or shared with third parties.",
      errors: {
        name: "Please enter your full name.",
        email: "Please enter a valid email address.",
        age: "Please enter an age between 16 and 99.",
        why: "Tell us a little more – at least 20 characters.",
      },
      successTitle: "Letter of admission (provisional)",
      successText: (name: string) =>
        `${name}, your application has been received and sealed. The owl post is on its way. Your application number is:`,
      successNum: "Application number",
      successNote: "Keep this number safe – you will need it at the Lake Festival.",
      again: "Start a new application",
    },
  },
  archives: {
    chapter: "Chapter VII · The Secret Archives",
    title: "The legend of the fifth tower",
    sub: "Four towers carry the castle into every wind. The plans of 1187 draw a fifth.",
    p1: "In the Academy's original plans, kept under glass in the Moon Library, Walburga's own hand drew a fifth tower – precisely where the East Garden wall stands today. No stone of it has ever been found, and no chronicle mentions its disappearance.",
    p2: "A manuscript fragment signed MCDXCII speaks of a chamber without a lock, a symbol of five rays and a light that shines “only for those who ask”. The faculty stays silent. The houses speculate. And every year a bold newcomer vanishes for exactly one night – returning silent, and smiling.",
    revealBtn: "Discover the secret",
    hideBtn: "Seal the secret again",
    fragTitle: "Fragment MCDXCII · transcribed 1994",
    fragNo: "Archive signature AETH-V/1492",
    riddle: [
      "Five towers the plan once bore,",
      "four stand today in light.",
      "The fifth sleeps on, wrapped in stone –",
      "it waits for one with sight.",
    ],
    outro:
      "Aetheria's greatest secret was never hidden behind walls. It waits – in those bold enough to ask questions.",
    sealed: "Sealed · Entry only for those who ask",
  },
  credits: {
    eyebrow: "Project Credits · Concept, Design & Development",
    title: "THE CREATORS",
    sub: "Crafted with imagination, creativity and a touch of magic.",
  },
  footer: {
    navTitle: "Navigation",
    acadTitle: "The Academy",
    visitTitle: "Getting here",
    address: "Aetheria 1 · 83471 Aethersee · Bavarian Alps, Germany",
    travel: "By owl to Maurach at the Aethersee, then follow the mist path. Those who are sought will find the way.",
    note: "Aetheria is a fictional university project. Chairs, places and stories are invented; the visiting professorships exist for the joy of storytelling.",
    rights: "All rights reserved.",
    top: "Back to top",
  },
};

const dicts: Record<Lang, Dict> = { de, en };

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */
interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const Ctx = createContext<LangCtx>({ lang: "de", setLang: () => {}, t: de });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "de";
    const saved = window.localStorage.getItem("aetheria-lang");
    return saved === "en" || saved === "de" ? (saved as Lang) : "de";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("aetheria-lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "de"
        ? "AETHERIA — Die Akademie der Magie"
        : "AETHERIA — The Academy of Magic";
  }, [lang]);

  return <Ctx.Provider value={{ lang, setLang, t: dicts[lang] }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}
