import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pbhubmedia.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://pbhubmedia.vercel.app/en',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://pbhubmedia.vercel.app/vi',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
        url: 'https://pbhubmedia.vercel.app/vi/services',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://pbhubmedia.vercel.app/vi/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }
  ]
}