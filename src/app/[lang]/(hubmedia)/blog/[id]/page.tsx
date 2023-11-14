import BlogDetailsUI from '@/components/blog/blog-details-ui';
import PageTitle from '@/components/page-title';

import { db } from '@/firebase/firebase-app';
import { Locale } from '@/i18n.config';
import { BlogContentType } from '@/lib/constants';
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
        content = { ...res.data(), date: new Date(res.data().date.toDate()).toLocaleDateString() } as BlogContentType;
    }

    return (
        <main className="w-full py-[60px] md:py-[90px]">
            <PageTitle
                src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fbghub.JPG?alt=media&token=07da7fd8-9f51-479c-848a-691c6972c227&_gl=1*3zs0og*_ga*MjEzMTY3MzA4MS4xNjkxMzM2Nzk5*_ga_CW55HF8NVT*MTY5Njc0OTk2NC4yODMuMS4xNjk2NzUxNzE1LjQ0LjAuMA."
                title={content.title}
                className='lg:!text-5xl md:!text-4xl !text-2xl '
            />

            <BlogDetailsUI content={content} id={res.id} lang={lang} />
        </main>
    );
}
