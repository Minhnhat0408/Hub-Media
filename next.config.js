/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['gaaga.wpengine.com', 'firebasestorage.googleapis.com', 'res.cloudinary.com','utfs.io'],
    },
    pageExtensions: ['ts', 'tsx'],
    reactStrictMode: false,
};

module.exports = nextConfig;
