import type { Metadata } from 'next';
import { Locale, i18n } from '@/i18n.config';
import Header from '@/components/header/header-server';
import { getDictionary } from '@/lib/dictionary';
import { Footer } from '@/components/footer';
import './globals.css';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const { metadata } = await getDictionary(params.lang);
    return {
        metadataBase: new URL('https://pbhubmedia.vercel.app/'),
        title: metadata.title,
        openGraph: {
            images: ['/images/backlog.png'],
        },
        viewport: 'width=device-width, initial-scale=1',
        description: metadata.description,
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
