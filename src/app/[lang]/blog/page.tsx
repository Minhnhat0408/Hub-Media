"use client"
import BlogItem from '@/components/blog/blog-item';
import BlogTools from '@/components/blog/blog-tools';
import PageTitle from '@/components/page-title';
import { BlogContext } from '@/contexts/context';
import { Locale } from '@/i18n.config';
import { BlogType } from '@/lib/constants';
import { useContext } from 'react';



export default function BlogPage({ params: { lang } }: { params: { lang: Locale } }) {

    const { allBlogs: blogs } = useContext(BlogContext);
    let recentBlog: BlogType[] = blogs;
    recentBlog = recentBlog.slice(0, 3);
    // console.log(res.docs[0])
    return (
        <main className="h-fit  w-full py-[60px] md:py-[90px] ">
             <PageTitle
                src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fbghub.JPG?alt=media&token=07da7fd8-9f51-479c-848a-691c6972c227&_gl=1*3zs0og*_ga*MjEzMTY3MzA4MS4xNjkxMzM2Nzk5*_ga_CW55HF8NVT*MTY5Njc0OTk2NC4yODMuMS4xNjk2NzUxNzE1LjQ0LjAuMA."
                title='Blog'
            />
            {/* <UnderConstruction construction={pages.underconstruction} />
             */}

            <section className='w-full flex  space-x-20 px-20'>
                <div className='flex-1  grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 '>
                    {
                        blogs.map((blog,ind) => <BlogItem lang={lang} key={ind} title={blog.title} id={blog.contentId} cover={blog.cover} date={blog.date}  />)
                    }
                        {/* <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/> */}

                </div>
                <div className=' h-fit'>
                    <BlogTools lang={lang} defaultRecent={recentBlog} allPosts={blogs} />
                </div>

            </section>
        </main>
    );
}