import Link from 'next/link';
import Heading from '../heading';

import ThumbNailText from '../thumbnail-text';
import { Button } from '../ui/button';
import { Locale } from '@/i18n.config';
function Services({lang,services}:{lang:Locale,services:Object}) {
    return (
        <section id="services" className="flex w-full flex-col bg-black/80 py-20 pt-28">
            <Heading title={'Services'} description={lang === 'vi' ? 'Dịch vụ nổi bật': 'Highlight Services'} />
            <div className="flex">
                <ThumbNailText
                    lang={lang}
                    href="/services/logo-design"
                    title={Object.keys(services)[0]}
                    description={Object.values(services)[0]}
                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-1-service-1.jpg"
                />
                <ThumbNailText
                    lang={lang}
                    href="/services/event-photography"
                    title={Object.keys(services)[1]}
                    description={Object.values(services)[1]}
                    src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2FStreet%20photography.jpg?alt=media&token=2b10f1ba-f976-4df2-acee-4534f9cee332"
                />
                <ThumbNailText
                    lang={lang}
                    href="/services/recap-trailer"
                    title={Object.keys(services)[2]}
                    description={Object.values(services)[2]}
                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-5.png"
                />
                <ThumbNailText
                    lang={lang}
                    href="/services/event-organizer"
                    title={Object.keys(services)[3]}
                    description={Object.values(services)[3]}
                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-1.png"
                />
            </div>
            <Button variant={'outline'} size={'default'} className="text-xl mt-10 mx-auto w-fit p-6 rounded-full pl-8 tracking-widest duration-700">
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
