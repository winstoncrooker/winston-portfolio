"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SkillBadgeProps {
  name: string;
  color: string;
  index: number;
}

export default function SkillBadge({ name, color, index }: SkillBadgeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-card-border transition-all duration-300 cursor-default"
      style={{
        borderColor: hovered ? color : undefined,
        boxShadow: hovered ? `0 0 12px ${color}22` : "none",
      }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm text-foreground">{name}</span>
    </motion.span>
  );
}
