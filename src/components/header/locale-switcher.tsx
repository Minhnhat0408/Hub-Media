'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Locale, i18n } from '@/i18n.config'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname()
  const router = useRouter()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    console.log(segments)
    return segments.join('/')
  }
  
  return (

    <Select onValueChange={(value) => {
      router.push(redirectedPathName(value))
    }}>
      <SelectTrigger className='w-16 ' >
        <SelectValue placeholder={lang} className='text-foreground ' />
      </SelectTrigger>
      <SelectContent className='min-w-0  ' >
        {i18n.locales.map(locale => {
          if (locale !== lang) {
            return (
              <SelectItem key={locale} value={locale} className='flex pl-2' >
                {locale}
              </SelectItem>
            )
          }
        })}
      </SelectContent>
    </Select>


  )
}