import { Particle, LuckyMode } from "@/types";

interface ParticlesProps {
  particles: Particle[];
  luckyMode: LuckyMode;
}

export const Particles = ({ particles, luckyMode }: ParticlesProps) => {
  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: luckyMode === "confetti" ? "2px" : "50%",
            transform: `rotate(${p.rotation}deg)`,
            opacity: 0.8,
          }}
        />
      ))}
    </>
  );
};

