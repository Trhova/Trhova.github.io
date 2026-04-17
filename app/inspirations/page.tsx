import { ArrowUpRight, BookOpen, Mic, Youtube } from "lucide-react";

import inspirations from "@/data/inspirations.json";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export default function InspirationsPage() {
  const groups: Array<{
    key: "Books" | "Podcasts" | "YouTube";
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }> = [
    { key: "Books", label: "Books", icon: BookOpen },
    { key: "Podcasts", label: "Podcasts", icon: Mic },
    { key: "YouTube", label: "YouTube", icon: Youtube }
  ];

  const data = inspirations as Record<
    string,
    Array<{
      title: string;
      description?: string;
      author?: string;
      creator?: string;
      url?: string;
    }>
  >;

  return (
    <main>
      <SiteNav />
      <Section className="pt-16" title="Inspirations">
        <Container>
          <div className="grid gap-6">
            {groups.map((group) => {
              const items = data[group.key] ?? [];
              const GroupIcon = group.icon;
              return (
                <div
                  key={group.key}
                  className="rounded-2xl border border-border bg-surface p-6 shadow-soft"
                >
                  <div className="flex items-center gap-2">
                    <GroupIcon className="h-4 w-4 text-text/80" />
                    <h2 className="text-sm font-semibold text-text">
                      {group.label}
                    </h2>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {items.map((item) => {
                      const byline = item.author ?? item.creator;
                      return (
                        <div
                          key={item.title}
                          className="rounded-xl border border-border/70 bg-surface2 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <GroupIcon className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                  {item.url ? (
                                    <ExternalLink
                                      href={item.url}
                                      ariaLabel={item.title}
                                      className="font-medium text-text hover:text-text/80"
                                    >
                                      {item.title}
                                    </ExternalLink>
                                  ) : (
                                    <div className="font-medium text-text">
                                      {item.title}
                                    </div>
                                  )}
                                  {byline ? (
                                    <div className="mt-1 text-xs text-muted">
                                      {byline}
                                    </div>
                                  ) : null}
                                </div>
                                {item.url ? (
                                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 opacity-60" />
                                ) : null}
                              </div>
                              {item.description ? (
                                <p className="mt-2 text-sm text-muted">
                                  {item.description}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
      <SiteFooter />
    </main>
  );
}
