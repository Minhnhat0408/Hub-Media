'use client';

import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function FounderHero() {
    // console.log(manual);
    return (
        <section
            id="hero"
            style={{
                backgroundImage: "url('https://utfs.io/f/c234207f-fca0-4293-8a30-87a4a402c53a-1jqloo.png')",
                boxShadow: '0px 0px 22px 10px rgba(0,0,0,0.8) inset',
            }}
            className="relative  flex w-[100vw]  overflow-y-hidden    overflow-x-clip pl-10 lg:pr-0 pr-10  py-24 "
        >
            <video
                autoPlay
                muted
                controls
                className='lg:w-[60%] h-auto w-full md:block hidden '
                style={{  boxShadow: '10px 10px 15px 5px rgba(0,0,0,0.6)' }}
            >
                <source
                    src="https://res.cloudinary.com/dtbvalhlc/video/upload/v1698891032/hub-media/gk9yf63bot7lapgt1tby.mp4"
                    type="video/mp4"
                />
            </video>
            <div className=" w-full flex-col items-center md:px-10 lg:flex md:hidden flex  ">
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
