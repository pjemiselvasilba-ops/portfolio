import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="03"
          title="Technical Skills"
          lede="Grouped by where each tool fits in the stack — no invented proficiency percentages, just what I've actually worked with."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-line bg-bg-panel p-6"
            >
              <h3 className="font-display text-lg text-gold-soft mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-ink-dim border border-line-soft rounded-full px-3 py-1.5 hover:border-teal/50 hover:text-ink transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
