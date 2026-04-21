export function SectionTransition({ label }: { label?: string }) {
  return (
    <div className="not-prose my-10 flex items-center gap-4">
      <div className="h-px flex-1 bg-border" />
      {label ? (
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {label}
        </span>
      ) : null}
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
