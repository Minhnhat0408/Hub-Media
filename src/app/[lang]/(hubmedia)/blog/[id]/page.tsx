import BlogDetailsUI from '@/components/blog/blog-details-ui';
import PageTitle from '@/components/page-title';

import { db } from '@/firebase/firebase-app';
import { Locale } from '@/i18n.config';
import { BlogContentType } from '@/lib/constants';
import dayjs from 'dayjs';
import { doc, getDoc } from 'firebase/firestore';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export async function generateMetadata({
    params: { lang, id },
}: {
    params: { id: string; lang: Locale };
}): Promise<Metadata> {
    const res = await getDoc(doc(db, 'contents', id));

    if (!res || !res.exists()) {
        redirect('/' + lang + '/not-found');
    }
    let content: BlogContentType | [] = res.data() as BlogContentType;
    const textWithoutStrongTags = content.content.replace(/<strong[^>]*>.*?<\/strong>/g, '');
    const textContent = textWithoutStrongTags.replace(/<[^>]*>/g, '');
    const words = textContent.split(/\s+/);
    const first20Words = words.slice(0, 20).join(' ');
    return {
        title: 'Hub Media - ' + content.title,
        openGraph: {
            images: [content.cover],
        },
        description: first20Words + '...',
    };
}
export default async function BlogDetail({ params: { lang, id } }: { params: { lang: Locale; id: string } }) {
    const res = await getDoc(doc(db, 'contents', id));
    let content: BlogContentType | [] = [];
    if (!res || !res.exists()) {
        redirect('/' + lang + '/not-found');
    } else {
        content = { ...res.data(), date: dayjs(res.data().date.toDate()).format('DD/MM/YYYY') } as BlogContentType;
    }

    return (
        <main className="w-full py-[60px] md:py-[90px]">
            <PageTitle
                src="/images/bg-title.jpg"
                title={content.title}
                className="!text-2xl md:!text-4xl lg:!text-5xl "
            />

            <BlogDetailsUI content={content} id={res.id} lang={lang} />
        </main>
    );
}
