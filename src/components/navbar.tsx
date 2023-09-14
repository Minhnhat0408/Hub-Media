'use client'
import { Locale } from "@/i18n.config";
import { routes } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar({ lang, navigation }: { lang: Locale, navigation: any }) {
    const location = usePathname();
    return (
        <nav className=' flex items-center justify-between py-5 bg-transparent   '>
            <ul className='flex gap-x-8 uppercase tracking-widest '>
                {
                    routes.map((route, index) => (
                        <li key={index} className='my-2'>
                            <Link href={`/${lang + route.href}`} className={'px-5 ' + (location === `/${lang + route.href}` ? ' text-gradient' : '')}>{navigation[route.tag]}</Link>
                        </li>
                    ))
                }
            </ul>

        </nav>
    );
}

export default NavBar;