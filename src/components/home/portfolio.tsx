import { Locale } from '@/i18n.config';
import Reveal from '../animations/reveal';
import Heading from '../heading';
import ThumbNailImage from '../thumbnail-image';
function Portfolio({lang,portfolio}: {lang:Locale,portfolio: string[]}) {
    return (
        <section id="portfolio" className="flex  w-full flex-col bg-background xl:pt-28 xl:py-20 pb-10   ">
            <Heading title={'Portfolio'} description={lang === 'vi' ? 'Dự án của chúng tôi': 'Our Project Porfolio'} />
            <Reveal hiddenY={100} className="flex flex-wrap md:justify-between justify-center  gap-y-4">
                <ThumbNailImage
                    href="/services"
                    title="Hub Agency"
                    description={portfolio[0]}
                    src="/images/backlog.png"
                    className='xl:w-[28%] xl:h-[400px] md:w-[48%] w-full md:px-0 px-4  md:h-[300px] h-auto max-h-[400px] min-h-[200px] '
                    lang={lang}
                />
                <ThumbNailImage
                    href="/founder"
                    title="Founder's Friday"
                    description={portfolio[1]}
                    src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fff.jpg?alt=media&token=47853d64-636f-4aff-a073-c10c0fd3eb78"
                    className='xl:w-[40%] xl:h-[400px] md:w-[48%] w-full md:px-0 px-4  md:h-[300px] h-auto max-h-[400px] min-h-[200px]'
                    lang={lang}
                />
                <ThumbNailImage
                    href="/livestream"
                    title="Hub Live"
                    description={portfolio[2]}
                    src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fhublive.png?alt=media&token=0277c54b-5146-4610-8f63-23bf4e6525e0"
                    className='xl:w-[28%] xl:h-[400px] w-full md:px-0 px-4 md:h-[300px] h-auto max-h-[400px] min-h-[200px]'
                    lang={lang}
                />
            </Reveal>
        </section>
    );
}

export default Portfolio;
