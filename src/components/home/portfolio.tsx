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
                    title="Hub Agency"
                    description="Cung cấp các dịch vụ marketing tùy chỉnh cho từng doanh nghiệp"
                    src="/images/backlog.png"
                    className='w-[30%]'
                />
                <ThumbNailImage
                    href="/founder"
                    title="Founder's Friday"
                    description="Founder Fridays là cầu nối giữa startup founder với các bạn trẻ có niềm đam mê với kinh doanh khởi thông qua các câu chuyện, chia sẻ của họ."
                    src="/images/ff.png"
                    className='w-[40%]'
                />
                <ThumbNailImage
                    href="/livestream"
                    title="Hub Live"
                    description="Với định hướng trở thành nơi kết nối cộng đồng sinh viên với những doanh nghiệp có nhu cầu tìm kiếm model livestream sản phẩm trên các nền tảng mạng xã hội"
                    src="/images/hublive.png"
                    className='w-[30%]'
                />
            </Reveal>
        </section>
    );
}

export default Portfolio;
