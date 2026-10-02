import { ArrowUpRight } from "lucide-react";
import profile from "@/data/profile.json";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
export const metadata = { title: "Find me online" };
export default function LinksPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Container>
          <header className="page-heading">
            <p className="eyebrow">Elsewhere</p>
            <h1>Find me online.</h1>
          </header>
          <div className="resource-grid">
            {[
              {
                name: "Google Scholar",
                href: profile.links.googleScholar,
                note: "Publications and citations.",
              },
              {
                name: "GitHub",
                href: profile.links.github,
                note: "Code, notebooks and analysis workflows.",
              },
              {
                name: "LinkedIn",
                href: profile.links.linkedin,
                note: "Professional background and connections.",
              },
              {
                name: "Email",
                href: `mailto:${profile.links.email}`,
                note: profile.links.email,
              },
            ].map((item) => (
              <article className="resource-item" key={item.name}>
                <h2>
                  <a href={item.href}>
                    {item.name}
                    <ArrowUpRight size={20} />
                  </a>
                </h2>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
