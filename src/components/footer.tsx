import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { TbBrandFacebook, TbBrandLinkedin, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';

import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/i18n.config';

export async function Footer({lang}:{lang:Locale}) {
    return (
        <footer id="lienhe" className="relative flex h-fit w-full items-center flex-col bg-background ">
            <div className="md-max:pb-5 flex flex-wrap w-[90%] 2xl:pb-14 pb-8">
                <div className=" flex lg:w-[30%] w-full   items-center  ">
                    <Image
                        src={'/logo/logo.png'}
                        alt="ava"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[200px] w-auto lg:ml-[20%] mx-auto  "
                    />
                </div>
                <div className="flex flex-1 justify-between">
                    <div className="md-max:hidden mt-[50px] h-full min-w-[150px] hidden md:block  ">
                        <h3 className="mb-5 text-left text-xl font-bold  uppercase text-white">{lang === 'vi' ? 'Mục Lục': "SITEMAP"}</h3>
                        <div className="mb-3 flex items-start ">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-gradient" />
                            <a
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href="#home-hero"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-gradient" />
                            <a
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href="#portfolio"
                            >
                                Portfolio
                            </a>
                        </div>
                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-gradient" />
                            <a
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href="#partner"
                            >
                                Partner
                            </a>
                        </div>
            
                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-gradient" />
                            <a
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href="#services"
                            >
                                Services
                            </a>
                        </div>
                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-gradient" />
                            <a
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href="#faq"
                            >
                                FAQ
                            </a>
                        </div>
                      
                    </div>
                    <div className="md-max:hidden mt-[50px] h-full hidden sm:block  ">
                        <h3 className="mb-5 text-left text-xl font-bold  uppercase text-white">{lang === 'vi' ? 'Dịch vụ': "SERVICES"}</h3>
                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-gradient" />

                            <Link
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href={'/' + lang + '/services/brand-design'}
                            >
                                Branding Design
                            </Link>
                        </div>
                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-gradient" />

                            <Link
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href={'/' + lang + '/services/event-photography'}
                            >
                                Event Photography
                            </Link>
                        </div>
                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-gradient" />

                            <Link
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href={'/' + lang + '/services/web-dev'}
                            >
                                Web Design & Development
                            </Link>
                        </div>
                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-gradient" />

                            <Link
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href={'/' + lang + '/services/pd-design'}
                            >
                                Pitch Deck Design
                            </Link>
                        </div>
                    </div>
                    <div className="mt-[50px] h-full  text-white xl:flex xl:flex-col">
                        <h3 className=" mb-5 text-left text-xl font-bold  uppercase text-white">
                        {lang === 'vi' ? 'Liên hệ': "CONTACT"}
                        </h3>
                        <div className="flex-wrap ssm:mb-1 mb-2 flex">
                            <div className="ssm:w-fit w-full mr-2 flex min-w-[120px]">
                                <FaLocationDot className="mr-3 mt-1 text-base text-white" />
                                <div className="font-bold">{lang === 'vi' ? 'Địa chỉ:': "Address:"}</div>
                            </div>
                            <div className=" leading-7 text-muted-foreground">
                                Tầng 3, D12, Giảng Võ, Ba Đình, Hà Nội
                            </div>
                        </div>
                        <div className="flex-wrap ssm:mb-1 mb-2 flex">
                            <div className="ssm:w-fit w-full mr-2 flex min-w-[120px]">
                                <FaPhone className="mr-3 mt-1 text-base text-white" />
                                <div className="font-bold">Hotline: </div>
                            </div>
                            <div>
                                <div className="leading-7 text-muted-foreground">{` Ms. Thu Phuong (0965053420)`}</div>
                            </div>
                        </div>
                        <div className="flex-wrap ssm:mb-1 mb-2 flex">
                            <div className="ssm:w-fit w-full mr-2 flex min-w-[120px]">
                                <FaEnvelope className="mr-3 mt-1 text-base text-white" />
                                <div className="font-bold">Email: </div>
                            </div>
                            <div className="ssm:w-fit w-full">
                                <div className="leading-7 text-muted-foreground">hubmedia.vietnam@gmail.com</div>
                            </div>
                        </div>
                        <div className="flex-wrap ssm:mb-1 mb-2 flex">
                            <div className="ssm:w-fit w-full mr-2 flex min-w-[120px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                    className="mr-3 mt-1 text-base text-white"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                    />
                                </svg>
                                <div className="font-bold">Fanpage: </div>
                            </div>
                            <div className="phone:w-full leading-7 text-gradient ">
                                <a
                                    className="phone:mt-1 block no-underline hover:text-white  hover:underline"
                                    href="https://www.facebook.com/HubMediaVN"
                                    target='_blank'
                                >
                                    Hub Media
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-[5%] h-[1px] w-[90%] bg-muted-foreground"></div>
            <div className="flex w-full flex-wrap justify-between bg-background px-[5%] py-6 text-white">
                <div className="hidden sm:block">
                    <div className="mb-1">
                        Designed and Developed by{' '}
                        <span className="font-bold">
                            -{' '}
                            <a
                                href="https://www.facebook.com/Minhatt048"
                                className="font-bold hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Nhật Minh
                            </a>
                        </span>
                    </div>
                </div>

                <ul className="flex gap-x-4 ssm:text-2xl text-base ">
                    <li className=" cursor-pointer duration-1000 hover:text-gradient">
                        <Link href={'https://www.facebook.com/HubMediaVN'} target="_blank">
                            <TbBrandFacebook />
                        </Link>
                    </li>
                    <li className=" cursor-pointer duration-1000 hover:text-gradient">
                        <Link href={'http://linkedin.com/company/hub-media-vietnam'} target="_blank">
                            <TbBrandLinkedin />
                        </Link>
                    </li>
                    <li className=" cursor-pointer duration-1000 hover:text-gradient">
                        <Link href={'https://www.youtube.com/@FoundersFridayVN'} target="_blank">
                            <TbBrandYoutube />
                        </Link>
                    </li>
                    <li className=" cursor-pointer duration-1000 hover:text-gradient">
                        <Link href={'https://www.tiktok.com/@hubmedia_?_t=8frc2o4VZGE&_r=1'}>
                            <TbBrandTiktok />
                        </Link>
                    </li>
                </ul>
                <div className="ssm:text-base text-sm">
                    <p>
                        © Copyright 2023 <span className="font-bold tracking-wider">Hub Media</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
