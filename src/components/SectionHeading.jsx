export default function SectionHeading({ index, title, lede }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-bg-panel text-[11px] font-semibold tracking-[0.2em] text-gold">
          {index}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl text-ink font-medium tracking-tight">
          {title}
        </h2>
      </div>
      <div className="mt-5 h-px w-20 bg-gradient-to-r from-gold via-gold/70 to-transparent" />
      {lede && <p className="mt-5 text-ink-dim leading-relaxed max-w-xl">{lede}</p>}
    </div>
  );
}
