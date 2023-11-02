'use client';

import Image from 'next/image';
import PageTitle from '../page-title';
import Heading from '../heading';
import LetterAppear from '../animations/letter-appear';
import { Locale } from '@/i18n.config';
import { useEffect, useState } from 'react';

export default function Guests({ lang }: { lang: Locale }) {
    const [split, setSplit] = useState(false);
    useEffect(() => {
        if (window) {
            if (window.innerWidth < 768) setSplit(true);
        }
    }, []);
    return (
        <section id="guests" className="flex w-full flex-col items-center bg-cover bg-center bg-no-repeat py-20   ">
            {/* <Heading title='Guests' description='Our Guests' /> */}
            <LetterAppear className="sm:text-shadow text-shadow-sm mb-10 text-4xl font-bold tracking-widest !text-secondary sm:text-6xl">
                {lang === 'en' ? 'Our Guests' : 'Khách mời'}
            </LetterAppear>
            {!split ? (
                <Image
                    src={'https://utfs.io/f/1c778c5a-4a2d-40d4-b2f7-9a2aaa3152a3-b5nwb5.png'}
                    alt="img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-[100%] "
                />
            ) : (
                <>
                    <Image
                        src={'/images/1.png'}
                        alt="img"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="mb-10 h-auto w-[100%] "
                    />
                    <Image
                        src={'/images/2.png'}
                        alt="img"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-[100%] "
                    />
                </>
            )}
        </section>
    );
}
