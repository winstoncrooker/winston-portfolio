"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div>
      {/* Section title */}
      <motion.p
        className="font-mono text-lg text-green mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        $ echo &apos;Get in touch&apos;
      </motion.p>

      {/* Terminal card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-card rounded-lg border border-card-border overflow-hidden">
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
            <span className="ml-2 font-mono text-xs text-muted select-none">contact.json</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm">
            <p className="text-green mb-4">$ cat contact.json</p>
            <div>
              <p className="text-muted">{"{"}</p>
              <p className="ml-4">
                <span className="text-purple">&quot;email&quot;</span>
                <span className="text-muted">: </span>
                <span className="text-muted">&quot;</span>
                <a
                  href="mailto:winstoncrooker8@gmail.com"
                  className="text-foreground hover:text-purple transition-colors"
                >
                  winstoncrooker8@gmail.com
                </a>
                <span className="text-muted">&quot;</span>
                <span className="text-muted">,</span>
              </p>
              <p className="ml-4">
                <span className="text-purple">&quot;github&quot;</span>
                <span className="text-muted">: </span>
                <span className="text-muted">&quot;</span>
                <a
                  href="https://github.com/cosmic4796"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-purple transition-colors"
                >
                  github.com/cosmic4796
                </a>
                <span className="text-muted">&quot;</span>
                <span className="text-muted">,</span>
              </p>
              <p className="ml-4">
                <span className="text-purple">&quot;discord&quot;</span>
                <span className="text-muted">: </span>
                <span className="text-muted">&quot;</span>
                <span className="text-foreground">cosmic4796</span>
                <span className="text-muted">&quot;</span>
              </p>
              <p className="text-muted">{"}"}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA section */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-lg text-muted mb-4">
          Have a project idea? Let&apos;s talk.
        </p>
        <a
          href="mailto:winstoncrooker8@gmail.com"
          className="inline-flex px-6 py-3 bg-purple text-white rounded-lg hover:bg-purple-dark transition-all font-mono"
        >
          $ send_message
        </a>
      </motion.div>
    </div>
  );
}
