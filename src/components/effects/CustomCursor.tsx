import { RefObject } from "react";

interface CustomCursorProps {
  cursorRef: RefObject<HTMLDivElement>;
  cursorSize: number;
}

export const CustomCursor = ({ cursorRef, cursorSize }: CustomCursorProps) => {
  return (
    <div
      ref={cursorRef}
      className="fixed w-6 h-6 border-2 border-purple-600 rounded-full pointer-events-none z-50 transition-all duration-150 mix-blend-difference"
      style={{
        width: cursorSize + "px",
        height: cursorSize + "px",
        transform: "translate(-50%, -50%)",
        boxShadow: `0 0 ${cursorSize}px rgba(138, 43, 226, 0.5)`,
      }}
    />
  );
};

