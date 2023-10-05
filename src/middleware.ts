import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '@/i18n.config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { type } from 'os'
import { get } from 'http'
import { middlewareRoutes, routes } from './lib/constants'

function getLocale(request: NextRequest): string | undefined {

    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  
    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    if(typeof languages === 'undefined' || typeof languages === 'string') return i18n.defaultLocale
  
    const locale = matchLocale(languages, locales, i18n.defaultLocale)
    return locale


}

export function middleware(request: NextRequest) {
  
  const pathname = request.nextUrl.pathname
  if (pathname.startsWith("/api")) return NextResponse.next();
  
  const pathnameIsMissingLocale = middlewareRoutes.some((route) => pathname.startsWith(route))
  // console.log(pathnameIsMissingLocale,'fe')
  const locale = getLocale(request)
  // const localeIstrue = i18n.locales.some((locale) => {
  //   return pathname.startsWith(`/${locale}`)})
  // // Redirect if there is no locale

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }else if(pathnameIsMissingLocale) {
      if(pathname.split('/')[3] !== 'not-found') {
        const res =  NextResponse.redirect(
          new URL(
            `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
            request.url
          )
        )
        return res
          }
  }
  // else if(!localeIstrue) {
  //   return NextResponse.redirect(new URL(`/${locale}/not-found`, request.url))
  // } 
}

// export const config = {
//   matcher: [ '/((?!_next/static|_next/image|images|logo|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)',],
// };  
export const config = {
  matcher: [ '/((?!_next/static|_next/image|images|logo|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)',]
}