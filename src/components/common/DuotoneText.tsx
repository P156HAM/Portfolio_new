import { ReactNode, useRef, useEffect, useState } from "react";
import { MousePosition } from "@/types";

interface DuotoneTextProps {
  children: ReactNode;
  baseColor: string;
  topColor: string;
  className?: string;
  intensity?: number;
  maxOffset?: number;
}

export const DuotoneText = ({
  children,
  baseColor,
  topColor,
  className = "",
  intensity = 3,
  maxOffset = 5,
}: DuotoneTextProps) => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Calculate offset with reduced sensitivity
        const rawOffsetX = (distanceX / window.innerWidth) * intensity * 80;
        const rawOffsetY = (distanceY / window.innerHeight) * intensity * 80;

        // Clamp the offset to maxOffset
        setMousePos({
          x: Math.max(-maxOffset, Math.min(maxOffset, rawOffsetX)),
          y: Math.max(-maxOffset, Math.min(maxOffset, rawOffsetY)),
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity, maxOffset]);

  const offsetX = mousePos.x;
  const offsetY = mousePos.y;

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* Base layer - static */}
      <span
        className="relative z-0 inline-block"
        style={{
          color: baseColor,
        }}
      >
        {children}
      </span>

      {/* Top layer - moves opposite to mouse */}
      <span
        className="absolute inset-0 z-10 pointer-events-none inline-block"
        style={{
          color: topColor,
          transform: `translate(${-offsetX}px, ${-offsetY}px)`,
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          mixBlendMode: "multiply",
        }}
      >
        {children}
      </span>
    </div>
  );
};
