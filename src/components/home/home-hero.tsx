'use client';
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';
import TypeWriter from 'typewriter-effect';
import Image from 'next/image';
import Mark from '../markup';
import Reveal from '../animations/reveal';
import Link from 'next/link';
import MarkupButton from '../markup-button';
import { Locale } from '@/i18n.config';
function HomeHero({ home, lang }: { home: any; lang: Locale }) {
    return (
        <section
            id="home-hero"
            className="relative flex w-[100vw] overflow-x-clip bg-background overflow-y-hidden xl:pb-20 xl:pl-7 2xl:pl-20 "
        >
            <div className="z-[5] flex flex-1  bg-[rgba(255,255,255,0.1)] pb-32 lg:pt-36 pt-44 xl:bg-transparent xl:pb-0 xl:pt-48 backdrop-blur-sm  2xl:pt-64 ">
                <Reveal hiddenY={100} className="flex h-fit flex-1 flex-col items-center">
                    <ul className="flex flex-col items-center  ssm:text-4xl text-2xl text-muted-foreground duration-1000">
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <Link aria-label="Go to Hub Media's Fanpage" href={'https://www.facebook.com/HubMediaVN'} target="_blank">
                                <TbBrandFacebook />
                            </Link>
                        </li>
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <Link aria-label="Go to Hub Media's Linkedin" href={'http://linkedin.com/company/hub-media-vietnam'} target="_blank">
                                <TbBrandLinkedin />
                            </Link>
                        </li>
                        <li  aria-label="Go to Hub Media's Youtube" className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <Link href={'https://www.youtube.com/@FoundersFridayVN'} target="_blank">
                                <TbBrandYoutube />
                            </Link>
                        </li>
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <Link aria-label="Go to Hub Media's Tiktok" href={'https://www.tiktok.com/@hubmedia_?_t=8frc2o4VZGE&_r=1'} target="_blank">
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
                <div className="sm:w-10/12 xl:w-4/5 w-11/12  ssm:pr-0 pr-4 ">
                    <Reveal hiddenX={100}>
                        <div className="flex">
                            <Mark dotanimate lineanimate horizontal classDot='sm:w-2 sm:h-2' />
                            <p className="ml-3 sm:text-2xl text-base  tracking-wider text-muted-foreground">
                                {lang === 'vi' ? 'Giới thiệu' : 'Introduce'}
                            </p>
                        </div>
                        <div className="my-8 xl:max-w-[600px] silver  ssm:text-5xl text-3xl font-bold 2xl:!text-6xl">
                            <span className="super ">Hub Media</span>{" "}
                            connect your <span className="super w-full ">Brand</span> to the <span className="super w-full ">World.</span> 
                            
                        </div>
                    </Reveal>
                    <Reveal hiddenX={100} delay={0.3}>
                        <p className="max-w-[550px] xl:text-muted-foreground text-white">{home.description}</p>
                        <div className="mt-16">
                            <MarkupButton href={"/" + lang +"/#char"} title={lang === 'vi' ? 'Bắt đầu khám phá' : 'Get started'} />
                        </div>
                    </Reveal>
                </div>
            </div>
            <Image
                src={'https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Slider-1-Image-1.jpg'}
                width={600}
                height={300}
                alt="bl"
                className="heartbeat absolute right-0  top-10  z-[3] md:w-[800px] md:h-auto  h-[70%] w-auto object-cover opacity-70 xl:relative xl:block xl:h-[110%]  xl:w-[55%] xl:opacity-100 "
            />
        </section>
    );
}

export default HomeHero;
