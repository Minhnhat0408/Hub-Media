import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '@/i18n.config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { type } from 'os'

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
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )  
  
  // Redirect if there is no locale

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    const res =  NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
    return res
  }
  const res = NextResponse.next()
  return res
}

export const config = {
  matcher: [ '/((?!_next/static|_next/image|images|logo|favicon.ico|layout|robots.txt).*)',],
};  