"use client";

import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { PERSONAL, SOCIALS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mx-auto max-w-6xl px-4 pb-10">
      <div className="glass-panel flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            {PERSONAL.name}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            &copy; {year} {PERSONAL.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
        
            { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
            { icon: Mail, href: SOCIALS.email, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <MagneticButton
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border bg-white/5 text-slate-300 transition hover:border-signal-teal/60 hover:text-signal-teal"
            >
              <Icon size={14} />
            </MagneticButton>
          ))}

          <MagneticButton
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-signal-teal text-base-950 transition hover:bg-signal-cyan"
          >
            <ArrowUp size={14} />
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
