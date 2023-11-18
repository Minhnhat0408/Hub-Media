import FounderHero from '@/components/founder/founder-hero';
import Guests from '@/components/founder/guests';
import Products from '@/components/founder/products';
import Vision from '@/components/vision';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import FounderHosts from '@/components/founder/founder-hosts';
import FounderFAQ from '@/components/founder/founder-faq';
import { FounderFooter } from '@/components/founder/founder-footer';

export default async function FounderPage({ params: { lang } }: { params: { lang: Locale } }) {
    const { pages } = await getDictionary(lang);

    return (
        <main className=" min-h-screen  overflow-hidden pt-[60px] md:pt-[90px] ">
            <Image
                src={'/images/ffbg.png'}
                alt="img"
                width="0"
                height="0"
                sizes="100vw"
                className=" fixed -z-10 h-[100vh] w-auto bg-black top-0  object-cover  lg:w-[100vw]"
            />
            <FounderHero />
            <Vision
                vision={pages.founder.vision}
                ff
                src="https://utfs.io/f/48c10290-b3c1-4515-80e4-3f83afa68383-q7e1m0.png"
            />
            <Products lang={lang} products={pages.founder.products} />
            <Guests lang={lang} />
            <FounderHosts lang={lang} />
            <FounderFAQ faq={pages.founder.faq} lang={lang} />

            {/* <UnderConstruction construction={pages.underconstruction} /> */}
        </main>
    );
}
