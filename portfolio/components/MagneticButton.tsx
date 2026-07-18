"use client";

import { useRef, useState, type ReactNode, type ElementType } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  as?: ElementType;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
}

/** Button/link that subtly pulls toward the cursor within its bounds. */
export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  as,
  target,
  rel,
  type,
  disabled,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.35, y: relY * 0.35 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const Component = (as ?? (href ? "a" : "button")) as ElementType;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
      data-cursor="hover"
    >
      <Component
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        type={type}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-colors",
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    </motion.div>
  );
}
