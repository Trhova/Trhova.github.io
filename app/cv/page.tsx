import { ArrowUpRight } from "lucide-react";
import profile from "@/data/profile.json";
import { Container } from "@/components/Container";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
export const metadata = { title: "CV" };
export default function CvPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Container>
          <header className="page-heading">
            <h1>CV</h1>
            <p>
              A downloadable PDF CV is not linked here yet. Please get in touch
              to request a current CV or short bio.
            </p>
            <div className="writing-links">
              <a
                className="text-link"
                href="mailto:thvaaben@gmail.com?subject=CV%20request"
              >
                Request CV by email <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href={profile.links.googleScholar}>
                View publications <ArrowUpRight size={17} />
              </a>
            </div>
          </header>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
