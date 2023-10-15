'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import LocaleSwitcher from './locale-switcher';
import Image from 'next/image';
import NavBar from './navbar';
import MobileSidebar from '../mobile-sidebar';
import { Button } from '../ui/button';
import { Locale } from '@/i18n.config';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

function HeaderUI({ lang, navigation }: { lang: Locale; navigation: any }) {
    const { scrollY } = useScroll();
    const router = useRouter();
    const [open, setOpen] = useState(true);
    const pathname = usePathname();
    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    });

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: '-110%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-110%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="bg-header z-0 flex h-[60px] items-center justify-between px-2 font-[500] sm:px-8 md:h-[90px]"
                >
                    <Image
                        src={'/logo/logonotext.png'}
                        className="ml-4 h-[80%]  w-auto cursor-pointer md:!ml-10 "
                        height={500}
                        width={500}
                        onClick={() => {
                            router.push('/' + lang);
                        }}
                        alt="logo"
                    />
                    <NavBar lang={lang} navigation={navigation} />
                    <div className="flex gap-x-4">
                        <Button
                            size={'default'}
                            variant={'outline'}
                            className={cn(
                                ' rounded-none pl-3 tracking-widest duration-700',
                                pathname.includes('/contact') ? 'border-gradient text-gradient' : '',
                            )}
                            onClick={() => {
                                router.push('/' + lang + '/contact');
                            }}
                        >
                            <span className="relative mr-3 flex h-2 w-2">
                                <span className="absolute -left-[2px] -top-[2px] h-3 w-3 animate-ping rounded-full bg-gradient opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient"></span>
                            </span>
                            {navigation.contact}
                        </Button>
                        <LocaleSwitcher lang={lang} className=" hidden md:flex" />
                        <MobileSidebar lang={lang} navigation={navigation} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default HeaderUI;
