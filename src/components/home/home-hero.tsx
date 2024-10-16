'use client';
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';
import TypeWriter from 'typewriter-effect';
import Image from 'next/image';
import Mark from '../markup';
import Reveal from '../animations/reveal';
import Link from 'next/link';
import MarkupButton from '../markup-button';
import { Locale } from '@/i18n.config';
import { useEffect } from 'react';
import axios from 'axios';
function HomeHero({ home, lang }: { home: any; lang: Locale }) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    useEffect(() => {
        (async () => {
            // const response = await axios.get(
            //     'https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&aggregations=2&version=home-persionalized&trackity_id=c672bf17-f59d-524d-5296-1fa22a202e58&category=8322&page=1&urlKey=nha-sach-tiki',
            // );

            // // Function to fetch book details with delay
            // const fetchBookDetails = async (item, index) => {
            //     // Delay between requests (e.g., 500 ms)
            //     if (index > 0) await delay(500);

            //     const bookResponse = await axios.get(
            //         `https://tiki.vn/api/v2/products/${item.id}?platform=web&spid=${item.id}&version=3`,
            //     );

            //     return {
            //         name: item.name,
            //         short_description: bookResponse.data.short_description,
            //         description: bookResponse.data.description,
            //         book_cover: item.thumbnail_url,
            //         cover: item.book_cover,
            //     };
            // };

            // // Map over the items and fetch details with a delay
            // const books: any = [];
            // for (let i = 0; i < response.data.data.length; i++) {
            //     const item = response.data.data[i];
            //     const bookDetails = await fetchBookDetails(item, i);
            //     books.push(bookDetails);
            // }
            // console.log(books);
            const a = await axios.get('https://tiki.vn/api/v2/products/74021317?platform=web&spid=74021318&version=1');
            console.log(a.data);
            const b = {
                des: a.data.short_description,
                authors: a.data.authors,
            };
        })();
    }, []);
    return (
        <section
            id="home-hero"
            className="relative flex w-[100vw] overflow-y-hidden overflow-x-clip bg-background xl:pb-20 xl:pl-7 2xl:pl-20 "
        >
            <div className="z-[5] flex flex-1  bg-[rgba(255,255,255,0.1)] pb-32 pt-44 backdrop-blur-sm lg:pt-36 xl:bg-transparent xl:pb-0 xl:pt-48  2xl:pt-64 ">
                <Reveal hiddenY={100} className="flex h-fit flex-1 flex-col items-center">
                    <ul className="ssm:text-4xl flex flex-col  items-center text-2xl text-muted-foreground duration-1000">
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <Link
                                aria-label="Go to Hub Media's Fanpage"
                                href={'https://www.facebook.com/HubMediaVN'}
                                target="_blank"
                            >
                                <TbBrandFacebook />
                            </Link>
                        </li>
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <Link
                                aria-label="Go to Hub Media's Linkedin"
                                href={'http://linkedin.com/company/hub-media-vietnam'}
                                target="_blank"
                            >
                                <TbBrandLinkedin />
                            </Link>
                        </li>
                        <li
                            aria-label="Go to Hub Media's Youtube"
                            className="mb-10 cursor-pointer duration-1000 hover:text-gradient"
                        >
                            <Link href={'https://www.youtube.com/@FoundersFridayVN'} target="_blank">
                                <TbBrandYoutube />
                            </Link>
                        </li>
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <Link
                                aria-label="Go to Hub Media's Tiktok"
                                href={'https://www.tiktok.com/@hubmedia_?_t=8frc2o4VZGE&_r=1'}
                                target="_blank"
                            >
                                <TbBrandTiktok />
                            </Link>
                        </li>
                    </ul>
                    <Mark dotanimate lineanimate />
                    <Link
                        href={'#portfolio'}
                        className=" -rotate-90  cursor-pointer  text-base tracking-widest text-gradient"
                    >
                        SCROLL
                    </Link>
                </Reveal>
                <div className="ssm:pr-0 w-11/12 pr-4  sm:w-10/12 xl:w-4/5 ">
                    <Reveal hiddenX={100}>
                        <div className="flex">
                            <Mark dotanimate lineanimate horizontal classDot="sm:w-2 sm:h-2" />
                            <p className="ml-3 text-base tracking-wider  text-muted-foreground sm:text-2xl">
                                {lang === 'vi' ? 'Giới thiệu' : 'Introduce'}
                            </p>
                        </div>
                        <div className="silver ssm:text-5xl my-8  text-3xl font-bold xl:max-w-[600px] 2xl:!text-6xl">
                            <span className="super ">Hub Media</span> connect your{' '}
                            <span className="super w-full ">Brand</span> to the{' '}
                            <span className="super w-full ">World.</span>
                        </div>
                    </Reveal>
                    <Reveal hiddenX={100} delay={0.3}>
                        <p className="max-w-[550px] text-white xl:text-muted-foreground">{home.description}</p>
                        <div className="mt-16">
                            <MarkupButton
                                href={'/' + lang + '/#char'}
                                title={lang === 'vi' ? 'Bắt đầu khám phá' : 'Get started'}
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
            <Image
                src={'https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Slider-1-Image-1.jpg'}
                width={600}
                height={300}
                alt="bl"
                className="heartbeat absolute right-0  top-10  z-[3] h-[70%] w-auto  object-cover opacity-70 md:h-auto md:w-[800px] xl:relative xl:block xl:h-[110%]  xl:w-[55%] xl:opacity-100 "
            />
        </section>
    );
}

export default HomeHero;
