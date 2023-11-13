'use client';

import useInteraction from '@/hooks/useInteraction';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import VideoPlayer from '../video-player';

export default function FounderHero() {
    // console.log(manual);
    // const interacted = useInteraction();
    // const [display, setDisplay] = useState(interacted);
    // useEffect(() => {
    //     console.log(interacted);
    // }, [interacted]);
    return (
        <section
            id="hero"
            style={{
                backgroundImage: "url('https://utfs.io/f/c234207f-fca0-4293-8a30-87a4a402c53a-1jqloo.png')",
                boxShadow: '0px 0px 22px 10px rgba(0,0,0,0.8) inset',
            }}
            className="relative  flex w-[100vw]  overflow-y-hidden    overflow-x-clip py-24 pl-10 pr-10  lg:pr-0 "
        >
            <VideoPlayer
                src={'/images/trailer.mp4'}
                className="hidden h-auto w-full md:block lg:w-[60%] lg:min-w-[60%] "

                options={{
                    autoplay: true,
                }}
            />
            <div className=" flex w-full flex-col items-center md:hidden md:px-10 lg:flex  ">
                <Image
                    src={'/logo/logoff.png'}
                    alt="img"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto w-[400px] "
                />

                <div className="flex gap-x-16">
                    <Link
                        target="_blank"
                        href={'http://youtube.com/@FoundersFridayVN'}
                        className="flex h-20 cursor-pointer items-center     justify-center text-red-500 duration-500  hover:scale-110"
                    >
                        <Image
                            src={'/logo/Youtube_logo.png'}
                            alt="img"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="h-auto w-[74px] "
                        />
                    </Link>
                    <Link
                        target="_blank"
                        href={'https://open.spotify.com/show/5ArHCz9zZIL4XkvP04sHnM?si=8fc6c8437a294a4d'}
                        className="flex h-20 cursor-pointer items-center     justify-center text-green-600 duration-500  hover:scale-110"
                    >
                        <Image
                            src={'/logo/Spotify.png'}
                            alt="img"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="h-auto w-16 "
                        />
                    </Link>
                    <Link
                        target="_blank"
                        href={'https://www.tiktok.com/@foundersfriday.vn'}
                        className="flex h-20 cursor-pointer items-center     justify-center text-green-600 duration-500  hover:scale-110"
                    >
                        <Image
                            src={'/logo/tiktok.png'}
                            alt="img"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="h-auto w-16 "
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
