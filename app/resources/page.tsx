import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

type Resource = {
  name: string;
  description: string;
  url?: string;
};

const resources: Resource[] = [
  {
    name: "Anvi’o",
    description:
      "Useful for pangenomics, metagenome-resolved analyses, interactive inspection of bins and contigs, and figure-ready visual summaries. I use it when exploratory visualization and genome-centric interpretation need to stay close to the underlying data.",
    url: "https://merenlab.org/software/anvio/"
  },
  {
    name: "Bactopia",
    description:
      "A practical bacterial genomics workflow stack for assembly, annotation, QC, taxonomic characterization, and downstream summaries. Good when processing many isolates with consistent defaults and reproducible outputs matters more than one-off scripting.",
    url: "https://bactopia.github.io/"
  },
  {
    name: "nf-core",
    description:
      "Community-maintained Nextflow pipelines that provide solid starting points for RNA-seq, metagenomics, and other common bioinformatics workflows. I treat them as reproducible baselines, then adapt configuration and execution details to local HPC environments when needed.",
    url: "https://nf-co.re/"
  },
  {
    name: "Nextstrain",
    description:
      "A strong reference point for making genomic epidemiology and phylogenetic interpretation visually legible. Even outside outbreak-focused work, it is a useful example of how analysis, annotation, and interactive visualization can be combined into something scientists can actually explore.",
    url: "https://nextstrain.org/"
  }
];

export default function ResourcesPage() {
  return (
    <main>
      <SiteNav />
      <Section className="pt-16" title="Resources">
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
            <p className="text-muted">
              A small set of tools and workflow frameworks I return to often for
              microbiome, genomics, and reproducible computational biology work.
              The emphasis here is on tools that are practical in real projects,
              not just popular in demos.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((r) => (
                <div
                  key={r.name}
                  className="rounded-2xl border border-border/70 bg-surface2 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="font-semibold text-text">{r.name}</div>
                    {r.url ? (
                      <ExternalLink
                        href={r.url}
                        ariaLabel={r.name}
                        className="rounded-full border border-border bg-surface p-2 hover:bg-surface2"
                      >
                        <ArrowUpRight className="h-4 w-4 opacity-70" />
                      </ExternalLink>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm text-muted">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <SiteFooter />
    </main>
  );
}
