import {
  FlaskConical,
  Sparkles,
  Droplets,
  Calculator,
  Eye,
  Scale,
  FlameKindling,
  Cpu,
  Flame,
  MoonStar,
  Bird,
  Leaf,
  Wind,
  Swords,
  Telescope,
  BookOpen,
  Mountain,
  Music,
  Drama,
  PartyPopper,
  Snowflake,
  Gift,
  Lightbulb,
  GraduationCap,
  Crown,
  Hourglass,
  Dna,
  type LucideIcon,
} from "lucide-react";

export type L<T = string> = { de: T; en: T };

/* ================================================================== */
/*  HOUSES                                                             */
/* ================================================================== */
export type HouseId = "drachenfels" | "silberwald" | "nachtkraehe" | "gruenquell";

export interface House {
  id: HouseId;
  name: string;
  icon: LucideIcon;
  color: string;
  colorSoft: string;
  latin: string;
  latinDe: L;
  art: string;
  animal: L;
  colours: L;
  founder: L;
  values: L<string[]>;
  desc: L;
  result: L;
}

export const HOUSES: House[] = [
  {
    id: "drachenfels",
    name: "Haus Drachenfels",
    icon: Flame,
    color: "#d4647d",
    colorSoft: "#642d3a",
    latin: "Ignis Ducit",
    latinDe: { de: "„Das Feuer führt.“", en: "“The fire leads.”" },
    art: "/img/house-drachenfels.jpg",
    animal: { de: "Der Drache", en: "The dragon" },
    colours: { de: "Burgunderrot & Gold", en: "Burgundy & gold" },
    founder: { de: "Rittermagier Konrad von Drachenfels", en: "Knight-mage Konrad von Drachenfels" },
    values: {
      de: ["Mut", "Ehrgeiz", "Entschlossenheit", "Führung"],
      en: ["Courage", "Ambition", "Determination", "Leadership"],
    },
    desc: {
      de: "Wer im Haus Drachenfels aufgenommen wird, trägt Feuer im Herzen. Die Drachenfelser stürmen nicht blindlings voran – sie entfachen in anderen den Mut, ihnen zu folgen. Ihre Gemächer liegen am höchsten Punkt des Südturms, dort, wo der Wind am lautesten singt.",
      en: "Those admitted to Drachenfels carry fire in their hearts. They do not charge blindly ahead – they kindle in others the courage to follow. Their chambers lie at the highest point of the South Tower, where the wind sings the loudest.",
    },
    result: {
      de: "Das Feuer hat gewählt: Du gehörst ins Haus Drachenfels – dorthin, wo aus Mut Legenden werden. Steig die Wendeltreppe des Südturms hinauf; die anderen erwarten dich schon am Kamin.",
      en: "The fire has chosen: you belong to House Drachenfels – where courage becomes legend. Climb the spiral stair of the South Tower; the others are already waiting by the hearth.",
    },
  },
  {
    id: "silberwald",
    name: "Haus Silberwald",
    icon: MoonStar,
    color: "#a9bade",
    colorSoft: "#26334f",
    latin: "Lux in Libris",
    latinDe: { de: "„Licht liegt in den Büchern.“", en: "“Light lies within books.”" },
    art: "/img/house-silberwald.jpg",
    animal: { de: "Die Eule", en: "The owl" },
    colours: { de: "Silber & Mitternachtsblau", en: "Silver & midnight blue" },
    founder: { de: "Die Seherin Livia Silberwald", en: "Livia Silberwald the Seer" },
    values: {
      de: ["Intelligenz", "Neugier", "Kreativität", "Weisheit"],
      en: ["Intelligence", "Curiosity", "Creativity", "Wisdom"],
    },
    desc: {
      de: "Silberwald ist das Haus der Fragenden. Hier zählt nicht, wer am lautesten antwortet, sondern wer die beste Frage stellt. Der Gemeinschaftsraum liegt in einer Sternwarte über der Bibliothek – der Zugang ist ein Rätsel, dessen Antwort sich wöchentlich ändert.",
      en: "Silberwald is the house of those who ask. What matters here is not who answers the loudest, but who asks the best question. Its common room sits inside an observatory above the library – the entrance is a riddle whose answer changes every week.",
    },
    result: {
      de: "Der Mond über der Bibliothek hat dich gesehen: Willkommen im Haus Silberwald. Bringe deine Fragen mit – alles andere findet sich in den Regalen.",
      en: "The moon above the library has seen you: welcome to House Silberwald. Bring your questions – everything else is already waiting on the shelves.",
    },
  },
  {
    id: "nachtkraehe",
    name: "Haus Nachtkrähe",
    icon: Bird,
    color: "#b18ae0",
    colorSoft: "#2b2140",
    latin: "Silentium Videt",
    latinDe: { de: "„Das Schweigen sieht.“", en: "“Silence sees.”" },
    art: "/img/house-nachtkraehe.jpg",
    animal: { de: "Die Krähe", en: "The raven" },
    colours: { de: "Schwarz & Dunkelviolett", en: "Black & deep purple" },
    founder: { de: "Die Strategin Morrigan Nachtkrähe", en: "Morrigan Nachtkrähe the Strategist" },
    values: {
      de: ["Geheimnis", "Strategie", "Unabhängigkeit", "Beobachtung"],
      en: ["Mystery", "Strategy", "Independence", "Observation"],
    },
    desc: {
      de: "Nachtkrähen gewinnen Schlachten, bevor sie beginnen. Sie hören zu, wo andere reden, und merken sich, was alle übersehen. Ihre Gänge liegen im Schatten des Nordtrakts – man sagt, man betrete sie nur auf Einladung, und bemerkt die Einladung erst hinterher.",
      en: "The ravens of Nachtkrähe win battles before they begin. They listen where others talk, and they remember what everyone else missed. Their corridors lie in the shadow of the North Wing – it is said you only enter by invitation, and notice the invitation only afterwards.",
    },
    result: {
      de: "Die Krähe hat dich lange beobachtet – und sich für dich entschieden. Haus Nachtkrähe empfängt dich. Sprich wenig. Sieh viel.",
      en: "The raven has watched you for a long time – and it has chosen you. House Nachtkrähe welcomes you. Speak little. See much.",
    },
  },
  {
    id: "gruenquell",
    name: "Haus Grünquell",
    icon: Leaf,
    color: "#7cb894",
    colorSoft: "#294a3a",
    latin: "Radix et Cor",
    latinDe: { de: "„Wurzel und Herz.“", en: "“Root and heart.”" },
    art: "/img/house-gruenquell.jpg",
    animal: { de: "Der Hirsch", en: "The stag" },
    colours: { de: "Waldgrün & Altgold", en: "Forest green & antique gold" },
    founder: { de: "Die Heilerin Brünhild Grünquell", en: "Brünhild Grünquell the Healer" },
    values: {
      de: ["Loyalität", "Geduld", "Güte", "Harmonie mit der Natur"],
      en: ["Loyalty", "Patience", "Kindness", "Harmony with nature"],
    },
    desc: {
      de: "Grünquell ist das Herz der Akademie. Hier wächst langsam, was lange hält: Freundschaften, Kräutergärten und Charaktere. Der Gemeinschaftsraum ist ein Gewächshaus-Atrium am Waldrand, in dem es stets nach Regen und Rosmarin duftet.",
      en: "Grünquell is the heart of the Academy. Here, the things that last grow slowly: friendships, herb gardens and characters. The common room is a greenhouse atrium at the edge of the forest that always smells of rain and rosemary.",
    },
    result: {
      de: "Die Quelle hat deinen Namen geflüstert: Haus Grünquell heißt dich willkommen. Nimm dir Zeit – hier muss niemand eilen, um anzukommen.",
      en: "The spring has whispered your name: House Grünquell welcomes you. Take your time – no one has to hurry here in order to arrive.",
    },
  },
];

/* ================================================================== */
/*  HOUSE QUIZ                                                         */
/* ================================================================== */
export interface QuizQuestion {
  q: L;
  options: { t: L; house: HouseId }[];
}

export const QUIZ: QuizQuestion[] = [
  {
    q: {
      de: "Ein alter, versiegelter Foliant landet vor dir auf dem Tisch. Was tust du?",
      en: "An ancient, sealed folio lands on the table in front of you. What do you do?",
    },
    options: [
      { house: "drachenfels", t: { de: "Ich öffne ihn sofort – Zurückhaltung ist überbewertet.", en: "I open it at once – restraint is overrated." } },
      { house: "silberwald", t: { de: "Ich prüfe zuerst Einband, Siegel und Alter.", en: "First I examine the binding, the seal and its age." } },
      { house: "nachtkraehe", t: { de: "Ich beobachte, wer sonst noch dafür Interesse zeigt.", en: "I watch who else seems interested in it." } },
      { house: "gruenquell", t: { de: "Ich hole meine Freunde – gemeinsam macht es mehr Freude.", en: "I fetch my friends – it is more joyful together." } },
    ],
  },
  {
    q: {
      de: "Wofür würdest du mitten in der Nacht das Bett verlassen?",
      en: "What would make you leave your bed in the middle of the night?",
    },
    options: [
      { house: "nachtkraehe", t: { de: "Ein Geräusch aus dem versiegelten Ostflügel.", en: "A sound from the sealed East Wing." } },
      { house: "gruenquell", t: { de: "Ein Freund, der mich braucht.", en: "A friend who needs me." } },
      { house: "drachenfels", t: { de: "Ein Duell bei Mondlicht – ausgemacht ist ausgemacht.", en: "A duel by moonlight – agreed is agreed." } },
      { house: "silberwald", t: { de: "Ein seltenes Sternbild über dem Astronomieturm.", en: "A rare constellation above the Astronomy Tower." } },
    ],
  },
  {
    q: {
      de: "Welche Eigenschaft schätzt du an dir am meisten?",
      en: "Which quality do you value most in yourself?",
    },
    options: [
      { house: "gruenquell", t: { de: "Treue", en: "Loyalty" } },
      { house: "silberwald", t: { de: "Weisheit", en: "Wisdom" } },
      { house: "drachenfels", t: { de: "Entschlossenheit", en: "Determination" } },
      { house: "nachtkraehe", t: { de: "Scharfsinn", en: "Shrewdness" } },
    ],
  },
  {
    q: {
      de: "Die Akademie schenkt dir einen Gegenstand. Welchen wählst du?",
      en: "The Academy offers you one gift. Which do you choose?",
    },
    options: [
      { house: "silberwald", t: { de: "Einen silbernen Kompass, der immer zur Wahrheit zeigt.", en: "A silver compass that always points to the truth." } },
      { house: "drachenfels", t: { de: "Ein flammengehärtetes Schwert der Gründerzeit.", en: "A flame-hardened sword from the founders' age." } },
      { house: "nachtkraehe", t: { de: "Einen Umhang, der Schatten trägt statt Falten.", en: "A cloak that wears shadows instead of folds." } },
      { house: "gruenquell", t: { de: "Einen Samen des Ewigen Hains, der überall wurzelt.", en: "A seed of the Eternal Grove that roots anywhere." } },
    ],
  },
  {
    q: {
      de: "Was bedeutet Erfolg für dich?",
      en: "What does success mean to you?",
    },
    options: [
      { house: "nachtkraehe", t: { de: "Ein Geheimnis für die richtige Zeit bewahren.", en: "Keeping a secret for the right moment." } },
      { house: "drachenfels", t: { de: "Andere anführen, wenn niemand sonst den ersten Schritt wagt.", en: "Leading others when no one else dares the first step." } },
      { house: "gruenquell", t: { de: "Etwas bewirken, das noch gut ist, wenn ich längst fort bin.", en: "Creating something good that outlasts me." } },
      { house: "silberwald", t: { de: "Die Welt ein Stück besser verstehen als gestern.", en: "Understanding the world a little better than yesterday." } },
    ],
  },
];

/* ================================================================== */
/*  PROFESSORS                                                         */
/* ================================================================== */
export interface Professor {
  id: string;
  name: string;
  subject: L;
  portrayed?: string;
  film: L;
  since: string;
  icon: LucideIcon;
  img: string;
  imgPos?: string;
  imgAlt: L;
  intro: L;
  specialty: L;
  bio: L;
  quote: L;
}

export const PROFESSORS: Professor[] = [
  {
    id: "white",
    name: "Prof. Dr. Walter White",
    subject: { de: "Chemie", en: "Chemistry" },
    portrayed: "Bryan Cranston",
    film: { de: "Breaking Bad", en: "Breaking Bad" },
    since: "2012",
    icon: FlaskConical,
    img: "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
    imgAlt: { de: "Walter White mit seiner ikonischen Brille", en: "Walter White wearing his iconic glasses" },
    intro: {
      de: "Ein brillanter Chemiker mit außergewöhnlichem Wissen über chemische Reaktionen und Molekularstrukturen. Sein Unterricht ist anspruchsvoll und seine Experimente sind unvergesslich.",
      en: "A brilliant chemist with an extraordinary command of chemical reactions and molecular structures. His teaching is demanding, and his experiments are unforgettable.",
    },
    specialty: { de: "Chemische Reaktionen und Molekularchemie", en: "Chemical reactions and molecular chemistry" },
    bio: {
      de: "Nach einer bemerkenswerten – von den Chronisten nur andeutungsweise erwähnten – Laufbahn in Albuquerque fand Walter White an Aetheria, was er stets gesucht hatte: ein Labor ohne Kompromisse. Unter seiner Leitung wurde aus dem alten Alchemietrakt des Ostflügels das modernste Experimentalinstitut der Akademie. Seine Studenten lernen, dass eine Reaktion nur so gut ist wie ihre Vorbereitung – und dass die Schutzbrille keine Stilfrage ist.",
      en: "After a remarkable career in Albuquerque – which the chroniclers mention only in whispers – Walter White found at Aetheria what he had always sought: a laboratory without compromise. Under his direction, the old alchemy wing became the Academy's most advanced experimental institute. His students learn that a reaction is only ever as good as its preparation – and that safety goggles are not a matter of style.",
    },
    quote: {
      de: "„Chemie ist die Wissenschaft der Veränderung. Ich erwarte Präzision – in jedem Milliliter.“",
      en: "“Chemistry is the study of change. I expect precision – down to the last millilitre.”",
    },
  },
  {
    id: "stark",
    name: "Prof. Tony Stark",
    subject: { de: "Physik", en: "Physics" },
    portrayed: "Robert Downey Jr.",
    film: { de: "Iron Man / Marvel", en: "Iron Man / Marvel" },
    since: "2016",
    icon: Cpu,
    img: "https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg",
    imgAlt: { de: "Tony Stark", en: "Tony Stark" },
    intro: {
      de: "Ein genialer Erfinder und Physiker, der die Grenzen von Technologie und Wissenschaft neu definiert. Seine Vorlesungen verbinden theoretische Physik mit futuristischen Erfindungen.",
      en: "A genius inventor and physicist who redefines the boundaries of technology and science. His lectures connect theoretical physics with futuristic inventions.",
    },
    specialty: { de: "Angewandte Physik und fortschrittliche Technologie", en: "Applied physics and advanced technology" },
    bio: {
      de: "Tony Stark unterrichtet donnerstags – wenn er nicht gerade einen neuen Reaktor kalibriert. Sein Labor in der Schmiede der Akademie ist das einzige auf dem Campus, mit dem man nicht plappern, sondern sprechen muss. Wer seine Vorlesung „Quanten und Kraftfelder“ übersteht, darf am Wochenende am Institutsanzug (Version 7, Akademie-Edition) schrauben.",
      en: "Tony Stark teaches on Thursdays – whenever he is not busy calibrating a new reactor. His laboratory in the Academy forge is the only one on campus you do not address by shouting but by talking. Anyone who survives his lecture “Quanta and Force Fields” may spend the weekend tinkering with the institute suit (Mark VII, Academy Edition).",
    },
    quote: {
      de: "„Theorie ist der Anfang. Ein Prototyp, der fliegt, ist das Argument.“",
      en: "“Theory is the beginning. A prototype that flies is the argument.”",
    },
  },
  {
    id: "wanda",
    name: "Prof. Wanda Maximoff",
    subject: { de: "Dunkle Magie", en: "Dark Magic" },
    portrayed: "Elizabeth Olsen",
    film: { de: "Marvel Cinematic Universe", en: "Marvel Cinematic Universe" },
    since: "2023",
    icon: Sparkles,
    img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Elizabeth_Olsen_as_Wanda_Maximoff.jpg",
    imgAlt: { de: "Wanda Maximoff in ihrer scharlachroten Erscheinung", en: "Wanda Maximoff in her scarlet appearance" },
    intro: {
      de: "Eine außergewöhnlich mächtige Magierin, die sich mit Chaosmagie, mystischen Kräften und den Grenzen der Realität beschäftigt.",
      en: "An exceptionally powerful sorceress concerned with chaos magic, mystical forces and the boundaries of reality.",
    },
    specialty: { de: "Chaosmagie und Manipulation der Realität", en: "Chaos magic and the manipulation of reality" },
    bio: {
      de: "Wanda Maximoff lehrt im Westturm, dessen Wände seither in einem etwas röteren Ton schimmern. Ihre Seminare gelten als die intensivsten der Akademie – und die Warteliste ist älter als manche Studenten. Nur wer die Realität ernst nimmt, darf bei ihr lernen, sie zu verändern.",
      en: "Wanda Maximoff teaches in the West Tower, whose walls have shimmered in a slightly redder tone ever since. Her seminars are considered the most intense at the Academy – and the waiting list is older than some of the students. Only those who take reality seriously may learn from her how to change it.",
    },
    quote: {
      de: "„Chaos ist nicht das Gegenteil von Ordnung. Es ist deren ungelesene Handschrift.“",
      en: "“Chaos is not the opposite of order. It is its unread handwriting.”",
    },
  },
  {
    id: "snape",
    name: "Prof. Severus Snape",
    subject: { de: "Zaubertränke", en: "Potions" },
    portrayed: "Alan Rickman",
    film: { de: "Harry-Potter-Reihe", en: "Harry Potter series" },
    since: "1997",
    icon: Droplets,
    img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg",
    imgAlt: { de: "Severus Snape in seinen schwarzen Roben", en: "Severus Snape in his black robes" },
    intro: {
      de: "Ein strenger und geheimnisvoller Meister der Zaubertränke. Präzision, Geduld und perfekte Zutaten sind die Grundlage seines Unterrichts.",
      en: "A stern and mysterious master of potions. Precision, patience and flawless ingredients form the foundation of his teaching.",
    },
    specialty: { de: "Alchemie und magische Trankherstellung", en: "Alchemy and the brewing of magical potions" },
    bio: {
      de: "Im kühlen Gewölbe unter der Großen Halle braut Professor Snape seit Jahrzehnten Tränke, die in keinem Lehrbuch stehen. Die Chronik vermerkt das hartnäckige Gerücht, er habe das Rezept für den „Trank der Stille“ selbst verfasst. Sein Unterricht gilt als härteste Prüfung des ersten Jahres – und als dessen größte Ehre.",
      en: "In the cool vaults beneath the Great Hall, Professor Snape has brewed potions for decades that appear in no textbook. The chronicle records the persistent rumour that he himself composed the recipe for the “Draught of Silence”. His class is considered the hardest trial of the first year – and its greatest honour.",
    },
    quote: {
      de: "„Rühren Sie gegen den Uhrzeigersinn. Langsam. Ich beobachte Sie.“",
      en: "“Stir counter-clockwise. Slowly. I am watching you.”",
    },
  },
  {
    id: "alan",
    name: "Prof. Alan Garner",
    subject: { de: "Mathematik", en: "Mathematics" },
    portrayed: "Zach Galifianakis",
    film: { de: "Hangover-Trilogie", en: "The Hangover trilogy" },
    since: "2013",
    icon: Calculator,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/2012_10_21_Zach_Galifianakis_Hangover_3_Filming_-_Mercedes-Benz_E350_Convertible.jpg/960px-2012_10_21_Zach_Galifianakis_Hangover_3_Filming_-_Mercedes-Benz_E350_Convertible.jpg",
    imgPos: "28% 22%",
    imgAlt: { de: "Alan Garner (Zach Galifianakis)", en: "Alan Garner (Zach Galifianakis)" },
    intro: {
      de: "Ein liebenswert chaotischer Kopf mit einem unfassbaren Gedächtnis für Zahlen und Muster. Zwischen zwei Keksen durchrechnet er Kartenwahrscheinlichkeiten, für die andere ein Semester brauchen.",
      en: "A lovably chaotic mind with an unbelievable memory for numbers and patterns. Between two biscuits he computes card probabilities that take others a whole semester.",
    },
    specialty: { de: "Mathematische Logik und theoretische Berechnungen", en: "Mathematical logic and theoretical computation" },
    bio: {
      de: "Alan Garner kam als Gastlektor für „Kreatives Zählen“ an Aetheria – und blieb einfach. Die Chronik vermerkt, er habe das Akademiebudget beiläufig in eine einzige Formel gegossen, die seitdem ohne Fehler läuft. Niemand wagt, ihn nach seiner Methode zu fragen; alle wissen nur, dass sie mit Wahrscheinlichkeit, einer Schultertasche und einem sehr langen Wochenende zu tun hat.",
      en: "Alan Garner came to Aetheria as a guest lecturer in “Creative Counting” – and simply stayed. The chronicle notes that he casually poured the Academy budget into a single formula that has run flawlessly ever since. No one dares ask him about his method; everyone knows only that it involves probability, a satchel and one very long weekend.",
    },
    quote: {
      de: "„Ich bin kein Genie. Ich sehe nur Muster, die andere übersehen – und dann rechne ich.“",
      en: "“I am not a genius. I just see patterns others overlook – and then I count.”",
    },
  },
  {
    id: "jane",
    name: "Prof. Patrick Jane",
    subject: { de: "Psychologie", en: "Psychology" },
    portrayed: "Simon Baker",
    film: { de: "The Mentalist", en: "The Mentalist" },
    since: "2015",
    icon: Eye,
    img: "https://upload.wikimedia.org/wikipedia/en/3/37/Patrick_Jane.jpg",
    imgAlt: { de: "Patrick Jane", en: "Patrick Jane" },
    intro: {
      de: "Ein Meister der Beobachtung und Menschenkenntnis. Er lehrt seine Studenten, Körpersprache zu verstehen, menschliches Verhalten zu analysieren und verborgene Hinweise zu erkennen.",
      en: "A master of observation and human insight. He teaches his students to read body language, analyse human behaviour and detect hidden clues.",
    },
    specialty: { de: "Verhaltenspsychologie und Menschenbeobachtung", en: "Behavioural psychology and the observation of people" },
    bio: {
      de: "Niemand weiß genau, wie Patrick Jane an Aetheria kam. Er erschien eines Herbstmorgens mit einer Tasse Tee beim Fakultätsfrühstück – und wurde kurzerhand berufen, nachdem er der Direktorin beschrieben hatte, was sie in der Nacht zuvor geträumt hatte. Seitdem ist sein Seminar im Westflügel der am schnellsten ausgebuchte Kurs der Akademie.",
      en: "No one quite knows how Patrick Jane came to Aetheria. He appeared one autumn morning, tea in hand, at the faculty breakfast – and was promptly appointed after describing to the headmistress what she had dreamt the night before. Since then, his seminar in the West Wing has been the fastest-booked course at the Academy.",
    },
    quote: {
      de: "„Gedankenlesen gibt es nicht. Es gibt nur Menschen, die endlich hinsehen lernen.“",
      en: "“There is no such thing as mind reading. There are only people who finally learn to look.”",
    },
  },
  {
    id: "harvey",
    name: "Prof. Harvey Specter",
    subject: { de: "Recht", en: "Law" },
    portrayed: "Gabriel Macht",
    film: { de: "Suits", en: "Suits" },
    since: "2018",
    icon: Scale,
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Harvey_Specter_(Gabriel_Macht)_in_Suits.jpg",
    imgPos: "50% 12%",
    imgAlt: { de: "Harvey Specter im Anzug aus Suits", en: "Harvey Specter in a suit from Suits" },
    intro: {
      de: "Ein brillanter und selbstbewusster Anwalt, der strategisches Denken, überzeugende Argumentation und juristische Präzision lehrt.",
      en: "A brilliant and confident lawyer who teaches strategic thinking, persuasive argumentation and legal precision.",
    },
    specialty: { de: "Juristische Strategie und Verhandlungsführung", en: "Legal strategy and negotiation" },
    bio: {
      de: "Professor Specter hält seine Seminare im Gerichtssaal der Akademie ab – einem Raum, den die Studenten ehrfürchtig „die Kammer“ nennen. Er verlangt auswendig gelernte Verträge, vorbereitete Argumente und makellose Roben. Seine Absolventen verlieren selten einen Prozess und noch seltener ein Duell der Worte.",
      en: "Professor Specter holds his seminars in the Academy's courtroom – a room the students reverently call “the Chamber”. He demands memorised contracts, prepared arguments and immaculate robes. His graduates rarely lose a case and lose a war of words even less often.",
    },
    quote: {
      de: "„Gewinnen ist kein Zufall. Es ist Vorbereitung, die aussieht wie Selbstvertrauen.“",
      en: "“Winning is no accident. It is preparation that looks like confidence.”",
    },
  },
  {
    id: "jackie",
    name: "Prof. Jackie Chan",
    subject: { de: "Kampfkunst", en: "Martial Arts" },
    portrayed: "Jackie Chan",
    film: { de: "Karate Kid / Drunken Master", en: "The Karate Kid / Drunken Master" },
    since: "2010",
    icon: FlameKindling,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Jackie_Chan.jpg?width=560",
    imgAlt: { de: "Jackie Chan", en: "Jackie Chan" },
    intro: {
      de: "Ein weltberühmter Meister der Kampfkunst, der Disziplin, Geschwindigkeit, Konzentration und Selbstbeherrschung vermittelt. Wahre Stärke beginnt mit der Kontrolle über sich selbst.",
      en: "A world-famous master of martial arts who teaches discipline, speed, concentration and self-mastery. True strength begins with control over oneself.",
    },
    specialty: { de: "Kampfkunst, Disziplin und Selbstverteidigung", en: "Martial arts, discipline and self-defence" },
    bio: {
      de: "Seit seiner Berufung im Jahr 2010 lehrt Jackie Chan an der Aetheria die Kunst, aus jedem Hindernis einen Weg zu machen – mit Leichtigkeit, Humor und eiserner Disziplin. Berühmt wurde seine Lektion „Die Jacke“: ein einziges Kleidungsstück, dreißig Griffe und die Erkenntnis, dass wahre Kontrolle beim Loslassen beginnt. Seine Morgenmeditation am Seeufer ist bis heute der beliebteste Kurs der Akademie.",
      en: "Since his appointment in 2010, Jackie Chan has taught at Aetheria the art of turning every obstacle into a path – with ease, humour and iron discipline. His famous lesson “The Jacket” uses a single garment, thirty grips and the insight that true control begins with letting go. His dawn meditation at the lake shore remains the Academy's most popular class.",
    },
    quote: {
      de: "„Fürchte nicht den Gegner. Fürchte das, was du nicht geübt hast.“",
      en: "“Do not fear the opponent. Fear what you have not practised.”",
    },
  },
  {
    id: "professor",
    name: "Prof. Sergio Marquina",
    subject: { de: "Mastermind-Studien", en: "Mastermind Studies" },
    portrayed: "Álvaro Morte",
    film: { de: "Haus des Geldes (Money Heist)", en: "Money Heist" },
    since: "2019",
    icon: Crown,
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Professor_(Money_Heist).jpg",
    imgAlt: { de: "Der Professor aus Haus des Geldes", en: "The Professor from Money Heist" },
    intro: {
      de: "Dekan der Mastermind-Studien: ein ruhiger Stratege, der jede Bewegung im Voraus durchdenkt und seine Studenten lehrt, Geduld als schärfste Waffe einzusetzen.",
      en: "Dean of Mastermind Studies: a calm strategist who thinks every move through in advance and teaches his students to wield patience as their sharpest weapon.",
    },
    specialty: { de: "Strategische Planung, Führung und Verhandlung unter Druck", en: "Strategic planning, leadership and negotiation under pressure" },
    bio: {
      de: "Bevor er an Aetheria kam, entwarf der Professor Pläne, über die die Chronisten lieber schweigen. Heute leitet er das Institut für Mastermind-Studien im Nordturm – einen Raum ohne Fenster, mit einem Tisch, vier Stühlen und einer Karte, die nie ganz stimmt. Seine Vorlesungen beginnen pünktlich und enden erst, wenn der letzte Student begriffen hat, dass die eigentliche Aufgabe gerade erst begonnen hat.",
      en: "Before he came to Aetheria, the Professor devised plans the chroniclers prefer not to mention. Today he leads the Institute of Mastermind Studies in the North Tower – a windowless room with one table, four chairs and a map that is never quite right. His lectures begin on time and end only when the last student realises the real task has just begun.",
    },
    quote: {
      de: "„Ein guter Plan übersteht den ersten Fehler. Ein großer Plan hat ihn eingeplant.“",
      en: "“A good plan survives the first mistake. A great plan has already accounted for it.”",
    },
  },
  {
    id: "daemon",
    name: "Prof. Daemon Targaryen",
    subject: { de: "Schwertkampf", en: "Sword Fighting" },
    portrayed: "Matt Smith",
    film: { de: "House of the Dragon", en: "House of the Dragon" },
    since: "2022",
    icon: Swords,
    img: "https://en.wikipedia.org/wiki/Special:FilePath/Daemon_Targaryen.png",
    imgPos: "52% 20%",
    imgAlt: { de: "Daemon Targaryen aus House of the Dragon", en: "Daemon Targaryen from House of the Dragon" },
    intro: {
      de: "Ein königlicher Drachenträger und Meister des Schwerts. Er lehrt Haltung, Präzision und den Mut, im entscheidenden Moment nicht zu zögern.",
      en: "A royal dragonrider and master of the sword. He teaches poise, precision and the courage not to hesitate in the decisive moment.",
    },
    specialty: { de: "Historischer Schwertkampf, Kampftaktik und Drachentraining", en: "Historical swordsmanship, combat tactics and dragon training" },
    bio: {
      de: "Seine Vorlesungen finden im Freien statt – auf der alten Wetterwarte der Arena, wo der Wind nie ganz schweigt. Daemon Targaryen duldet keine Entschuldigungen, aber er vergisst auch keinen, der aufsteht, nachdem er gefallen ist. Die Chronik vermerkt, dass der Kurs „Drachenhaltung für Fortgeschrittene“ ausschließlich nach Sonnenuntergang abgehalten wird und dass am Himmel darüber gelegentlich ein Schatten kreist.",
      en: "His lectures take place outdoors – on the old weather keep of the arena, where the wind never quite falls silent. Daemon Targaryen tolerates no excuses, yet never forgets anyone who rises after a fall. The chronicle notes that “Advanced Dragon Riding” is held only after sunset, and that a shadow occasionally circles the sky above.",
    },
    quote: {
      de: "„Stahl prüft die Hand. Ein Drache prüft den Charakter.“",
      en: "“Steel tests the hand. A dragon tests the character.”",
    },
  },
  {
    id: "loki",
    name: "Prof. Loki Laufeyson",
    subject: { de: "Zauberkunde & Zeitkontrolle", en: "Spells & Time Control" },
    portrayed: "Tom Hiddleston",
    film: { de: "Loki / Marvel", en: "Loki / Marvel" },
    since: "2021",
    icon: Hourglass,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tom_Hiddleston_(48468962561)_(cropped).jpg?width=560",
    imgAlt: { de: "Loki, dargestellt von Tom Hiddleston", en: "Loki, portrayed by Tom Hiddleston" },
    intro: {
      de: "Der Gott des Schabernacks lehrt Illusion, Täuschung und den verantwortungsvollen Umgang mit Zeit – eine Disziplin, in der er selbst noch immer übt.",
      en: "The God of Mischief teaches illusion, deception and the responsible handling of time – a discipline he himself is still practising.",
    },
    specialty: { de: "Illusionsmagie, Zeitkontrolle und Verhandlung", en: "Illusion magic, time control and negotiation" },
    bio: {
      de: "Loki kam über eine Tür an die Aetheria, die vorher nicht existierte – und das Kollegium beschloss, ihn zu behalten, solange er die Uhr im Westturm in Ruhe ließ. Er hält seine Seminare im Spiegelsaal ab, wo jede Antwort mindestens zwei Wahrheiten hat. An Prüfungstagen erscheinen drei Prüfer; zwei davon sind gewöhnlich er.",
      en: "Loki arrived at Aetheria through a door that had not existed before – and the faculty decided to keep him as long as he left the West Tower clock alone. He holds his seminars in the Mirror Hall, where every answer has at least two truths. On exam days, three examiners appear; two of them are usually him.",
    },
    quote: {
      de: "„Zeit ist kein Fluss. Sie ist eine Treppe – und ich wähle die Stufe.“",
      en: "“Time is not a river. It is a staircase – and I choose the step.”",
    },
  },
  {
    id: "xavier",
    name: "Prof. Charles Xavier",
    subject: { de: "Mutation & Evolution", en: "Mutation & Evolution" },
    portrayed: "James McAvoy",
    film: { de: "X-Men: Erste Entscheidung", en: "X-Men: First Class" },
    since: "2011",
    icon: Dna,
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/James_McAvoy_2015.jpg?width=560",
    imgPos: "50% 18%",
    imgAlt: { de: "Der junge Charles Xavier, dargestellt von James McAvoy", en: "Young Charles Xavier, portrayed by James McAvoy" },
    intro: {
      de: "Ein junger Visionär der Genforschung, der Mutation nicht als Fehler, sondern als nächsten Schritt der Evolution lehrt – mit Empathie statt Furcht.",
      en: "A young visionary of genetic research who teaches mutation not as an error but as the next step of evolution – with empathy instead of fear.",
    },
    specialty: { de: "Menschliche Mutation, Neurotelepathie und Evolutionslehre", en: "Human mutation, neurotelepathy and evolutionary theory" },
    bio: {
      de: "Charles Xavier übernahm den Lehrstuhl für Mutation und Evolution im Alter von dreißig Jahren – und verlegte ihn kurzerhand in den Ostgarten, weil „Begabung frische Luft braucht“. Seine Studierenden lernen, dass jede außergewöhnliche Fähigkeit zuerst eine Frage der Haltung ist. Das von ihm begründete Mentorenprogramm vermittelt jeden Neuling an einen Studenten eines anderen Hauses – bis heute die beliebteste Regel der Akademie.",
      en: "Charles Xavier took the chair of Mutation and Evolution at the age of thirty – and promptly moved it into the East Garden because “talent needs fresh air”. His students learn that every extraordinary ability is first a question of attitude. The mentoring programme he founded pairs every newcomer with a student from another house – still the Academy's most beloved rule.",
    },
    quote: {
      de: "„Begabung ist keine Gabe, die man besitzt. Sie ist eine Verantwortung, die man trägt.“",
      en: "“Talent is not a gift you possess. It is a responsibility you carry.”",
    },
  },
];

/* ================================================================== */
/*  TIMELINE & FACTS                                                   */
/* ================================================================== */
export const TIMELINE: { year: string; title: L; text: L }[] = [
  {
    year: "1187",
    title: { de: "Die Gründung", en: "The founding" },
    text: {
      de: "Walburga von Hohenfels folgt einem Lichtstreifen im Nebel des Aethertals und legt den Grundstein für einen Wachtturm über dem See – den Keim Aetherias.",
      en: "Walburga von Hohenfels follows a streak of light through the mist of the Aether valley and lays the foundation stone of a watchtower above the lake – the seed of Aetheria.",
    },
  },
  {
    year: "1203",
    title: { de: "Die Vier Häuser", en: "The Four Houses" },
    text: {
      de: "Die vier Ordensgemeinschaften erhalten ihre Namen und Farben: Drachenfels, Silberwald, Nachtkrähe und Grünquell.",
      en: "The four fellowships receive their names and colours: Drachenfels, Silberwald, Nachtkrähe and Grünquell.",
    },
  },
  {
    year: "1311",
    title: { de: "Der Astronomieturm", en: "The Astronomy Tower" },
    text: {
      de: "Baumeister Heinrich Sternenauge vollendet den höchsten Turm der Burg. Sein Linsenobservatorium gilt bis heute als Wunderwerk.",
      en: "Master builder Heinrich Sternenauge completes the castle's tallest tower. Its lens observatory is considered a marvel to this day.",
    },
  },
  {
    year: "1523",
    title: { de: "Die Große Versiegelung", en: "The Great Sealing" },
    text: {
      de: "Nach dem Brand des Ostflügels werden die Geheimen Archive versiegelt. Vier Schlüssel gehen an die Häuser. Über eine fünfte Tür schweigen die Chroniken.",
      en: "After the East Wing fire, the Secret Archives are sealed. Four keys pass to the houses. Of a fifth door, the chronicles say nothing.",
    },
  },
  {
    year: "1871",
    title: { de: "Das erste Herbstfest", en: "The first Autumn Festival" },
    text: {
      de: "Aus einem bescheidenen Erntedank wird das große Akademie-Herbstfest: Blaskapelle, Brezeln und fliegende Lichter über dem See.",
      en: "A humble harvest thanksgiving becomes the great Academy Autumn Festival: brass music, pretzels and floating lights above the lake.",
    },
  },
  {
    year: "1894",
    title: { de: "Die Bibliothek wächst nach unten", en: "The library grows downwards" },
    text: {
      de: "Sieben Etagen werden in den Fels getrieben. Die unterste bleibt unvollendet – oder absichtlich unerreichbar.",
      en: "Seven floors are driven into the rock. The lowest remains unfinished – or deliberately unreachable.",
    },
  },
  {
    year: "Heute",
    title: { de: "Die Akademie von heute", en: "The Academy today" },
    text: {
      de: "Rund 1.200 Studenten aus aller Welt, acht berühmte Lehrstühle – und ein Turm, der immer noch auf keiner Karte verzeichnet ist.",
      en: "Around 1,200 students from across the world, eight famous chairs – and one tower that is still recorded on no map.",
    },
  },
];

export const FACTS: { n: number; suffix: string; label: L }[] = [
  { n: 838, suffix: "", label: { de: "Jahre Geschichte", en: "years of history" } },
  { n: 7, suffix: "", label: { de: "Etagen unter der Erde", en: "floors beneath the earth" } },
  { n: 143, suffix: "", label: { de: "Treppen – manche wandern", en: "staircases – some wander" } },
  { n: 1, suffix: "", label: { de: "Turm, der nicht existiert", en: "tower that does not exist" } },
];

/* ================================================================== */
/*  FOOD & DRINK                                                       */
/* ================================================================== */
export interface Food {
  name: string;
  nameEn: L;
  desc: L;
  tradition: L;
  fact: L;
  img: string;
  alt: L;
}

export const FOODS: Food[] = [
  {
    name: "Brezel",
    nameEn: { de: "Bavarian pretzel", en: "Bavarian pretzel" },
    img: "https://images.pexels.com/photos/110646/pexels-photo-110646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Bayerische Brezel", en: "Bavarian pretzel" },
    desc: {
      de: "Goldbraun und lauwarm aus den uralten Steinöfen unter der Halle – mit grobem Salz und einer Scheibe Butter.",
      en: "Golden-brown and lukewarm from the ancient stone ovens beneath the hall – with coarse salt and a slice of butter.",
    },
    tradition: {
      de: "Weizenteig wird in Laugenlösung getaucht – die breite „Gelung“ aus dem Backhandwerk gibt ihr die tiefe Mahagonifarbe und die knusprige Kruste – und bei starker Hitze gebacken. Die Akademie backt nach einer Rezeptur von 1871.",
      en: "The wheat dough is dipped in a lye solution – a hallmark of the baker's craft that gives it the deep mahogany colour and crisp crust – and baked at fierce heat. The Academy has followed the same recipe since 1871.",
    },
    fact: {
      de: "Die Brezel gilt seit dem Mittelalter als Zeichen der Bäckerzünfte. Zur Herbstfest-Woche formt die Küche eine „Festbrezel“ von stolzen 1,2 Kilo – sie wird mit dem Salut der Kapelle in die Halle getragen.",
      en: "Since the Middle Ages, the pretzel has been the emblem of the bakers' guilds. During Autumn Festival week, the kitchens shape a festive pretzel weighing a proud 1.2 kilos – carried into the hall to a fanfare.",
    },
  },
  {
    name: "Bratwurst",
    nameEn: { de: "Grilled sausage", en: "Grilled sausage" },
    img: "https://images.pexels.com/photos/23893373/pexels-photo-23893373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Bratwürste auf dem Grill", en: "Bratwurst on the grill" },
    desc: {
      de: "Fränkische Grillspezialität vom Buchenholzfeuer, dazu Sauerkraut und süßer Senf aus dem Akademiekeller.",
      en: "A Franconian grill specialty over beechwood fire, with sauerkraut and sweet mustard from the Academy cellar.",
    },
    tradition: {
      de: "Fein gebratenes Brät aus Schwein, mit Majoran und Muskat gewürzt, über Buchenglut gebraten, bis die Haut knackt. Serviert im Weck oder mit Sauerkraut – in Franken stets mit süßem Senf.",
      en: "Finely minced pork, seasoned with marjoram and nutmeg, grilled over beechwood embers until the skin crackles. Served in a roll or with sauerkraut – in Franconia always with sweet mustard.",
    },
    fact: {
      de: "Das Grillholz der Akademie stammt aus kontrollierten Windwurf-Flächen am Rand des Verbotenen Walds. Man sagt, am Herbstfest höre man die Würste schon am Seefest platzen.",
      en: "The Academy's grilling wood comes from managed storm-fall clearings at the edge of the Forbidden Forest. It is said that at the Autumn Festival you can hear the sausages crackle all the way to the lake.",
    },
  },
  {
    name: "Schnitzel",
    nameEn: { de: "Breaded cutlet", en: "Breaded cutlet" },
    img: "https://images.pexels.com/photos/33859572/pexels-photo-33859572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Schnitzel mit Kartoffeln und Zitrone", en: "Schnitzel with potatoes and lemon" },
    desc: {
      de: "Knusprig paniert, mit Preiselbeeren und Zitrone – der Freitagsklassiker, bei dem selbst Professor Snape beinahe lächelt.",
      en: "Crisp-breaded, with cranberries and lemon – the Friday classic that almost makes Professor Snape smile.",
    },
    tradition: {
      de: "Zart geklopft, in Mehl, Ei und Semmelbrösel gewendet und in Butterschmalz schwenkend goldgelb gebacken. Dazu Preiselbeeren, Zitrone und Kartoffelsalat – mehr braucht ein Freitag nicht.",
      en: "Gently pounded, turned in flour, egg and breadcrumbs, and fried golden in clarified butter while moving the pan. Cranberries, lemon and potato salad on the side – a Friday needs nothing more.",
    },
    fact: {
      de: "Ob Wien oder Bayern das bessere Schnitzel backe, ist der einzige Disput, den selbst das Sprechende Wappen nicht schlichtet. Seit 1924 endet die Debatte stets friedlich – beim Dessert.",
      en: "Whether Vienna or Bavaria bakes the better schnitzel is the one dispute even the Talking Crest refuses to settle. Since 1924, the debate has always ended peacefully – at dessert.",
    },
  },
  {
    name: "Käsespätzle",
    nameEn: { de: "Alpine cheese noodles", en: "Alpine cheese noodles" },
    img: "https://images.pexels.com/photos/33911269/pexels-photo-33911269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Käsespätzle mit Kräutern", en: "Käsespätzle with herbs" },
    desc: {
      de: "Handgeschabte Spätzle unter einer Decke aus geschmolzenem Alpkäse und goldbraunen Röstzwiebeln. Das Seelengericht.",
      en: "Hand-scraped Spätzle beneath a blanket of melted alpine cheese and golden fried onions. The dish of the soul.",
    },
    tradition: {
      de: "Ein dicker Teig aus Mehl, Eiern und Wasser wird von Hand über dem kochenden Wasser geschabt – jede Spätzle ein kleines Unikat. Geschichtet mit kräftigem Bergkäse, gekrönt mit Röstzwiebeln.",
      en: "A thick dough of flour, eggs and water is scraped by hand over boiling water – every Spätzle a small original. Layered with strong mountain cheese and crowned with fried onions.",
    },
    fact: {
      de: "Haus Grünquell veranstaltet alljährlich das „Stille Spätzleessen“: Wer zuerst aufisst, spricht den Tischsegen des nächsten Jahres. Der Rekord von vier Tellern steht seit 1987 – ungeschlagen.",
      en: "House Grünquell holds the annual “Silent Spätzle Supper”: whoever finishes first speaks the table blessing of the coming year. The record stands at four bowls – unbeaten since 1987.",
    },
  },
  {
    name: "Schwarzwälder Kirschtorte",
    nameEn: { de: "Black Forest gâteau", en: "Black Forest gâteau" },
    img: "https://images.pexels.com/photos/8802102/pexels-photo-8802102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Schwarzwälder Kirschtorte", en: "Black Forest gâteau" },
    desc: {
      de: "Schokolade, Kirschen, Sahne – nach einem Rezept, das strenger gehütet wird als mancher Zauberspruch.",
      en: "Chocolate, cherries, cream – from a recipe guarded more strictly than many a spell.",
    },
    tradition: {
      de: "Schokoladenböden, getränkt mit Kirschwasser, geschichtet mit Sauerkirschen und geschlagener Sahne, bekrönt mit Schokoraspeln. In der Akademieküche wird die Kirsche beim Schichten nie ausgezählt – Glückssache.",
      en: "Chocolate sponge soaked with cherry brandy, layered with sour cherries and whipped cream, crowned with chocolate shavings. In the Academy kitchen the cherries are never counted while layering – a matter of luck.",
    },
    fact: {
      de: "Das Rezept der Akademie stammt aus dem Jahr 1915 und ruht im Versiegelten Archiv – Aktenzeichen „Süßvier“, Zutritt nur für die Oberkonditorin und das Wappen.",
      en: "The Academy recipe dates from 1915 and rests in the Sealed Archive – file “Sweet/Four”, access only for the head pâtissière and the Crest.",
    },
  },
  {
    name: "Apfelstrudel",
    nameEn: { de: "Apple strudel", en: "Apple strudel" },
    img: "https://images.pexels.com/photos/14093961/pexels-photo-14093961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Apfelstrudel mit Vanillesoße", en: "Apple strudel with vanilla sauce" },
    desc: {
      de: "Hauchdünner Teig, Äpfel aus dem Akademiegarten, warme Vanillesoße. Serviert zur blauen Stunde.",
      en: "Wafer-thin pastry, apples from the Academy orchard, warm vanilla sauce. Served at the blue hour.",
    },
    tradition: {
      de: "Der Strudelteig wird über den Knöcheln so dünn ausgezogen, dass die Chronik dadurch hindurchgelesen werden muss. Gefüllt mit säuerlichen Äpfeln, Zimt und in Butter gerösteten Semmelbröseln.",
      en: "The strudel dough is stretched over the knuckles until the chronicle could be read through it. Filled with tart apples, cinnamon and breadcrumbs browned in butter.",
    },
    fact: {
      de: "Zur Wintersonnenwende wird der längste Strudel des Jahres gerollt – sieben Meter, eine Umdrehung pro Gründerin und Gründer, und er füllt die Tafel der Großen Halle quer.",
      en: "At the winter solstice, the year's longest strudel is rolled – seven metres, one turn of the cloth for each of the founders, spanning the Great Hall table crosswise.",
    },
  },
  {
    name: "Kartoffelsalat",
    nameEn: { de: "Bavarian potato salad", en: "Bavarian potato salad" },
    img: "https://images.pexels.com/photos/39470258/pexels-photo-39470258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Kartoffelsalat in rustikaler Schüssel", en: "Potato salad in a rustic bowl" },
    desc: {
      de: "Nach bayerischer Art: mit Brühe, Essig, Senf und Schnittlauch – ohne Mayonnaise, dafür mit Stolz.",
      en: "Bavarian style: with broth, vinegar, mustard and chives – no mayonnaise, but plenty of pride.",
    },
    tradition: {
      de: "Pellkartoffeln, noch warm geschält und in heißer Brühe mit Essig, Öl, Senf und feinen Zwiebeln durchgezogen. Lauwarm serviert – so, wie es in Bayern seit Jahrhunderten Sitte ist.",
      en: "Waxy potatoes, peeled while still warm and steeped in hot broth with vinegar, oil, mustard and finely diced onions. Served lukewarm – as Bavarian custom has demanded for centuries.",
    },
    fact: {
      de: "Der Konflikt „Brühe gegen Mayonnaise“ gilt an der Aetheria als ausgetragen: Das Wappen hat 1963 zugunsten der Brühe entschieden – ausdrücklich und für immer.",
      en: "The “broth versus mayonnaise” conflict is considered settled at Aetheria: in 1963 the Crest ruled in favour of broth – expressly, and forever.",
    },
  },
];

export const DRINKS: Food[] = [
  {
    name: "Apfelsaftschorle",
    nameEn: { de: "Sparkling apple juice", en: "Sparkling apple juice" },
    img: "https://images.pexels.com/photos/17850566/pexels-photo-17850566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Erfrischende Apfelsaftschorle", en: "Refreshing sparkling apple juice" },
    desc: {
      de: "Spritzig und ehrlich, vom Streuobst der eigenen Wiesen – bei Festen gern in silbernen Bechern gereicht.",
      en: "Sparkling and honest, made from the meadow orchards' own fruit – gladly served in silver goblets at festivals.",
    },
    tradition: {
      de: "Naturtrüber Apfelsaft, halb mit Mineralwasser gestreckt – die ehrliche Erfrischung der Alpen. Die Äpfel reifen auf den Südwestwiesen unterhalb der Akademie.",
      en: "Cloudy apple juice cut half-and-half with sparkling water – the honest refreshment of the Alps. The apples ripen on the southwest meadows below the Academy.",
    },
    fact: {
      de: "Zum Abschlussfest wird das erste Glas des Jahrgangs traditionell dem Neuankömmling gereicht, der den Aethersee zuerst erblickt hat.",
      en: "At the graduation feast, the first glass of the vintage is traditionally handed to the newcomer who first glimpsed the Aethersee.",
    },
  },
  {
    name: "Kräutertee „Alpengruß“",
    nameEn: { de: "Herbal tea", en: "Herbal tea" },
    img: "https://images.pexels.com/photos/29387141/pexels-photo-29387141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Kräutertee mit getrockneten Kräutern", en: "Herbal tea with dried herbs" },
    desc: {
      de: "Melisse, Thymian und Bergminze aus dem Kräutergarten der Akademie – aufgebrüht seit 1741, unverändert gut.",
      en: "Lemon balm, thyme and mountain mint from the Academy's herb garden – brewed since 1741, unchanged ever since.",
    },
    tradition: {
      de: "Haus Grünquell bindet die Kräuterbündel nach dem Johannistag und lagert sie im Turmspeicher. Ein Teelöffel Honig aus den Bienenstöcken des Ostgartens gehört dazu.",
      en: "House Grünquell ties the herb bundles after St. John's Day and stores them in the tower loft. A teaspoon of honey from the East Garden hives belongs to every cup.",
    },
    fact: {
      de: "In Prüfungswochen steht die Teekanne in jedem Gemeinschaftsraum bereit. Professor Jane behauptet, am Teeblatt zu erkennen, wer gelernt hat – er liegt verdächtig oft richtig.",
      en: "During exam weeks, a teapot stands ready in every common room. Professor Jane claims he can tell from the tea leaves who has studied – he is suspiciously often right.",
    },
  },
];

/* ================================================================== */
/*  FESTIVALS                                                          */
/* ================================================================== */
export interface Festival {
  title: L;
  when: L;
  desc: L;
  celebration: L;
  meaning: L;
  special: L;
  img: string;
  alt: L;
  icon: LucideIcon;
}

export const FESTIVALS: Festival[] = [
  {
    title: { de: "Das Akademie-Herbstfest", en: "The Academy Autumn Festival" },
    when: { de: "Ende September", en: "Late September" },
    desc: {
      de: "Aetherias Antwort auf das Oktoberfest: Festzelt am Seeufer, die Kapelle „Alpenklang“, Brezeln so groß wie Teller – und um Mitternacht steigen tausend goldene Lichter über dem Wasser auf.",
      en: "Aetheria's answer to the Oktoberfest: a festival tent on the lake shore, the “Alpenklang” band, pretzels the size of plates – and at midnight, a thousand golden lights rise above the water.",
    },
    celebration: {
      de: "Neun Tage lang verwandelt sich das Ostufer in ein Festgelände: Biertischgarnituren für die Häuser, ein Festzelt mit Kronleuchtern aus Hirschgeweih, dazu Maiskolben vom Grill, Radi und Obatzda. Studenten der oberen Jahrgänge zapfen den ersten Fass-Apfelmost an – mit dem Schlachtruf der Akademie.",
      en: "For nine days the east shore becomes a fairground: beer-bench sets for the houses, a festival tent with antler chandeliers, grilled corn, radish spirals and Obatzda. Senior students tap the first keg of apple must – to the Academy's battle cry.",
    },
    meaning: {
      de: "Seit 1871 feiert die Akademie so die Ernte und das neue Akademische Jahr. Das Fest steht in der Tradition des Münchner Oktoberfests, das seit 1810 die Bayern im September zusammenbringt – Tracht, Blasmusik und Gemeinschaft inklusive.",
      en: "Since 1871, the Academy has celebrated the harvest and the new academic year this way. The festival stands in the tradition of the Munich Oktoberfest, which has gathered Bavaria every September since 1810 – Tracht, brass music and community included.",
    },
    special: {
      de: "Um Mitternacht erlischt das Festzeltlicht; über dem See steigen tausend verzauberte Papierlaternen auf – jede trägt den Wunsch eines Studenten. Wer die eigene Laterne am Horizont verschwinden sieht, darf im neuen Jahr einmal aus der Mondbibliothek ausborgen.",
      en: "At midnight the tent lights go dark; above the lake, a thousand enchanted paper lanterns rise – each carrying a student's wish. Whoever watches their own lantern vanish at the horizon may borrow once from the Moon Library in the coming year.",
    },
    img: "https://images.pexels.com/photos/2957848/pexels-photo-2957848.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: { de: "Festgelände im bayerischen Stil", en: "Festival grounds in the Bavarian style" },
    icon: PartyPopper,
  },
  {
    title: { de: "Der Weihnachtsmarkt", en: "The Christmas Market" },
    when: { de: "Adventszeit", en: "Advent season" },
    desc: {
      de: "Der Schlosshof verwandelt sich: Holzbuden, Tannenduft, heißer Apfelpunsch für die Studenten, Glühwein für das Kollegium. Der Adventskranz der Großen Halle trägt Kerzen, die nie herunterbrennen.",
      en: "The castle courtyard transforms: wooden stalls, the scent of fir trees, hot apple punch for the students, mulled wine for the faculty. The Great Hall's advent wreath bears candles that never burn down.",
    },
    celebration: {
      de: "Vier Wochen lang duftet der Burghof nach Zimt und Tannenreisig: Die Häuser bewirtschaften je eine Holzbude – Drachenfels röstet Maroni, Silberwald druckt Gedichtkarten, Grünquell verkauft Kräuterbündel, Nachtkrähe führt Sternenkarten. Abends singt der Akademiechor.",
      en: "For four weeks the courtyard smells of cinnamon and fir: each house runs a wooden stall – Drachenfels roasts chestnuts, Silberwald prints poem cards, Grünquell sells herb bundles, Nachtkrähe guides with star charts. The Academy choir sings in the evenings.",
    },
    meaning: {
      de: "Der Weihnachtsmarkt gehört zu Deutschland wie die Kerze zum Advent – Tradition seit dem späten Mittelalter, vom Dresdner Striezelmarkt (1434) bis zu den Märkten der Alpentäler. An der Aetheria schließt er das alte Kalenderjahr in Wärme ab.",
      en: "The Christmas market belongs to Germany like the candle to Advent – a tradition since the late Middle Ages, from Dresden's Striezelmarkt (1434) to the markets of the Alpine valleys. At Aetheria it closes the old calendar year in warmth.",
    },
    special: {
      de: "Der Adventskranz der Großen Halle trägt vier Kerzen von je einem Meter Höhe; sie brennen seit 1897, ohne je kürzer zu werden. Die Konditorei serviert dazu Lebkuchen nach Nürnberger Art mit einem Hauch Bergminze.",
      en: "The Great Hall's advent wreath bears four candles, each a metre tall; they have burned since 1897 without ever growing shorter. The kitchens serve Nuremberg-style gingerbread with a hint of mountain mint alongside.",
    },
    img: "https://images.pexels.com/photos/37296570/pexels-photo-37296570.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: { de: "Weihnachtsmarkt am Abend", en: "Christmas market in the evening" },
    icon: Gift,
  },
  {
    title: { de: "Die Wintersonnenwende", en: "The Winter Solstice" },
    when: { de: "21. Dezember", en: "21 December" },
    desc: {
      de: "In der längsten Nacht versammelt sich die Akademie am Astronomieturm. Ein Feuer aus Zirbelkiefer, Geschichten in alter Sprache – und der eine Moment, in dem alle Lichter des Schlosses zugleich erlöschen und wieder aufflammen.",
      en: "On the longest night, the Academy gathers at the Astronomy Tower. A fire of Swiss pine, stories in the old tongue – and the one moment when every light in the castle goes out at once, then flares again.",
    },
    celebration: {
      de: "In dichten Umhängen steigt die Akademie bei Fackellicht zum Turm. Die Direktorin liest die Wende-Epistel, Professor Snape reicht wortlos einen wärmenden Trank, und zur Geisterstunde werden alle Kerzen des Schlosses zugleich gelöscht – drei Atemzüge Dunkelheit, dann lodern sie neu.",
      en: "In heavy cloaks the Academy climbs to the tower by torchlight. The headmistress reads the Solstice Epistle, Professor Snape wordlessly hands around a warming draught, and at the witching hour every candle in the castle is extinguished at once – three breaths of darkness, then they blaze anew.",
    },
    meaning: {
      de: "Die Sonnenwende markiert den Wendepunkt des Lichts – gefeiert in den Alpen seit jeher mit Feuer, Segen und klirrender Kälte. An der Aetheria erinnert sie daran, dass auch das längste Dunkel einem Morgen weicht.",
      en: "The solstice marks the turning point of light – celebrated in the Alps since time immemorial with fire, blessing and glassy cold. At Aetheria it recalls that even the longest darkness yields to a morning.",
    },
    special: {
      de: "In dieser einen Nacht kalibriert das große Fernrohr des Turms auf den Polarstern; die Sternenkundler verzeichnen seit 1311, dass der See darunter für genau elf Minuten wie poliertes Silber liegt.",
      en: "On this single night, the tower's great telescope is trained on the Pole Star; the astronomers have recorded since 1311 that the lake below lies like polished silver for exactly eleven minutes.",
    },
    img: "https://images.pexels.com/photos/8417915/pexels-photo-8417915.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: { de: "Burg im Schnee in der Abenddämmerung", en: "Castle in snow at dusk" },
    icon: Snowflake,
  },
  {
    title: { de: "Das Laternenfest", en: "The Lantern Festival" },
    when: { de: "11. November", en: "11 November" },
    desc: {
      de: "Mit selbst gefertigten Laternen ziehen die Studenten singend um den Aethersee. Wessen Flamme bis zum anderen Ufer brennt, darf sich etwas wünschen – man sagt, der See höre zu.",
      en: "Carrying handmade lanterns, the students circle the Aethersee singing. Whose flame lasts to the far shore may make a wish – it is said the lake is listening.",
    },
    celebration: {
      de: "Im Werkhaus des Nordtrakts werden wochenlang Laternen aus geraspelten Rüben und Transparentpapier gebaut. Am Festabend zieht ein Singen die Prozession am Ufer entlang, gefolgt vom Kapellmeister mit der Laterne der Direktorin.",
      en: "For weeks, lanterns of hollowed turnips and parchment are built in the North Wing workshop. On the festival evening, singing, the procession moves along the shore, followed by the bandmaster bearing the headmistress's lantern.",
    },
    meaning: {
      de: "Das Fest steht in der Martins-Tradition, wie sie in Deutschland seit Jahrhunderten gelebt wird: Licht gegen die dunkle Jahreszeit, Teilen mit denen, die wenig haben – und der Frohsinn des gemeinsamen Weges.",
      en: "The festival stands in the St. Martin's tradition as it has been lived in Germany for centuries: light against the dark season, sharing with those who have little – and the joy of the road walked together.",
    },
    special: {
      de: "Am Ostufer darf jede Laterne einmal auf dem Wasser gesetzt werden. Hunderte winzige Lichter treiben dann unter den Bogen der Brücke hindurch – das „Silberband“, wie es die Chronik nennt.",
      en: "At the east shore, every lantern may once be set upon the water. Hundreds of tiny lights drift beneath the bridge arch – the “Silver Band”, as the chronicle calls it.",
    },
    img: "https://images.pexels.com/photos/12174173/pexels-photo-12174173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Leuchtende Laternen in der Nacht", en: "Glowing lanterns in the night" },
    icon: Lightbulb,
  },
  {
    title: { de: "Musik & Schuhplattler", en: "Music & Schuhplattler" },
    when: { de: "Donnerstags & Festtage", en: "Thursdays & feast days" },
    desc: {
      de: "Die Akademiekapelle „Alpenklang“ pflegt Blasmusik und den traditionellen Schuhplattler-Tanz. Anfänger sind willkommen – die Lederhose wird gestellt, der Mut nicht.",
      en: "The Academy band “Alpenklang” keeps brass music and traditional Schuhplattler dancing alive. Beginners are welcome – the lederhosen are provided; the courage is not.",
    },
    celebration: {
      de: "Donnerstags hallt der Westflügel von Posaunen; Sonntags spielt die Kapelle im Burghof, wenn das Wetter es erlaubt – und holt die Feuerwerksuhr herein, wenn nicht. Beim Herbstfest wird geplattelt, bis die Bankgarnituren wackeln.",
      en: "On Thursdays the West Wing echoes with trombones; on Sundays the band plays in the courtyard, weather permitting – and conjures the firework clock indoors when it does not. At the Autumn Festival they dance until the bench sets tremble.",
    },
    meaning: {
      de: "Blasmusik und Schuhplattler sind bayerisches Kulturerbe: Der paarweise Tanz mit den charakteristischen Schenkelklatschern stammt aus den Alpentälern und füllt dort jedes Fest – in Aetheria seit der Gründergeneration.",
      en: "Brass music and Schuhplattler are Bavarian heritage: the paired dance with its characteristic thigh-slapping comes from the Alpine valleys and fills every festival there – at Aetheria since the founders' generation.",
    },
    special: {
      de: "Der älteste Kontrabass der Kapelle stammt aus dem Jahr 1789 und trägt im Korpus eine Gravur: vier Signaturen der Hausgründer – und ein fünftes Zeichen, das kein Gesangbuch deutet.",
      en: "The band's oldest double bass dates from 1789 and bears an engraving inside its body: the four signatures of the house founders – and a fifth symbol no hymnal can explain.",
    },
    img: "https://images.pexels.com/photos/29998431/pexels-photo-29998431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: { de: "Feiernde Menschen in bayerischer Tracht", en: "Celebrating people in Bavarian Tracht" },
    icon: Music,
  },
  {
    title: { de: "Die Große Abschlusszeremonie", en: "The Grand Graduation Ceremony" },
    when: { de: "Mitte Juli", en: "Mid-July" },
    desc: {
      de: "Die Häuser hissen ihre Banner, die Direktorin spricht die Worte Walburgas, und am Ende fliegen die Hüte – teils aus Freude, teils aus eigener Magie.",
      en: "The houses raise their banners, the headmistress speaks Walburga's words, and in the end the hats fly – partly from joy, partly from their own magic.",
    },
    celebration: {
      de: "Die Große Halle öffnet ihre Fenster zum See: Absolventen empfangen Robe, Siegelring und die „Mappe der Wege“. Danach wird auf den Terrassen getafelt, und die Kontrabässe der Kapelle stimmen den Abschiedswalzer an.",
      en: "The Great Hall opens its windows to the lake: graduates receive their robe, signet ring and the “Portfolio of Paths”. Afterwards there is feasting on the terraces while the band's double basses strike up the farewell waltz.",
    },
    meaning: {
      de: "Seit 1203 verabschiedet die Akademie ihre Abgänger mit denselben zwölf Worten Walburgas – der älteste ununterbrochene Erteilt-Text der Institution und der einzige, den alle vier Häuser im gleichen Tonfall singen.",
      en: "Since 1203, the Academy has bid farewell to its graduates with the same twelve words of Walburga – the institution's oldest continuously bestowed text, and the only one all four houses sing in the same key.",
    },
    special: {
      de: "Die geworfenen Hüte kehren von allein zurück – meistens. Der Chronik zufolge blieben elf Hüte verschwunden; man sagt, sie flögen noch immer über den Gipfeln.",
      en: "The thrown hats return on their own – mostly. According to the chronicle, eleven hats remain missing; it is said they are still flying above the peaks.",
    },
    img: "https://images.pexels.com/photos/34429681/pexels-photo-34429681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Historischer Festsaal", en: "Historic ceremonial hall" },
    icon: GraduationCap,
  },
];

/* ================================================================== */
/*  ACTIVITIES                                                         */
/* ================================================================== */
export const ACTIVITIES: { icon: LucideIcon; title: L; desc: L; img: string; alt: L }[] = [
  {
    icon: Wind,
    title: { de: "Flugball-Liga", en: "Flightball League" },
    desc: { de: "Vier Mannschaften, drei Torringe, ein legendärer Pokal – das Herzstück jedes Frühjahrs.", en: "Four teams, three goal rings, one legendary cup – the heart of every spring." },
    img: "https://images.pexels.com/photos/28827841/pexels-photo-28827841.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: { de: "Erleuchtete Flugball-Arena bei Nacht", en: "Floodlit flightball arena at night" },
  },
  {
    icon: Swords,
    title: { de: "Duell-Club „Eisenwand“", en: "The „Eisenwand“ Duelling Club" },
    desc: { de: "Anstand, Präzision, Sportsgeist. Einweihung jeden Dienstag in der Arena.", en: "Decorum, precision, sportsmanship. Initiation every Tuesday in the arena." },
    img: "https://images.pexels.com/photos/5941981/pexels-photo-5941981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Gekreuzte Klingen im Duell", en: "Crossed blades in a duel" },
  },
  {
    icon: Telescope,
    title: { de: "Astronomie-Nächte", en: "Astronomy nights" },
    desc: { de: "Jeden Freitag bei klarem Himmel auf dem Turm – heißer Alpengruß-Tee inklusive.", en: "Every Friday under clear skies atop the tower – hot Alpengruß tea included." },
    img: "https://images.pexels.com/photos/11768608/pexels-photo-11768608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Milchstraße über der Sternwarte", en: "Milky Way above the observatory" },
  },
  {
    icon: FlaskConical,
    title: { de: "Der Goldene Kessel", en: "The Golden Cauldron" },
    desc: { de: "Der große Zaubertrank-Wettbewerb des Wintersemesters. Moderiert vom Kollegium, gefürchtet von allen.", en: "The great potion-brewing contest of the winter term. Hosted by the faculty, feared by all." },
    img: "https://images.pexels.com/photos/8657361/pexels-photo-8657361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Antike Laborwaage mit Phiolen", en: "Antique laboratory scale with phials" },
  },
  {
    icon: BookOpen,
    title: { de: "Lernzirkel der Bibliothek", en: "Library study circles" },
    desc: { de: "Sieben Etagen, null Ausreden – Lerngruppen für jedes Fach und jedes Haus.", en: "Seven floors, zero excuses – study circles for every subject and every house." },
    img: "https://images.pexels.com/photos/6761492/pexels-photo-6761492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Bücherregale der Großen Bibliothek", en: "Shelves of the Grand Library" },
  },
  {
    icon: Mountain,
    title: { de: "Alpenverein der Akademie", en: "The Academy Alpine Society" },
    desc: { de: "Gipfeltouren in den Bayerischen Alpen ab April. Rucksackzauber ausdrücklich erlaubt.", en: "Summit tours in the Bavarian Alps from April. Backpack charms expressly permitted." },
    img: "https://images.pexels.com/photos/34297608/pexels-photo-34297608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: { de: "Herbstliche Berglandschaft mit See", en: "Autumnal mountain landscape with a lake" },
  },
  {
    icon: Music,
    title: { de: "Kapelle „Alpenklang“", en: "The „Alpenklang“ Band" },
    desc: { de: "Blasmusik für Feste und Sonntage – vom festlichen Einzug bis zum Tanz im Burghof.", en: "Brass music for feasts and Sundays – from ceremonial entries to dancing in the courtyard." },
    img: "https://images.pexels.com/photos/28702304/pexels-photo-28702304.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: { de: "Festliche Stimmung wie am Oktoberfest", en: "Festive spirit reminiscent of the Oktoberfest" },
  },
  {
    icon: Drama,
    title: { de: "Theater im Burghof", en: "Theatre in the Courtyard" },
    desc: { de: "Jedes Frühjahr ein Klassiker unter freiem Himmel – zuletzt Faust, mit echten Schatten.", en: "A classic under the open sky every spring – most recently Faust, with real shadows." },
    img: "https://images.pexels.com/photos/33906536/pexels-photo-33906536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Kronleuchter über dem Kamin des Festsaals", en: "Chandelier above the hall's fireplace" },
  },
];

/* ================================================================== */
/*  CAMPUS                                                             */
/* ================================================================== */
export interface CampusSpot {
  id: string;
  name: L;
  level: L;
  x: number;
  y: number;
  img: string;
  alt: L;
  desc: L;
  doing: L;
  lore: L;
  detail: L;
}

export const MAP_IMAGE = "/img/campus-map.jpg";

export const CAMPUS: CampusSpot[] = [
  {
    id: "schloss",
    name: { de: "Das Hauptschloss", en: "The Main Castle" },
    level: { de: "Herz der Akademie", en: "Heart of the Academy" },
    x: 50,
    y: 40,
    img: "/img/castle-main.jpg",
    alt: { de: "Das leuchtende Hauptschloss über dem Aethersee", en: "The glowing main castle above the Aethersee" },
    desc: {
      de: "Über vierhundert Räume, sieben Höfe und die Ehrwürdige Treppe, die Neuankömmlinge mit wohlwollendem Knarzen begrüßt. Hier tagt das Kollegium; hier hängen die Porträts aller Direktoren – die meisten schlafen nur vorgeblich.",
      en: "More than four hundred rooms, seven courtyards and the Venerable Staircase, which greets newcomers with a benevolent creak. The faculty convenes here; the portraits of every head hang here – most of them only pretend to sleep.",
    },
    doing: {
      de: "Feierliche Ansprachen, das wöchentliche Kollegium, die Belebung der Statuen am Dienstagmorgen – und das Empfangen jedes Einzelnen am Seefest.",
      en: "Ceremonial addresses, the weekly faculty council, the waking of the statues on Tuesday mornings – and the welcoming of every single newcomer at the Lake Festival.",
    },
    lore: {
      de: "Über dem Haupttor steht Walburgas einzige Bauinschrift: „Stein vergeht. Fragen bleiben.“",
      en: "Above the main gate stands Walburga's only building inscription: “Stone perishes. Questions remain.”",
    },
    detail: {
      de: "Der Kronleuchter der Eingangshalle flüstert jedem Besucher genau einmal seinen Namen zu. Danach schweigt er höflich.",
      en: "The entrance hall chandelier whispers every visitor's name to them exactly once. After that, it politely keeps silent.",
    },
  },
  {
    id: "bibliothek",
    name: { de: "Die Große Bibliothek", en: "The Grand Library" },
    level: { de: "Ebenen −1 bis −7", en: "Floors −1 to −7" },
    x: 38,
    y: 52,
    img: "https://images.pexels.com/photos/36607837/pexels-photo-36607837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Düsterer Regalgang der Großen Bibliothek", en: "Dim shelf aisle of the Grand Library" },
    desc: {
      de: "Sieben Etagen reichen in den Fels – Lesesäle wie Kathedralen, in denen Staubkörner im Licht wie Gold schweben. 890.000 Bände, eine strenge Bibliothekarin und die bequemsten Sessel nördlich der Alpen.",
      en: "Seven floors reach into the rock – reading rooms like cathedrals where dust motes drift like gold. 890,000 volumes, one strict librarian and the most comfortable armchairs north of the Alps.",
    },
    doing: {
      de: "Lernzirkel, Selbststudium bis zur Sperrstunde, das wöchentliche „Kartensortieren der Losbücher“ – und die berühmten Schweigepausen um Mitternacht.",
      en: "Study circles, self-study until curfew, the weekly “sorting of the lot-books” – and the famous midnight silences.",
    },
    lore: {
      de: "Die Bibliothekarin fordert von jedem Erstsemester eine einzige Frage als Leihgebühr für den ersten Band. Sie vergisst keine einzige.",
      en: "The librarian demands a single question from every first-year as the lending fee for their first volume. She forgets none of them.",
    },
    detail: {
      de: "In der Mondbibliothek (Ebene −5) sind manche Bücher nur bei Vollmond lesbar.",
      en: "In the Moon Library (floor −5), some books can only be read under a full moon.",
    },
  },
  {
    id: "labor",
    name: { de: "Das Zaubertranklabor", en: "The Potion Laboratory" },
    level: { de: "Gewölbe unter der Halle", en: "Vaults beneath the Hall" },
    x: 60,
    y: 55,
    img: "https://images.pexels.com/photos/8667533/pexels-photo-8667533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Antike Flaschen im Zaubertranklabor", en: "Antique bottles in the potion laboratory" },
    desc: {
      de: "Kupferkessel, Bergkristallphiolen und ein Belüftungssystem aus dem Jahr 1402, das noch immer tadellos zieht. Professor Snape duldet kein Zögern – und kein Zuviel an Salamanderpuder.",
      en: "Copper cauldrons, rock-crystal phials and a ventilation system from 1402 that still draws perfectly. Professor Snape tolerates no hesitation – and no excess of salamander powder.",
    },
    doing: {
      de: "Tranklehre ab dem zweiten Semester, der Goldene Kessel im Winter – und das legendäre Schweigen, wenn Sechzig Flammen zugleich flackern.",
      en: "Potion tuition from the second semester, the Golden Cauldron in winter – and the legendary hush when sixty flames flicker at once.",
    },
    lore: {
      de: "In das Mauerwerk der Gewölbe sind die Initialen aller Brau-Meister geritzt – ganz unten, fast im Fundament, steht ein einzelnes „W v H“.",
      en: "The initials of every brew-master are carved into the vault masonry – at the very bottom, almost in the foundation, stands a single “W v H”.",
    },
    detail: {
      de: "Kessel Nr. 7 köchelt seit 1523 ununterbrochen. Niemand wagt, ihn abzuschalten.",
      en: "Cauldron No. 7 has been simmering uninterruptedly since 1523. No one dares to switch it off.",
    },
  },
  {
    id: "turm",
    name: { de: "Der Astronomieturm", en: "The Astronomy Tower" },
    level: { de: "96 m über dem See", en: "96 m above the lake" },
    x: 73,
    y: 20,
    img: "https://images.pexels.com/photos/11720316/pexels-photo-11720316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Sternenhimmel über der Sternwarte", en: "Starry sky above the observatory" },
    desc: {
      de: "Der höchste Punkt der Akademie. Von hier aus zählt die Sternenkunde Aetherias zu den exaktesten der Welt – und die Nachtwache zu den beliebtesten Diensten.",
      en: "The Academy's highest point. From up here, Aetheria's astronomy is among the most exact in the world – and night watch among its most beloved duties.",
    },
    doing: {
      de: "Freitägliche Beobachtungsnächte, die Kalibrierung der Karten im Frühjahr, und in klirrend kalten Dezemberwochen die Messreihen der Sonnenwende.",
      en: "Friday observation nights, the calibration of star charts in spring, and in glass-clear December weeks the solstice measurement series.",
    },
    lore: {
      de: "Baumeister Sternenauge baute die große Linse aus einem einzigen Bergkristall, der dreizehn Jahre in einer Gletscherspalte gewartet haben soll.",
      en: "Master builder Sternenauge is said to have ground the great lens from a single rock crystal that had waited thirteen years in a crevasse.",
    },
    detail: {
      de: "Das große Fernrohr zeigt in manchen Nächten Sterne, die erst in tausend Jahren sichtbar sein werden.",
      en: "On some nights, the great telescope shows stars that will not be visible for another thousand years.",
    },
  },
  {
    id: "wald",
    name: { de: "Der Verbotene Wald", en: "The Forbidden Forest" },
    level: { de: "Nur mit Erlaubnis", en: "Entry by permit only" },
    x: 17,
    y: 48,
    img: "/img/forbidden-forest.jpg",
    alt: { de: "Leuchtende Pilze im Verbotenen Wald bei Nacht", en: "Glowing mushrooms in the Forbidden Forest at night" },
    desc: {
      de: "Uralte Fichten, deren Wipfel den Wind seit Jahrhunderten kennen, moosige Lichtung um moosige Lichtung – und im Dunkel tauchen die Pilze des Hains ihr blaues Licht an. Vorrat an Heilkräutern, Zuflucht uralter Wesen, Übungsgelände der Mutigen.",
      en: "Ancient firs whose crowns have known the wind for centuries, mossy clearing upon mossy clearing – and in the dark, the grove's mushrooms switch on their blue light. A store of healing herbs, a refuge of ancient beings, a proving ground for the bold.",
    },
    doing: {
      de: "Geführte Kräuterexkursionen von Haus Grünquell, das Sammeln der Wintersalbei, und im letzten Jahr die Mutprobe „Drei Wege, ein Rückweg“ – stets auf den markierten Pfaden. Fast immer.",
      en: "Guided herb excursions by House Grünquell, the gathering of winter sage, and in the final year the rite of courage “Three paths, one way back” – always on the marked trails. Almost always.",
    },
    lore: {
      de: "An der tiefsten Lichtung steht eine Steinbank ohne Namensschild. Wer sich setzt, soll den Rest des Weges finden, den man sucht – ob man ihn dann auch geht, ist eine andere Geschichte.",
      en: "At the deepest clearing stands a stone bench with no nameplate. Whoever sits down is said to find the rest of the path they are looking for – whether they then walk it is another story.",
    },
    detail: {
      de: "Wer zu tief hineingeht, hört die Föhren flüstern. Es soll Altbairisch sein.",
      en: "Those who venture too deep hear the pines whispering. It is said to be Old Bavarian.",
    },
  },
  {
    id: "halle",
    name: { de: "Die Große Halle", en: "The Great Hall" },
    level: { de: "Hof I", en: "Courtyard I" },
    x: 47,
    y: 58,
    img: "https://images.pexels.com/photos/25401785/pexels-photo-25401785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Festsaal der Großen Halle", en: "Banquet room of the Great Hall" },
    desc: {
      de: "Das Herz der Akademie: fünf Mal täglich verwandelt sich der Saal zwischen Festraum und Esstempel. Vier lange Tafeln für die Häuser, eine quer für das Kollegium – und über allem die verzauberte Decke.",
      en: "The heart of the Academy: five times a day the hall transforms between banqueting room and dining temple. Four long tables for the houses, one crossways for the faculty – and above it all, the enchanted ceiling.",
    },
    doing: {
      de: "Frühstück im Schimmerlicht, die Freitagstafel mit dem Schnitzel der Legende, Festmähler – und die leisen Frühstücke der Nachtwache um vier.",
      en: "Breakfast in the shimmering light, the Friday table with the schnitzel of legend, feast days – and the quiet dawn meals of the night watch at four.",
    },
    lore: {
      de: "Über der Küchentür schnitzte die erste Küchenhexe der Akademie ein Wort in den Sturz: „Gnädig“. Es gilt als ältester erhaltener Spruch des Hauses.",
      en: "Above the kitchen door, the Academy's first kitchen-witch carved a single word into the lintel: “Gracious”. It is considered the house's oldest surviving maxim.",
    },
    detail: {
      de: "Die Decke spiegelt den Himmel über dem Tal – gelegentlich den von morgen.",
      en: "The ceiling mirrors the sky above the valley – occasionally tomorrow's.",
    },
  },
  {
    id: "arena",
    name: { de: "Die Flugball-Arena", en: "The Flightball Arena" },
    level: { de: "Ostufer des Sees", en: "East shore of the lake" },
    x: 80,
    y: 68,
    img: "https://images.pexels.com/photos/28827841/pexels-photo-28827841.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: { de: "Erleuchtete Arena bei Nacht", en: "Floodlit arena at night" },
    desc: {
      de: "Heimat der akademischen Flugball-Liga. Vier Mannschaften kämpfen zur Tagundnachtgleiche um den Walburga-Pokal, der kleiner ist, als alle behaupten.",
      en: "Home of the Academy Flightball League. Four teams contest the Walburga Cup at the equinox – a trophy smaller than everyone claims.",
    },
    doing: {
      de: "Training bei Wind und Wetter, die Tribünenfeste der Häuser und das große Gleichnachts-Match, bei dem selbst der Wald mit den Fahnen rauscht.",
      en: "Training in wind and weather, the stand festivals of the houses, and the great Equinox Match at which even the forest seems to rustle along with the banners.",
    },
    lore: {
      de: "Der Walburga-Pokal wurde ein einziges Mal nicht vergeben: 1602, als beide Finalisten gleichzeitig fielen – und beide Mannschaften bis heute dieselbe Plakette teilen.",
      en: "The Walburga Cup was withheld only once: in 1602, when both finalists fell simultaneously – and both teams share the same plaque to this day.",
    },
    detail: {
      de: "Die goldenen Torringe drehen sich nur, wenn niemand hinschaut. Messungen schlagen fehl.",
      en: "The golden goal rings only rotate when no one is watching. Measurements fail invariably.",
    },
  },
  {
    id: "archive",
    name: { de: "Die Geheimen Archive", en: "The Secret Archives" },
    level: { de: "Ebene −8 (?)", en: "Floor −8 (?)" },
    x: 33,
    y: 74,
    img: "https://images.pexels.com/photos/27236661/pexels-photo-27236661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: { de: "Alte Bücher bei Kerzenlicht in den Archiven", en: "Old books by candlelight in the archives" },
    desc: {
      de: "Irgendwo unter dem Ostflügel. Vier Schlüssel, vier Häuser, ein Eid. Was die Archive bewahren, verrät selbst die Hauschronik nicht – aber jeder Jahrgang kennt jemanden, der jemanden kennt.",
      en: "Somewhere beneath the East Wing. Four keys, four houses, one oath. What the archives hold, not even the house chronicle reveals – but every year knows someone who knows someone.",
    },
    doing: {
      de: "Einmal im Jahr, zur Wintersonnenwende, übergeben die vier Hauslehrer ihre Schlüssel füreinander aus – eine Geste, die älter ist als die meisten Regeln.",
      en: "Once a year, at the winter solstice, the four house teachers pass their keys to one another – a gesture older than most rules.",
    },
    lore: {
      de: "In der Kartei steht ein einziger nicht numerierter Eintrag: „Zurückzugeben bei Vollendung.“ Welcher Gegenstand gemeint ist, weiß niemand mehr.",
      en: "The catalogue holds a single unnumbered entry: “To be returned upon completion.” Which object is meant, no one remembers any more.",
    },
    detail: {
      de: "Die fünfte Tür hat weder Griff noch Schloss. Sie öffnet sich, heißt es, für eine Frage, die noch nie gestellt wurde.",
      en: "The fifth door has neither handle nor lock. It is said to open for a question that has never been asked.",
    },
  },
];

/* ================================================================== */
/*  SCENIC IMAGES (shared)                                             */
/* ================================================================== */
export const IMG = {
  hero: "/img/hero-castle.jpg",
  academyCastle: "/img/castle-main.jpg",
  alpsLake:
    "https://images.pexels.com/photos/29863117/pexels-photo-29863117.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  regaliaMain: "/img/regalia-main.jpg",
  regaliaDetail: "/img/regalia-detail.jpg",
  forestFog:
    "https://images.pexels.com/photos/12363164/pexels-photo-12363164.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};
