import type { ReactNode } from "react";

import { guideDisplay, guideMono, guideSans } from "@/lib/guideFonts";
import type { GuideHeading } from "@/lib/guides";

import { Container } from "@/components/Container";

export function GuidePageLayout({
  children,
  description,
  eyebrow = "Guide",
  headings,
  tags = [],
  title
}: {
  children: ReactNode;
  description: string;
  eyebrow?: string;
  headings: GuideHeading[];
  tags?: string[];
  title: string;
}) {
  const toc = headings.filter((heading) => heading.depth <= 3);

  return (
    <main
      className={[
        guideSans.variable,
        guideMono.variable,
        guideDisplay.variable,
        "guide-theme relative overflow-x-hidden py-10"
      ].join(" ")}
    >
      <Container className="max-w-7xl">
        <header className="guide-panel mb-8 overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <span className="guide-eyebrow">{eyebrow}</span>
              <h1 className="font-[var(--font-guide-display)] text-4xl tracking-tight text-white sm:text-5xl">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                {description}
              </p>
            </div>
            <div className="flex max-w-xl flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="guide-panel min-w-0 px-5 py-8 sm:px-8">
            <div className="mb-8 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
                Full table of contents
              </p>
              <nav aria-label="Page table of contents">
                <ol className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                  {toc.map((item) => (
                    <li
                      key={item.slug}
                      className={item.depth === 3 ? "sm:pl-4" : ""}
                    >
                      <a href={`#${item.slug}`}>{item.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            <article className="guide-article">{children}</article>
          </div>

          <aside className="hidden lg:block">
            <div className="guide-panel sticky top-24 px-5 py-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                On this page
              </p>
              <nav aria-label="Secondary table of contents">
                <ol className="space-y-3 text-sm text-slate-200">
                  {toc.map((item) => (
                    <li
                      key={`${item.slug}-secondary`}
                      className={item.depth === 3 ? "pl-4 text-slate-300" : ""}
                    >
                      <a href={`#${item.slug}`}>{item.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
