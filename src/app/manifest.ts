import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hub Media',
    short_name: 'Hub',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: 'black',
    theme_color: '#d9658c',
    icons: [
      {
        src: '/logo/logo.png',
        sizes: '192x192',
        type: 'image/png',
      }
    ],
  }
}