import { useEffect, useState } from "react";
import { Particle, LuckyMode } from "@/types";
import {
  PARTICLE_COLORS,
  PARTICLE_INTERVAL,
  PARTICLE_COUNT,
  MAX_PARTICLES,
} from "@/constants";

export const useParticles = (luckyMode: LuckyMode) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (luckyMode === "particles" || luckyMode === "confetti") {
      const interval = setInterval(() => {
        setParticles((prev) => {
          const newParticles: Particle[] = Array.from(
            { length: PARTICLE_COUNT },
            (_, i) => ({
              id: Date.now() + i,
              x: Math.random() * window.innerWidth,
              y: -10,
              vx: (Math.random() - 0.5) * 2,
              vy: Math.random() * 3 + 2,
              size: Math.random() * 8 + 4,
              color: PARTICLE_COLORS[
                Math.floor(Math.random() * PARTICLE_COLORS.length)
              ],
              rotation: Math.random() * 360,
              rotationSpeed: (Math.random() - 0.5) * 10,
            })
          );
          return [...prev.slice(-MAX_PARTICLES), ...newParticles];
        });
      }, PARTICLE_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [luckyMode]);

  useEffect(() => {
    if (particles.length > 0) {
      const animationFrame = requestAnimationFrame(() => {
        setParticles((prev) =>
          prev
            .map((p) => ({
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy,
              rotation: p.rotation + p.rotationSpeed,
            }))
            .filter(
              (p) =>
                p.y < window.innerHeight + 50 &&
                p.x > -50 &&
                p.x < window.innerWidth + 50
            )
        );
      });
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [particles]);

  return particles;
};

