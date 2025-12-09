import { DuotoneText } from "./DuotoneText";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Logo container with background accent */}
      <div className="relative">
        {/* Decorative background shape */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-500/20 rounded-lg blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300" />

        {/* Main logo text with duotone effect */}
        <div className="relative flex items-center gap-1">
          <DuotoneText
            baseColor="#8a2be2"
            topColor="#ff0080"
            className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight"
            intensity={1}
            maxOffset={2}
          >
            HA
          </DuotoneText>

          {/* Decorative dot/period */}
          <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3">
            <div
              className="absolute inset-0 rounded-full bg-purple-600"
              style={{
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            />
            <div
              className="absolute inset-0 rounded-full bg-pink-500 opacity-75"
              style={{
                animation:
                  "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.5s",
              }}
            />
          </div>
        </div>

        {/* Underline accent */}
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-full opacity-60" />
      </div>
    </div>
  );
};
