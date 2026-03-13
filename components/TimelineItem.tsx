"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  isLeft: boolean;
}

export default function TimelineItem({
  year,
  title,
  description,
  index,
  isLeft,
}: TimelineItemProps) {
  return (
    <div className="relative mb-12 md:mb-16">
      {/* Timeline dot */}
      <div
        className={`
          absolute top-6 z-10
          left-2 -translate-x-1/2
          md:left-1/2 md:-translate-x-1/2
          w-3 h-3 rounded-full bg-purple ring-2 ring-purple/20
        `}
      />

      {/* Mobile card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="pl-10 md:hidden"
      >
        <div className="bg-card rounded-xl border border-card-border p-6">
          <p className="text-purple-light font-mono text-sm font-medium mb-2">{year}</p>
          <h3 className="text-foreground font-semibold text-lg mb-2">{title}</h3>
          <p className="text-muted text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>

      {/* Desktop card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className={`
          hidden md:block md:w-[calc(50%-2rem)]
          ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}
        `}
      >
        <div className="bg-card rounded-xl border border-card-border p-6">
          <p className="text-purple-light font-mono text-sm font-medium mb-2">{year}</p>
          <h3 className="text-foreground font-semibold text-lg mb-2">{title}</h3>
          <p className="text-muted text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
