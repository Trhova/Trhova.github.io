export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface2 px-3 py-1 text-xs font-medium text-text">
      {children}
    </span>
  );
}

