import { promises as fs } from "node:fs";
import path from "node:path";

import GithubSlugger from "github-slugger";

import { guideModules } from "@/content/guides";
import { guides, publishedGuides } from "@/data/guides";

export type GuideHeading = {
  depth: number;
  slug: string;
  text: string;
};

function getGuideSourcePath(slug: string) {
  return path.join(process.cwd(), "content", "guides", `${slug}.mdx`);
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getPublishedGuideBySlug(slug: string) {
  return publishedGuides.find((guide) => guide.slug === slug);
}

export function getGuideModule(slug: string) {
  return guideModules[slug];
}

export async function getGuideHeadings(slug: string): Promise<GuideHeading[]> {
  const source = await fs.readFile(getGuideSourcePath(slug), "utf8");
  const slugger = new GithubSlugger();
  const headings: GuideHeading[] = [];
  let inFence = false;

  for (const rawLine of source.split("\n")) {
    const line = rawLine.trim();
    if (line.startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(##|###)\s+(.+)$/.exec(line);
    if (!match) continue;

    const text = match[2].trim();
    headings.push({
      depth: match[1].length,
      slug: slugger.slug(text),
      text
    });
  }

  return headings;
}
