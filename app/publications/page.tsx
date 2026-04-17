import { ArrowUpRight } from "lucide-react";

import publications from "@/data/publications.json";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract?: string;
  links?: { pdf?: string; doi?: string; code?: string; url?: string };
};

export default function PublicationsPage() {
  const sortedPublications = [...(publications as Publication[])].sort(
    (a, b) => (b.year ?? 0) - (a.year ?? 0)
  );

  return (
    <main>
      <SiteNav />
      <Section className="pt-16" title="Publications">
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
            <ol className="grid gap-5">
              {sortedPublications.map((pub) => (
                <li
                  key={`${pub.title}-${pub.year}`}
                  className="rounded-xl border border-border/70 bg-surface2 p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      {pub.links?.url || pub.links?.doi || pub.links?.pdf ? (
                        <ExternalLink
                          href={pub.links.url ?? pub.links.doi ?? pub.links.pdf!}
                          ariaLabel={pub.title}
                          className="font-medium text-text hover:text-text/80"
                        >
                          {pub.title}
                        </ExternalLink>
                      ) : (
                        <div className="font-medium text-text">{pub.title}</div>
                      )}
                      <div className="mt-1 text-sm text-muted">{pub.authors}</div>
                      <div className="mt-1 text-sm text-muted">
                        <span className="font-medium text-text/80">
                          {pub.venue}
                        </span>{" "}
                        · {pub.year}
                      </div>
                      {pub.abstract ? (
                        <p className="mt-3 text-sm text-muted">
                          {pub.abstract}
                        </p>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pub.links?.url || pub.links?.doi || pub.links?.pdf ? (
                        <ExternalLink
                          href={pub.links.url ?? pub.links.doi ?? pub.links.pdf!}
                          ariaLabel="Open paper"
                          className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-950 hover:bg-teal-100 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-200 dark:hover:bg-teal-400/15"
                        >
                          Open
                          <ArrowUpRight className="h-4 w-4 opacity-60" />
                        </ExternalLink>
                      ) : null}
                      {pub.links?.pdf ? (
                        <ExternalLink
                          href={pub.links.pdf}
                          ariaLabel="PDF"
                          className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text hover:bg-surface2"
                        >
                          PDF
                        </ExternalLink>
                      ) : null}
                      {pub.links?.code ? (
                        <ExternalLink
                          href={pub.links.code}
                          ariaLabel="Code"
                          className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text hover:bg-surface2"
                        >
                          Code
                        </ExternalLink>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
      <SiteFooter />
    </main>
  );
}
