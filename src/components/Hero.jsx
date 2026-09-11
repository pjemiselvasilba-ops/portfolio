import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { profile } from "../data/portfolio";

const codeLines = [
  { t: "const developer = {", c: "text-ink-dim" },
  { t: "  name: 'Jemi Selvasilba P',", c: "text-ink" },
  { t: "  role: 'MERN Stack Developer',", c: "text-gold-soft" },
  { t: "  stack: ['MongoDB', 'Express', 'React', 'Node'],", c: "text-teal-soft" },
  { t: "  status: 'building something new',", c: "text-ink" },
  { t: "};", c: "text-ink-dim" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-24 left-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-5 right-10 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="mx-auto max-w-6xl w-full px-6 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center relative">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={rise} className="inline-flex items-center rounded-full border border-line bg-bg-panel/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-teal-soft">
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            variants={rise}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-[64px] leading-[0.96] text-ink font-medium tracking-tight"
          >
            Jemi Selvasilba P
          </motion.h1>
          <motion.p
            variants={rise}
            className="mt-5 font-display text-2xl sm:text-3xl text-gold-soft italic"
          >
            MERN Stack Developer
          </motion.p>
          <motion.p variants={rise} className="mt-6 max-w-xl text-ink-dim leading-relaxed text-base">
            {profile.summary}
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full bg-ink text-bg font-semibold text-sm shadow-[0_12px_24px_rgba(15,23,32,0.18)] hover:-translate-y-0.5 transition-all duration-200"
            >
              View Projects
            </button>
            <a
              href={profile.resumeUrl === "PLACEHOLDER_RESUME_PATH" ? "#resume" : profile.resumeUrl}
              target={profile.resumeUrl !== "PLACEHOLDER_RESUME_PATH" ? "_blank" : undefined}
              rel={profile.resumeUrl !== "PLACEHOLDER_RESUME_PATH" ? "noreferrer" : undefined}
              className="px-6 py-3 rounded-full border border-line bg-bg-panel text-ink text-sm hover:border-gold hover:text-gold transition-colors"
            >
              View Resume
            </a>
            <a
              href={profile.resumeUrl}
              download="Jemi-Selvasilba-P-Resume.html"
              className="px-6 py-3 rounded-full bg-gold text-bg font-semibold text-sm hover:bg-gold-soft transition-colors"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={rise} className="mt-8 flex items-center gap-5 text-xl text-ink-faint">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-panel hover:border-gold hover:text-gold transition-colors"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-panel hover:border-gold hover:text-gold transition-colors"
            >
              <FiLinkedin />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-[30px] border border-line bg-bg-panel shadow-[0_30px_80px_rgba(18,25,31,0.12)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line-soft bg-bg-raised">
              <span className="h-2.5 w-2.5 rounded-full bg-clay/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/80" />
              <span className="ml-3 text-[11px] uppercase tracking-[0.2em] text-ink-faint font-mono">portfolio.js</span>
            </div>
            <div className="p-6 font-mono text-[13px] sm:text-sm leading-7 bg-[linear-gradient(180deg,#ffffff_0%,#faf7f2_100%)]">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
                  className={line.c}
                >
                  {line.t}
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 border-t border-line-soft bg-bg-raised p-4">
              <div className="rounded-2xl border border-line bg-bg-panel p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-ink-faint">Projects</p>
                <p className="mt-2 font-display text-2xl text-ink">2+</p>
              </div>
              <div className="rounded-2xl border border-line bg-bg-panel p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-ink-faint">Skills</p>
                <p className="mt-2 font-display text-2xl text-ink">5+</p>
              </div>
              <div className="rounded-2xl border border-line bg-bg-panel p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-ink-faint">Focus</p>
                <p className="mt-2 font-display text-2xl text-ink">MERN</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to About"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-gold transition-colors animate-bounce"
      >
        <FiArrowDown />
      </button>
    </section>
  );
}
