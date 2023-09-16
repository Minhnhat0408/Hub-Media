/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['gaaga.wpengine.com'],
    },
};

module.exports = nextConfig;
