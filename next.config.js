/** @type {import('next').NextConfig} */
const repo = "alex-doss-mobile-mechanic";
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  output: isProduction ? "export" : undefined,
  basePath: isProduction ? `/${repo}` : "",
  assetPrefix: isProduction ? `/${repo}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};
