import inspirations from "@/data/inspirations.json";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
export const metadata = { title: "Reading & listening" };
type Item = {
  title: string;
  description?: string;
  author?: string;
  creator?: string;
  url?: string;
};
export default function InspirationsPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Container>
          <header className="page-heading">
            <p className="eyebrow">Away from my own work</p>
            <h1>Reading &amp; listening.</h1>
            <p>Books, conversations and explanations I’ve found useful.</p>
          </header>
          <div className="reading-grid">
            {Object.entries(inspirations as Record<string, Item[]>).map(
              ([group, items]) => (
                <section className="inspiration-group" key={group}>
                  <h2>{group}</h2>
                  <div>
                    {items.map((item) => (
                      <article className="inspiration-item" key={item.title}>
                        <h3>
                          {item.url ? (
                            <a href={item.url} target="_blank" rel="noreferrer">
                              {item.title} ↗
                            </a>
                          ) : (
                            item.title
                          )}
                        </h3>
                        <p className="byline">{item.author ?? item.creator}</p>
                        <p>{item.description}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ),
            )}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
