import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import SectionReveal from "./SectionReveal";
import CountUp from "./CountUp";
import { PERSONAL, STATS, EDUCATION } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-28">
      <SectionReveal className="text-center">
        <span className="section-eyebrow">Critical Control Point 02 &middot; About</span>
        <h2 className="section-heading mt-4">
          The professional behind the <span className="gradient-text">quality checks</span>
        </h2>
      </SectionReveal>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <SectionReveal delay={0.1} className="glass-panel lg:col-span-3 p-8">
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {PERSONAL.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-signal-teal" /> {PERSONAL.location}
            </span>
            <span className="flex items-center gap-2">
              <Phone size={15} className="text-signal-teal" /> {PERSONAL.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={15} className="text-signal-teal" /> {PERSONAL.email}
            </span>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
              <GraduationCap size={18} className="text-signal-teal" /> Education
            </h3>
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-xl border border-glass-border bg-white/[0.03] p-4"
              >
                <p className="font-medium text-white">{edu.degree}</p>
                <p className="mt-1 text-sm text-signal-teal">{edu.institution}</p>
                <p className="mt-1 text-xs font-mono text-slate-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 gap-6 lg:col-span-2">
          {STATS.map((stat, i) => (
            <SectionReveal
              key={stat.label}
              delay={0.15 + i * 0.08}
              className="glass-panel flex flex-col items-center justify-center gap-2 p-6 text-center transition hover:shadow-glow-teal"
            >
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-slate-400 sm:text-sm">{stat.label}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
