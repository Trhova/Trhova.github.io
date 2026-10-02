import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import profile from "@/data/profile.json";
import publications from "@/data/publications.json";
import writing from "@/data/writing.json";
import { Container } from "@/components/Container";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WritingCard } from "@/components/WritingCard";

const areas = [
  "Metagenomics",
  "Pangenomics",
  "Multi-omics",
  "Host–microbe interactions",
  "3D cell models",
  "Patient-derived organoids",
  "High-content imaging",
  "Mouse models",
  "Translational microbiome research",
];
const contacts = [
  { label: "Google Scholar", href: profile.links.googleScholar },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Email", href: `mailto:${profile.links.email}` },
  { label: "GitHub", href: profile.links.github },
];
export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="personal-home">
        <section className="profile-intro">
          <Container className="profile-intro-layout">
            <Image
              src={profile.headshot}
              alt={`${profile.name} headshot`}
              width={180}
              height={180}
              sizes="(max-width: 780px) 128px, 180px"
              className="profile-photo"
              priority
            />
            <div>
              <h1>{profile.name}</h1>
              <p className="profile-tagline">{profile.tagline}</p>
              <div className="profile-contacts">
                {contacts.map(({ label, href }) => (
                  <a key={label} href={href} className="text-link">
                    {label}
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <section id="about" className="personal-section">
          <Container>
            <div className="section-heading">
              <h2>About me</h2>
            </div>
            <div className="personal-about-layout">
              <div className="about-copy">
                {profile.about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <aside className="working-areas">
                <h3>Areas &amp; working style</h3>
                <ul>
                  {areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
                <p>
                  Open to collaboration on data-driven microbiome projects,
                  especially where sequencing, multi-omics, imaging, and model
                  systems need to be tied back to a clear biological question.
                </p>
              </aside>
            </div>
          </Container>
        </section>
        <section className="personal-section compact-papers">
          <Container>
            <div className="section-heading heading-with-link">
              <h2>Recent papers</h2>
              <Link className="text-link" href="/publications/">
                All publications <ArrowRight size={17} />
              </Link>
            </div>
            <div className="recent-paper-list">
              {publications
                .filter((p) => p.year === 2026)
                .map((pub) => (
                  <article key={pub.links.doi}>
                    <p className="publication-venue">
                      {pub.venue} · {pub.year}
                    </p>
                    <h3>
                      <a href={pub.links.doi} target="_blank" rel="noreferrer">
                        {pub.title} <ArrowUpRight size={17} />
                      </a>
                    </h3>
                  </article>
                ))}
            </div>
          </Container>
        </section>
        <section id="writing" className="personal-section">
          <Container>
            <div className="section-heading">
              <h2>Recent posts</h2>
            </div>
            <div className="reading-grid">
              {writing.posts.map((post) => (
                <WritingCard key={post.id} post={post} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
