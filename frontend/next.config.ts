import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for better Vercel compatibility
  output: 'standalone',
  
  // Disable strict mode for production to avoid double renders
  reactStrictMode: true,
  
  // Configure environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
  
  // Optimize images
  images: {
    unoptimized: true,
  },
  
  // Transpile packages if needed
  transpilePackages: [],
  
  // Experimental features for better serverless support
  experimental: {
    // Enable server actions
  },
};

export default nextConfig;
