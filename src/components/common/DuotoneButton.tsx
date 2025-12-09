import { ReactNode, MouseEventHandler, useRef, useEffect, useState } from "react";
import { MousePosition } from "@/types";

interface DuotoneButtonProps {
  children: ReactNode;
  baseColor: string;
  topColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  intensity?: number;
  variant?: "primary" | "secondary" | "lucky";
}

export const DuotoneButton = ({
  children,
  baseColor,
  topColor,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = "",
  intensity = 2,
  variant = "primary",
}: DuotoneButtonProps) => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const maxOffset = 6; // Maximum pixel offset

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (buttonRef.current && isHovered) {
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        // Calculate offset with reduced sensitivity relative to button size
        const buttonWidth = rect.width || 1;
        const buttonHeight = rect.height || 1;
        const rawOffsetX = (distanceX / buttonWidth) * intensity * 15;
        const rawOffsetY = (distanceY / buttonHeight) * intensity * 15;
        
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

  const baseClasses = "font-bold rounded-full transition-all shadow-lg relative overflow-hidden";
  
  const variantClasses = {
    primary: "px-10 py-5 text-white text-lg hover:scale-110 hover:rotate-2 shadow-2xl",
    secondary: "px-10 py-5 border-4 text-lg hover:scale-110 hover:-rotate-2",
    lucky: "px-6 py-2 text-white text-sm hover:scale-110",
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter?.();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
        onMouseLeave?.();
      }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* Base layer - static */}
      <span
        className="absolute inset-0 z-0"
        style={{
          background: baseColor,
          borderRadius: "inherit",
        }}
      />
      
      {/* Top layer - moves opposite to mouse */}
      <span
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: topColor,
          borderRadius: "inherit",
          transform: `translate(${-offsetX}px, ${-offsetY}px)`,
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          mixBlendMode: "multiply",
        }}
      />
      
      {/* Content */}
      <span className="relative z-20">{children}</span>
    </button>
  );
};

