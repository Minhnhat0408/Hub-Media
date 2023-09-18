import HomeHero from '@/components/home/home-hero'
import MagicNumber from '@/components/home/magic-number'
import Portfolio from '@/components/home/portfolio'
import Services from '@/components/home/services'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  return (
    <main className="flex min-h-screen flex-col items-center h-[2000px] ">
      <Image src={'/images/backlog.png'} alt="img" width="0" height="0" sizes="100vw"   className=" fixed h-[100vh] w-[100vw]  -z-10 bg-black"/>
      <HomeHero page={page} />
      <Portfolio />
      <MagicNumber/>
      <Services/>
    </main>
  )
}
