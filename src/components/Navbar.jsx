import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { nav, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(nav.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleClick("home")}
            className="flex items-center gap-3 text-left"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-bg text-sm font-semibold">
              J
            </span>
            <span className="font-display text-lg text-ink">Jemi</span>
          </button>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-line bg-bg-panel/80 px-2 py-1.5 shadow-[0_10px_30px_rgba(15,23,32,0.05)]">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`px-3 py-2 text-sm rounded-full transition-all ${
                  active === item.id ? "bg-ink text-bg" : "text-ink-dim hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden text-ink text-xl p-2 rounded-full border border-line bg-bg-panel"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-bg-panel/95 px-6 py-4 flex flex-col gap-1 backdrop-blur-xl">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-left py-2.5 text-[15px] rounded-lg px-2 ${
                active === item.id ? "bg-ink text-bg" : "text-ink-dim"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
