"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Approach", value: "AI-Assisted" },
  { label: "Projects Shipped", value: "7+" },
  { label: "Primary Tool", value: "Claude Code" },
  { label: "Status", value: "Building" },
];

export default function About() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-foreground mb-10"
      >
        <span className="text-muted/30 font-mono font-normal">$ </span>
        About
      </motion.h2>

      {/* Avatar + Bio row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10"
      >
        {/* Avatar placeholder — replace with <Image src="/headshot.jpg" width={140} height={140} alt="Winston Crooker" className="rounded-full" /> when a real photo is available */}
        <div className="shrink-0">
          <div className="relative w-[140px] h-[140px]">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple to-purple-light opacity-20 blur-md" />
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple to-purple-light p-[2px]">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-br from-purple-light to-purple bg-clip-text text-transparent select-none">
                  WC
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-card rounded-xl border border-card-border p-6 sm:p-8">
          <p className="text-base leading-relaxed text-muted">
            Hey, I&apos;m{" "}
            <span className="text-foreground font-medium">Winston</span>. I&apos;m
            a builder who ships real products by directing AI. I understand systems,
            architecture, and can debug code &mdash; I just let AI handle the typing.
            Think of me as the architect, not the typist.
          </p>
          <p className="text-base leading-relaxed text-muted mt-4">
            I got into tech through a{" "}
            <span className="text-purple-light font-medium">
              cybersecurity camp in summer 2024
            </span>
            , learned the fundamentals, and realized the fastest path to building
            was{" "}
            <span className="text-purple-light font-medium">
              AI-assisted development
            </span>
            . Now I use tools like Claude Code to go from idea to deployed product &mdash;
            fast.
          </p>
        </div>
      </motion.div>

      {/* Stat cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-xl border border-card-border p-5 hover:border-purple/30 hover:shadow-lg hover:shadow-purple/5 transition-all duration-300"
            >
              <p className="text-lg sm:text-xl font-semibold text-foreground font-mono">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
