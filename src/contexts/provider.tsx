"use client"
import { BlogType } from '@/lib/constants';
import { BlogContext } from './context';

export default function BlogProvider({ allBlogs, children }: { allBlogs: BlogType[]; children: React.ReactNode }) {
    return (
        <BlogContext.Provider value={{allBlogs}}>
            <>{children}</>
        </BlogContext.Provider>
    );
}
