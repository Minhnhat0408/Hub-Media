import './globals.css'
import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import { Locale, i18n } from '@/i18n.config'
import Header from '@/components/server-components/header-data'
import { getDictionary } from '@/lib/dictionary'
const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export async function generateMetadata(
  { params }: { params: { lang: Locale } },
): Promise<Metadata> {

  const { metadata } = await getDictionary(params.lang)
  return {
    title: metadata.title,
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




