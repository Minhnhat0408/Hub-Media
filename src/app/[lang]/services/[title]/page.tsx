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
import { Metadata } from 'next';
import Package from '@/components/services/package';

export async function generateMetadata({ params }: { params: { title: string; lang: Locale } }): Promise<Metadata> {
    const { title, description } = await getSpecifiedService(params.lang, params.title);
    return {
        title: 'Hub Media - ' + title,
        openGraph: {
            images: ['/images/backlog.png'],
        },
        description: description,
    };
}

async function Service({ params: { title, lang } }: { params: { title: string; lang: Locale } }) {
    const data = await getSpecifiedService(lang, title);
    let countService = -1;
    return (
        <main className=" h-fit w-full md:py-20 py-[60px] ">
            <PageTitle
                src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/services-breadcrumb.jpg"
                title={data.title}
            />
            <section className="flex w-full flex-col gap-y-10 px-4 py-20 lg:flex-row xl:!px-20 ssm:px-10">
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
                <Slider className="relative  aspect-square !w-full md:aspect-[4/3] lg:aspect-square lg:!w-[50vw] xl:aspect-[4/3] xl:!w-[45vw]">
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
                <Heading title={'Budget Friendly'} description= {lang === 'vi' ? 'Chọn gói của bạn' : 'Choose your best plan'} />
                {data?.types ? (
                    <Tabs defaultValue={data.types[0]} className="flex w-full flex-col items-center ">
                        <TabsList className="mb-10  flex h-fit w-fit text-white ">
                            {data.types.map((item: string, index: Key) => {
                                return (
                                    <TabsTrigger
                                        className="h-8 w-24 text-sm data-[state=active]:bg-gradient sm:h-12 sm:w-40 sm:text-base "
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
                                    className="flex w-full flex-wrap justify-center gap-x-20  gap-y-20 px-4 ssm:px-10"
                                >
                                    {Object.entries(data.packages)
                                        .filter((val) => {
                                            return val[0].includes(item);
                                        })
                                        .map((item, index: Key) => {
                                            countService += 1;
                                            const [pkg, type] = item[0].split('/');
                                            const infor = item[1] as any;
                                            return (
                                                <Package
                                                    key={index}
                                                    title={title}
                                                    pkg={pkg}
                                                    price={infor.price}
                                                    details={infor.details}
                                                    lang={lang}
                                                    countService={countService}
                                                />
                                            );
                                        })}
                                </TabsContent>
                            );
                        })}
                    </Tabs>
                ) : (
                    <div className="flex w-full flex-wrap justify-center gap-x-10  gap-y-20 px-4   xl:gap-x-20 ssm:px-10">
                        {Object.entries(data.packages).map((item, index: Key) => {
                            countService += 1;
                            const [pkg, type] = item[0].split('/');
                            const infor = item[1] as any;
                            return (
                                <Package
                                    key={index}
                                    title={title}
                                    pkg={pkg}
                                    price={infor.price}
                                    details={infor.details}
                                    lang={lang}
                                    countService={countService}
                                />
                            );
                        })}
                    </div>
                )}
            </section>
        </main>
    );
}

export default Service;
