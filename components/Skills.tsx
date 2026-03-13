"use client";

import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

interface Skill {
  name: string;
  color: string;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "JavaScript", color: "#f7df1e" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Python", color: "#3776ab" },
      { name: "HTML", color: "#e34f26" },
      { name: "CSS", color: "#1572b6" },
    ],
  },
  {
    label: "Frameworks & Tools",
    skills: [
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#ffffff" },
      { name: "Node.js", color: "#339933" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "Git", color: "#f05032" },
      { name: "Framer Motion", color: "#ff0055" },
    ],
  },
  {
    label: "Other",
    skills: [
      { name: "Claude Code", color: "#8b5cf6" },
      { name: "AI-Assisted Dev", color: "#22c55e" },
      { name: "Vercel", color: "#ffffff" },
      { name: "Linux", color: "#fcc624" },
    ],
  },
];

export default function Skills() {
  let globalIndex = 0;

  return (
    <div>
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      {categories.map((category) => {
        const categoryBlock = (
          <div key={category.label} className="mb-6">
            <motion.p
              className="text-muted text-sm uppercase tracking-wider mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              {category.label}
            </motion.p>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => {
                const idx = globalIndex;
                globalIndex++;
                return (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    color={skill.color}
                    index={idx}
                  />
                );
              })}
            </div>
          </div>
        );

        return categoryBlock;
      })}
    </div>
  );
}
