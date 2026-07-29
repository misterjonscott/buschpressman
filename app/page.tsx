<meta name="google-site-verification" content="FvhefMFqPYmUximEOaaNK6BWFjRM9Rolc_3OhPrLTLc" />

import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: 'Archive 2024 | The Missing Link in Busch Pressman History',
  description: 'A digital forensic archive exploring the history, espionage, and engineering of the rare 1943 wooden Busch Pressman 20247 test mule.',
  keywords: ['Busch Pressman', 'Graflex', 'Large Format Camera', 'Vintage Camera', 'Camera History'],
};

export default function HomePage() {
  return <HomePageClient />;
}
