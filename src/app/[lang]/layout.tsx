import './globals.css'
import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import { Locale, i18n } from '@/i18n.config'
import Header from '@/components/header/header-server'
import { getDictionary } from '@/lib/dictionary'
const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400','500', '700'],
})

export async function generateMetadata(
  { params }: { params: { lang: Locale } },
): Promise<Metadata> {

  const { metadata } = await getDictionary(params.lang)
  return {
    metadataBase: new URL("https://pbhubmedia.vercel.app"),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'vi': '/vi',
      },
    },
    title: metadata.title,
    openGraph:{
      images: ['/images/backlog.png'],
    },
    description: metadata.description,
  }
}
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function LangLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={prompt.className}>
        <Header lang={params.lang} />{children}</body>
    </html>
  )
}




