/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gaaga.wpengine.com',
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'utfs.io'
            }
        ],
    },
    pageExtensions: ['ts', 'tsx'],
    reactStrictMode: false,
};

module.exports = nextConfig;
