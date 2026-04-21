import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

import { guides } from "@/data/guides";

import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const metadata = {
  title: "Guides",
  description:
    "Long-form practical guides on transcriptomics, metagenomics, phylogenomics, and Codex-oriented workflows."
};

export default function GuidesPage() {
  const published = guides.filter((guide) => guide.status === "published");
  const upcoming = guides.filter((guide) => guide.status === "coming-soon");

  return (
    <main>
      <SiteNav />

      <section className="pt-16 pb-8">
        <Container>
          <div className="rounded-[2rem] border border-border bg-surface/90 p-8 shadow-soft">
            <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Guides
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-text md:text-5xl">
              Practical guides for computation that has to survive contact with
              real data.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted md:text-lg">
              This section collects longer-form walkthroughs that go beyond
              links and notes. The published guides are meant to be usable
              references. The rest are visible now so the site has a stable
              place for what is coming next.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-text">
              Available now
            </h2>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {published.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group rounded-[1.75rem] border border-border bg-surface p-6 shadow-soft transition hover:-translate-y-0.5 hover:bg-surface2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                      Published guide
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-text">
                      {guide.title}
                    </h3>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 text-muted transition group-hover:translate-x-0.5 group-hover:text-text" />
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {guide.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface2 px-3 py-1 text-xs font-medium text-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            Next up
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {upcoming.map((guide) => (
              <div
                key={guide.slug}
                className="rounded-[1.75rem] border border-border bg-surface/80 p-6 shadow-soft"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-text">
                    {guide.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface2 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    <Clock3 className="h-3.5 w-3.5" />
                    Coming soon
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {guide.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface2 px-3 py-1 text-xs font-medium text-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
