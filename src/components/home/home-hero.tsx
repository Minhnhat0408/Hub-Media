'use client';
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';
import TypeWriter from 'typewriter-effect';
import Image from 'next/image';
import Mark from '../markup';
import Reveal from '../animations/reveal';
import Link from 'next/link';
import MarkupButton from '../markup-button';
import { Locale } from '@/i18n.config';
function HomeHero({ home,lang }: { home: any,lang:Locale }) {
    return (
        <section id='home-hero' className="flex w-[100vw] pb-20 2xl:pl-20 xl:pl-7 bg-background overflow-x-clip ">
            <div className="flex 2xl:flex-1 z-[5]  2xl:pt-64 pt-48 w-[45%]" >
                <Reveal hiddenY={100} className="flex w-1/5 h-fit flex-col items-center">
                    <ul className="flex flex-col items-center  text-4xl text-muted-foreground duration-1000">
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <Link href={'https://www.facebook.com/HubMediaVN'} target='_blank'><TbBrandFacebook />
                            </Link>
                        </li>
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <Link href={'http://linkedin.com/company/hub-media-vietnam'} target='_blank'><TbBrandLinkedin /></Link>
                        </li>
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <Link href={'https://youtube.com/@HubMedia-Vietnam/'} target='_blank'><TbBrandYoutube /></Link>
                        </li>
                        <li className="mb-10 cursor-pointer duration-1000 hover:text-gradient">
                            <Link href={'https://www.tiktok.com/@hubmedia_?_t=8frc2o4VZGE&_r=1'}><TbBrandTiktok /></Link>
                        </li>
                    </ul>
                    <Mark dotanimate lineanimate />
                    <Link  href={'#portfolio'} className=" -rotate-90 cursor-pointer text-base tracking-widest text-gradient">
                        SCROLL
                    </Link>
                </Reveal>
                <div   className="w-4/5  ">
                    <Reveal hiddenX={100}>
                        <div className="flex">
                            <Mark dotanimate lineanimate horizontal />
                            <p className="ml-3 text-2xl tracking-wider text-muted-foreground">{lang === 'vi' ? 'Giới thiệu': 'Introduce'}</p>
                        </div>
                        <h1 className="mt-6 2xl:text-6xl text-5xl   font-bold">
                            <span className="super">Hub Media</span> offer
                        </h1>
                        <div className="super mb-8 2xl:text-6xl text-5xl font-bold max-w-[600px]">
                            <TypeWriter
                                options={{
                                    strings: ['Branding Design', 'Event Photography', 'Web Development','Reports & Trailer'],
                                    autoStart: true,
                                    loop: true,
                                    delay:40,
                                    deleteSpeed: 20,
                                }}
                            
                            />
                        </div>
                    </Reveal>
                    <Reveal hiddenX={100} delay={0.3}>
                        <p className="text-muted-foreground max-w-[550px]">{home.description}</p>
                        <div className='mt-16'>
                                <MarkupButton href='/#char' title={lang === 'vi' ? 'Bắt đầu khám phá': 'Get started'}/>
                                
                        </div>
                    </Reveal>
                </div>
            </div>
            <Image
                src={'https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Slider-1-Image-1.jpg'}
                width={600}
                height={300}
                alt="bl"
                className="heartbeat flex-1 z-[3] w-fit h-[110%]"
            />
        </section>
    );
}

export default HomeHero;
