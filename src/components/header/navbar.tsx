'use client';
import { Locale } from '@/i18n.config';
import { routes } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBar({ lang, navigation }: { lang: Locale; navigation: any }) {
    const location = usePathname();
    const core = location.split('/') as string[];
    return (
        <nav className=" text-md hidden items-center justify-between  bg-transparent py-5 md:text-[15px] xl:flex">
            <ul className={cn('flex uppercase tracking-widest ', lang === 'vi' ? ' gap-x-4' : ' gap-x-6')}>
                {routes.map((route, index) => (
                    <li key={index} className={cn(' duration-1000 hover:text-gradient')}>
                        <Link
                            locale={lang}
                            prefetch={true}
                            href={`/${lang + route.href}`}
                            className={
                                'px-5 py-2 font-[500] ' +
                                ('/' + core.at(1) + '/' + (core.at(2) ? core.at(2) : '') === `/${lang + route.href}`
                                    ? route.href === '/founder'
                                        ? 'text-secondary'
                                        : 'text-gradient'
                                    : '')
                            }
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
