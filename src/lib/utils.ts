import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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