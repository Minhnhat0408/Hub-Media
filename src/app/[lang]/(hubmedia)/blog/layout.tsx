'use client'
import { Locale } from '@/i18n.config';
import { BlogType } from '@/lib/constants';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase/firebase-app';
import BlogProvider from '@/contexts/provider';
import { useEffect, useState } from 'react';
import Loading from '../loading';

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
 
}) {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    useEffect(() => {
        (async () => {
            const res = await getDocs(query(collection(db, 'blogs'), orderBy('date', 'desc')));
            const blogs: BlogType[] = res.docs.map((doc) => {
                const newDate = new Date(doc.data().date.toDate()).toLocaleDateString();
                return { ...doc.data(), date: newDate };
            }) as BlogType[];
            setBlogs(blogs);
    
        
        })()
    },[])
   

    return <BlogProvider allBlogs={blogs}>{blogs.length <= 0 ? <Loading/> : children}</BlogProvider>;
}
