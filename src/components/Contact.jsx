import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="09"
          title="Contact"
          lede="Have an opportunity or a question? Reach out directly or send a message below — it opens in your email client, since this page has no backend."
        />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div className="rounded-[28px] border border-line bg-bg-panel p-7 shadow-[0_12px_30px_rgba(15,23,32,0.03)]">
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-ink-dim hover:text-gold transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold"><FiMail className="text-lg" /></span>
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-ink-dim hover:text-gold transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold"><FiLinkedin className="text-lg" /></span>
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-ink-dim hover:text-gold transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold"><FiGithub className="text-lg" /></span>
                GitHub
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[28px] border border-line bg-bg-panel p-7 shadow-[0_12px_30px_rgba(15,23,32,0.03)] space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-ink-dim mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-line bg-bg-raised px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-ink-dim mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-line bg-bg-raised px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-ink-dim mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-line bg-bg-raised px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold resize-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-bg font-semibold text-sm hover:-translate-y-0.5 transition-transform"
            >
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
