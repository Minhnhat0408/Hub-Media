/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['gaaga.wpengine.com', 'firebasestorage.googleapis.com'],
    },
    pageExtensions: ['ts', 'tsx']
};

module.exports = nextConfig;
