"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.08), transparent)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          style={{ color: "#e2e8f0" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
        >
          Winston Crooker
        </motion.h1>

        <motion.p
          className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl text-purple-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
        >
          Developer &amp; Builder
        </motion.p>

        <motion.p
          className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
        >
          I build things that work.
        </motion.p>
      </div>

      {/* Animated down arrow */}
      <motion.button
        className="absolute bottom-10 z-10 cursor-pointer focus:outline-none"
        onClick={handleScrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.4, delay: 2.0 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2.0 },
        }}
        aria-label="Scroll to about section"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.button>
    </section>
  );
}
