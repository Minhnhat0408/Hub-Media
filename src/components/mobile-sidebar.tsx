'use client';
import { ArrowRight, Menu } from 'lucide-react';

import { use, useEffect, useState } from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { routes } from '@/lib/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Locale } from '@/i18n.config';
import LocaleSwitcher from './header/locale-switcher';

function MobileSidebar({ lang, navigation }: { lang: Locale; navigation: any }) {
    const [isMounted, setIsMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <Sheet>
            <SheetTrigger className="justify-center xl:hidden px-2 ">
                <Menu />
            </SheetTrigger>
            <SheetContent className="w-56 p-0 pt-10">
                {/* <Sidebar/> */}
                <aside className="flex h-full w-full flex-col items-start justify-start gap-y-3 p-4 pt-10">
                    {routes.map((route, index) => (
                        <SheetClose asChild key={index}>
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
                        </SheetClose>
                    ))}

                    <LocaleSwitcher lang={lang} full className="w-full md:hidden" />
                </aside>
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;
