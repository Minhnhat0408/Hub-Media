'use client';
import { TbBrandFacebook, TbBrandInstagram, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';
import TypeWriter from 'typewriter-effect';
import Image from 'next/image';
import Mark from '../markup';
function HomeHero({ page }: { page: any }) {
    return (
        <section className="flex w-[100vw] pb-20 pl-20 bg-background  ">
            <div className="flex flex-1 pt-52">
                <div className="flex w-1/5 flex-col items-center">
                    <ul className="flex flex-col  text-4xl text-muted-foreground duration-1000">
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <TbBrandFacebook />
                        </li>
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <TbBrandInstagram />
                        </li>
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <TbBrandYoutube />
                        </li>
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <TbBrandTiktok />
                        </li>
                    </ul>
                    <Mark dotanimate lineanimate />
                    <span className="-rotate-90 cursor-pointer text-xl font-bold tracking-widest text-gradient">
                        Scroll
                    </span>
                </div>
                <div className="w-4/5">
                    <div className="flex">
                        <Mark dotanimate lineanimate horizontal />
                        <p className="ml-3 text-2xl tracking-wider text-muted-foreground">Innovative Idea.</p>
                    </div>
                    <h1 className="mt-6 text-6xl   font-bold">
                        <span className="super">Hub Media</span> offer
                    </h1>
                    <div className="super mb-8 text-6xl font-bold">
                        <TypeWriter
                            options={{
                                strings: ['Logo Designing.', 'Livestreaming.', 'Web Develop.'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 20,
                            }}
                        />
                    </div>
                    <p className="text-muted-foreground">{page.home.description}</p>
                </div>
            </div>
            <Image
                src={'https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Slider-1-Image-1.jpg'}
                width={600}
                height={300}
                alt="bl"
                style={{ overflowClipMargin:"content-box"}}
                className="heartbeat flex-1 overflow-clip"
            />
        </section>
    );
}

export default HomeHero;
