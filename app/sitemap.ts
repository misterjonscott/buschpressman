import { MetadataRoute } from 'next'

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://buschpressman.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}