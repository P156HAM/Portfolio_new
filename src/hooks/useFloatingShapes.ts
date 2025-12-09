import { useEffect, useRef } from "react";
import { useMousePosition } from "./useMousePosition";

export const useFloatingShapes = (count: number = 6) => {
  const floatingShapesRef = useRef<(HTMLDivElement | null)[]>([]);
  const mousePos = useMousePosition();

  useEffect(() => {
    if (floatingShapesRef.current.length === 0) {
      floatingShapesRef.current = Array(count).fill(null);
    }
  }, [count]);

  useEffect(() => {
    const handleMouseMove = () => {
      floatingShapesRef.current.forEach((shape, i) => {
        if (shape) {
          const speed = (i + 1) * 0.015;
          const x = (mousePos.x - window.innerWidth / 2) * speed;
          const y = (mousePos.y - window.innerHeight / 2) * speed;
          // Store mouse position in CSS variables for use in animations
          shape.style.setProperty('--mouse-x', `${x}px`);
          shape.style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };

    handleMouseMove();
  }, [mousePos, count]);

  return floatingShapesRef;
};

