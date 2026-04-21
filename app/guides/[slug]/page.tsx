import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { publishedGuides } from "@/data/guides";
import {
  getGuideBySlug,
  getGuideHeadings,
  getGuideModule,
  getPublishedGuideBySlug
} from "@/lib/guides";

import { GuidePageLayout } from "@/components/guides/GuidePageLayout";
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

  const headings = await getGuideHeadings(guide.slug);
  const GuideContent = guideModule.Component;

  return (
    <>
      <SiteNav />
      <GuidePageLayout
        title={guideModule.pageTitle ?? guide.title}
        eyebrow={guideModule.eyebrow}
        description={guide.description}
        tags={guide.tags}
        headings={headings}
      >
        <GuideContent />
      </GuidePageLayout>
      <SiteFooter />
    </>
  );
}
