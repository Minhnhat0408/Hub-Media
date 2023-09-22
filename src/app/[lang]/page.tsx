import { Footer } from '@/components/footer';
import Heading from '@/components/heading';
import Characteristics from '@/components/home/characteristics';
import HomeHero from '@/components/home/home-hero';
import MagicNumber from '@/components/home/magic-number';
import Partner from '@/components/home/partner';
import Portfolio from '@/components/home/portfolio';
import Services from '@/components/home/services';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';


export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
    const { page } = await getDictionary(lang);
    return (
        <main className="flex min-h-screen flex-col items-center ">
            <Image
                src={'/images/IMG_5712.jpg'}
                alt="img"
                width="0"
                height="0"
                sizes="100vw"
                className=" fixed -z-10 h-[100vh]  w-[100vw] bg-black"
            />
            <HomeHero page={page} />
            <Characteristics/>
            <Portfolio />
            <Partner />
            {/* <MagicNumber /> */}
            <Services />

        </main>
        
    );
}
