import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hub Media',
    short_name: 'Hub Media',
    description: 'Hub Media là một công ty cung cấp giải pháp marketing dành cho các doanh nghiệp hướng tới đối tượng là giới trẻ.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111218',
    theme_color: '#d9658c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}