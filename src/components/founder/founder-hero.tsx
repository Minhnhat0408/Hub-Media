'use client';

import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BsSpotify, BsYoutube } from 'react-icons/bs';

export default function FounderHero() {
    const ref = useRef<HTMLVideoElement>(null);
    const isInView = useInView(ref);
    const [manual, setManual] = useState(false);
    useEffect(() => {
        if (ref.current) {
            console.log(manual);
            if (isInView) {
                ref.current.play();
            } else {
                
                ref.current.pause();
            }
        }
    }, [isInView]);
    console.log(manual);
    return (
        <section
            id="hero"
            style={{
                backgroundImage: "url('/images/bg-ff.png')",
                boxShadow: '0px 0px 22px 10px rgba(0,0,0,0.8) inset',
            }}
            className="relative mt-24  flex w-[100vw]  overflow-y-hidden    overflow-x-clip p-10 py-24 "
        >
            <video
                ref={ref}
                autoPlay
                controls
                style={{ width: '60%', height: 'auto', boxShadow: '10px 10px 15px 5px rgba(0,0,0,0.6)' }}
            >
                <source src="/images/trailer.mp4" type="video/mp4" />
            </video>
            <div className="flex w-full flex-col items-center   ">
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
                        href={'http://open.spotify.com/show/foundersfriday'}
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
                        href={'http://tiktok.com/@foundersfridayvn'}
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
