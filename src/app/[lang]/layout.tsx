import type { Metadata } from 'next';
import { Locale, i18n } from '@/i18n.config';
import Header from '@/components/header/header-server';
import { getDictionary } from '@/lib/dictionary';

import './globals.css';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const { metadata } = await getDictionary(params.lang);
    return {
        title: metadata.home.title,
        openGraph: {
            images: ['https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2F345329692_191612113793014_5846958053862937696_n.jpg?alt=media&token=f57c40d7-d18b-4f39-81b5-7abbeb973d80&_gl=1*11j8j1z*_ga*MjEzMTY3MzA4MS4xNjkxMzM2Nzk5*_ga_CW55HF8NVT*MTY5Njc0OTk2NC4yODMuMS4xNjk2NzUyOTYxLjU4LjAuMA..'],
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
        </>
    );
}
