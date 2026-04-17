import {
  ArrowUpRight,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Moon,
  Sun
} from "lucide-react";

import profile from "@/data/profile.json";
import writing from "@/data/writing.json";

import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { WritingCard } from "@/components/WritingCard";

function IconLink({
  href,
  label,
  icon: Icon
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <ExternalLink
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text shadow-sm hover:bg-surface2"
      ariaLabel={label}
    >
      <Icon className="h-4 w-4" />
      {label}
      <ArrowUpRight className="h-4 w-4 opacity-60" />
    </ExternalLink>
  );
}

export default function HomePage() {
  return (
    <main id="top">
      <SiteNav />

      <Section className="pt-6 pb-6">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-center">
            <div className="flex flex-col items-start">
              <img
                src={profile.headshot}
                alt={`${profile.name} headshot`}
                width={216}
                height={216}
                className="h-[216px] w-[216px] rounded-full border border-border bg-surface shadow-sm"
              />
            </div>

            <div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                {profile.name}
              </h1>
              <p className="mt-3 max-w-2xl text-balance text-base text-muted md:text-lg">
                {profile.tagline}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <IconLink
                  href={profile.links.googleScholar}
                  label="Google Scholar"
                  icon={GraduationCap}
                />
                <IconLink
                  href={profile.links.linkedin}
                  label="LinkedIn"
                  icon={Linkedin}
                />
                <IconLink
                  href={`mailto:${profile.links.email}`}
                  label="Email"
                  icon={Mail}
                />
                <IconLink
                  href={profile.links.github}
                  label="GitHub"
                  icon={Github}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="about" title="About me" className="pt-6 pb-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
              {profile.about.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="mt-4 first:mt-0 text-muted"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
              <div className="text-sm font-semibold text-text">
                Areas & working style
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-text">
                {[
                  "Metagenomics",
                  "Pangenomics",
                  "Multi-omics",
                  "Host–microbe interactions",
                  "3D cell models",
                  "Patient-derived organoids",
                  "High-content imaging",
                  "Mouse models",
                  "Translational microbiome research"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-surface2 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-border/80 bg-surface2 p-4 text-sm text-muted">
                Open to collaboration on data-driven microbiome projects,
                especially where sequencing, multi-omics, imaging, and model
                systems need to be tied back to a clear biological question.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="writing" title="Recent posts" className="pt-10 pb-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {writing.posts.map((post) => (
              <WritingCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="links" title="Links" className="pt-10 pb-16">
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
