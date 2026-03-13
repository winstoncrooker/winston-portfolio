"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI Task Runner",
    description:
      "Automated development pipeline connecting AI desktop agents to CLI tools for hands-free build-test-deploy workflows.",
    tags: ["Node.js", "Bash", "Automation"],
    status: "ACTIVE" as const,
  },
  {
    title: "Claude Bridge",
    description:
      "Autonomous build system connecting Claude desktop app to Claude Code CLI for hands-free development.",
    tags: ["Bash", "tmux", "Automation"],
    status: "ACTIVE" as const,
  },
  {
    title: "Discord Bots",
    description:
      "Custom bots for moderation, automation, and API integrations across multiple servers.",
    tags: ["JavaScript", "Python", "Discord.js"],
    status: "ACTIVE" as const,
  },
];

export default function Projects() {
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
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            status={project.status}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
