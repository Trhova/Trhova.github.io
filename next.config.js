/** @type {import('next').NextConfig} */
const nextConfig = (() => {
  const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const basePath =
    explicitBasePath && explicitBasePath !== "/" ? explicitBasePath : "";

  return {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
    basePath,
    assetPrefix: basePath || undefined,
    reactStrictMode: true
  };
})();

export default nextConfig;
