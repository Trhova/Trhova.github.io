import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import profile from "@/data/profile.json";
import { Container } from "@/components/Container";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Let’s talk research.</h2>
            <a className="footer-email" href={`mailto:${profile.links.email}`}>
              {profile.links.email} <ArrowUpRight size={22} />
            </a>
          </div>
          <div className="footer-links">
            <a
              href={profile.links.googleScholar}
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar <ArrowUpRight size={16} />
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={16} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={16} />
            </a>
            <Link href="/resources/">Research tools</Link>
            <Link href="/inspirations/">Reading &amp; listening</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Troels Holger Vaaben</span>
          <span>Technical University of Denmark · BRIGHT</span>
        </div>
      </Container>
    </footer>
  );
}
