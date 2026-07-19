"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Github, Linkedin, Twitter } from "lucide-react";
import SectionReveal from "./SectionReveal";
import MagneticButton from "./MagneticButton";
import { PERSONAL, SOCIALS } from "@/lib/constants";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // NOTE: this demo submits nowhere on its own. Wire it up to a real
  // endpoint (an API route calling Resend/SendGrid, or a service like
  // Formspree) before deploying to production.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      window.setTimeout(() => setStatus("idle"), 2500);
    }, 1200);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-4 py-28">
      <SectionReveal className="text-center">
        <span className="section-eyebrow">Critical Control Point 07 &middot; Contact</span>
        <h2 className="section-heading mt-4">
          Let&apos;s talk about <span className="gradient-text">quality</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
          Open to food safety and Quality Management roles. Reach out any time.
        </p>
      </SectionReveal>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <SectionReveal delay={0.1} className="glass-panel space-y-6 p-6 lg:col-span-2">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal-teal/10 text-signal-teal">
              <Mail size={16} />
            </span>
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <a
                href={SOCIALS.email}
                data-cursor="hover"
                className="text-sm text-white transition hover:text-signal-teal"
              >
                {PERSONAL.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal-teal/10 text-signal-teal">
              <Phone size={16} />
            </span>
            <div>
              <p className="text-xs text-slate-400">Phone</p>
              <p className="text-sm text-white">{PERSONAL.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal-teal/10 text-signal-teal">
              <MapPin size={16} />
            </span>
            <div>
              <p className="text-xs text-slate-400">Location</p>
              <p className="text-sm text-white">{PERSONAL.location}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
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
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2} className="glass-panel p-6 lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-slate-400">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-signal-teal/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-slate-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-signal-teal/60"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-glass-border bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-signal-teal/60"
                placeholder="How can I help?"
              />
            </div>

            <MagneticButton
              as="button"
              type="submit"
              disabled={status !== "idle"}
              className="w-full justify-center rounded-full bg-signal-teal px-6 py-3 text-sm font-semibold text-base-950 transition hover:bg-signal-cyan disabled:opacity-60"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Send size={15} /> Send Message
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Sending&hellip;
                  </motion.span>
                )}
                {status === "sent" && (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={15} /> Message Sent
                  </motion.span>
                )}
              </AnimatePresence>
            </MagneticButton>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
