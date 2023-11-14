'use client';

import { Locale } from '@/i18n.config';
import 'react-quill/dist/quill.snow.css';

import { BlogContentType, BlogType } from '@/lib/constants';
import parse, { Element } from 'html-react-parser';
import Image from 'next/image';
import BlogTools from './blog-tools';
import { useContext, useEffect, useState } from 'react';
import { BlogContext, IBlogContext } from '@/contexts/context';
import Search from './search';

export default function BlogDetailsUI({ content, lang, id }: { content: BlogContentType; lang: Locale; id: string }) {
    const parser = (input: string) =>
        parse(input, {
            replace: (domNode) => {
                if (domNode instanceof Element && domNode.attribs.class === 'remove') {
                    return <></>;
                }
            },
        });
    const { allBlogs } = useContext<IBlogContext>(BlogContext);
    useEffect(() => {
        const recentPosts = localStorage.getItem('recentpost')
            ? JSON.parse(localStorage.getItem('recentpost') as string)
            : [];
        if (recentPosts.length < 3) {
            if (recentPosts.find((item: { contentId: string }) => item.contentId === id)) {
                //switch it to the top
                const newRecentPosts = recentPosts.filter((item: { contentId: string }) => item.contentId !== id);
                localStorage.setItem(
                    'recentpost',
                    JSON.stringify([
                        { contentId: id, title: content.title, cover: content.cover, date: content.date },
                        ...newRecentPosts,
                    ]),
                );
                return;
            }
            localStorage.setItem(
                'recentpost',
                JSON.stringify([
                    { contentId: id, title: content.title, cover: content.cover, date: content.date },
                    ...recentPosts,
                ]),
            );
        } else {
            if (recentPosts.find((item: { contentId: string }) => item.contentId === id)) {
                //switch it to the top
                const newRecentPosts = recentPosts.filter((item: { contentId: string }) => item.contentId !== id);
                localStorage.setItem(
                    'recentpost',
                    JSON.stringify([
                        { contentId: id, title: content.title, cover: content.cover, date: content.date },
                        ...newRecentPosts,
                    ]),
                );
                return;
            }
            localStorage.setItem(
                'recentpost',
                JSON.stringify([
                    { contentId: id, title: content.title, cover: content.cover, date: content.date },
                    ...recentPosts.slice(0, 2),
                ]),
            );
        }
    }, []);

    return (
        <>
            <Search lang={lang} allPosts={allBlogs} className="lg:hidden" />
            <section className="relative flex w-full space-x-10 px-4 lg:py-20 xl:space-x-20 xl:px-10 xl:py-0 2xl:space-x-32 2xl:px-20">
                <div className="w-full flex-1 ">
                    <div className="aspect-[2/1] w-full overflow-hidden">
                        <Image
                            src={content.cover}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="preview"
                            className="w-full object-cover"
                        />
                    </div>
                    <div className="my-8 flex w-full justify-between">
                        <p className=" silver font-bold uppercase tracking-wider text-muted-foreground">
                            {content.date}
                        </p>
                        <p className=" silver font-bold uppercase tracking-wider text-muted-foreground ">
                            By Hub Media
                        </p>
                    </div>
                    <div className="ql-snow h-fit">
                        <div className="  ql-editor   ">{parser(content.content)}</div>
                    </div>
                </div>
                <div className="sticky  top-10 hidden h-fit overflow-y-scroll lg:block ">
                    <BlogTools lang={lang} allPosts={allBlogs} />
                </div>
            </section>
        </>
    );
}
