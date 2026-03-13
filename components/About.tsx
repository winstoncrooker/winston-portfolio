"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Shipped", value: "10+" },
  { label: "Languages", value: "5+" },
  { label: "Favorite Stack", value: "Next.js + Tailwind" },
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
            a developer who builds things &mdash; websites, tools, automations.
            I work fast and ship faster.
          </p>
          <p className="text-base leading-relaxed text-muted mt-4">
            Most of what you see here was built with{" "}
            <span className="text-purple-light font-medium">
              AI-assisted development
            </span>
            , because the future is about what you build, not how you type it.
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
              <p className="text-lg sm:text-xl font-semibold text-foreground">
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
