import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import ProgressIndicator from './progress-indicator'
import Image from 'next/image'
import NavBar from './navbar'
import MobileSidebar from './mobile-sidebar'
import { Button } from './ui/button'
import { Dot } from 'lucide-react'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)
  return (
    <header className='fixed w-full bg-header fadeIn'>
      <ProgressIndicator />
      <section className='flex justify-between items-center px-8'>
        <Image src={'/logo.png'} width={200} height={60} alt='logo' />
        <NavBar lang={lang} navigation={navigation} />
        <div className='flex gap-x-4'>
          {/* <Link href={`/${lang}/about`} className='py-2 px-5 '>{navigation.contact}</Link> */}
          <Button size={'default'} variant={'outline'} className='uppercase tracking-widest pl-3 duration-700'><Dot strokeWidth={3} />{navigation.contact}</Button>
          <LocaleSwitcher lang={lang} />
          <MobileSidebar lang={lang} navigation={navigation} />
        </div>

      </section>

    </header>


  )
}