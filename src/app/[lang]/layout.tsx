import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import { Locale, i18n } from '@/i18n.config'
import Header from '@/components/header'
import { getDictionary } from '@/lib/dictionary'
const prompt = Prompt({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '600', '700', '800'],
})

export async function generateMetadata(
  { params }: { params: { lang: Locale } },
): Promise<Metadata> {

  const { metadata } = await getDictionary(params.lang)
  return {
    title: metadata.title,
    openGraph: {
      type: "website",
      url: "https://pbhubmedia.vercel.app/",
      siteName: "Hub Media",
      images: [{
        url: "../backlog.jpg",
      }],
      description: metadata.description,
    }
  }
}
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
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




