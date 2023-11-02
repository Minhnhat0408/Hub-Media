import Slider from '@/components/animations/slider';
import Heading from '@/components/heading';
import PageTitle from '@/components/page-title';
import { Locale } from '@/i18n.config';
import { getSpecifiedService } from '@/lib/dictionary';
import Image from 'next/image';
import { Key } from 'react';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Metadata } from 'next';
import Package from '@/components/services/package';
import { isImageUrl } from '@/lib/utils';
import { redirect } from 'next/navigation';

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
    if (data?.error) {
        redirect('/not-found');
    }
    let countService = -1;

    return (
        <main className=" h-fit w-full py-[60px] md:py-[90px] ">
            <PageTitle
                src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fbghub.JPG?alt=media&token=07da7fd8-9f51-479c-848a-691c6972c227&_gl=1*3zs0og*_ga*MjEzMTY3MzA4MS4xNjkxMzM2Nzk5*_ga_CW55HF8NVT*MTY5Njc0OTk2NC4yODMuMS4xNjk2NzUxNzE1LjQ0LjAuMA.."
                title={data.title}
            />
            <section className="flex w-full flex-col gap-y-10 px-4 py-20 lg:flex-row xl:!px-20 ssm:px-10">
                <div className="order-2 flex h-auto flex-1 flex-col justify-center gap-y-8 pl-0 lg:order-none lg:gap-y-12 lg:pl-10  ">
                    <div className="w-full lg:w-3/4 ">
                        <h1 className="mb-2 text-3xl font-bold text-gradient lg:mb-4 lg:text-4xl ">
                            {lang === 'vi' ? 'Mô tả:' : 'Desription:'}
                        </h1>
                        <p className=" pl-4 font-medium text-muted-foreground">{data.description}</p>
                    </div>
                    <div className="w-3/4 ">
                        <h1 className="mb-2 text-3xl font-bold text-gradient lg:mb-4 lg:text-4xl ">
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
                        <h1 className="mb-2 text-3xl font-bold text-gradient lg:mb-4 lg:text-4xl ">
                            {lang === 'vi' ? 'Danh mục:' : 'Categories:'}
                        </h1>
                        <p className=" pl-4 font-medium text-muted-foreground">{data.tags.join(' - ')}</p>
                    </div>
                </div>
                <Slider className="relative  aspect-square !w-full md:aspect-[4/3] lg:aspect-square lg:!w-[50vw] xl:aspect-[4/3] xl:!w-[45vw]">
                    {data?.portfolio ? (
                        data.portfolio.map((item: string, index: Key) => {
                            return isImageUrl(item) ? (
                                <div key={index} className=" keen-slider__slide flex h-full w-full justify-center overflow-hidden">
                                    <Image
                                        src={item}
                                        
                                        alt="img"
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="  h-full w-auto object-cover object-top "
                                    />
                                </div>
                            ) : (
                                <iframe
                                    loading="lazy"
                                    src={item}
                                    width="0"
                                    key={index}
                                    height="0"
                                    allow="autoplay"
                                    className="keen-slider__slide h-full w-full "
                                ></iframe>
                            );
                        })
                    ) : (
                        <>
                            <Image
                                src={'https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-image-1-1.jpg'}
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
                                src={'https://gaaga.wpengine.com/wp-content/uploads/2023/06/portfolio-4.jpg'}
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
                        </>
                    )}
                </Slider>
            </section>
            <section className="flex w-full justify-center py-10 pb-20"></section>
            <section className="w-full">
                <Heading
                    title={'Budget Friendly'}
                    description={lang === 'vi' ? 'Chọn gói của bạn' : 'Choose your best plan'}
                />
                {data?.types ? (
                    <Tabs defaultValue={data.types[0]} className="flex w-full flex-col items-center ">
                        <TabsList className="mb-10  flex h-fit w-fit gap-x-4 text-white ">
                            {data.types.map((item: string, index: Key) => {
                                return (
                                    <TabsTrigger
                                        className="h-8 w-24 bg-gray-800 text-sm font-bold  data-[state=active]:bg-gradient sm:h-12 sm:w-40 sm:text-base "
                                        key={index}
                                        value={item}
                                    >
                                        {item}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                        {data.types.map((item: string, index: Key) => {
                            countService += 1;
                            return (
                                <TabsContent
                                    key={index}
                                    value={item}
                                    className="flex w-full flex-wrap justify-center gap-x-20  gap-y-20 px-4 ssm:px-10"
                                >
                                    {Object.entries(data.packages).filter((val) => {
                                        return val[0].includes(item);
                                    }).length > 0 ? (
                                        Object.entries(data.packages)
                                            .filter((val) => {
                                                return val[0].includes(item);
                                            })
                                            .map((item, index: Key) => {
                                                const [pkg, type] = item[0].split('/');
                                                const infor = item[1] as any;

                                                return (
                                                    <Package
                                                        key={index}
                                                        title={title}
                                                        pkg={pkg}
                                                        price={infor.price}
                                                        details={infor.details}
                                                        unit={infor.unit}
                                                        lang={lang}
                                                        countService={countService}
                                                    />
                                                );
                                            })
                                    ) : (
                                        <div key={index} className="mb-8 flex flex-col items-center space-y-8">
                                            <p className="silver text-center text-2xl md:text-4xl">
                                                {lang === 'vi'
                                                    ? 'Liên hệ để biết thêm chi tiết'
                                                    : 'Contact us for more information'}{' '}
                                            </p>
                                            <a
                                                className="group mt-4 flex w-fit items-center justify-center rounded-none border-[1px] border-gradient px-4 py-3 duration-500  hover:bg-gradient group-hover:bg-gradient "
                                                href={'/' + lang + '/contact/' + title + '/' + countService + '#form'}
                                            >
                                                <div className="dot mr-4 h-2 w-2 rounded-full bg-gradient  duration-500  group-hover:bg-white"></div>
                                                Service Form
                                            </a>
                                        </div>
                                    )}
                                </TabsContent>
                            );
                        })}
                    </Tabs>
                ) : (
                    <div className="flex w-full flex-wrap justify-center gap-x-10  gap-y-20 px-4   xl:gap-x-20 ssm:px-10">
                        {Object.entries(data.packages).length > 0 ? (
                            Object.entries(data.packages).map((item, index: Key) => {
                                countService += 1;
                                const [pkg, type] = item[0].split('/');
                                const infor = item[1] as any;
                                return (
                                    <Package
                                        key={index}
                                        title={title}
                                        pkg={pkg}
                                        price={infor.price}
                                        unit={infor.unit}
                                        details={infor.details}
                                        lang={lang}
                                        countService={countService}
                                    />
                                );
                            })
                        ) : (
                            <div className="mb-8 flex flex-col items-center space-y-8">
                                <p className="silver text-center text-2xl md:text-4xl">
                                    {lang === 'vi'
                                        ? 'Liên hệ để biết thêm chi tiết'
                                        : 'Contact us for more information'}{' '}
                                </p>
                                <a
                                    className="group mt-4 flex w-fit items-center justify-center rounded-none border-[1px] border-gradient px-4 py-3 duration-500  hover:bg-gradient group-hover:bg-gradient "
                                    href={'/' + lang + '/contact/' + title + '/' + countService + '#form'}
                                >
                                    <div className="dot mr-4 h-2 w-2 rounded-full bg-gradient  duration-500  group-hover:bg-white"></div>
                                    Service Form
                                </a>
                            </div>
                        )}
                    </div>
                )}
            </section>
        </main>
    );
}

export default Service;
