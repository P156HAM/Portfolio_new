import { LuckyMode } from "@/types";
import { useRef, useEffect } from "react";

interface LuckyModeOverlaysProps {
  luckyMode: LuckyMode;
}

export const LuckyModeOverlays = ({ luckyMode }: LuckyModeOverlaysProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix rain effect
  useEffect(() => {
    if (luckyMode === "matrix" && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const chars =
        "0110001010101010101100101010101010101000101010101010010101100101010101010101010101100001010101";
      const fontSize = 14;
      const columns = canvas.width / fontSize;
      const drops: number[] = Array(Math.floor(columns)).fill(1);

      const draw = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff41";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      const interval = setInterval(draw, 35);
      return () => clearInterval(interval);
    }
  }, [luckyMode]);

  if (luckyMode === "matrix") {
    return (
      <div className="fixed inset-0 z-30 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full opacity-80" />
      </div>
    );
  }

  if (luckyMode === "glitch") {
    return (
      <div className="fixed inset-0 z-30 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-r from-red-500/40 via-green-500/40 to-blue-500/40"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            animation: "glitch 0.3s infinite",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-red-500/40 to-green-500/40"
          style={{
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            animation: "glitch 0.3s infinite 0.15s",
          }}
        />
      </div>
    );
  }

  if (luckyMode === "kaleidoscope") {
    return (
      <div className="fixed inset-0 z-30 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from ${
                i * 30
              }deg, #8a2be2, #ff0080, #00ffff, #8a2be2)`,
              opacity: 0.2,
              transform: `rotate(${i * 30}deg)`,
              animation: "spin 20s linear infinite",
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};
