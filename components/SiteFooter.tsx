import { Github, GraduationCap, Linkedin, Mail } from "lucide-react";

import profile from "@/data/profile.json";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/50">
      <Container className="flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js +
          Tailwind
        </div>
        <div className="flex items-center gap-3">
          <ExternalLink
            href={profile.links.github}
            ariaLabel="GitHub"
            className="rounded-full border border-border bg-surface p-2 hover:bg-surface2"
          >
            <Github className="h-4 w-4" />
          </ExternalLink>
          <ExternalLink
            href={profile.links.googleScholar}
            ariaLabel="Google Scholar"
            className="rounded-full border border-border bg-surface p-2 hover:bg-surface2"
          >
            <GraduationCap className="h-4 w-4" />
          </ExternalLink>
          <ExternalLink
            href={profile.links.linkedin}
            ariaLabel="LinkedIn"
            className="rounded-full border border-border bg-surface p-2 hover:bg-surface2"
          >
            <Linkedin className="h-4 w-4" />
          </ExternalLink>
          <ExternalLink
            href={`mailto:${profile.links.email}`}
            ariaLabel="Email"
            className="rounded-full border border-border bg-surface p-2 hover:bg-surface2"
          >
            <Mail className="h-4 w-4" />
          </ExternalLink>
        </div>
      </Container>
    </footer>
  );
}

