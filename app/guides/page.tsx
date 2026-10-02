import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { publishedGuides } from "@/data/guides";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
export const metadata = {
  title: "Guides",
  description:
    "Practical scientific analysis guides, starting with bulk RNA-seq.",
};
export default function GuidesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Container>
          <header className="page-heading">
            <p className="eyebrow">Learning by doing</p>
            <h1>
              Practical guides.
            </h1>
            <p>
              Longer guides for understanding the choices behind a workflow,
              with code and examples to work through.
            </p>
          </header>
          <div className="reading-grid">
            {publishedGuides.map((guide) => (
              <article className="writing-entry" key={guide.slug}>
                <div>
                  <p className="eyebrow">Research guide</p>
                  <h2>{guide.title}</h2>
                </div>
                <div>
                  <p>{guide.description}</p>
                  <Link href={`/guides/${guide.slug}/`} className="text-link">
                    Read the guide <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
            <article className="writing-entry">
              <div>
                <p className="eyebrow">Companion repositories</p>
                <h2>More worked examples</h2>
              </div>
              <div>
                <p>
                  My causal-inference and multi-omics notes live alongside
                  runnable examples on GitHub.
                </p>
                <Link href="/writing/" className="text-link">
                  Find the notebooks <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
