import { ReactNode, useRef, useEffect, useState, CSSProperties } from "react";
import { MousePosition } from "@/types";

interface DuotoneCardProps {
  children: ReactNode;
  baseColor: string;
  topColor: string;
  className?: string;
  intensity?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  style?: CSSProperties;
}

export const DuotoneCard = ({
  children,
  baseColor,
  topColor,
  className = "",
  intensity = 3,
  onMouseEnter,
  onMouseLeave,
  onClick,
  style,
}: DuotoneCardProps) => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const maxOffset = 7; // Maximum pixel offset

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current && isHovered) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        // Calculate offset with reduced sensitivity relative to card size
        const cardWidth = rect.width || 1;
        const cardHeight = rect.height || 1;
        const rawOffsetX = (distanceX / cardWidth) * intensity * 25;
        const rawOffsetY = (distanceY / cardHeight) * intensity * 25;
        
        // Clamp the offset to maxOffset
        setMousePos({
          x: Math.max(-maxOffset, Math.min(maxOffset, rawOffsetX)),
          y: Math.max(-maxOffset, Math.min(maxOffset, rawOffsetY)),
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered, intensity, maxOffset]);

  const offsetX = mousePos.x;
  const offsetY = mousePos.y;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter?.();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
        onMouseLeave?.();
      }}
      onClick={handleClick}
      style={{ isolation: "isolate", overflow: "hidden", ...style }}
    >
      {/* Base layer - static */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: baseColor,
          borderRadius: "inherit",
        }}
      />
      
      {/* Top layer - moves opposite to mouse */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundColor: topColor,
          borderRadius: "inherit",
          transform: `translate(${-offsetX}px, ${-offsetY}px)`,
          transition: "transform 0.2s ease-out",
          mixBlendMode: "multiply",
        }}
      />
      
      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

