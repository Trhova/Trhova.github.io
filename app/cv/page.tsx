import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
export const metadata = {
  title: "About & CV",
  description:
    "Research experience, education and scientific interests of Troels Holger Vaaben, Co-PI at DTU BRIGHT.",
};
const roles = [
  {
    date: "Sep 2026–present",
    title: "Co-PI",
    place: "DTU BRIGHT · Technical University of Denmark",
    text: "Lead PhD students and postdoctoral researchers working on microbial foods, microbiome research and metabolic health. Connect experimental design, clinical study planning and computational analysis; train colleagues in reproducible AI-assisted research.",
  },
  {
    date: "Jun–Sep 2026",
    title: "Postdoctoral researcher",
    place: "DTU BRIGHT · Technical University of Denmark",
    text: "Contributed to nutrition-focused clinical study planning, supervision, project design and shared analysis infrastructure.",
  },
  {
    date: "Jan 2023–May 2026",
    title: "PhD researcher",
    place: "DTU Biosustain / BRIGHT",
    text: "Research across cancer, microbiome, metabolism and inflammation, from experimental models and data generation to multi-omics analysis and publication.",
  },
  {
    date: "Apr 2022–Jan 2023",
    title: "Research assistant",
    place: "DTU Biosustain · Bacterial Synthetic Biology",
    text: "Engineered probiotic bacteria producing human hormones and peptides, and developed assays to study their activity.",
  },
  {
    date: "Dec 2019–Dec 2021",
    title: "Part-time research assistant",
    place: "SNIPR Biome",
    text: "Supported preclinical studies of CRISPR-based bacterial therapeutics, with phage and molecular biology workflows, sample processing and method development.",
  },
];
export default function CvPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Container>
          <header className="page-heading">
            <p className="eyebrow">About &amp; CV</p>
            <h1>
              Research &amp; experience.
            </h1>
            <p>
              I’m Troels, a life scientist and Co-PI at DTU BRIGHT. My work has
              taken me from engineering bacteria and running experiments to
              analysing multi-omics data and building AI-assisted research
              tools.
            </p>
            <a
              className="text-link"
              href="mailto:thvaaben@gmail.com?subject=CV%20request"
            >
              Request my full CV <ArrowRight size={18} />
            </a>
          </header>
          <section className="cv-section">
            <h2>Research experience</h2>
            <div>
              {roles.map((role) => (
                <article className="cv-role" key={role.date}>
                  <p className="eyebrow">{role.date}</p>
                  <h3>{role.title}</h3>
                  <p className="role-place">{role.place}</p>
                  <p>{role.text}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="cv-section">
            <h2>Education</h2>
            <div>
              <article className="cv-role">
                <h3>PhD · Technical University of Denmark</h3>
                <p>
                  Experimental cancer research, microbiome and computational
                  biology. Completed May 2026.
                </p>
              </article>
              <article className="cv-role">
                <h3>MSc Biotechnology</h3>
                <p>Technical University of Denmark</p>
              </article>
              <article className="cv-role">
                <h3>BSc Sustainable Biotechnology</h3>
                <p>Aalborg University</p>
              </article>
            </div>
          </section>
          <section className="cv-section">
            <h2>How I work</h2>
            <div className="cv-prose">
              <p>
                I use experimental models and computational analysis together.
                That includes metagenomics, transcriptomics, metabolomics and
                immune profiling, as well as the R, Python and Linux workflows
                needed to analyse them reproducibly.
              </p>
              <p>
                I also build research agents, evaluate biological foundation
                models and help colleagues use AI with source checks,
                transparent assumptions and human review. The question is always
                what the method helps us learn.
              </p>
              <Link href="/publications/" className="text-link">
                Read the research <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
