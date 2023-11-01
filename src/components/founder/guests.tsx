'use client';

import Image from 'next/image';
import PageTitle from '../page-title';
import Heading from '../heading';
import LetterAppear from '../animations/letter-appear';
import { Locale } from '@/i18n.config';

export default function Guests({lang} : {lang: Locale}) {
    return (
        <section id='guests' className="flex w-full flex-col items-center bg-cover bg-center bg-no-repeat py-20   ">
            {/* <Heading title='Guests' description='Our Guests' /> */}
            <LetterAppear className="text-shadow mb-10 text-6xl font-bold tracking-widest !text-[#66b09f]">
                {lang === 'en' ?  'Our Guests' : 'Khách mời'}
            </LetterAppear>
            <Image
                src={'/images/founder.png'}
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-[100%] "
            />
        </section>
    );
}
