import type { Metadata } from 'next';
import { Locale, i18n } from '@/i18n.config';
import Header from '@/components/header/header-server';
import { getDictionary } from '@/lib/dictionary';
import { Footer } from '@/components/footer';
import './globals.css';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const { metadata } = await getDictionary(params.lang);
    return {
        title: metadata.home.title,
        openGraph: {
            images: ['/images/backlog.png'],
        },
        description: metadata.home.description,
    };
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const { navigation } = await getDictionary(params.lang);

    return (
        <>
            <Header lang={params.lang} navigation={navigation} />
            {children}
            <Footer lang={params.lang} />
        </>
    );
}
