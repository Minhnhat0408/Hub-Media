import type { Metadata } from 'next';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { FounderFooter } from '@/components/founder/founder-footer';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const { metadata } = await getDictionary(params.lang);
    return {
        title: metadata.blogs.title,
        openGraph: {
            images: ['/images/backlog.png'],
        },
        description: metadata.blogs.description,
    };
}

export default async function BlogLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {


    return (
        <>
            {children}
        </>
    );
}
