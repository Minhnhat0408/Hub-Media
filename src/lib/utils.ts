import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function isImageUrl(url: string) {
  const format = ['jpg','jpeg','png','gif','svg','JPG']
  return format.some((dat) => {
      return url.includes(`.${dat}`)
  })
}

export function isAServicesPage(pathname: string) {
  const path = pathname.split('/')
  const lang = path[1]
  const title = path[2]
  if(lang && title){
    return true
  }
  return false
}
export function pathRemainLang({pathname,newpath} : {pathname: string, newpath: string}) {
  const path = pathname.split('/')
  const lang = path[1]
  return `/${lang + newpath}`
}

export function getCurrentLocale(pathname: string) {
  const path = pathname.split('/')
  const lang = path[1]
  return lang
}
export const validateString = (value: unknown,maxLength: number) => {
  if(!value) return false 
  if(typeof value !== 'string') return false
  if(value.length > maxLength) return false
  return true
}