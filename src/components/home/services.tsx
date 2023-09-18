import Heading from '../heading';
import ThumbNail from '../thumbnail';
function Services() {
    return (
        <section className="flex w-full flex-col py-20 bg-black/70">
            <Heading title={'Services'} description={'What We Have to Offer'} />
            <div className="flex gap-x-8">
                <ThumbNail href='/about'  title='Hub Live' description='The livestreaming services' src='https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg'/>
                <ThumbNail href='/services' flex={2}  title='Marketing agency' description='All the services to connect your brand to the world' src='/images/backlog.jpg'/>
                <ThumbNail href='/about' title='Hub Live' description='The livestreaming services' src='https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-1.jpg'/>
            </div>
        </section>
    );
}

export default Services;
