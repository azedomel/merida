import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 image: {
  remotePatters: [{protocol: "https", hostname: "rickandmortyapi.com"}]
 }
};

export default nextConfig;
