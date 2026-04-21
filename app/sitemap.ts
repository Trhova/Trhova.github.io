import type { MetadataRoute } from "next";

import { publishedGuides } from "@/data/guides";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  `https://trhova.github.io${basePath ? basePath : ""}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date()
    },
    {
      url: `${siteUrl}/guides/`,
      lastModified: new Date()
    },
    ...publishedGuides.map((guide) => ({
      url: `${siteUrl}/guides/${guide.slug}/`,
      lastModified: new Date()
    }))
  ];
}
