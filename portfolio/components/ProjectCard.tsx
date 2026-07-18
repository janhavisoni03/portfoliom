"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FlaskConical } from "lucide-react";
import type { PROJECTS } from "@/lib/constants";

type Project = (typeof PROJECTS)[number];

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: py * -8, y: px * 8 });
  };

  const reset = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        data-cursor="hover"
        onMouseMove={handleMove}
        onMouseLeave={reset}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="glass-panel group relative overflow-hidden p-7"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal-teal/10 blur-3xl transition group-hover:bg-signal-teal/20" />

        <div className="relative flex items-start justify-between gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-signal-teal/20 to-signal-cyan/10 text-signal-teal">
            <FlaskConical size={20} />
          </span>
          <span className="font-mono text-xs text-slate-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="relative mt-5 font-display text-lg font-semibold text-white sm:text-xl">
          {project.title}
        </h3>
        <p className="relative mt-3 text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        <ul className="relative mt-4 space-y-2">
          {project.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-slate-400">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-signal-teal" />
              {point}
            </li>
          ))}
        </ul>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-glass-border bg-white/5 px-3 py-1 text-xs text-signal-cyan"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
