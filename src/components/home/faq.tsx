'use client'
import Image from 'next/image';
import Mark from '../markup';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import useProgressScroll from '@/hooks/useProgressScroll';

function FAQ() {
    const scroll = useProgressScroll(true)
    return (
        <section id="faq" className="flex w-full  bg-background py-20 ">
            <div className="relative flex flex-1 items-center justify-end    ">
                <div className="flex h-[80%] w-full translate-x-24 flex-col border-2 border-gradient bg-background p-20">
                    <div className="mb-5 flex">
                        <Mark horizontal dotanimate classLine="w-10" />
                        <h1 className="ml-2 text-muted-foreground">{"FAQ's"}</h1>
                    </div>
                    <h1 className="text-5xl font-bold  ">{"Our Expert's Answer"}</h1>
                    <Accordion type="single" collapsible className="mt-10 w-[90%]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="py-10 hover:no-underline">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 text-lg text-gradient" />
                                    <span className="text-xl">Tại sao bạn nên lựa chọn Hub Media ?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Đội ngũ Hub Media bao gồm những nhân lực trẻ tuổi với tinh thần sáng tạo cao, mong muốn
                                hỗ trợ các doanh nghiệp trên con đường thực hiện mục tiêu kinh doanh của mình. Đến với
                                Hub Media, từ các bạn sinh viên, các bạn trẻ cho tới chủ các doanh nghiệp đều có thể tìm
                                được giải pháp phù hợp với mong muốn của mình trong thế giới Marketing số.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="py-10 hover:no-underline">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 text-lg text-gradient" />
                                    <span className="text-xl"> Quy trình làm việc của chúng tôi như thế nào ?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className='text-muted-foreground'>
                                Quy trinh làm việc của chúng tôi được quy định rõ ràng theo từng dịch vụ, nhằm tối ưu trải nghiệm của khách hàng. 
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="py-10 hover:no-underline">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 text-lg text-gradient" />
                                    <span className="text-xl">Khách hàng tiềm năng của chúng tôi là ai ?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className='text-muted-foreground'>
                                Đội ngũ Hub Media bao gồm những nhân lực trẻ tuổi với tinh thần sáng tạo cao, mong muốn
                                hỗ trợ các doanh nghiệp trên con đường thực hiện mục tiêu kinh doanh của mình. Đến với
                                Hub Media, từ các bạn sinh viên, các bạn trẻ cho tới chủ các doanh nghiệp đều có thể tìm
                                được giải pháp phù hợp với mong muốn của mình trong thế giới Marketing số.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="py-10 hover:no-underline">
                                <div className="flex ">
                                    <PiPaperPlaneRightFill className=" mr-7 mt-1 text-lg text-gradient" />
                                    <span className="text-xl">Khách hàng tiềm năng của chúng tôi là ai ?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className='text-muted-foreground'>
                                Đội ngũ Hub Media bao gồm những nhân lực trẻ tuổi với tinh thần sáng tạo cao, mong muốn
                                hỗ trợ các doanh nghiệp trên con đường thực hiện mục tiêu kinh doanh của mình. Đến với
                                Hub Media, từ các bạn sinh viên, các bạn trẻ cho tới chủ các doanh nghiệp đều có thể tìm
                                được giải pháp phù hợp với mong muốn của mình trong thế giới Marketing số.
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
