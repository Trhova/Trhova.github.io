import writing from "@/data/writing.json";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { WritingCard } from "@/components/WritingCard";
export const metadata = {
  title: "Writing",
  description:
    "Notes and practical examples on transcriptomics, causal thinking and multi-omics analysis.",
};
export default function WritingPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Container>
          <header className="page-heading">
            <p className="eyebrow">Notes from the work</p>
            <h1>Writing &amp; walkthroughs.</h1>
            <p>
              Scientific questions, analysis decisions, and examples you can run
              yourself.
            </p>
          </header>
          <div className="reading-grid">
            {writing.posts.map((post) => (
              <WritingCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
