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
import { cn } from '@/lib/utils';

export default function Search({ lang,allPosts ,className}: { lang: Locale,allPosts:BlogType[] ,className?:string}) {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [searchResult, setSearchResult] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchValue.trim(), 1000);

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
        <div className={cn("h-full   w-full px-10 py-10 sm:mt-0 mt-10 ",className)}>
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
                    <div className="search-box absolute  z-10 top-10 bg-background ">
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
           
           
        </div>
    );
}
