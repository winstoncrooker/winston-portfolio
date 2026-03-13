"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status: "LIVE" | "ACTIVE" | "WIP";
  index: number;
}

const statusStyles: Record<string, string> = {
  LIVE: "bg-green/10 text-green border border-green/20",
  ACTIVE: "bg-purple/10 text-purple-light border border-purple/20",
  WIP: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
};

export default function ProjectCard({
  title,
  description,
  tags,
  status,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 30px rgba(139, 92, 246, 0.1)",
        borderColor: "rgba(139, 92, 246, 0.3)",
      }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="bg-card rounded-xl border border-card-border overflow-hidden transition-all duration-300 relative"
    >
      {/* Subtle terminal dots */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-card-border">
        <span className="w-1.5 h-1.5 rounded-full opacity-60" style={{ backgroundColor: "#ff5f56" }} />
        <span className="w-1.5 h-1.5 rounded-full opacity-60" style={{ backgroundColor: "#ffbd2e" }} />
        <span className="w-1.5 h-1.5 rounded-full opacity-60" style={{ backgroundColor: "#27c93f" }} />
      </div>

      <div className="p-6 relative">
        {/* Status badge */}
        <span
          className={`absolute top-5 right-5 text-xs font-mono px-2 py-1 rounded-full ${statusStyles[status]}`}
        >
          {status}
        </span>

        <h3 className="text-lg font-semibold text-foreground mb-2 pr-16">{title}</h3>
        <p className="text-sm text-muted mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-card-border/50 text-muted font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
