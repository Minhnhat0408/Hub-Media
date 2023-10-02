'use client';
import { ArrowRight, Menu } from 'lucide-react';

import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { routes } from '@/lib/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Locale } from '@/i18n.config';
import LocaleSwitcher from './header/locale-switcher';

function MobileSidebar({ lang, navigation }: { lang: Locale; navigation: any }) {
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={'ghost'} size={'icon'} className="justify-center xl:hidden ">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-56 p-0 pt-10">
                {/* <Sidebar/> */}
                <aside className="flex h-full w-full flex-col items-start justify-start gap-y-3 p-4 pt-10">
                    {routes.map((route, index) => (
                        <Link
                            key={route.href}
                            href={`/${lang + route.href}`}
                            className={cn(
                                'group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition duration-500 hover:text-gradient',
                                pathname === `/${lang + route.href}` ? ' text-gradient' : '',
                            )}
                        >
                            <div className="flex flex-1 items-center justify-between ">
                                {navigation[route.tag]}
                                <ArrowRight />
                            </div>
                        </Link>
                    ))}

                    <LocaleSwitcher lang={lang} full className="md:hidden w-full" />
                </aside>
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;
