import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { publishedGuides } from "@/data/guides";
import { getGuidePresentation } from "@/lib/guidePresentation";
import {
  getGuideBySlug,
  getGuideHeadings,
  getGuideReadingTimeMinutes,
  getGuideModule,
  getPublishedGuideBySlug
} from "@/lib/guides";

import { DocsLayout } from "@/components/guides/DocsLayout";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export async function generateStaticParams() {
  return publishedGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  const guideModule = getGuideModule(params.slug);
  if (!guide) {
    return {};
  }

  return {
    title: guideModule?.pageTitle ?? guide.title,
    description: guide.description
  };
}

export default async function GuidePage({
  params
}: {
  params: { slug: string };
}) {
  const guide = getPublishedGuideBySlug(params.slug);
  const guideModule = getGuideModule(params.slug);

  if (!guide || !guideModule) {
    notFound();
  }

  const [headings, readingTimeMinutes] = await Promise.all([
    getGuideHeadings(guide.slug),
    getGuideReadingTimeMinutes(guide.slug)
  ]);
  const presentation = getGuidePresentation(guide.slug);
  const GuideContent = guideModule.Component;

  return (
    <>
      <SiteNav />
      <DocsLayout
        currentSlug={guide.slug}
        title={guideModule.pageTitle ?? guide.title}
        summary={presentation?.summary ?? guide.description}
        audience={presentation?.audience ?? "Intermediate"}
        readingTimeMinutes={readingTimeMinutes}
        whatYoullLearn={presentation?.whatYoullLearn}
        headings={headings}
      >
        <GuideContent />
      </DocsLayout>
      <SiteFooter />
    </>
  );
}
