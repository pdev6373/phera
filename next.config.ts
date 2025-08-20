import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['randomuser.me', 'ui-avatars.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
