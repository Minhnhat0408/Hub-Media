'use client';
import Image from 'next/image';
import Mark from '../markup';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import useProgressScroll from '@/hooks/useProgressScroll';
import { Locale } from '@/i18n.config';

function FounderFAQ({ lang, faq }: { lang: Locale; faq: Object }) {
    const scroll = useProgressScroll(true);
    return (
        <section id="faq" className="flex w-full   py-20  ">
            <div className="relative z-10 flex flex-1 items-center justify-end  px-4  lg:px-0  ">
                <div
                    style={{
                        backgroundImage: "url('/images/bg-ff.png')",
                        boxShadow: '0px 0px 22px 10px rgba(0,0,0,0.8) inset',
                    }}
                    className="flex  min-h-[80%]  w-full flex-col border-2 border-[#66b09f]  p-6 lg:translate-x-8 xl:translate-x-24 2xl:!p-20 ssm:p-10"
                >
                    <h1 className="mb-8 text-3xl font-bold xl:mb-0 xl:!text-5xl ssm:text-4xl ">
                        {lang === 'vi' ? 'Câu hỏi thường gặp' : 'Frequently Asked Questions'}
                    </h1>
                    <Accordion type="single" collapsible className="xl:mt-10 ">
                        <AccordionItem value="item-1" className="border-muted-foreground">
                            <AccordionTrigger className="py-8 hover:no-underline xl:py-10 ">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 hidden text-xl text-[#66b09f] xl:text-2xl ssm:block" />
                                    <span className="text-left text-xl xl:text-2xl">{Object.keys(faq)[0]}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground xl:text-base ">
                                {Object.values(faq)[0]}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-muted-foreground">
                            <AccordionTrigger className="py-8 hover:no-underline xl:py-10">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 hidden text-xl text-[#66b09f] xl:text-2xl ssm:block" />
                                    <span className="text-left text-xl xl:text-2xl"> {Object.keys(faq)[1]}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground xl:text-base ">
                                {Object.values(faq)[1]}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-muted-foreground">
                            <AccordionTrigger className="py-8 hover:no-underline xl:py-10">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 hidden text-xl text-[#66b09f] xl:text-2xl ssm:block" />
                                    <span className="text-left text-xl xl:text-2xl">{Object.keys(faq)[2]}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground xl:text-base ">
                                {Object.values(faq)[2]}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-0 border-muted-foreground">
                            <AccordionTrigger className="py-8 hover:no-underline xl:py-10">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 hidden text-xl text-[#66b09f] xl:text-2xl ssm:block" />
                                    <span className="text-left text-xl xl:text-2xl ">{Object.keys(faq)[3]}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground xl:text-base ">
                                {Object.values(faq)[3]}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="absolute -right-28 -top-6 hidden h-36 w-36 items-center justify-center text-[#66b09f] lg:flex xl:-right-36 xl:-top-10 xl:h-48 xl:w-48 ">
                    <Image
                        src={
                            'https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Faq-Rotate-Widget-Large-Img.png'
                        }
                        width={0}
                        height={0}
                        alt="connect"
                        sizes="100vw"
                        className=" flex h-full w-full  duration-100 "
                        style={{ rotate: scroll + 'deg' }}
                    />
                    <div className="absolute -rotate-90  text-5xl text-[#66b09f] xl:text-6xl">
                        <PiPaperPlaneRightFill />
                    </div>
                </div>
            </div>
            <Image
                src="/images/faq.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="illustrate"
                className="z-0 hidden h-full !w-[50%] justify-self-end overflow-hidden lg:block xl:!w-[45%]  "
            />
           
        </section>
    );
}

export default FounderFAQ;
