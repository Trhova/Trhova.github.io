import {
  ArrowUpRight,
  Github,
  GraduationCap,
  Linkedin,
  Mail
} from "lucide-react";

import profile from "@/data/profile.json";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export default function LinksPage() {
  return (
    <main>
      <SiteNav />
      <Section className="pt-16" title="Links">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "GitHub",
                href: profile.links.github,
                icon: Github,
                note: "Code, pipelines, reproducible examples"
              },
              {
                title: "Google Scholar",
                href: profile.links.googleScholar,
                icon: GraduationCap,
                note: "Publications and citations"
              },
              {
                title: "LinkedIn",
                href: profile.links.linkedin,
                icon: Linkedin,
                note: "Background, roles, connections"
              },
              {
                title: "Email",
                href: `mailto:${profile.links.email}`,
                icon: Mail,
                note: "Get in touch / feedback"
              }
            ].map((card) => (
              <ExternalLink
                key={card.title}
                href={card.href}
                ariaLabel={card.title}
                className="group rounded-2xl border border-border bg-surface p-5 shadow-soft hover:bg-surface2"
              >
                <div className="flex items-start justify-between gap-3">
                  <card.icon className="h-5 w-5 text-text/80" />
                  <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-90" />
                </div>
                <div className="mt-4 font-semibold text-text">{card.title}</div>
                <div className="mt-2 text-sm text-muted">{card.note}</div>
              </ExternalLink>
            ))}
          </div>
        </Container>
      </Section>
      <SiteFooter />
    </main>
  );
}
