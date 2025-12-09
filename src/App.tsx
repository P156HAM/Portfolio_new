import { useState, useEffect } from "react";
import { THEMES, PROJECTS, LOADING_DELAY } from "@/constants";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useFloatingShapes } from "@/hooks/useFloatingShapes";
import { useParticles } from "@/hooks/useParticles";
import { useLuckyMode } from "@/hooks/useLuckyMode";
import { useMousePosition } from "@/hooks/useMousePosition";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { Particles } from "@/components/effects/Particles";
import { FloatingShapes } from "@/components/effects/FloatingShapes";
import { LuckyModeOverlays } from "@/components/effects/LuckyModeOverlays";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Loading } from "@/components/sections/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const { cursorRef, cursorSize, setCursorSize } = useCustomCursor();
  const floatingShapesRef = useFloatingShapes(6);
  const mousePos = useMousePosition();
  const {
    luckyMode,
    theme,
    hoveredProject,
    setHoveredProject,
    handleLuckyClick,
  } = useLuckyMode(PROJECTS);
  const particles = useParticles(luckyMode);

  useEffect(() => {
    setTimeout(() => setLoading(false), LOADING_DELAY);
  }, []);

  const currentTheme = THEMES[theme];

  const handleCursorEnter = () => setCursorSize(80);
  const handleCursorLeave = () => setCursorSize(24);

  return (
    <div
      className={`relative w-full ${currentTheme.bg} ${currentTheme.text} overflow-hidden transition-colors duration-1000`}
    >
      <CustomCursor cursorRef={cursorRef} cursorSize={cursorSize} />
      <Particles particles={particles} luckyMode={luckyMode} />
      <FloatingShapes floatingShapesRef={floatingShapesRef} />
      <LuckyModeOverlays luckyMode={luckyMode} />

      <div className="relative z-10">
        <Navigation theme={currentTheme} onLuckyClick={handleLuckyClick} />
        <Hero
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />
        <Work
          projects={PROJECTS}
          hoveredProject={hoveredProject}
          mousePos={mousePos}
          onProjectHover={setHoveredProject}
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
          theme={currentTheme}
        />
        <About theme={currentTheme} />
        <Contact />
        <Footer />
      </div>

      <Loading isLoading={loading} />
    </div>
  );
}

export default App;
