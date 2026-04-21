import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug]
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = (() => {
  const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const basePath =
    explicitBasePath && explicitBasePath !== "/" ? explicitBasePath : "";

  return {
    output: "export",
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    trailingSlash: true,
    images: { unoptimized: true },
    basePath,
    assetPrefix: basePath || undefined,
    reactStrictMode: true
  };
})();

export default withMDX(nextConfig);
