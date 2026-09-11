import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading index="02" title="Education" />

        <div className="relative max-w-4xl">
          <div className="absolute left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent" />
          <div className="space-y-6">
            {education.map((ed) => (
              <motion.div
                key={ed.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-4 h-7 w-7 rounded-full bg-gold text-center text-[10px] font-bold text-bg flex items-center justify-center shadow-[0_0_0_6px_rgba(199,139,43,0.12)]">
                  {ed.degree.charAt(0)}
                </span>
                <div className="rounded-2xl border border-line bg-bg-panel p-6 shadow-[0_12px_30px_rgba(15,23,32,0.03)]">
                  <p className="text-xs uppercase tracking-[0.22em] text-teal-soft mb-2">{ed.period}</p>
                  <h3 className="font-display text-xl text-ink font-medium">{ed.degree}</h3>
                  <p className="text-ink-dim mt-2">{ed.institution}</p>
                  <p className="text-ink-faint text-sm mt-1">{ed.affiliation}</p>
                  {ed.detail && (
                    <p className="mt-4 inline-block text-sm text-gold-soft border border-gold/30 rounded-full px-3 py-1 bg-gold/5">
                      {ed.detail}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
