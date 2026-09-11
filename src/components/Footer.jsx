import { FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-ink text-xl">{profile.name}</p>
          <p className="text-ink-faint text-sm">{profile.role}</p>
        </div>
        <div className="flex items-center gap-3 text-lg text-ink-faint">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg-panel hover:border-gold hover:text-gold transition-colors">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg-panel hover:border-gold hover:text-gold transition-colors">
            <FiLinkedin />
          </a>
        </div>
        <p className="text-ink-faint text-xs">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
