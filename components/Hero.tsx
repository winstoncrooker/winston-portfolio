"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import TerminalText from "./TerminalText";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

interface ParticleConfig {
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
  color: string;
  moveX: number;
  moveY: number;
}

function generateParticles(): ParticleConfig[] {
  return Array.from({ length: 25 }, (_, index) => ({
    left: Math.round(seededRandom(index * 7 + 1) * 10000) / 100,
    top: Math.round(seededRandom(index * 13 + 3) * 10000) / 100,
    size: Math.round((seededRandom(index * 17 + 5) * 1 + 2) * 100) / 100,
    opacity: Math.round((seededRandom(index * 23 + 7) * 0.2 + 0.1) * 100) / 100,
    duration: Math.round((seededRandom(index * 29 + 11) * 10 + 10) * 100) / 100,
    color: index % 2 === 0 ? "#8b5cf6" : "#22c55e",
    moveX: Math.round((seededRandom(index * 31 + 13) - 0.5) * 8000) / 100,
    moveY: Math.round((seededRandom(index * 37 + 17) - 0.5) * 8000) / 100,
  }));
}

export default function Hero() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const particles = useMemo(() => generateParticles(), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particle background — client-only to avoid hydration mismatch */}
      <div className="absolute inset-0 z-0">
        {mounted &&
          particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                opacity: p.opacity,
              }}
              animate={{
                x: [0, p.moveX, 0],
                y: [0, p.moveY, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Name heading */}
        <h1 className="font-mono text-3xl md:text-5xl lg:text-7xl font-bold text-white">
          <TerminalText
            text="Winston Crooker"
            speed={50}
            delay={200}
            onComplete={() => setShowSubtitle(true)}
          />
        </h1>

        {/* Subtitle */}
        <div className="mt-4 md:mt-6 h-8 md:h-10">
          {showSubtitle && (
            <p className="font-mono text-lg md:text-xl lg:text-2xl" style={{ color: "#8b5cf6" }}>
              <TerminalText
                text="Developer & Builder"
                speed={40}
                delay={300}
                onComplete={() => setShowTagline(true)}
              />
            </p>
          )}
        </div>

        {/* Tagline */}
        <div className="mt-3 md:mt-4 h-7 md:h-8">
          {showTagline && (
            <p className="font-mono text-sm md:text-base lg:text-lg" style={{ color: "#a0a0b0" }}>
              <TerminalText
                text="I build things that work."
                speed={40}
                delay={200}
              />
            </p>
          )}
        </div>
      </div>

      {/* Animated down arrow */}
      <motion.button
        className="absolute bottom-10 z-10 cursor-pointer focus:outline-none"
        onClick={handleScrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-label="Scroll to about section"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a0a0b0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.button>
    </section>
  );
}
