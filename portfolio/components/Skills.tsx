"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { CORE_SKILLS, SKILL_CATEGORIES, TECHNICAL_SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-28">
      <SectionReveal className="text-center">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-heading mt-4">
          Every check, <span className="gradient-text">covered</span>
        </h2>
      </SectionReveal>

      {/* Floating core-skill chips */}
      <SectionReveal delay={0.1} className="mt-14 flex flex-wrap justify-center gap-3">
        {CORE_SKILLS.map((skill, i) => (
          <motion.span
            key={skill}
            data-cursor="hover"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.05 }}
            className="animate-float rounded-full border border-glass-border bg-white/5 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur-xl transition hover:border-signal-teal/60 hover:text-signal-teal sm:text-sm"
            style={{ animationDelay: `${(i % 6) * 0.6}s` }}
          >
            {skill}
          </motion.span>
        ))}
      </SectionReveal>

      {/* Category grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((cat, i) => (
          <SectionReveal
            key={cat.title}
            delay={i * 0.08}
            className="glass-panel p-6 transition hover:shadow-glow-cyan"
          >
            <h3 className="font-display text-base font-semibold text-signal-cyan">
              {cat.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </SectionReveal>
        ))}
      </div>

      {/* Technical proficiency bars */}
      <SectionReveal delay={0.2} className="glass-panel mt-10 p-8">
        <h3 className="font-display text-base font-semibold text-white">
          Technical Proficiency
        </h3>
        <div className="mt-6 space-y-5">
          {TECHNICAL_SKILLS.map((skill, i) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-300">{skill.name}</span>
                <span className="font-mono text-signal-teal">{skill.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-signal-teal to-signal-cyan"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
