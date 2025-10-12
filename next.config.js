/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "plus.unsplash.com",
      "media.istockphoto.com",
      "images.unsplash.com",
      "www.freepik.com",
    ],
        remotePatterns: [
      {
        // This is the specific Vercel Blob domain pattern. 
        // Note: The structure is always '*.public.blob.vercel-storage.com'
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**', // Allows any path on this domain
      },
    ],
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
