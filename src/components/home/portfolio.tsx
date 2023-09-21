import Reveal from '../animations/reveal';
import Heading from '../heading';
import ThumbNailImage from '../thumbnail-image';
function Portfolio() {
    return (
        <section id="portfolio" className="flex w-full flex-col bg-background pt-28">
            <Heading title={'Gallery'} description={'Our Project Portfolio'} />
            <Reveal hiddenY={100} className="flex gap-x-8">
                <ThumbNailImage
                    href="/about"
                    title="HUB AGENCY"
                    description="Provide various customized marketing services for your business"
                    src="/images/backlog.jpg"
                    className='w-[30%]'
                />
                <ThumbNailImage
                    href="/founder"
                    title="Founder's Friday"
                    description="Founder Fridays là cầu nối giữa startup founder với các bạn trẻ có niềm đam mê với kinh doanh khởi thông qua các câu chuyện, chia sẻ của họ."
                    src="/images/ff.jpg"
                    className='w-[40%]'
                />
                <ThumbNailImage
                    href="/livestream"
                    title="HUB LIVE"
                    description="The livestreaming services"
                    src="/images/IMG_5715.jpg"
                    className='w-[30%]'
                />
            </Reveal>
        </section>
    );
}

export default Portfolio;
