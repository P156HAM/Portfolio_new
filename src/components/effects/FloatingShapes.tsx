import { RefObject } from "react";
import React from "react";
import { FLOATING_SHAPE_COLORS } from "@/constants";

interface FloatingShapesProps {
  floatingShapesRef: RefObject<(HTMLDivElement | null)[]>;
  count?: number;
}

export const FloatingShapes = ({
  floatingShapesRef,
  count = 6,
}: FloatingShapesProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (floatingShapesRef.current) {
              floatingShapesRef.current[i] = el;
            }
          }}
          className="absolute"
          style={{
            top: `${10 + i * 15}%`,
            left: `${5 + i * 12}%`,
            transform: `translate(var(--mouse-x, 0px), var(--mouse-y, 0px))`,
            transition: "transform 0.3s ease-out",
          } as React.CSSProperties}
        >
          <div
            className="opacity-20 floating-shape"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              border: `2px solid ${FLOATING_SHAPE_COLORS[i] || FLOATING_SHAPE_COLORS[0]}`,
              borderRadius: i % 2 === 0 ? "50%" : "0%",
              animation: `floatShape ${3 + i * 0.5}s ease-in-out infinite, pulseShape ${2 + i * 0.3}s ease-in-out infinite, morphShape ${4 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            } as React.CSSProperties}
          />
        </div>
      ))}
    </div>
  );
};

