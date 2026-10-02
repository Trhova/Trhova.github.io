import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
export const metadata = { title: "Research tools" };
const resources = [
  {
    name: "Anvi’o",
    description:
      "Useful for pangenomics, metagenome-resolved analyses, interactive inspection of bins and contigs, and figure-ready visual summaries. I use it when exploratory visualization and genome-centric interpretation need to stay close to the underlying data.",
    url: "https://merenlab.org/software/anvio/",
  },
  {
    name: "Bactopia",
    description:
      "A practical bacterial genomics workflow stack for assembly, annotation, QC, taxonomic characterization, and downstream summaries. Good when processing many isolates with consistent defaults and reproducible outputs matters more than one-off scripting.",
    url: "https://bactopia.github.io/",
  },
  {
    name: "nf-core",
    description:
      "Community-maintained Nextflow pipelines that provide solid starting points for RNA-seq, metagenomics, and other common bioinformatics workflows. I treat them as reproducible baselines, then adapt configuration and execution details to local HPC environments when needed.",
    url: "https://nf-co.re/",
  },
  {
    name: "Nextstrain",
    description:
      "A strong reference point for making genomic epidemiology and phylogenetic interpretation visually legible. Even outside outbreak-focused work, it is a useful example of how analysis, annotation, and interactive visualization can be combined into something scientists can actually explore.",
    url: "https://nextstrain.org/",
  },
];
export default function ResourcesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Container>
          <header className="page-heading">
            <p className="eyebrow">Resources</p>
            <h1>Resources</h1>
            <p>
              A few useful starting points for microbial genomics and
              reproducible analysis.
            </p>
          </header>
          <div className="resource-grid">
            {resources.map((r) => (
              <article className="resource-item" key={r.name}>
                <h2>
                  <a href={r.url} target="_blank" rel="noreferrer">
                    {r.name}
                    <ArrowUpRight size={20} />
                  </a>
                </h2>
                <p>{r.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
