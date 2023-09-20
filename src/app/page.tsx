import { Locale } from '@/i18n.config'
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://pbhubmedia.vercel.app/"),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'vi': '/vi',
    },
  },
  title: 'Hub Media - Connect your brand to the world',
  openGraph: {
      images: ['/images/backlog.png'],
  },
  description:
      'Hub Media is a digital marketing agency that provides livestreaming services, video production, and digital marketing services to connect your brand to the world.',
};

export default async function NotFound({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  return (
    <main className="flex min-h-screen flex-col items-center h-[100vh] ">
      Nothing here
    </main>
  )
}
