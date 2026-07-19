"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { PERSONAL, SOCIALS } from "@/lib/constants";
import maanu from "@/public/maanu.png";
import Image from "next/image";

function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PERSONAL.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-8 overflow-hidden sm:h-9">
      <AnimatePresence mode="wait">
        <motion.p
          key={PERSONAL.roles[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="font-mono text-base font-medium text-signal-teal sm:text-lg"
        >
          {PERSONAL.roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

const SOCIAL_ICONS = [
 
  { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
  { icon: Mail, href: SOCIALS.email, label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            Critical Control Point 01 &middot; Introduction
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m <span className="gradient-text">Manvendra</span>
            <br />Ensuring food safety through quality excellence.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 flex justify-center md:justify-start"
          >
            <RoleCycler />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-5 max-w-xl text-balance text-sm leading-relaxed text-slate-300 sm:text-base md:mx-0"
          >
            {PERSONAL.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <MagneticButton
              href="/Manvendra_Chaturvedi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-signal-teal px-6 py-3 text-sm font-semibold text-base-950 shadow-glow-teal transition hover:bg-signal-cyan"
            >
              <Download size={16} />
              Download Resume
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="rounded-full border border-glass-border bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-signal-teal/60"
            >
              <Mail size={16} />
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-3 md:justify-start"
          >
            {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
              <MagneticButton
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-white/5 text-slate-300 backdrop-blur-xl transition hover:border-signal-teal/60 hover:text-signal-teal"
              >
                <Icon size={16} />
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-1 mx-auto md:order-2"
        >
          <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-signal-teal via-signal-cyan to-signal-amber opacity-70 blur-md"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-[6px] rounded-full bg-base-950" />
           <div className="glass-panel absolute inset-3 overflow-hidden rounded-full">
  <Image
    src={maanu}
    alt="Manvendra Chaturvedi"
    fill
    className="object-cover"
    priority
  />
</div>
            <motion.div
              className="absolute -right-2 top-6 flex items-center gap-2 rounded-full border border-glass-border bg-glass-fill px-3 py-1.5 text-xs font-mono text-signal-teal backdrop-blur-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-1.5 w-1.5 animate-pulse-ring rounded-full bg-signal-teal" />
              HACCP Verified
            </motion.div>
            <motion.div
              className="absolute -left-4 bottom-8 rounded-full border border-glass-border bg-glass-fill px-3 py-1.5 text-xs font-mono text-signal-cyan backdrop-blur-xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              FSSC 22000
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor="hover"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
