"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
const links = [
  { href: "/#research", label: "Research" },
  { href: "/publications/", label: "Publications" },
  { href: "/guides/", label: "Guides" },
  { href: "/writing/", label: "Writing" },
  { href: "/cv/", label: "About / CV" },
];
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    function outside(event: MouseEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", close);
    document.addEventListener("mousedown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("mousedown", outside);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Container className="nav-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Troels Holger Vaaben, home"
        >
          <span className="brand-mark" aria-hidden="true">
            tv<span>.</span>
          </span>
          <span>
            Troels Holger Vaaben<small>Scientist · DTU BRIGHT</small>
          </span>
        </Link>
        <div className="nav-actions">
          <nav aria-label="Main navigation" className="desktop-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  pathname.replace(/\/$/, "") === link.href.replace(/\/$/, "")
                    ? "page"
                    : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <button
            ref={trigger}
            className="mobile-menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </Container>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-navigation"
        hidden={!open}
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="/resources/" onClick={() => setOpen(false)}>
          Resources
        </Link>
        <Link href="/inspirations/" onClick={() => setOpen(false)}>
          Reading &amp; listening
        </Link>
      </nav>
    </header>
  );
}
