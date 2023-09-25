'use client'
import Image from 'next/image';
import Mark from '../markup';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import useProgressScroll from '@/hooks/useProgressScroll';
import { Locale } from '@/i18n.config';

function FAQ({lang,faq}:{lang:Locale,faq:Object}) {
    const scroll = useProgressScroll(true)
    return (
        <section id="faq" className="flex w-full  bg-background py-20 ">
            <div className="relative flex flex-1 items-center justify-end    ">
                <div className="flex h-[80%] w-full translate-x-24 flex-col border-2 border-gradient bg-background p-20">
                    <div className="mb-5 flex">
                        <Mark horizontal dotanimate classLine="w-10" />
                        <h1 className="ml-2 text-muted-foreground">{"FAQ's"}</h1>
                    </div>
                    <h1 className="text-5xl font-bold  ">{lang === 'vi' ? 'Câu hỏi thường gặp': "Our experts's answer"}</h1>
                    <Accordion type="single" collapsible className="mt-10 w-[90%]">
                        <AccordionItem value="item-1" className='border-muted-foreground'>
                            <AccordionTrigger className="py-10 hover:no-underline ">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 text-lg text-gradient" />
                                    <span className="text-xl">{Object.keys(faq)[0]}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground ">
                            {Object.values(faq)[0]}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className='border-muted-foreground'>
                            <AccordionTrigger className="py-10 hover:no-underline">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 text-lg text-gradient" />
                                    <span className="text-xl"> {Object.keys(faq)[1]}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className='text-muted-foreground'>
                            {Object.values(faq)[1]}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className='border-muted-foreground'>
                            <AccordionTrigger className="py-10 hover:no-underline">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 text-lg text-gradient" />
                                    <span className="text-xl">{Object.keys(faq)[2]}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className='text-muted-foreground'>
                            {Object.values(faq)[2]}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className='border-muted-foreground'>
                            <AccordionTrigger className="py-10 hover:no-underline">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 text-lg text-gradient" />
                                    <span className="text-xl">{Object.keys(faq)[3]}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className='text-muted-foreground'>
                            {Object.values(faq)[3]}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='absolute -right-36 -top-10 h-48 w-48 text-gradient flex justify-center items-center '>
                    <Image
                        src={
                            'https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Faq-Rotate-Widget-Large-Img.png'
                        }
                        width={0}
                        height={0}
                        alt="connect"
                        sizes="100vw"
                        className=" flex w-full h-full  duration-100 "
                        style={{rotate:scroll+'deg'}}
                    />
                    <div className='text-gradient text-6xl absolute -rotate-90'>
                    <PiPaperPlaneRightFill />

                    </div>
                </div>
            </div>
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2FIMG_5715.jpg?alt=media&token=634bb53d-ce06-40f3-b124-2d40da3dcb58"
                width={0}
                height={0}
                sizes="100vw"
                alt="illustrate"
                className="w-[45%] justify-self-end object-cover"
            />
        </section>
    );
}

export default FAQ;
