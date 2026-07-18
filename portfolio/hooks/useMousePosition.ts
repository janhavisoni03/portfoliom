"use client";

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

/** Tracks the viewport-relative mouse position for ambient glow / cursor effects. */
export function useMousePosition(): Position {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
