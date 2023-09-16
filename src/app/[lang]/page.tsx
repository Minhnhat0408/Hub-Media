import HomeHero from '@/components/home/home-hero'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  return (
    <main className="flex min-h-screen flex-col items-center h-[2000px]">
      <HomeHero page={page} />
    </main>
  )
}
