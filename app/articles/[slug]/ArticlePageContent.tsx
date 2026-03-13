"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Article } from "@/data/articles";

export default function ArticPageContent({ article }: { article: Article }) {
  return (
    <>
      <Navbar />
      <main className="relative z-10 min-h-screen pt-24 pb-16">
        <motion.article
          className="max-w-prose mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Back link */}
          <Link
            href="/#articles"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-purple transition-colors mb-8 font-mono"
          >
            ← Back to home
          </Link>

          {/* Article header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted font-mono">{article.date}</span>
              <span className="text-sm text-muted/50">·</span>
              <span className="text-sm text-muted font-mono">{article.readTime}</span>
            </div>
          </header>

          {/* Article body */}
          <div className="border-l-2 border-purple/20 pl-6 sm:pl-8">
            {article.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed text-foreground/85 mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bottom actions */}
          <div className="mt-12 pt-8 border-t border-card-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={article.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple text-white text-sm rounded-lg hover:bg-purple-dark transition-all duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Read on LinkedIn
            </a>
            <Link
              href="/"
              className="text-sm text-muted hover:text-purple transition-colors font-mono"
            >
              ← Back to home
            </Link>
          </div>
        </motion.article>
      </main>
      <Footer />
    </>
  );
}
