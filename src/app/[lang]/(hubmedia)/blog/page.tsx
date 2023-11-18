'use client';
import BlogAll from '@/components/blog/blog-all';
import PageTitle from '@/components/page-title';
import { Locale } from '@/i18n.config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase/firebase-app';
import { BlogType } from '@/lib/constants';
import BlogProvider from '@/contexts/provider';
import { useEffect, useState } from 'react';
import Loading from '../loading';
import dayjs from "dayjs";


export default function BlogPage({ params: { lang } }: { params: { lang: Locale } }) {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    useEffect(() => {
        (async () => {
            const res = await getDocs(query(collection(db, 'blogs'), orderBy('date', 'desc')));
            const tmp: BlogType[] = res.docs.map((doc) => {
                const newDate = dayjs(doc.data().date.toDate()).format('DD/MM/YYYY');
                return { ...doc.data(), date: newDate };
            }) as BlogType[];
            setBlogs(tmp);
        })();
    }, []);

    return (
        <>
            {blogs.length > 0 ? (
                <BlogProvider allBlogs={blogs}>
                    <main className="h-fit  w-full py-[60px] md:py-[90px] ">
                        <PageTitle
                            src="/images/bg-title.jpg"
                            title="Blog"
                        />
                        <BlogAll lang={lang} />
                    </main>
                </BlogProvider>
            ) : (
                <Loading />
            )}
        </>
    );
}
