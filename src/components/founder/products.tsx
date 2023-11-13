'use client';

import { Locale } from '@/i18n.config';
import SliderMultiple from '../animations/slider-multiple';

export default function Products({ lang, products }: { lang: Locale; products: string }) {
    return (
        <section
            id="products"
            className="flex w-full  flex-col md:gap-y-20 gap-y-10  py-20 px-10 lg:px-20"
            style={{
                backgroundImage: "url('https://utfs.io/f/c234207f-fca0-4293-8a30-87a4a402c53a-1jqloo.png')",
                boxShadow: '0px 0px 22px 10px rgba(0,0,0,0.8) inset',
            }}
        >
            <div className="flex flex-col items-center gap-y-10 md:flex-row md:items-start">
                <div className="flex w-full flex-col  justify-center gap-y-10 md:pr-16 lg:pr-20 md:w-2/5">
                    <h3 className="ff-super sm:text-5xl text-4xl font-extrabold tracking-wider">Podcast</h3>
                    <p className="max-w-[700px] md:text-2xl ">{products}</p>
                </div>
                <div className=" flex w-full items-center   md:w-[60%] ">
                    <SliderMultiple
                        className="w-full"
                        view={() => {
                            if (window.innerWidth < 1150) {
                                return 1;
                            } else if (window.innerWidth < 1580) {
                                return 2;
                            } else {
                                return 3;
                            }
                        }}
                    >
                        <div className="keen-slider__slide ">
                            <iframe
                                src="https://open.spotify.com/embed/episode/7FRWAbc5R28KZwwzJsSUHW?utm_source=generator"
                                width="100%"
                                height="auto"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                className=" rounded-xl ssm:h-[352px] h-[160px]  "
                            ></iframe>
                        </div>
                        <div className="keen-slider__slide ">
                            <iframe
                                src="https://open.spotify.com/embed/episode/0V8WqTcjwJpwSBUdRUWt4R?utm_source=generator"
                                width="100%"
                                height="auto"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                className="  rounded-xl ssm:h-[352px] h-[160px] "
                            ></iframe>
                        </div>
                        <div className="keen-slider__slide ">
                            <iframe
                                src="https://open.spotify.com/embed/episode/7pX1AV2Cu285LAEH6s3vvP?utm_source=generator"
                                width="100%"
                                height="auto"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                className=" rounded-xl ssm:h-[352px] h-[160px] "
                            ></iframe>
                        </div>
                        <div className="keen-slider__slide ">
                            <iframe
                                src="https://open.spotify.com/embed/episode/4U3CUPjgoB22CaSWZuqEQ8?utm_source=generator"
                                width="100%"
                                height="auto"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                className=" rounded-xl ssm:h-[352px] h-[160px] "
                            ></iframe>
                        </div>
                        <div className="keen-slider__slide ">
                            <iframe
                                src="https://open.spotify.com/embed/episode/2qrDJUwpE5DH5NIFE7nDci?utm_source=generator"
                                width="100%"
                                height="auto"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                className=" rounded-xl ssm:h-[352px] h-[160px] "
                            ></iframe>
                        </div>
                        <div className="keen-slider__slide ">
                            <iframe
                                src="https://open.spotify.com/embed/episode/5uE2CprIzyImi0Cm7YvfZv?utm_source=generator"
                                width="100%"
                                height="auto"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                className=" rounded-xl ssm:h-[352px] h-[160px] "
                            ></iframe>
                        </div>
                    </SliderMultiple>
                </div>
            </div>
            <div className="flex w-full justify-center">
                <SliderMultiple
                    className=""
                    view={() => {
                        if (window.innerWidth < 800) {
                            return 1;
                        } else if (window.innerWidth < 1580) {
                            return 2;
                        } else {
                            return 3;
                        }
                    }}
                >
                    <div className="keen-slider__slide ">
                        <iframe
                            width="100%"
                            height="auto"
                            className='ssm:h-[350px] h-[200px]'
                            src="https://www.youtube.com/embed/pkWk7MBSZN8?si=CrWBH5mHRj5nUAgF"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide ">
                        <iframe
                            width="100%"
                            height="auto"
                            className='ssm:h-[350px] h-[200px]'
                            src="https://www.youtube.com/embed/89NYstjOlEQ?si=xs8oqkP8iqnk9jdm"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide ">
                        <iframe
                            width="100%"
                            height="auto"
                            className='ssm:h-[350px] h-[200px]'
                            src="https://www.youtube.com/embed/7zQm3mh4GoM?si=wlD7kqM10ur8wCLd"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide ">
                        <iframe
                            width="100%"
                            height="auto"
                            className='ssm:h-[350px] h-[200px]'
                            src="https://www.youtube.com/embed/yWd1dAauSsQ?si=UXOPEL-xLcuqhZCg"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide ">
                        <iframe
                            width="100%"
                            height="auto"
                            className='ssm:h-[350px] h-[200px]'
                            src="https://www.youtube.com/embed/Nsja-nPKZMY?si=oCSGM8_PkoTQqguv"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide ">
                        <iframe
                            width="100%"
                            height="auto"
                            className='sm:h-[350px] h-[200px]'
                            src="https://www.youtube.com/embed/X0wculkTlDI?si=vyKCYlxZrP5QjnoY"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </SliderMultiple>
            </div>
        </section>
    );
}
