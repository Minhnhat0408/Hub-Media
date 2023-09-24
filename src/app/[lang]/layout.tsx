import type { Metadata } from 'next';
import { Locale, i18n } from '@/i18n.config';
import Header from '@/components/header/header-server';
import { getDictionary } from '@/lib/dictionary';
import { Footer } from '@/components/footer';
import './globals.css';

// export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
//     const { metadata } = await getDictionary(params.lang);
//     return {
//         title: metadata.title,
//         openGraph: {
//             images: ['/images/backlog.png'],
//         },
//         description: metadata.description,
//     };
// }

export const metadata: Metadata = {
    metadataBase: new URL('https://pbhubmedia.vercel.app/'),
    alternates: {
        canonical: '/',
        languages: {
            en: '/en',
            vi: '/vi',
        },
    },
    title: 'Hub Media - Connect your brand to the world',
    openGraph: {
        images: ['/images/backlog.png'],
    },
    description:
        'Hub Media is a digital marketing agency that provides livestreaming services, video production, and digital marketing services to connect your brand to the world.',
};

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
        <html lang={params.lang}>
            <body>
                <Header lang={params.lang} navigation={navigation} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
