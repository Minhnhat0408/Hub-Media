import './globals.css'
import type { Metadata, ResolvingMetadata } from 'next'
import { Prompt } from 'next/font/google'
import { Locale,i18n } from '@/i18n.config'
import Header from '@/components/header'
import { getDictionary } from '@/lib/dictionary'
const prompt = Prompt({
  subsets: ['vietnamese','latin'],
  weight: ['400', '600', '700', '800'],
})
type Props = {
  params: { lang: Locale }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // console.log(params)
  const { metadata } = await getDictionary(params.lang)
  return {
    title: metadata.title,  
    openGraph: {
      images: ['../../../public/backlog.jpg'],
    },
    description: metadata.description,
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




