import { RefObject } from "react";
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
          className="absolute opacity-20"
          style={{
            width: `${200 + i * 50}px`,
            height: `${200 + i * 50}px`,
            top: `${10 + i * 15}%`,
            left: `${5 + i * 12}%`,
            border: `2px solid ${FLOATING_SHAPE_COLORS[i] || FLOATING_SHAPE_COLORS[0]}`,
            borderRadius: i % 2 === 0 ? "50%" : "0%",
            transform: `rotate(${i * 45}deg)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      ))}
    </div>
  );
};

