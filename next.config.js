/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  env: {
    NEXT_PUBLIC_SITE_NAME: 'SSV LIFECARE',
    NEXT_PUBLIC_WHATSAPP_NUMBER: '+919876543210',
  },
};

module.exports = nextConfig;