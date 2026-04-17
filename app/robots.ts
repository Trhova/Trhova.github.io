import type { MetadataRoute } from "next";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  `https://trhova.github.io${basePath ? basePath : ""}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}

