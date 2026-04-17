import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export default function CvPage() {
  return (
    <main>
      <SiteNav />
      <Section className="pt-16" title="CV">
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
            <p className="text-muted">
              A downloadable PDF CV is not linked here yet. Until that file is
              added, this page serves as a simple contact point for requesting a
              current academic CV or short bio.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <ExternalLink
                href="mailto:thvaaben@gmail.com?subject=CV%20request"
                ariaLabel="Request CV by email"
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted"
              >
                Request CV by email
              </ExternalLink>
              <ExternalLink
                href="https://scholar.google.com/citations?user=tZbZawMAAAAJ&hl=en"
                ariaLabel="View publications on Google Scholar"
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted"
              >
                View publications
              </ExternalLink>
            </div>
          </div>
        </Container>
      </Section>
      <SiteFooter />
    </main>
  );
}
