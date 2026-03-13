"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "» loading modules... ok",
  "» checking dependencies... ok",
  "» compiling portfolio... ok",
  "» initializing systems... ok",
  "» system ready.",
];

const LINE_DELAY = 300;
const FADE_DELAY = 500;

export default function BootSequence() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (visibleLines < bootLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, LINE_DELAY);

      return () => clearTimeout(timer);
    } else {
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
      }, FADE_DELAY);

      return () => clearTimeout(fadeTimer);
    }
  }, [visibleLines]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "#0a0a0f" }}
        >
          <div className="w-full max-w-lg px-8">
            {bootLines.slice(0, visibleLines).map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="font-mono text-sm md:text-base mb-1"
                style={{ color: "#22c55e" }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
