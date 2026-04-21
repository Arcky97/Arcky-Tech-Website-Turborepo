import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: []
  }
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  generateBuildId: async () => {
    return process.env.GIT_COMMIT_SHA || Date.now().toString();
  },
  
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
