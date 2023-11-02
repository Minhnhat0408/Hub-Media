import BlogAll from '@/components/blog/blog-all';
import PageTitle from '@/components/page-title';
import { Locale } from '@/i18n.config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { getDictionary } from '@/lib/dictionary';
import type { Metadata } from 'next';
import { db } from '@/firebase/firebase-app';
import { BlogType } from '@/lib/constants';
import BlogProvider from '@/contexts/provider';

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

export default async function BlogPage({ params: { lang } }: { params: { lang: Locale } }) {
    const res = await getDocs(query(collection(db, 'blogs'), orderBy('date', 'desc')));
    const blogs: BlogType[] = res.docs.map((doc) => {
        const newDate = new Date(doc.data().date.toDate()).toLocaleDateString();
        return { ...doc.data(), date: newDate };
    }) as BlogType[];
    return (
        <BlogProvider allBlogs={blogs}>
            <main className="h-fit  w-full py-[60px] md:py-[90px] ">
                <PageTitle
                    src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fbghub.JPG?alt=media&token=07da7fd8-9f51-479c-848a-691c6972c227&_gl=1*3zs0og*_ga*MjEzMTY3MzA4MS4xNjkxMzM2Nzk5*_ga_CW55HF8NVT*MTY5Njc0OTk2NC4yODMuMS4xNjk2NzUxNzE1LjQ0LjAuMA."
                    title="Blog"
                />
                <BlogAll lang={lang} />
            </main>
        </BlogProvider>
    );
}
