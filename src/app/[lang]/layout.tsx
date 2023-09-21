import type { Metadata } from 'next';
import { Locale, i18n } from '@/i18n.config';
import Header from '@/components/header/header-server';
import { getDictionary } from '@/lib/dictionary';
import { Footer } from '@/components/footer';


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

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
    return (
        <>
            <Header lang={params.lang} />
            {children}
            <Footer />
        </>
    );
}
