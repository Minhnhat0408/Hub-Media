'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Locale, i18n } from '@/i18n.config'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { cn } from '@/lib/utils'

export default function LocaleSwitcher({ lang,className,full =  false }: { lang: Locale,className?:string,full?:boolean }) {
  const pathName = usePathname()
  const router = useRouter()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  
  return (

    <Select name='locale-switcher' onValueChange={(value) => {
      router.push(redirectedPathName(value))
    }}>
      <SelectTrigger className={cn('w-16 ',className)} >
        <SelectValue placeholder={full ? ( lang === 'vi' ? "Tiếng Việt" : "English" ): (lang !== 'vi' && lang !== 'en' ? i18n.defaultLocale : lang)} className='text-foreground ' />
      </SelectTrigger>
      <SelectContent className='min-w-0  ' >
        {i18n.locales.map(locale => {
          if (locale !== lang) {
            return (
              <SelectItem key={locale} value={locale} className='flex pl-2 cursor-pointer' >
                {full ? ( locale === 'vi' ? "Tiếng Việt" : "English" ): locale}
              </SelectItem>
            )
          }
        })}
      </SelectContent>
    </Select>


  )
}