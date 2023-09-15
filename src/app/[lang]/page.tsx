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
    <main className="flex min-h-screen flex-col items-center  pt-[84px] h-[2000px]">
      <Image src={'/backlog.png'} width={800} height={300} alt='bl' className='w-full'/>
      <h1 className='text-3xl font-bold'>{page.home.title}</h1>
      <p className='text-gray-500'>{page.home.description}</p>
      
    </main>
  )
}
