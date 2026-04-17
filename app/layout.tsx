import type { Metadata } from "next";
import "./globals.css";

import profile from "@/data/profile.json";

function themeInitScript() {
  // Runs before hydration to avoid a flash of incorrect theme.
  // eslint-disable-next-line no-useless-escape
  return `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  } catch {}
})();
`.trim();
}

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  `https://trhova.github.io${basePath ? basePath : ""}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: profile.name,
    template: `%s · ${profile.name}`
  },
  description: profile.tagline,
  openGraph: {
    type: "website",
    title: profile.name,
    description: profile.tagline,
    url: siteUrl,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: profile.name }]
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

