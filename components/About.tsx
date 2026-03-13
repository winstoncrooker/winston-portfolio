"use client";

import { motion } from "framer-motion";

const stats = [
  { icon: "\u{1F4E6}", label: "Projects Shipped", value: "10+" },
  { icon: "\u{1F4BB}", label: "Languages", value: "5+" },
  { icon: "\u26A1", label: "Favorite Stack", value: "Next.js + Tailwind" },
  { icon: "\u{1F7E2}", label: "Status", value: "Building" },
];

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left side — Terminal card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-card rounded-lg border border-card-border overflow-hidden">
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
            <span className="ml-2 font-mono text-xs text-muted select-none">about.sh</span>
          </div>

          {/* Terminal body */}
          <div className="p-5 sm:p-6">
            <p className="font-mono text-sm sm:text-base leading-relaxed text-muted">
              <span className="text-green">{"> "}</span>
              <span className="text-white">
                Hey, I&apos;m{" "}
                <span className="text-purple">Winston</span>. I&apos;m a developer
                who builds things &mdash; websites, tools, automations. I work
                fast and ship faster.
              </span>
            </p>
            <p className="font-mono text-sm sm:text-base leading-relaxed text-muted mt-4">
              <span className="text-green">{"> "}</span>
              <span className="text-white">
                Most of what you see here was built with{" "}
                <span className="text-purple">AI-assisted development</span>,
                because the future is about what you build, not how you type it.
              </span>
            </p>
            <p className="font-mono text-sm mt-4 text-green animate-pulse">
              {"█"}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right side — Stat cards */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-lg border border-card-border p-6 hover:border-purple/50 hover:shadow-lg hover:shadow-purple/10 transition-all duration-300"
            >
              <span className="text-2xl" role="img" aria-label={stat.label}>
                {stat.icon}
              </span>
              <p className="mt-3 text-lg sm:text-xl font-bold text-white">
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
