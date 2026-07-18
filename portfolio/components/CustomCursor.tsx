"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useHoverCapable } from "@/hooks/useHoverCapable";

/**
 * Replaces the native cursor with a two-part glowing dot + trailing ring on
 * hover-capable (non-touch) devices. Automatically inflates over anything
 * carrying data-cursor="hover" (links, buttons, cards).
 */
export default function CustomCursor() {
  const capable = useHoverCapable();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const ringX = useSpring(x, springConfig);
  const ringY = useSpring(y, springConfig);

  useEffect(() => {
    if (!capable) return;
    document.body.classList.add("cursor-enabled");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
    };

    const overHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('[data-cursor="hover"]'));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overHandler);
    return () => {
      document.body.classList.remove("cursor-enabled");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overHandler);
    };
  }, [capable, x, y]);

  if (!capable || !isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-signal-teal"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] rounded-full border border-signal-teal/60"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          backgroundColor: isHovering
            ? "rgba(45,212,191,0.08)"
            : "rgba(45,212,191,0)",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
