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
  ACTIVE: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
  WIP: "bg-orange-500/10 text-orange-500 border border-orange-500/20",
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 30px rgba(139, 92, 246, 0.15)",
        borderColor: "rgba(139, 92, 246, 0.4)",
      }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-card rounded-lg border border-card-border overflow-hidden transition-all duration-300"
    >
      {/* Terminal top bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border">
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
        <span className="ml-2 font-mono text-sm text-muted select-none">{title}</span>
      </div>

      {/* Card body */}
      <div className="p-6 relative">
        {/* Status badge */}
        <span
          className={`absolute top-4 right-4 text-xs font-mono px-2 py-1 rounded-full ${statusStyles[status]}`}
        >
          {status}
        </span>

        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-muted mb-4 line-clamp-3">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded bg-purple/10 text-purple-light border border-purple/20 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
