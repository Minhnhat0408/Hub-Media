"use client"

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import LocaleSwitcher from '../locale-switcher'
import Image from 'next/image'
import NavBar from '../navbar'
import MobileSidebar from '../mobile-sidebar'
import { Button } from '../ui/button'
import { Dot } from 'lucide-react'
import { Locale } from '@/i18n.config'
import { useState } from 'react'

function HeaderUI({ lang, navigation }: { lang: Locale, navigation: any }) {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
    return (
        <motion.section
            variants={{
                visible: { y: 0 },
                hidden: { y: "calc(-120%) " },

            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='bg-header flex justify-between items-center px-8' >
            <Image src={'/logo.png'} className='h-16 w-[90px] ml-10' height={500} width={500} alt='logo' />
            <NavBar lang={lang} navigation={navigation} />
            <div className='flex gap-x-4'>
                {/* <Link href={`/${lang}/about`} className='py-2 px-5 '>{navigation.contact}</Link> */}
                <Button size={'default'} variant={'outline'} className='uppercase tracking-widest pl-3 duration-700 '>
                    <Dot strokeWidth={3} />
                    {navigation.contact}
                </Button>
                <LocaleSwitcher lang={lang} />
                <MobileSidebar lang={lang} navigation={navigation} />
            </div>
        </motion.section>
    );
}

export default HeaderUI;