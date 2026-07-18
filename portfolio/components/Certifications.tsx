"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { CERTIFICATIONS } from "@/lib/constants";

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-5xl px-4 py-28">
      <SectionReveal className="text-center">
        <span className="section-eyebrow">Critical Control Point 06 &middot; Certifications</span>
        <h2 className="section-heading mt-4">
          Verified <span className="gradient-text">credentials</span>
        </h2>
      </SectionReveal>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert, i) => (
          <SectionReveal key={cert.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              data-cursor="hover"
              className="glass-panel group relative overflow-hidden p-8 text-center transition hover:shadow-glow-amber"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-signal-teal via-signal-cyan to-signal-amber opacity-70" />
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-signal-amber/10 text-signal-amber">
                <Award size={26} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{cert.issuer}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-white/5 px-3 py-1.5 text-xs font-mono text-signal-teal">
                <ShieldCheck size={13} />
                Verified
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
