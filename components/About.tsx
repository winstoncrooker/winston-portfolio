"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Approach", value: "AI-Assisted" },
  { label: "Projects Shipped", value: "5+" },
  { label: "Primary Tool", value: "Claude Code" },
  { label: "Status", value: "Building" },
];

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left side — Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
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

      {/* Right side — Stat cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="grid grid-cols-2 gap-4">
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
