
import { Locale, i18n } from '@/i18n.config';
import { BlogType } from '@/lib/constants';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase/firebase-app';
import BlogProvider from '@/contexts/provider';

export default async function BlogLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const res = await getDocs(query(collection(db, 'blogs'), orderBy('date', 'desc')));
    const blogs: BlogType[] = res.docs.map((doc) => {
        const newDate = new Date(doc.data().date.toDate()).toLocaleDateString();
        return { ...doc.data(), date: newDate };
    }) as BlogType[];

    return <BlogProvider allBlogs={blogs}>{children}</BlogProvider>;
}
