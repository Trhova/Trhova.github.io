import writing from "@/data/writing.json";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { WritingCard } from "@/components/WritingCard";

export default function WritingPage() {
  return (
    <main>
      <SiteNav />
      <Section className="pt-16" title="Writing">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {writing.posts.map((post) => (
              <WritingCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </Section>
      <SiteFooter />
    </main>
  );
}

