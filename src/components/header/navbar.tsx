'use client';
import { Locale } from '@/i18n.config';
import { routes } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function NavBar({ lang, navigation }: { lang: Locale; navigation: any }) {
    const location = usePathname();
    useEffect(() => {
        console.log(location
            )
    }, [location])
    return (
        <nav className=" hidden items-center justify-between bg-transparent  py-5 text-sm xl:flex">
            <ul className={cn('flex uppercase tracking-widest ', lang === 'vi' ? ' gap-x-4' : ' gap-x-6')}>
                {routes.map((route, index) => (
                    <li key={index} className="my-2 duration-1000 hover:text-gradient">
                        <Link
                        locale={lang}
                            href={`/${lang + route.href}`}
                            className={'px-5 ' + (location === `/${lang + route.href}` ? ' text-gradient' : '')}
                        >
                            {navigation[route.tag]}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;
