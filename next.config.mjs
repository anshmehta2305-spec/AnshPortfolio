/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com', 'api.qrserver.com', 'images.unsplash.com'],
  },
};

export default nextConfig;
