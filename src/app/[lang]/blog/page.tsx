import BlogItem from '@/components/blog/blog-item';
import BlogTools from '@/components/blog/blog-tools';
import PageTitle from '@/components/page-title';
import UnderConstruction from '@/components/underconstruction';
import { db } from '@/firebase/firebase-app';

import { Locale } from '@/i18n.config';
import { Blog } from '@/lib/constants';
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';


export default async function BlogPage({ params: { lang } }: { params: { lang: Locale } }) {

    const res = await getDocs(collection(db, 'blogs'))
    const blogs: Blog[] = res.docs.map((doc) => doc.data()) as Blog[] ;

  
    return (
        <main className="h-fit  w-full py-20 ">
             <PageTitle
                src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fbghub.JPG?alt=media&token=07da7fd8-9f51-479c-848a-691c6972c227&_gl=1*3zs0og*_ga*MjEzMTY3MzA4MS4xNjkxMzM2Nzk5*_ga_CW55HF8NVT*MTY5Njc0OTk2NC4yODMuMS4xNjk2NzUxNzE1LjQ0LjAuMA."
                title='Blog'
            />
            {/* <UnderConstruction construction={pages.underconstruction} />
             */}

            <section className='w-full flex  space-x-20 px-20'>
                <div className='w-[65%]  grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 '>
                    {
                        blogs.map((blog,ind) => <BlogItem key={ind} title={blog.title} cover={blog.cover} date={new Date(blog.date.toDate()).toLocaleDateString()}  />)
                    }
                        {/* <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/> */}

                </div>
                <div className='flex-1 h-fit'>
                    <BlogTools lang={lang}/>
                </div>

            </section>
        </main>
    );
}