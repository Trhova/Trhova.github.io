export function Section({
  id,
  title,
  children,
  className = ""
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      {title ? (
        <div className="pb-8">
          <div className="mx-auto w-full max-w-6xl px-5">
            <h2 className="text-xl font-semibold tracking-tight text-text">
              {title}
            </h2>
            <div className="mt-2 h-px w-full bg-border/70" />
          </div>
        </div>
      ) : null}
      {children}
    </section>
  );
}

