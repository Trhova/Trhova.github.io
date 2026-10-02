import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import profile from "@/data/profile.json";
import publications from "@/data/publications.json";
import { Container } from "@/components/Container";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ResearchSketch } from "@/components/ResearchSketch";

const interests = [
  {
    number: "01",
    title: "Microbes & their hosts",
    text: "How microbial metabolites change immune and metabolic responses. My work connects microbial therapeutics, cancer biology and metabolic health.",
    detail: "Microbiome · Immunometabolism · Synthetic biology",
  },
  {
    number: "02",
    title: "Finding the biology in the data",
    text: "I work across genomes, transcripts, metabolites and experimental models to understand how the pieces fit together—and which observations are worth following up.",
    detail: "Multi-omics · Experimental design · Causal thinking",
  },
  {
    number: "03",
    title: "AI at the research bench",
    text: "I build agents for evidence review and research workflows, train colleagues to use them, and evaluate protein and DNA models against established methods.",
    detail: "Research agents · Foundation models · Reproducibility",
  },
];
const highlights = [
  {
    doi: "2690687",
    title: "A probiotic yeast, a tumour model, and a multi-omics view",
    label: "Gut Microbes · 2026",
    text: "Connecting microbial, metabolic and immune changes accompanying tumour suppression in mice.",
  },
  {
    doi: "1925200",
    title: "Following the effects of S. boulardii in obesity",
    label: "Frontiers in Immunology · 2026",
    text: "Food intake, weight gain and gut–host responses in a mouse model of diet-induced obesity.",
  },
  {
    doi: "00386-9",
    title: "Engineering bacteria to modulate tumour immunity",
    label: "EMBO Reports · 2025",
    text: "An indole-producing microbial therapeutic and its effects on the tumour microenvironment.",
  },
];
export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <section className="home-hero">
          <Container>
            <div className="hero-layout">
              <div className="hero-copy">
                <p className="eyebrow">Troels Holger Vaaben · DTU BRIGHT</p>
                <h1>
                  Microbes,
                  <br />
                  metabolism
                  <br />
                  &amp; <em>human health.</em>
                </h1>
                <p className="hero-intro">
                  I study how microbes influence our biology—and build the
                  experiments and computational tools to make sense of it.
                </p>
                <a className="hero-link" href="#research">
                  Explore my work <ArrowDown size={18} />
                </a>
              </div>
              <div className="hero-art">
                <ResearchSketch />
                <p>Microbial function. Molecular signals. Host response.</p>
              </div>
            </div>
            <div className="hero-footnote">
              <span>Scientist &amp; Co-PI</span>
              <span>Biology, computation &amp; AI</span>
              <span>Based in Denmark</span>
            </div>
          </Container>
        </section>
        <section id="research" className="research-section">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">Research</p>
              <h2>Questions that keep me busy.</h2>
            </div>
            <div className="research-grid">
              {interests.map((item) => (
                <article className="research-item" key={item.number}>
                  <span className="item-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <p className="research-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
        <section id="about" className="about-section">
          <Container className="about-layout">
            <figure className="portrait">
              <Image
                src={profile.headshot}
                alt="Troels Holger Vaaben"
                width={1024}
                height={1024}
                sizes="(max-width: 700px) 85vw, 380px"
              />
              <figcaption>Troels Holger Vaaben</figcaption>
            </figure>
            <div className="about-copy">
              <p className="eyebrow">A little about me</p>
              <h2>
                From the wet lab
                <br />
                to the command line.
              </h2>
              {profile.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <Link href="/cv/" className="text-link">
                Background &amp; experience <ArrowRight size={18} />
              </Link>
            </div>
          </Container>
        </section>
        <section className="papers-section">
          <Container>
            <div className="section-heading heading-with-link">
              <div>
                <p className="eyebrow">Selected research</p>
                <h2>Recent papers.</h2>
              </div>
              <Link className="text-link" href="/publications/">
                All publications <ArrowRight size={18} />
              </Link>
            </div>
            <div className="featured-papers">
              {highlights.map((item, i) => {
                const pub = publications.find((p) =>
                  p.links.doi.endsWith(item.doi),
                );
                return pub ? (
                  <a
                    className="featured-paper"
                    key={item.doi}
                    href={pub.links.doi}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="paper-topline">
                      <span>{item.label}</span>
                      <ArrowUpRight size={21} />
                    </span>
                    <span className="paper-mark" aria-hidden="true">
                      {["Sb", "μ", "Ec"][i]}
                      <span>
                        {["microbiome", "metabolism", "therapeutics"][i]}
                      </span>
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="paper-read">
                      Read the paper <ArrowUpRight size={16} />
                    </span>
                  </a>
                ) : null;
              })}
            </div>
          </Container>
        </section>
        <section className="notes-section">
          <Container className="notes-layout">
            <div>
              <p className="eyebrow">Open notebooks</p>
              <h2>
                Things I wish I’d
                <br />
                had a guide for.
              </h2>
              <p>
                Notes and runnable examples from working through scientific
                questions. Written to be used, argued with and improved.
              </p>
              <Link href="/writing/" className="text-link">
                Browse my writing <ArrowRight size={18} />
              </Link>
            </div>
            <div className="notebook-list">
              <Link href="/guides/bulk-rna-seq/">
                <span>01 / Transcriptomics</span>
                <h3>
                  Making sense of bulk RNA-seq <ArrowUpRight />
                </h3>
                <p>
                  From experimental design to differential expression and
                  biological interpretation.
                </p>
              </Link>
              <a
                href="https://github.com/Trhova/Causal-Microbiome-Omics"
                target="_blank"
                rel="noreferrer"
              >
                <span>02 / Methods</span>
                <h3>
                  Thinking causally about the microbiome <ArrowUpRight />
                </h3>
                <p>
                  Confounding, mediation and the assumptions behind a causal
                  question.
                </p>
              </a>
              <a
                href="https://github.com/Trhova/Multi-omics"
                target="_blank"
                rel="noreferrer"
              >
                <span>03 / Data analysis</span>
                <h3>
                  Choosing a multi-omics approach <ArrowUpRight />
                </h3>
                <p>
                  Matching the method to the question, with baselines and worked
                  examples.
                </p>
              </a>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
