import Heading from '../heading';
import ThumbNail from '../thumbnail-image';
import ThumbNailText from '../thumbnail-text';
function Services() {
    return (
        <section id="services" className="flex w-full flex-col bg-black/80 py-20 pt-36">
            <Heading title={'Services'} description={'What We Have to Offer'} />
            <div className="flex">
                <ThumbNailText
                    href="/services/logo-design"
                    title="Logo Design"
                    description="The seo optimization that not only you need but also your entire enterprise"
                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-1-service-1.jpg"
                />
                <ThumbNailText
                    href="/services/event-photography"
                    title="Event Photography"
                    description="The seo optimization that not only you need but also your entire enterprise"
                    src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2FStreet%20photography.jpg?alt=media&token=2b10f1ba-f976-4df2-acee-4534f9cee332"
                />
                <ThumbNailText
                    href="/services/recap-trailer"
                    title="Recap - Trailer"
                    description="The seo optimization that not only you need but also your entire enterprise"
                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-5.png"
                />
                <ThumbNailText
                    href="/services/event-organizer"
                    title="Event Organizer"
                    description="The seo optimization that not only you need but also your entire enterprise"
                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-1.png"
                />
            </div>
        </section>
    );
}

export default Services;
