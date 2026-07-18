"use client";

import { motion } from "framer-motion";

/**
 * Fixed, decorative backdrop: layered aurora gradients + a faint measurement
 * grid (nodding to lab/process-control instrumentation) + slow-floating orbs.
 * Pointer-events disabled throughout so it never intercepts interaction.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base-950"
    >
      <div className="absolute inset-0 bg-aurora-1" />
      <div className="absolute inset-0 bg-aurora-2" />
      <div className="absolute inset-0 bg-aurora-3" />
      <div className="absolute inset-0 bg-grid-lines bg-[size:64px_64px] opacity-[0.4] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <motion.div
        className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-signal-teal/20 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-6rem] top-1/3 h-96 w-96 rounded-full bg-signal-cyan/15 blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, -25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-signal-amber/10 blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-950/40 to-base-950" />
    </div>
  );
}
