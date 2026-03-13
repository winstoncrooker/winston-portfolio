"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "cosmic4796.xyz",
    description:
      "Terminal-style portfolio with real-time Discord presence, WebSocket server, and built-in music player.",
    tags: ["Next.js", "TypeScript", "WebSocket"],
    status: "LIVE" as const,
  },
  {
    title: "Portfolio v2",
    description:
      "This site. A hybrid terminal/professional portfolio built entirely with AI-assisted development.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    status: "LIVE" as const,
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
        transition={{ duration: 0.4 }}
        className="font-mono text-green text-lg mb-12"
      >
        $ ls ~/projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
