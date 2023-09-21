import Heading from '../heading';
import ThumbNail from '../thumbnail-image';
import ThumbNailText from '../thumbnail-text';
function Services() {
    return (
        <section id='services' className="flex w-full flex-col bg-black/80 py-20 pt-36">
            <Heading title={'Services'} description={'What We Have to Offer'} />
            <div className="flex">
                <ThumbNailText
                    href="/about"
                    title="Brand Design"
                    description="The seo optimization that not only you need but also your entire enterprise"
                    src="/images/backlog.png"
                />
                <ThumbNailText
                    href="/about"
                    title="Event Photography"
                    description="The seo optimization that not only you need but also your entire enterprise"
                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
                />
                <ThumbNailText
                    href="/about"
                    title="Reporting - Trailer"
                    description="The seo optimization that not only you need but also your entire enterprise"
                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
                />
                <ThumbNailText
                    href="/about"
                    title="Event Organizer"
                    description="The seo optimization that not only you need but also your entire enterprise"
                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg"
                />
            </div>
        </section>
    );
}

export default Services;
