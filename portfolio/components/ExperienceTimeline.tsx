"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { EXPERIENCE } from "@/lib/constants";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-4 py-28">
      <SectionReveal className="text-center">
        <span className="section-eyebrow">Critical Control Point 05 &middot; Experience</span>
        <h2 className="section-heading mt-4">
          Where the <span className="gradient-text">monitoring happened</span>
        </h2>
      </SectionReveal>

      <div className="relative mt-16">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-signal-teal/60 via-glass-border to-transparent sm:left-1/2" />

        <div className="space-y-14">
          {EXPERIENCE.map((job, i) => (
            <div
              key={job.company}
              className={`relative flex flex-col gap-6 sm:flex-row ${
                i % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="absolute left-4 top-1.5 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-signal-teal shadow-glow-teal sm:left-1/2"
              >
                <span className="absolute h-4 w-4 animate-pulse-ring rounded-full" />
              </motion.span>

              <div className="pl-10 sm:w-1/2 sm:pl-0" />

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="glass-panel ml-10 p-6 sm:ml-0 sm:w-1/2"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-signal-amber">
                  {job.period}
                </div>
                <h3 className="mt-2 flex items-center gap-2 font-display text-lg font-semibold text-white">
                  <Briefcase size={16} className="text-signal-teal" />
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-signal-cyan">{job.company}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                  <MapPin size={12} /> {job.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-teal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
