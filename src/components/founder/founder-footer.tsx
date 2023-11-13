import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { TbBrandFacebook, TbBrandLinkedin, TbBrandSpotify, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';

import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/i18n.config';

export async function FounderFooter({ lang }: { lang: Locale }) {
    return (
        <footer
            style={{
                backgroundImage: "url('https://utfs.io/f/c234207f-fca0-4293-8a30-87a4a402c53a-1jqloo.png')",
                boxShadow: '0px 0px 22px 10px rgba(0,0,0,0.8) inset',
            }}
            id="lienhe"
            className="relative flex h-fit w-full flex-col items-center bg-background "
        >
            <div className="md-max:pb-5 flex w-[90%] flex-wrap pb-8 2xl:pb-14">
                <div className=" flex w-full items-center   lg:w-[30%]  ">
                    <Image
                        src={'/logo/logoff.png'}
                        alt="ava"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" h-[300px] w-auto lg:ml-[20%]  "
                    />
                </div>
                <div className="flex flex-1  justify-evenly px-4 sm:px-0">
                    <div className="md-max:hidden mt-[50px]  hidden h-full min-w-[150px] md:block  ">
                        <h3 className="mb-5 text-left text-xl font-bold  uppercase text-white">
                            {lang === 'vi' ? 'Mục Lục' : 'SITEMAP'}
                        </h3>
                        <div className="mb-3 flex items-start ">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-secondary" />
                            <a
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href="#hero"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-secondary" />
                            <a
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href="#products"
                            >
                                Podcasts
                            </a>
                        </div>
                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-secondary" />
                            <a
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href="#guests"
                            >
                                Guests
                            </a>
                        </div>

                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-secondary" />
                            <a
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href="#hosts"
                            >
                                Hosts
                            </a>
                        </div>
                        <div className="mb-3 flex items-start">
                            <PiPaperPlaneRightFill className="mr-3 mt-2 text-base text-secondary" />
                            <a
                                className="leading-7 text-muted-foreground no-underline hover:text-white hover:underline"
                                href="#faq"
                            >
                                FAQ
                            </a>
                        </div>
                    </div>

                    <div className="mt-[50px] flex   h-full flex-col text-white">
                        <h3 className=" mb-5 text-left text-xl font-bold  uppercase text-white">
                            {lang === 'vi' ? 'Liên hệ' : 'CONTACT'}
                        </h3>
                        <div className="mb-2 flex flex-wrap ssm:mb-1">
                            <div className="mr-2 flex w-full min-w-[120px] ssm:w-fit">
                                <FaLocationDot className="mr-3 mt-1 text-base text-white" />
                                <div className="font-bold">{lang === 'vi' ? 'Địa chỉ:' : 'Address:'}</div>
                            </div>
                            <div className=" leading-7 text-muted-foreground">
                                Tầng 3, D12, Giảng Võ, Ba Đình, Hà Nội
                            </div>
                        </div>
                        <div className="mb-2 flex flex-wrap ssm:mb-1">
                            <div className="mr-2 flex w-full min-w-[120px] ssm:w-fit">
                                <FaPhone className="mr-3 mt-1 text-base text-white" />
                                <div className="font-bold">Hotline: </div>
                            </div>
                            <div>
                                <div className="leading-7 text-muted-foreground">{` Ms. Thu Phuong (0965053420)`}</div>
                            </div>
                        </div>
                        <div className="mb-2 flex flex-wrap ssm:mb-1">
                            <div className="mr-2 flex w-full min-w-[120px] ssm:w-fit">
                                <FaEnvelope className="mr-3 mt-1 text-base text-white" />
                                <div className="font-bold">Email: </div>
                            </div>
                            <div className="w-full ssm:w-fit">
                                <div className="leading-7 text-muted-foreground">foundersfriday.vn@gmail.com</div>
                            </div>
                        </div>
                        <div className="mb-2 flex flex-wrap ssm:mb-1">
                            <div className="mr-2 flex w-full min-w-[120px] ssm:w-fit">
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
                            <div className="phone:w-full leading-7 text-secondary ">
                                <a
                                    className="phone:mt-1 block no-underline hover:text-white  hover:underline"
                                    href="http://facebook.com/foundersfriday.vn"
                                    target="_blank"
                                >
                                    Founder&rsquo;s Friday
                                </a>
                            </div>
                        </div>
                        <a
                            href={'/' + lang + '/contact/brand-co-host/-1#form'}
                            className=" mx-auto my-10 w-fit rounded-2xl bg-secondary px-4 py-2 font-bold duration-500 hover:bg-[#008aa3] sm:mx-0 sm:my-2 "
                        >
                            Liên hệ brand co-host
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-[5%] h-[1px] w-[90%] bg-muted-foreground"></div>
            <div className="flex w-full flex-wrap justify-between  px-[5%] py-6 text-white">
                <div className="hidden sm:block">
                    <div className="mb-1">
                        Designed and Developed by{' '}
                        <span className="font-bold">
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

                <ul className="flex gap-x-4 text-base ssm:text-2xl ">
                    <li className=" cursor-pointer duration-1000 hover:text-secondary">
                        <Link
                            aria-label="Go to Hub Media Fanpage"
                            href={'http://facebook.com/foundersfriday.vn'}
                            target="_blank"
                        >
                            <TbBrandFacebook />
                        </Link>
                    </li>
                    <li className=" cursor-pointer duration-1000 hover:text-secondary">
                        <Link
                            aria-label="Go to Hub Media's Linkedin"
                            href={'https://open.spotify.com/show/5ArHCz9zZIL4XkvP04sHnM?si=8fc6c8437a294a4d'}
                            target="_blank"
                        >
                            <TbBrandSpotify />
                        </Link>
                    </li>
                    <li className=" cursor-pointer duration-1000 hover:text-secondary">
                        <Link
                            aria-label="Go to Hub Media's Youtube Channel"
                            href={'https://www.youtube.com/@FoundersFridayVN'}
                            target="_blank"
                        >
                            <TbBrandYoutube />
                        </Link>
                    </li>
                    <li className=" cursor-pointer duration-1000 hover:text-secondary">
                        <Link
                            aria-label="Go to Hub Media's Tiktok"
                            href={'https://www.tiktok.com/@foundersfriday.vn'}
                            target="_blank"
                        >
                            <TbBrandTiktok />
                        </Link>
                    </li>
                </ul>
                <div className="text-sm ssm:text-base">
                    <p>
                        © Copyright 2023 <span className="font-bold tracking-wider">Hub Media</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
