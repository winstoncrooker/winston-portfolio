"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative z-10 ${className ?? ""}`}>
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
