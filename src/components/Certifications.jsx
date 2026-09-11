import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { certifications, achievements } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading index="06" title="Certifications" />

        <div className="grid sm:grid-cols-2 gap-5 mb-20">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-[24px] border border-line bg-bg-panel p-6 flex gap-4 shadow-[0_12px_30px_rgba(15,23,32,0.03)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <FiAward className="text-2xl" />
              </div>
              <div>
                <h3 className="text-ink font-semibold text-[15px]">
                  {cert.name === "PLACEHOLDER_CERTIFICATE_TITLE"
                    ? "Cloud Computing certificate (exact title to be added)"
                    : cert.name}
                </h3>
                <p className="text-teal-soft text-sm mt-1">
                  {cert.issuer}
                  {cert.topic && cert.name !== "PLACEHOLDER_CERTIFICATE_TITLE" ? ` · ${cert.topic}` : ""}
                </p>
                {cert.date && <p className="text-ink-faint text-xs mt-1">{cert.date}</p>}
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-gold-soft hover:text-gold"
                  >
                    View certificate <FiExternalLink />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <SectionHeading index="07" title="Achievements" />
        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-[24px] border border-line bg-bg-panel p-6 shadow-[0_12px_30px_rgba(15,23,32,0.03)]"
            >
              <h3 className="text-ink font-semibold text-[15px]">{item.title}</h3>
              <p className="text-ink-dim text-sm mt-2 leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
