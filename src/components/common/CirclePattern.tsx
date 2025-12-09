import { useEffect, useState } from "react";
import { CIRCLE_PATTERN_COLS, CIRCLE_PATTERN_ROWS } from "@/constants";

interface CirclePatternProps {
  color: string;
  className?: string;
}

export const CirclePattern = ({
  color,
  className = "",
}: CirclePatternProps) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Start at 100% opacity and fade to 0
    const interval = setInterval(() => {
      setOpacity((prev) => {
        const newOpacity = Math.max(0, prev - 0.02);
        if (newOpacity === 0) {
          clearInterval(interval);
        }
        return newOpacity;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{
        opacity,
        transition: "opacity 0.05s ease-out",
      }}
    >
      <div className="grid grid-cols-8 gap-1 sm:gap-2 p-2 sm:p-4 h-full w-full">
        {Array.from({ length: CIRCLE_PATTERN_COLS * CIRCLE_PATTERN_ROWS }).map(
          (_, i) => (
            <div
              key={i}
              className="w-full aspect-square rounded-full"
              style={{
                backgroundColor: color,
                opacity: 0.4,
              }}
            />
          )
        )}
      </div>
    </div>
  );
};
