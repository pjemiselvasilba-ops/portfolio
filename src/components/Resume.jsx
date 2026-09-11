import { FiExternalLink, FiAlertCircle } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function Resume() {
  const hasResume = profile.resumeUrl !== "PLACEHOLDER_RESUME_PATH";

  return (
    <section id="resume" className="py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading index="08" title="Resume" />

        <div className="rounded-2xl border border-line bg-[radial-gradient(circle_at_top,_rgba(217,164,65,0.12),_transparent_40%)] bg-bg-panel p-8 sm:p-10 max-w-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_45px_rgba(0,0,0,0.28)]">
          {hasResume ? (
            <>
              <p className="text-ink-dim mb-6 leading-relaxed">
                View the latest resume in your browser or download a copy for quick sharing and offline access.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-line text-ink text-sm hover:border-gold hover:text-gold transition-colors"
                >
                  <FiExternalLink /> View Resume
                </a>
                <a
                  href={profile.resumeUrl}
                  download="Jemi-Selvasilba-P-Resume.html"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-bg font-semibold text-sm hover:bg-gold-soft transition-colors"
                >
                  <FiExternalLink /> Download Resume
                </a>
              </div>
            </>
          ) : (
            <div className="flex gap-3 text-ink-dim">
              <FiAlertCircle className="text-gold shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                Resume not yet added. Add a resume page at{" "}
                <code className="text-gold-soft bg-bg-raised px-1.5 py-0.5 rounded">
                  public/resume.html
                </code>{" "}
                and set <code className="text-gold-soft">resumeUrl</code> in{" "}
                <code className="text-gold-soft">src/data/portfolio.js</code> to{" "}
                <code className="text-gold-soft">"/portfolio/resume.html"</code>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
