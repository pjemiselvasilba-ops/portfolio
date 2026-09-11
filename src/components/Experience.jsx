import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading index="05" title="Experience" />

        <div className="max-w-4xl space-y-8">
          {experience.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-[28px] border border-line bg-bg-panel p-7 shadow-[0_12px_30px_rgba(15,23,32,0.03)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-teal-soft">{job.period}</p>
                  <h3 className="mt-2 font-display text-2xl text-ink font-medium">{job.role}</h3>
                </div>
                <span className="rounded-full border border-line bg-bg-raised px-3 py-1 text-xs font-medium text-ink-dim">
                  {job.company}
                </span>
              </div>

              <p className="mt-4 text-ink-faint text-sm">Project: {job.project}</p>

              <ul className="mt-6 space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="text-ink-dim text-sm flex gap-3 leading-relaxed">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gold shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
