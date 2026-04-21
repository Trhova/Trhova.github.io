import Link from "next/link";

import profile from "@/data/profile.json";
import { Container } from "@/components/Container";
import { GuidesMenu } from "@/components/GuidesMenu";
import { ThemeToggle } from "@/components/ThemeToggle";

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="rounded-md px-3 py-2 text-muted hover:bg-surface2 hover:text-text"
    >
      {children}
    </Link>
  );
}

export function SiteNav() {
  return (
    <div className="sticky top-0 z-40 border-b border-border/60 bg-surface/60 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link
          href="/"
          className="font-semibold tracking-tight text-text hover:text-text/80"
        >
          {profile.name}
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 text-sm md:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/writing">Writing</NavLink>
            <GuidesMenu />
            <NavLink href="/publications">Publications</NavLink>
            <NavLink href="/inspirations">Inspirations</NavLink>
            <NavLink href="/resources">Resources</NavLink>
            <NavLink href="/cv">CV</NavLink>
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </div>
  );
}
