'use client';

import { Locale } from '@/i18n.config';

import { BlogContentType, BlogType } from '@/lib/constants';
import parse, { Element } from 'html-react-parser';
import Image from 'next/image';
import BlogTools from './blog-tools';
import { useContext, useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { BlogContext, IBlogContext } from '@/contexts/context';

export default function BlogDetailsUI({ content, lang, id }: { content: BlogContentType; lang: Locale; id: string }) {
    const parser = (input: string) =>
        parse(input, {
            replace: (domNode) => {
                if (domNode instanceof Element && domNode.attribs.class === 'remove') {
                    return <></>;
                }
            },
        });
    const {allBlogs} = useContext<IBlogContext>(BlogContext);
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
        <section className="flex w-full 2xl:space-x-32 xl:space-x-20 space-x-10 2xl:px-20 xl:px-10 px-4  py-20 xl:py-0">
            <div className="flex-1 w-full ">
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
                    <p className=" silver font-bold uppercase tracking-wider text-muted-foreground">{content.date}</p>
                    <p className=" silver font-bold uppercase tracking-wider text-muted-foreground ">By Hub Media</p>
                </div>
                <div className="ql-editor h-fit ">{parser(content.content)}</div>
            </div>
            <div className="h-fit lg:block hidden ">
                <BlogTools lang={lang} allPosts={allBlogs} />
            </div>
        </section>
    );
}
