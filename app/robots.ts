import { MetadataRoute } from 'next'

export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://buschpressman-9pui.vercel.app/sitemap.xml',
  }
}
