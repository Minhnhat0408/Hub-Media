import Slider from '@/components/animations/slider';
import Heading from '@/components/heading';
import PageTitle from '@/components/page-title';
import { Locale } from '@/i18n.config';
import { getSpecifiedService } from '@/lib/dictionary';
import { Coins } from 'lucide-react';
import Image from 'next/image';
import { Key } from 'react';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
async function Service({ params: { title, lang } }: { params: { title: string; lang: Locale } }) {
    const data = await getSpecifiedService(lang, title);

    return (
        <main className=" h-fit w-full py-20 ">
            <PageTitle
                src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/services-breadcrumb.jpg"
                title={data.title}
            />
            <section className="flex w-full flex-col gap-y-10 ssm:px-10 !px-4 py-20 lg:flex-row xl:!px-20">
                <div className="order-2 flex h-auto flex-1 flex-col justify-center gap-y-8 pl-0 lg:order-none lg:gap-y-12 lg:pl-10  ">
                    <div className="w-3/4 ">
                        <h1 className="mb-2 text-3xl font-bold lg:mb-4 lg:text-4xl ">
                            {lang === 'vi' ? 'Mô tả:' : 'Desription:'}
                        </h1>
                        <p className=" pl-4 font-medium text-muted-foreground">{data.description}</p>
                    </div>
                    <div className="w-3/4 ">
                        <h1 className="mb-2 text-3xl font-bold lg:mb-4 lg:text-4xl ">
                            {lang === 'vi' ? 'Chi tiết:' : 'Details:'}
                        </h1>
                        <ul className=" flex flex-col gap-y-4 pl-4 font-medium text-muted-foreground">
                            {data.details.map((item: string, index: Key) => {
                                return (
                                    <li key={index} className="flex items-center ">
                                        <PiPaperPlaneRightFill className=" mr-2  text-sm  text-gradient " />
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="w-3/4 ">
                        <h1 className="mb-2 text-3xl font-bold lg:mb-4 lg:text-4xl ">
                            {lang === 'vi' ? 'Danh mục:' : 'Categories:'}
                        </h1>
                        <p className=" pl-4 font-medium text-muted-foreground">{data.tags.join(' - ')}</p>
                    </div>
                </div>
                <Slider className="relative  aspect-[4/3] !w-full lg:!w-[50vw] xl:!w-[45vw]">
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
                <Heading title={'Budget Friendly'} description={'Choose your best plan'} />
                {data?.types ? (
                    <Tabs defaultValue={data.types[0]} className="flex w-full flex-col items-center ">
                        <TabsList className="flex  h-fit w-fit text-white mb-10 ">
                            {data.types.map((item: string, index: Key) => {
                                return (
                                    <TabsTrigger
                                        className="h-12 w-40 data-[state=active]:bg-gradient "
                                        key={index}
                                        value={item}
                                    >
                                        {item}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                        {data.types.map((item: string, index: Key) => {
                            return (
                                <TabsContent
                                    key={index}
                                    value={item}
                                    className="flex flex-wrap w-full justify-center gap-y-20  gap-x-20 px-10"
                                >
                                    {Object.entries(data.packages)
                                        .filter((val) => {
                                            return val[0].includes(item);
                                        })
                                        .map((item, index: Key) => {
                                            const [pkg, type] = item[0].split('/');
                                            const infor = item[1] as any;
                                            return (
                                                <div
                                                    key={index}
                                                    className="group flex md:h-[600px]   w-[450px] flex-col items-center gap-y-8 border-[1px] border-gradient py-10"
                                                >
                                                    <div className="flex h-fit flex-col items-center ">
                                                        {/* {type && <h3 className="silver mb-2 text-3xl">{type}</h3>} */}
                                                        <h3 className="text-3xl text-gradient ">{pkg}</h3>
                                                    </div>

                                                    <Coins className="h-20 w-20 rounded-full border-[1px] border-gradient p-4  text-gradient duration-500 group-hover:bg-gradient  group-hover:text-white " />
                                                    <h3 className="super ssm:text-4xl !text-3xl text-gradient  ">
                                                        {infor.price[0]}
                                                        <span className="text-sm "> vnd</span>
                                                        <span className="text-sm ">
                                                            {infor.price.length > 1 && ' / ' + infor.price[1]}
                                                        </span>
                                                    </h3>
                                                    <ul className="mt-4 flex flex-col items-center gap-y-4 text-muted-foreground">
                                                        {infor?.details ? (
                                                            infor.details.map((item: string, ind: Key) => {
                                                                return <li key={ind}>{item}</li>;
                                                            })
                                                        ) : (
                                                            <li>No specific details</li>
                                                        )}
                                                    </ul>
                                                    <a
                                                        className="mt-4 flex items-center justify-center rounded-none border-[1px] border-gradient px-4 py-3  duration-500 group-hover:bg-gradient "
                                                        href={'/' + lang + '/contact/' + title + '#form'}
                                                    >
                                                        <div className="dot mr-4 h-2 w-2 rounded-full bg-gradient  duration-500  group-hover:bg-white"></div>
                                                        Choose Plan
                                                    </a>
                                                </div>
                                            );
                                        })}
                                </TabsContent>
                            );
                        })}

                        {/* <TabsContent value="account"></TabsContent>
                        <TabsContent value="password"></TabsContent> */}
                    </Tabs>
                ) : (
                    <div className="flex flex-wrap w-full justify-center gap-y-20  xl:gap-x-20 gap-x-10   ssm:px-10 !px-4">
                        {Object.entries(data.packages).map((item, index: Key) => {
                            const [pkg, type] = item[0].split('/');
                            const infor = item[1] as any;
                            return (
                                <div
                                    key={index}
                                    className="group flex md:h-[600px]  w-[450px] flex-col items-center gap-y-8 border-[1px] border-gradient py-10"
                                >
                                    <div className="flex h-fit flex-col items-center ">
                                        {type && <h3 className="silver mb-2 text-3xl">{type}</h3>}
                                        <h3 className="text-3xl text-gradient ">{pkg}</h3>
                                    </div>

                                    <Coins className="h-20 w-20 rounded-full border-[1px] border-gradient p-4  text-gradient duration-500 group-hover:bg-gradient  group-hover:text-white " />
                                    <h3 className="super ssm:text-4xl !text-3xl text-gradient  ">
                                        {infor.price[0]}
                                        <span className="text-sm "> vnd</span>
                                        <span className="text-sm ">
                                            {infor.price.length > 1 && ' / ' + infor.price[1]}
                                        </span>
                                    </h3>
                                    <ul className="mt-4 flex flex-col items-center gap-y-4 text-muted-foreground">
                                        {infor?.details ? (
                                            infor.details.map((item: string, ind: Key) => {
                                                return <li key={ind}>{item}</li>;
                                            })
                                        ) : (
                                            <li>No specific details</li>
                                        )}
                                    </ul>
                                    <a
                                        className="mt-4 flex items-center justify-center rounded-none border-[1px] border-gradient px-4 py-3  duration-500 group-hover:bg-gradient "
                                        href={'/' + lang + '/contact/' + title + '#form'}
                                    >
                                        <div className="dot mr-4 h-2 w-2 rounded-full bg-gradient  duration-500  group-hover:bg-white"></div>
                                        Choose Plan
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </main>
    );
}

export default Service;
