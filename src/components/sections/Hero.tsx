import { DuotoneButton } from "../common/DuotoneButton";
import { Badge } from "../common/Badge";
import { DuotoneText } from "../common/DuotoneText";

interface HeroProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

export const Hero = ({ onCursorEnter, onCursorLeave }: HeroProps) => {
  const handleScrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-32 relative">
      <div className="max-w-6xl w-full text-center">
        <Badge
          icon="✨"
          className="mb-4 sm:mb-6 md:mb-8 animate-bounce text-xs sm:text-sm"
        >
          Available for projects
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-none">
          {["C", "r", "e", "a", "t", "i", "v", "e"].map((letter, i) => (
            <DuotoneText
              key={i}
              baseColor="#8a2be2"
              topColor="#ff0080"
              className={`inline-block transition-transform duration-300 cursor-default ${
                i % 2 === 0 ? "hover:rotate-12" : "hover:-rotate-6"
              }`}
            >
              {letter}
            </DuotoneText>
          ))}
          <br />
          {["D", "e", "v", "e", "l", "o", "p", "e", "r"].map((letter, i) => (
            <DuotoneText
              key={i}
              baseColor="#8a2be2"
              topColor="#00ffff"
              className={`inline-block transition-transform duration-300 cursor-default ${
                i % 2 === 0 ? "hover:rotate-12" : "hover:-rotate-6"
              }`}
            >
              {letter}
            </DuotoneText>
          ))}
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
          I craft delightful digital experiences that blend
          <strong className="font-bold text-purple-600"> art</strong>,
          <strong className="font-bold text-cyan-600"> code</strong>, and
          <strong className="font-bold text-pink-600"> innovation</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-14 md:mb-16 px-4">
          <DuotoneButton
            variant="primary"
            baseColor="#8a2be2"
            topColor="#ff0080"
            onClick={handleScrollToWork}
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
            className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5"
          >
            See My Work ✨
          </DuotoneButton>
          <DuotoneButton
            variant="primary"
            baseColor="#00ffff"
            topColor="#8a2be2"
            onClick={handleScrollToContact}
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
            className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5"
          >
            Let's Talk 💬
          </DuotoneButton>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
