import type { ReactNode } from "react";

import { guideDisplay, guideMono, guideSans } from "@/lib/guideFonts";
import type { GuideHeading } from "@/lib/guides";

import { Container } from "@/components/Container";
import { GuideHeader } from "@/components/guides/GuideHeader";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { OnPageNav } from "@/components/guides/OnPageNav";
import { PrevNextNav } from "@/components/guides/PrevNextNav";

export function DocsLayout({
  audience,
  children,
  currentSlug,
  headings,
  readingTimeMinutes,
  summary,
  title,
  whatYoullLearn = []
}: {
  audience: string;
  children: ReactNode;
  currentSlug: string;
  headings: GuideHeading[];
  readingTimeMinutes: number;
  summary: string;
  title: string;
  whatYoullLearn?: string[];
}) {
  return (
    <main
      className={[
        guideSans.variable,
        guideMono.variable,
        guideDisplay.variable,
        "guide-theme relative overflow-x-hidden py-8 sm:py-10"
      ].join(" ")}
    >
      <Container className="max-w-[96rem]">
        <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
          <GuideSidebar mode="mobile" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[16rem,minmax(0,1fr),15rem] xl:gap-8">
          <GuideSidebar mode="desktop" />

          <div className="min-w-0">
            <GuideHeader
              title={title}
              summary={summary}
              audience={audience}
              readingTimeMinutes={readingTimeMinutes}
              whatYoullLearn={whatYoullLearn}
            />

            <div className="mt-4 lg:hidden">
              <OnPageNav headings={headings} mode="mobile" />
            </div>

            <div className="guide-panel mt-6 min-w-0 px-5 py-8 sm:px-8">
              <article className="guide-article">{children}</article>
            </div>

            <PrevNextNav currentSlug={currentSlug} />
          </div>

          <aside className="hidden lg:block">
            <OnPageNav headings={headings} mode="desktop" />
          </aside>
        </div>
      </Container>
    </main>
  );
}
