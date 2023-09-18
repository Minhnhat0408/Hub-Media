import Reveal from '../animations/reveal';
import Heading from '../heading';
import ThumbNailImage from '../thumbnail-image';
function Portfolio() {
    return (
        <Reveal className="flex w-full flex-col bg-background pt-20">
            <Heading title={'Gallery'} description={'Our Products'} />
            <div className="flex gap-x-8">
                <ThumbNailImage
                    href="/about"
                    title="Hub Live"
                    description="The livestreaming services"
                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
                />
                <ThumbNailImage
                    href="/services"
                    flex={2}
                    title="Marketing agency"
                    description="All the services to connect your brand to the world"
                    src="/images/backlog.jpg"
                />
                <ThumbNailImage
                    href="/about"
                    title="Hub Live"
                    description="The livestreaming services"
                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
                />
            </div>
        </Reveal>
    );
}

export default Portfolio;
