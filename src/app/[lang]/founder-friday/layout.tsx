import type { Metadata } from 'next';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { FounderFooter } from '@/components/founder/founder-footer';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const { metadata } = await getDictionary(params.lang);
    return {
        title: metadata.founder.title,
        openGraph: {
            images: ['https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fff.jpg?alt=media&token=47853d64-636f-4aff-a073-c10c0fd3eb78'],
        },
        description: metadata.founder.description,
    };
}


export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {


    return (
        <>
            {children}
            <FounderFooter lang={params.lang} />
        </>
    );
}
