"use client";

import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

const experiences = [
  {
    year: "2024 - Present",
    title: "Independent Developer",
    description:
      "Building full-stack applications, automation tools, and exploring AI-assisted development workflows. Shipped multiple projects using Claude Code.",
    isLeft: true,
  },
  {
    year: "2023 - 2024",
    title: "Learning & Building",
    description:
      "Deep dive into web development. Learned React, Next.js, TypeScript, and modern deployment pipelines.",
    isLeft: false,
  },
  {
    year: "2022 - 2023",
    title: "Getting Started",
    description:
      "First lines of code. Started with Python and JavaScript, building small scripts and Discord bots.",
    isLeft: true,
  },
];

export default function Experience() {
  return (
    <div>
      {/* Section title */}
      <motion.p
        className="font-mono text-lg text-green mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        $ git log --oneline
      </motion.p>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical timeline line */}
        {/* Mobile: left-aligned */}
        <div className="absolute left-2 top-0 w-px h-full bg-card-border md:hidden" />
        {/* Desktop: center-aligned */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-card-border hidden md:block" />

        {/* Timeline entries */}
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.year}
            year={exp.year}
            title={exp.title}
            description={exp.description}
            index={index}
            isLeft={exp.isLeft}
          />
        ))}
      </div>
    </div>
  );
}
