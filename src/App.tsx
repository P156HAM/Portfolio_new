import { useTheme } from "@/hooks/useTheme";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <div className="noise" aria-hidden="true" />
      <Navigation theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
