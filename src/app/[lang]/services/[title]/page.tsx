import Slider from '@/components/animations/slider';
import Heading from '@/components/heading';
import PageTitle from '@/components/page-title';
import { Locale } from '@/i18n.config';
import { getSpecifiedService } from '@/lib/dictionary';
import { Coins } from 'lucide-react';
import Image from 'next/image';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react';
import { PiPaperPlaneRightFill } from 'react-icons/pi';

async function Service({ params: { title, lang } }: { params: { title: string; lang: Locale } }) {
    const data = await getSpecifiedService(lang, title);
    console.log(data)
    return (
        <main className=" h-fit w-full py-20 ">
            <PageTitle
                src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/services-breadcrumb.jpg"
                title={data.title}
            />
            <section className="flex w-full p-20">
                <div className="flex h-auto flex-1 flex-col justify-center gap-y-10 pl-10  ">
                    <div className="w-3/4 ">
                        <h1 className="mb-4 text-4xl font-bold ">Desription :</h1>
                        <p className=" pl-4 font-medium text-muted-foreground">
                            {data.description}
                        </p>
                    </div>
                    <div className="w-3/4 ">
                        <h1 className="mb-4 text-4xl font-bold ">Details :</h1>
                        <ul className=" flex flex-col gap-y-4 pl-4 font-medium text-muted-foreground">
                            {
                                data.details.map((item: string ,index: Key )=>{
                                    return(
                                        <li key={index} className="flex items-center ">
                                            <PiPaperPlaneRightFill className=" mr-2  text-sm  text-gradient " />
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="w-3/4 ">
                        <h1 className="mb-4 text-4xl font-bold ">Category :</h1>
                        <p className=" pl-4 font-medium text-muted-foreground">
                            {data.tags.join(' - ')}
                        </p>
                    </div>
                </div>
                <Slider className="relative  h-[600px] !w-[800px]">
                    <Image
                        src={'https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-image-1-1.jpg'}
                        alt="img"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className=" keen-slider__slide h-full w-full "
                    />

                    <Image
                        src={'https://gaaga.wpengine.com/wp-content/uploads/2023/06/portfolio-1.jpg'}
                        alt="img"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className=" keen-slider__slide h-full w-full "
                    />
                    <Image
                        src={'https://gaaga.wpengine.com/wp-content/uploads/2023/06/portfolio-6.jpg'}
                        alt="img"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className=" keen-slider__slide h-full w-full "
                    />
                    <Image
                        src={'https://gaaga.wpengine.com/wp-content/uploads/2023/06/portfolio-8.jpg'}
                        alt="img"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className=" keen-slider__slide h-full w-full "
                    />
                </Slider>
            </section>
            <section className="w-full">
                <Heading title={'Budget Friendly'} description={'Choose your best plan  '} />
                <div className="flex w-full justify-center  gap-x-20">
                    <div className="group flex h-[600px] w-[450px] flex-col items-center gap-y-8 border-[1px] border-gradient py-10">
                        <h3 className="text-3xl text-gradient ">Standard</h3>
                        <Coins className="h-20 w-20 rounded-full border-[1px] border-gradient p-4  text-gradient duration-500 group-hover:bg-gradient  group-hover:text-white " />
                        <h3 className="super text-4xl text-gradient  ">
                            2.000.000 <span className="text-sm ">/ vnđ</span>
                        </h3>
                        <ul className="mt-4 flex flex-col items-center gap-y-4 text-muted-foreground">
                            <li>1 Mẫu Demo</li>
                            <li>3 lần Chỉnh Sửa</li>
                            <li>Đội ngũ chuyên nghiệp</li>
                            <li>Hỗ trợ online, offline</li>
                        </ul>
                        <a
                            className="mt-4 rounded-none border-gradient px-4 py-3 justify-center border-[1px] flex items-center  duration-500 group-hover:bg-gradient "
                            href={'/' + lang + '/contact/' + title + '#form'}
                        
                        >
                            <div className="dot mr-4 h-2 w-2 rounded-full bg-gradient  duration-500  group-hover:bg-white"></div>
                            Choose Plan
                        </a>
                    </div>
                    <div className="group flex h-[600px] w-[450px] flex-col items-center gap-y-8 border-[1px] border-gradient py-10">
                        <h3 className="text-3xl text-gradient ">Advanced</h3>
                        <Coins className="h-20 w-20 rounded-full border-[1px] border-gradient p-4  text-gradient duration-500 group-hover:bg-gradient  group-hover:text-white " />
                        <h3 className="super text-4xl text-gradient  ">
                            2.000.000 <span className="text-sm ">/ vnđ</span>
                        </h3>
                        <ul className="mt-4 flex flex-col items-center gap-y-4 text-muted-foreground">
                            <li>1 Mẫu Demo</li>
                            <li>3 lần Chỉnh Sửa</li>
                            <li>Đội ngũ chuyên nghiệp</li>
                            <li>Hỗ trợ online, offline</li>
                        </ul>
                        <a
                            className="mt-4 rounded-none border-gradient px-4 py-3 justify-center border-[1px] flex items-center  duration-500 group-hover:bg-gradient "
                            href={'/' + lang + '/contact/' + title + '#form'}
                        >
                            <div className="dot mr-4 h-2 w-2 rounded-full bg-gradient  duration-500  group-hover:bg-white"></div>
                            Choose Plan
                        </a>
                    </div>
                    <div className="group flex h-[600px] w-[450px] flex-col items-center gap-y-8 border-[1px] border-gradient py-10">
                        <h3 className="text-3xl text-gradient ">Professtional</h3>
                        <Coins className="h-20 w-20 rounded-full border-[1px] border-gradient p-4  text-gradient duration-500 group-hover:bg-gradient  group-hover:text-white " />

                        <h3 className="super text-4xl text-gradient ">
                            2.000.000 <span className="text-sm ">/ vnđ</span>
                        </h3>
                        <ul className="mt-4 flex flex-col items-center gap-y-4 text-muted-foreground">
                            <li>1 Mẫu Demo</li>
                            <li>3 lần Chỉnh Sửa</li>
                            <li>Đội ngũ chuyên nghiệp</li>
                            <li>Hỗ trợ online, offline</li>
                        </ul>
                        <a
                            className="mt-4 rounded-none border-gradient px-4 py-3 justify-center border-[1px] flex items-center  duration-500 group-hover:bg-gradient "
                            href={'/' + lang + '/contact/' + title + '#form'}
                        >
                            <div className="dot mr-4 h-2 w-2 rounded-full bg-gradient  duration-500  group-hover:bg-white"></div>
                            Choose Plan
                        </a>
                    </div>
                </div>
            </section>
            {/* <BackgroundRotation/> */}
        </main>
    );
}

export default Service;
