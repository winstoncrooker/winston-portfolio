"use client";

import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "winstoncrooker@outlook.com",
    href: "mailto:winstoncrooker@outlook.com",
  },
  {
    label: "GitHub",
    value: "github.com/winstoncrooker",
    href: "https://github.com/winstoncrooker",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Winston Crooker",
    href: "https://www.linkedin.com/in/winston-crooker-758354325/",
    external: true,
  },
  {
    label: "Discord",
    value: "mashedman",
    href: null,
  },
];

export default function Contact() {
  return (
    <div>
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-muted/30 font-mono font-normal">$ </span>
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-card rounded-xl border border-card-border p-6 sm:p-8 max-w-lg">
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <div key={link.label} className="flex items-baseline gap-4">
                <span className="text-sm text-muted w-20 shrink-0">
                  {link.label}
                </span>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-foreground hover:text-purple transition-colors font-mono"
                  >
                    {link.value}
                  </a>
                ) : (
                  <span className="text-sm text-foreground font-mono">{link.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-muted mb-4">
          Have a project idea? Let&apos;s talk.
        </p>
        <a
          href="mailto:winstoncrooker@outlook.com"
          className="inline-flex px-6 py-3 bg-purple text-white text-sm rounded-lg hover:bg-purple-dark transition-all duration-200"
        >
          Send a message
        </a>
      </motion.div>
    </div>
  );
}
