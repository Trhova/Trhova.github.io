import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
export const metadata = { title: "Research tools" };
const resources = [
  {
    name: "Anvi’o",
    description:
      "For exploring pangenomes, inspecting metagenomic bins and keeping genome-level interpretation close to the data.",
    url: "https://merenlab.org/software/anvio/",
  },
  {
    name: "Bactopia",
    description:
      "A starting point for processing bacterial isolates consistently, from assembly and annotation to comparative analyses.",
    url: "https://bactopia.github.io/",
  },
  {
    name: "nf-core",
    description:
      "Community-maintained Nextflow pipelines. I use them as a starting point for reproducible RNA-seq and metagenomics workflows.",
    url: "https://nf-co.re/",
  },
  {
    name: "Nextstrain",
    description:
      "A useful example of how phylogenies, genomic data and interactive visualisation can help people explore an analysis.",
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
            <p className="eyebrow">On the workbench</p>
            <h1>Tools I return to.</h1>
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
