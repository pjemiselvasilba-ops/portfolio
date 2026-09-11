import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { featuredProject, otherProjects } from "../data/portfolio";

const filters = ["All", "MERN / Full Stack", "Frontend", "Academic"];

function ProjectLinks({ githubUrl, liveUrl }) {
  if (!githubUrl && !liveUrl) {
    return <p className="text-xs text-ink-faint italic mt-4">Repository link coming soon</p>;
  }
  return (
    <div className="mt-4 flex items-center gap-4">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-sm text-ink-dim hover:text-gold transition-colors"
        >
          <FiGithub /> Code
        </a>
      )}
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-sm text-ink-dim hover:text-gold transition-colors"
        >
          <FiExternalLink /> Live Demo
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(() => {
    if (filter === "All") return otherProjects;
    return otherProjects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-28 bg-bg-raised/40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading index="04" title="Projects" />

        <div className="rounded-[30px] border border-line bg-bg-panel overflow-hidden mb-16 shadow-[0_20px_50px_rgba(15,23,32,0.05)]">
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-2 text-gold text-xs font-semibold tracking-[0.22em] uppercase mb-4">
              <FiStar /> Featured Project
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-ink font-medium">
              {featuredProject.title}
            </h3>
            <p className="text-teal-soft text-sm mt-1">{featuredProject.shortName}</p>
            <p className="mt-5 max-w-2xl text-ink-dim leading-relaxed">
              {featuredProject.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {featuredProject.portals.map((p) => (
                <span
                  key={p}
                  className="text-xs text-ink-dim border border-line rounded-full px-3 py-1 bg-bg-raised"
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-gold-soft bg-gold/10 rounded-full px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {featuredProject.features.map((group) => (
                <div key={group.group} className="rounded-2xl border border-line bg-bg-raised p-4">
                  <h4 className="text-ink text-sm font-semibold mb-2">{group.group}</h4>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-ink-faint text-sm flex gap-2">
                        <span className="text-teal">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <ProjectLinks githubUrl={featuredProject.githubUrl} liveUrl={featuredProject.liveUrl} />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm rounded-full px-4 py-2 border transition-colors ${
                filter === f
                  ? "border-ink bg-ink text-bg"
                  : "border-line bg-bg-panel text-ink-faint hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="rounded-[24px] border border-line bg-bg-panel p-6 shadow-[0_10px_30px_rgba(15,23,32,0.03)] hover:-translate-y-1 transition-transform"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-ink-faint">{project.category}</span>
                <h3 className="font-display text-lg text-ink font-medium mt-2">
                  {project.title}
                </h3>
                <p className="text-ink-dim text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-teal-soft border border-line rounded-full px-2.5 py-1 bg-bg-raised"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
