"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
  index: number;
}

export default function ArticleCard({
  slug,
  title,
  date,
  readTime,
  description,
  index,
}: ArticleCardProps) {
  return (
    <Link href={`/articles/${slug}`}>
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
        className="bg-card rounded-xl border border-card-border overflow-hidden transition-all duration-300 cursor-pointer h-full"
      >
        {/* Subtle terminal dots */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-card-border">
          <span className="w-1.5 h-1.5 rounded-full opacity-60" style={{ backgroundColor: "#ff5f56" }} />
          <span className="w-1.5 h-1.5 rounded-full opacity-60" style={{ backgroundColor: "#ffbd2e" }} />
          <span className="w-1.5 h-1.5 rounded-full opacity-60" style={{ backgroundColor: "#27c93f" }} />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs text-muted font-mono">{date}</span>
            <span className="text-xs text-muted/50">·</span>
            <span className="text-xs text-muted font-mono">{readTime}</span>
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {description}
          </p>

          <span className="inline-block mt-4 text-sm text-purple-light font-mono">
            Read →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
