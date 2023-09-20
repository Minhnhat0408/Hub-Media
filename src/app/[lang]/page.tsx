import HomeHero from '@/components/home/home-hero';
import MagicNumber from '@/components/home/magic-number';
import Portfolio from '@/components/home/portfolio';
import Services from '@/components/home/services';
import { Locale, i18n } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const { metadata } = await getDictionary(params.lang);
    return {
        title: metadata.title,
        openGraph: {
            images: ['/images/backlog.png'],
        },
        description: metadata.description,
    };
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
    const { page } = await getDictionary(lang);
    return (
        <main className="flex h-[2000px] min-h-screen flex-col items-center ">
            <Image
                src={'/images/backlog.png'}
                alt="img"
                width="0"
                height="0"
                sizes="100vw"
                className=" fixed -z-10 h-[100vh]  w-[100vw] bg-black"
            />
            <HomeHero page={page} />
            <Portfolio />
            <MagicNumber />
            <Services />
        </main>
    );
}
