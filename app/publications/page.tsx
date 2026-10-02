import { ArrowUpRight } from "lucide-react";
import publications from "@/data/publications.json";
import profile from "@/data/profile.json";
import { Container } from "@/components/Container";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
export const metadata = {
  title: "Publications",
  description:
    "Research papers on microbial therapeutics, multi-omics and host–microbe interactions by Troels Holger Vaaben and colleagues.",
};
function Authors({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/(TH Vaaben)/g)
        .map((part, i) =>
          part === "TH Vaaben" ? <strong key={i}>{part}</strong> : part,
        )}
    </>
  );
}
export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);
  const years = Array.from(new Set(sorted.map((p) => p.year)));
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Container>
          <header className="page-heading">
            <p className="eyebrow">Scientific work</p>
            <h1>Publications.</h1>
            <p>
              Microbial therapeutics, host responses, and the biology between
              them.
            </p>
            <a
              className="text-link"
              href={profile.links.googleScholar}
              target="_blank"
              rel="noreferrer"
            >
              Find me on Google Scholar <ArrowUpRight size={17} />
            </a>
          </header>
          <div className="publication-list">
            {years.map((year) => (
              <section
                className="publication-year"
                key={year}
                aria-labelledby={`year-${year}`}
              >
                <h2 id={`year-${year}`}>{year}</h2>
                <ol>
                  {sorted
                    .filter((p) => p.year === year)
                    .map((pub) => (
                      <li className="publication" key={pub.links.doi}>
                        <p className="publication-venue">{pub.venue}</p>
                        <h3>
                          <a
                            href={pub.links.doi}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {pub.title}
                            <ArrowUpRight size={20} aria-hidden="true" />
                          </a>
                        </h3>
                        <p className="publication-authors">
                          <Authors text={pub.authors} />
                        </p>
                        <a
                          className="publication-doi"
                          href={pub.links.doi}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {pub.links.doi.replace("https://doi.org/", "doi: ")}
                        </a>
                      </li>
                    ))}
                </ol>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
