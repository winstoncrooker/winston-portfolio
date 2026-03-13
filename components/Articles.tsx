"use client";

import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";
import { articles } from "@/data/articles";

export default function Articles() {
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
        Articles
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.slug}
            slug={article.slug}
            title={article.title}
            date={article.date}
            readTime={article.readTime}
            description={article.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
