"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "OptionsOn PremiumTracker",
    description:
      "Full-stack covered call tracking platform with AI-powered insights, trade logging, P&L reports, tax summaries, and interactive charts. Built for real options traders.",
    tags: ["Next.js", "Tailwind", "AI", "Finance"],
    status: "LIVE" as const,
    url: "https://optionson.top",
  },
  {
    title: "ClosetAI",
    description:
      "AI-powered closet management app. Tracks clothing items, generates weather-based outfit suggestions, and helps organize your wardrobe.",
    tags: ["Next.js", "Tailwind", "AI", "Weather API"],
    status: "LIVE" as const,
    url: "https://closetai.pages.dev",
  },
  {
    title: "Claude Bridge",
    description:
      "Autonomous build system connecting Claude Cowork to Claude Code CLI. Plans, builds, tests, and deploys through a shared folder and bash script.",
    tags: ["Bash", "tmux", "Automation"],
    status: "ACTIVE" as const,
  },
  {
    title: "AI Task Runner",
    description:
      "Automated development pipeline connecting AI desktop agents to CLI tools for hands-free build-test-deploy workflows.",
    tags: ["Node.js", "Bash", "Automation"],
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            status={project.status}
            url={project.url}
            index={index}
          />
        ))}
      </div>
      {/* Fifth card centered below */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="md:col-start-1 md:col-end-2 md:mx-auto md:w-full max-w-md md:max-w-none md:col-span-2 md:flex md:justify-center">
          <div className="md:w-1/2">
            <ProjectCard
              title={projects[4].title}
              description={projects[4].description}
              tags={projects[4].tags}
              status={projects[4].status}
              url={projects[4].url}
              index={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
