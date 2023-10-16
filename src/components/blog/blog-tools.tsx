'use client';
import { Locale } from '@/i18n.config';
import { Input } from '../ui/input';
import { RiSearchLine } from 'react-icons/ri';
import BlogItem from './blog-item';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Link from 'next/link';
import { BlogType } from '@/lib/constants';

export default function BlogTools({ lang,defaultRecent = [],allPosts }: { lang: Locale,defaultRecent?:BlogType[],allPosts:BlogType[] }) {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [searchResult, setSearchResult] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchValue.trim(), 1000);
    const [recentPosts, setRecentPosts] =useState<BlogType[]>()
    useEffect(() => {
        const res = localStorage.getItem('recentpost') ? JSON.parse(localStorage.getItem('recentpost') as string) : defaultRecent;
        setRecentPosts(res)
    },[])

    useEffect(() => {
        if (searchValue.trim()) {
            setLoading(true);
            const fetchData = async (value: string) => {
                let res = allPosts.filter((item) =>
                    item.title.toLowerCase().includes(value.toLowerCase()),
                );
                setTimeout(() => {
                    setSearchResult(res);
                    setLoading(false);
                }, 500);
            };
            fetchData(debounce);
        } else {
            setLoading(false);
            setSearchResult([]);
        }
    }, [debounce]);

    return (
        <div className="h-full xl:w-[400px] w-[350px] space-y-12 border-2 border-gradient px-10 py-16 ">
            <div className="relative ">
                <Input
                    placeholder={lang === 'vi' ? 'Tìm kiếm' : 'Search'}
                    type="text"
                    value={searchValue}
                    onFocus={() => setShowResult(true)}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="rounded-none border-l-0 border-r-0 border-t-0 border-white bg-transparent text-base tracking-wider text-gradient duration-500 placeholder:text-muted-foreground focus-visible:border-b-primary focus-visible:!ring-0 focus-visible:!ring-offset-0  focus-visible:placeholder:text-primary"
                />
                {loading ? (
                    <div className="absolute right-2 top-2 animate-spin text-2xl text-gradient ">
                        <AiOutlineLoading3Quarters />
                    </div>
                ) : (
                    <div className="absolute right-2 top-2 cursor-pointer text-2xl text-gradient">
                        <RiSearchLine />
                    </div>
                )}

                {showResult && searchResult.length > 0 &&
                    <div className="search-box absolute  top-10 bg-background ">
                        {
                            searchResult.map((item, index) => (
                                <Link href={'/' + lang + "/blog/" + item.contentId} className="flex  w-full items-center gap-x-3 p-4" key={index}>
                                    <div className='h-[46px] w-[46px] rounded-full overflow-hidden'>
                                        <Image 
                                            src={item.cover}
                                            className="  h-full w-auto object-cover  "
                                            height={0}
                                            width={0}
                                            sizes="100vw"
                                            alt="logo"
                                        />
                                    </div>
                                    <h2>{item.title}</h2>
                                </Link>
                            ))
                        }
                        
                    </div>
                }
            </div>
            <div className="flex w-full flex-col gap-y-4">
                <h2 className="text-2xl font-bold">{lang === 'vi' ? 'Mới Đọc' : 'Recent Blogs'}</h2>
                {
                    recentPosts?.map((item, index) => (
                        <BlogItem lang={lang} key={index} title={item.title} id={item.contentId} cover={item.cover} date={item.date} short />
                    ))
                }
         
            </div>
            <Image
                src={
                    'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2FIMG_5566.jpg?alt=media&token=078020b3-6035-4e21-aaf1-aad62f14510e&_gl=1*cfjgkq*_ga*MjEzMTY3MzA4MS4xNjkxMzM2Nzk5*_ga_CW55HF8NVT*MTY5NzA5Njg3NS4yODkuMS4xNjk3MDk2OTgwLjMzLjAuMA..'
                }
                className="h-[500px] w-auto object-cover  mix-blend-luminosity "
                height={0}
                width={0}
                sizes="100vw"
                alt="logo"
            />
        </div>
    );
}
