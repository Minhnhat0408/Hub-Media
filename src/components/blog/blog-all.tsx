'use client';

import { BlogContext } from '@/contexts/context';
import BlogItem from './blog-item';
import BlogTools from './blog-tools';
import { useContext } from 'react';
import { BlogType } from '@/lib/constants';
import { Locale } from '@/i18n.config';
import Search from './search';

export default function BlogAll({ lang }: { lang: Locale }) {
    const { allBlogs: blogs } = useContext(BlogContext);
    console.log(blogs)
    let recentBlog: BlogType[] = blogs;
    recentBlog = recentBlog.slice(0, 3);
    return (
        <>
            <Search lang={lang} allPosts={blogs} className="xl:hidden" />
            <section className="flex w-full space-x-10 px-4 pb-20 lg:py-20 xl:space-x-20 xl:px-10 xl:py-0  2xl:px-20">
                <div className="grid  flex-1 grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 ">
                    {blogs.map((blog, ind) => (
                        <BlogItem
                            lang={lang}
                            key={ind}
                            title={blog.title}
                            id={blog.contentId}
                            preview={blog.preview}
                            cover={blog.cover}
                            date={blog.date}
                        />
                    ))}
                </div>
                <div className=" hidden h-fit xl:block">
                    <BlogTools lang={lang} defaultRecent={recentBlog} allPosts={blogs} />
                </div>
            </section>
        </>
    );
}
