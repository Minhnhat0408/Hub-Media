import 'server-only'
import { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  vi: () => import('@/dictionaries/vi.json').then(module => module.default)
}

const servicesDictionaries = {
  en: () => import('@/dictionaries/en/services.json').then(module => module.default),
  vi: () => import('@/dictionaries/vi/services.json').then(module => module.default)
}
// fetch from dictionaries/en/services.json
// fetch from dictionaries/vi/services.json
export const getServices = async (locale: Locale) =>{
  return locale === 'vi' ? servicesDictionaries.vi() : servicesDictionaries.en();
} 
export const getDictionary = async (locale: Locale) => {
  return locale === 'vi' ? dictionaries.vi() : dictionaries.en();
};

export const getSpecifiedService = async (locale: Locale, title: string) => {
  const dictionary = () => import(`@/dictionaries/${locale}/${title}.json`).then(module => module.default)
  
  return dictionary()
}