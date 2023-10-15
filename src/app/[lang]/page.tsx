import Characteristics from '@/components/home/characteristics';
import FAQ from '@/components/home/faq';
import HomeHero from '@/components/home/home-hero';
import Partner from '@/components/home/partner';
import Portfolio from '@/components/home/portfolio';
import Services from '@/components/home/services';
import Vision from '@/components/home/vision';
import { Locale } from '@/i18n.config';
import { getDictionary, getServices } from '@/lib/dictionary';
import Image from 'next/image';


export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
    const { pages } = await getDictionary(lang);
    const services =await getServices(lang);
    return (
        <main className="flex min-h-screen flex-col items-center overflow-hidden ">
            <Image
                src={'/images/IMG_5712.jpg'}
                alt="img"
                width="0"
                height="0"  
                sizes="100vw"
                className=" fixed -z-10 h-[100vh] w-auto object-cover  lg:w-[100vw]  bg-black"
            />
            <HomeHero home={pages.home['home-hero']} lang={lang} />
            <Characteristics characteristics={pages.home.characteristics} />
            <Portfolio lang={lang} portfolio={pages.home.portfolio} />
            <Vision vision={pages.home.vision} />
            <Partner lang={lang} />
            <Services lang={lang} services={services} />
            <FAQ lang={lang} faq={pages.home.faq} />
        </main>
    );
}
