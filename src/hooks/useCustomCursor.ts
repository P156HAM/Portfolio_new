import { useEffect, useRef, useState } from "react";
import { useMousePosition } from "./useMousePosition";

export const useCustomCursor = () => {
  const [cursorSize, setCursorSize] = useState(24);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useMousePosition();

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = mousePos.x + "px";
      cursorRef.current.style.top = mousePos.y + "px";
    }
  }, [mousePos]);

  return { cursorRef, cursorSize, setCursorSize };
};

