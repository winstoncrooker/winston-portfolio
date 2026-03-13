"use client";

import { motion } from "framer-motion";

const coursework = [
  "AVID (7th–9th grade)",
  "AP World History",
  "Web Design",
  "Sales & Marketing",
  "Social Media Marketing",
  "3D Graphics for Gaming",
  "Computer Programming I",
  "Digital Literacy",
];

export default function Education() {
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
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-card rounded-xl border border-card-border p-6 sm:p-8"
      >
        {/* School info */}
        <div className="flex items-start gap-4 mb-6">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-purple-light"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Mount Vernon High School
            </h3>
            <p className="text-sm text-muted mt-0.5">
              Sophomore &bull; Class of 2028
            </p>
            <p className="text-xs text-muted/60 font-mono mt-1">
              Mount Vernon, Washington
            </p>
          </div>
        </div>

        {/* AVID note */}
        <p className="text-sm text-muted mb-5 leading-relaxed">
          In the{" "}
          <span className="text-purple-light font-medium">AVID program since 7th grade</span>
          {" "}&mdash; demonstrating academic commitment and college readiness focus.
        </p>

        {/* Coursework badges */}
        <div>
          <p className="text-xs text-muted/60 uppercase tracking-wider font-mono mb-3">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course, i) => (
              <motion.span
                key={course}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="text-xs px-3 py-1.5 rounded-full bg-card-border/50 text-muted font-mono border border-card-border hover:border-purple/30 hover:text-purple-light transition-colors duration-200"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
