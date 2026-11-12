import { LanguageProvider } from "./i18n";
import { MagicCursor } from "./components/ui";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Academy from "./components/Academy";
import Houses from "./components/Houses";
import Professors from "./components/Professors";
import StudentLife from "./components/StudentLife";
import Campus from "./components/Campus";
import Admissions from "./components/Admissions";
import Archives from "./components/Archives";
import Credits from "./components/Credits";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-midnight text-parchment">
        <div className="grain" aria-hidden="true" />
        <MagicCursor />
        <Navbar />
        <main>
          <Hero />
          <Academy />
          <Houses />
          <Professors />
          <StudentLife />
          <Campus />
          <Admissions />
          <Archives />
        </main>
        <Credits />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
