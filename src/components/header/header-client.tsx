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
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

function HeaderUI({ lang, navigation }: { lang: Locale; navigation: any }) {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
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
            className="bg-header z-0 flex items-center ssm:h-[90px] h-[76px] justify-between sm:px-8 px-2 font-[500]"
        >
            <Image src={'/logo/logonotext.png'} className="md:!ml-10 ssm:h-16 h-[80%] w-auto ssm:w-[90px] " height={500} width={500} alt="logo" />
            <NavBar lang={lang} navigation={navigation} />
            <div className="flex gap-x-4">
                <Button
                    size={'default'}
                    variant={'outline'}
                    className={cn(" rounded-none pl-3 tracking-widest duration-700", pathname === '/' + lang + '/contact' ? 'border-gradient text-gradient' : '')}
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
                <LocaleSwitcher lang={lang} className=' md:flex hidden' />
                <MobileSidebar lang={lang} navigation={navigation} />
            </div>
        </motion.section>
    );
}

export default HeaderUI;
