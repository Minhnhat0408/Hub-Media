'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Locale, i18n } from '@/i18n.config'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname()
  const router = useRouter()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='w-20'>
      <Select onValueChange={(value) => {
        router.push(redirectedPathName(value))
      }}>
        <SelectTrigger >
          <SelectValue placeholder={lang} className='text-foreground' />
        </SelectTrigger>
        <SelectContent >
          {i18n.locales.map(locale => {
            if (locale !== lang) {
              return (
                <SelectItem key={locale} value={locale} >
                  {locale}
                </SelectItem>
              )
            }
          })}
        </SelectContent>
      </Select>
    </div>


  )
}