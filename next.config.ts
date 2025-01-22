import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['i.scdn.co', 'assets.aceternity.com', 'placehold.co', 'dummyimage.com', 'image-cdn-fa.spotifycdn.com', 'image-cdn-ak.spotifycdn.com'],
  },
};

export default nextConfig;
