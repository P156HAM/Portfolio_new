import { useState } from "react";
import { ThemeConfig } from "@/types";
import { DuotoneButton } from "../common/DuotoneButton";
import { Logo } from "../common/Logo";

interface NavigationProps {
  theme: ThemeConfig;
  onLuckyClick: () => void;
}

export const Navigation = ({ theme, onLuckyClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 ${theme.bg}/80 backdrop-blur-md border-b border-gray-200 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          <a
            href="#work"
            className="text-sm font-semibold hover:text-purple-600 transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-sm font-semibold hover:text-purple-600 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold hover:text-purple-600 transition-colors"
          >
            Contact
          </a>
          <DuotoneButton
            variant="lucky"
            baseColor="#8a2be2"
            topColor="#ff0080"
            onClick={onLuckyClick}
            className="text-xs sm:text-sm"
          >
            🎲 I Feel Lucky
          </DuotoneButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 ${
          theme.bg
        } border-b border-gray-200 transition-all duration-300 ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 py-6">
          <a
            href="#work"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm font-semibold hover:text-purple-600 transition-colors py-2"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm font-semibold hover:text-purple-600 transition-colors py-2"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm font-semibold hover:text-purple-600 transition-colors py-2"
          >
            Contact
          </a>
          <DuotoneButton
            variant="lucky"
            baseColor="#8a2be2"
            topColor="#ff0080"
            onClick={() => {
              onLuckyClick();
              setIsMenuOpen(false);
            }}
            className="w-full text-sm"
          >
            🎲 I Feel Lucky
          </DuotoneButton>
        </div>
      </div>
    </nav>
  );
};
