import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { publishedGuides } from "@/data/guides";

export function PrevNextNav({ currentSlug }: { currentSlug: string }) {
  const index = publishedGuides.findIndex((guide) => guide.slug === currentSlug);
  const previous = index > 0 ? publishedGuides[index - 1] : null;
  const next =
    index >= 0 && index < publishedGuides.length - 1
      ? publishedGuides[index + 1]
      : null;

  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Guide pagination"
      className="mt-8 grid gap-4 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={`/guides/${previous.slug}`}
          className="guide-panel flex items-center gap-3 px-5 py-4"
        >
          <ArrowLeft className="h-4 w-4 text-muted" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Previous section
            </div>
            <div className="mt-1 text-sm font-semibold text-text">
              {previous.title}
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/guides/${next.slug}`}
          className="guide-panel flex items-center justify-end gap-3 px-5 py-4 text-right"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Next section
            </div>
            <div className="mt-1 text-sm font-semibold text-text">
              {next.title}
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted" />
        </Link>
      ) : null}
    </nav>
  );
}
