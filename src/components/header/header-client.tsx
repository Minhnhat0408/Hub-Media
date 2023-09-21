'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import LocaleSwitcher from './locale-switcher';
import Image from 'next/image';
import NavBar from './navbar';
import MobileSidebar from '../mobile-sidebar';
import { Button } from '../ui/button';
import { Dot } from 'lucide-react';
import { Locale } from '@/i18n.config';
import { useState } from 'react';

function HeaderUI({ lang, navigation }: { lang: Locale; navigation: any }) {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });
    return (
        <motion.section
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: '-110%', opacity: 0 },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="bg-header z-0 flex items-center h-[90px] justify-between px-8 font-[500]"
        >
            <Image src={'/images/logo.png'} className="ml-10 h-16 w-[90px]" height={500} width={500} alt="logo" />
            <NavBar lang={lang} navigation={navigation} />
            <div className="flex gap-x-4">
                {/* <Link href={`/${lang}/about`} className='py-2 px-5 '>{navigation.contact}</Link> */}
                <Button
                    size={'default'}
                    variant={'outline'}
                    className=" rounded-none pl-3 tracking-widest duration-700"
                >
                    <span className="relative mr-3 flex h-2 w-2">
                        <span className="absolute -left-[2px] -top-[2px] h-3 w-3 animate-ping rounded-full bg-gradient opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient"></span>
                    </span>
                    {navigation.contact}
                </Button>
                <LocaleSwitcher lang={lang} />
                <MobileSidebar lang={lang} navigation={navigation} />
            </div>
        </motion.section>
    );
}

export default HeaderUI;
