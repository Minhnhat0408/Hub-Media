import { Locale } from '@/i18n.config';
import Reveal from '../animations/reveal';
import Heading from '../heading';
import ThumbNailImage from '../thumbnail-image';
function Portfolio({lang}: {lang:Locale}) {
    return (
        <section id="portfolio" className="flex w-full flex-col bg-background pt-28 py-20">
            <Heading title={'Portfolio'} description={lang === 'vi' ? 'Dự án của chúng tôi': 'Our Project Porfolio'} />
            <Reveal hiddenY={100} className="flex gap-x-8">
                <ThumbNailImage
                    href="/about"
                    title="Hub Agency"
                    description="Cung cấp các dịch vụ marketing tùy chỉnh cho từng doanh nghiệp"
                    src="/images/backlog.png"
                    className='w-[30%]'
                    lang={lang}
                />
                <ThumbNailImage
                    href="/founder"
                    title="Founder's Friday"
                    description="Founder Fridays là cầu nối giữa startup founder với các bạn trẻ có niềm đam mê với kinh doanh khởi thông qua các câu chuyện, chia sẻ của họ."
                    src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fff.jpg?alt=media&token=47853d64-636f-4aff-a073-c10c0fd3eb78"
                    className='w-[40%]'
                    lang={lang}
                />
                <ThumbNailImage
                    href="/livestream"
                    title="Hub Live"
                    description="Với định hướng  trở thành nơi kết nối cộng đồng sinh viên với những doanh nghiệp có nhu cầu tìm kiếm model livestream sản phẩm trên các nền tảng mạng xã hội"
                    src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fhublive.png?alt=media&token=0277c54b-5146-4610-8f63-23bf4e6525e0"
                    className='w-[30%]'
                    lang={lang}
                />
            </Reveal>
        </section>
    );
}

export default Portfolio;
