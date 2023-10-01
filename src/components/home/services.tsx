import Link from 'next/link';
import Heading from '../heading';
import ThumbNailText from '../thumbnail-text';
import { Button } from '../ui/button';
import { Locale } from '@/i18n.config';
async function Services({lang,services}:{lang:Locale,services:Object}) {
    return (
        <section id="services" className="flex w-full flex-col bg-black/80 md:py-20 py-10 lg:pt-28">
            <Heading title={'Services'} description={lang === 'vi' ? 'Dịch vụ nổi bật': 'Highlight Services'} />
            <div className="flex flex-wrap">
                <ThumbNailText
                    lang={lang}
                    href={Object.values(services)[0].href}
                    title={Object.keys(services)[0]}
                    description={Object.values(services)[0].description}
                    src={Object.values(services)[0].src}
                />
                <ThumbNailText
                    lang={lang}
                    href={Object.values(services)[1].href}
                    title={Object.keys(services)[1]}
                    description={Object.values(services)[1].description}
                    src={Object.values(services)[1].src}
                />
                <ThumbNailText
                    lang={lang}
                    href={Object.values(services)[2].href}
                    title={Object.keys(services)[2]}
                    description={Object.values(services)[2].description}
                    src={Object.values(services)[2].src}
                />
                <ThumbNailText
                    lang={lang}
                    href={Object.values(services)[3].href}
                    title={Object.keys(services)[3]}
                    description={Object.values(services)[3].description}
                    src={Object.values(services)[3].src}
                />
            </div>
            <Button variant={'outline'} size={'default'} className="lg:text-xl mt-10 mx-auto w-fit lg:p-6 rounded-full lg:pl-8 tracking-widest duration-700">
                <Link  href={`${lang}/services`} className='flex items-center'>
                    <span className="relative mr-3 flex h-2 w-2">
                        <span className="absolute -left-[2px] -top-[2px] h-3 w-3 animate-ping rounded-full bg-gradient opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient"></span>
                    </span>
                    {lang === 'vi' ? 'Xem thêm': 'See more'}
                </Link>
            </Button>
        </section>
    );
}

export default Services;
