"use client";

import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

const experiences = [
  {
    year: "2024 - Present",
    title: "AI-Assisted Developer",
    description:
      "Building and shipping full-stack applications by directing AI agents. Created OptionsOn PremiumTracker (optionson.top), ClosetAI (closetai.pages.dev), and multiple automation tools using Claude Code as the primary development engine.",
    isLeft: true,
  },
  {
    year: "Summer 2024",
    title: "Cybersecurity Camp",
    description:
      "Attended a cybersecurity camp, learned security fundamentals, network analysis, and defensive techniques. Sparked deeper interest in tech and building.",
    isLeft: false,
  },
  {
    year: "2023 - 2024",
    title: "Learning & Exploring",
    description:
      "Picked up HTML, CSS, and Python basics. Built Discord bots and small automation scripts. Discovered AI-assisted development and started building real projects.",
    isLeft: true,
  },
];

export default function Experience() {
  return (
    <div>
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-muted/30 font-mono font-normal">$ </span>
        Experience
      </motion.h2>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-2 top-0 w-px h-full bg-card-border md:hidden" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-card-border hidden md:block" />

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
