/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static-export friendly; deployable to Vercel or any static host
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
