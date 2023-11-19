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
        <section
            id="guests"
            className="flex w-full flex-col items-center bg-cover bg-center bg-no-repeat py-10 sm:py-20  "
        >
            {/* <Heading title='Guests' description='Our Guests' /> */}
            <LetterAppear className="sm:text-shadow text-shadow-sm mb-10 text-4xl font-bold tracking-widest !text-secondary sm:text-6xl">
                {lang === 'en' ? 'Our Guests' : 'Khách mời'}
            </LetterAppear>
            {!split ? (
                <Image
                    src={'https://utfs.io/f/185c2842-c3cf-46f0-9dd8-df533297646f-gedtg.png'}
                    alt="img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-[98%] "
                />
            ) : (
                <>
                    <Image
                        src={'https://utfs.io/f/03e2f06e-cea0-4b52-9c42-f345bb1ef590-prb7ml.png'}
                        alt="img"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="mb-10 h-auto w-[100%] "
                    />
                    <Image
                        src={'https://utfs.io/f/0b575820-0368-458c-a338-2ea07bb6d7d4-ukc7e.png'}
                        alt="img"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" h-auto w-[100%] mb-10 "
                    />
                </>
            )}
        </section>
    );
}
