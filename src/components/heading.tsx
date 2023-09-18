import Reveal from './animations/reveal';
import Mark from './markup';

function Heading({ title, description }: { title: string; description: string }) {
    return (
        <Reveal scale={0.5} className="flex flex-col items-center justify-center pb-20">
            <div className="mb-3 flex">
                <Mark horizontal dotanimate />
                <h2 className="ml-3 mr-3 text-2xl text-muted-foreground">{title}</h2>
                <Mark horizontal dotanimate flip />
            </div>
            <h1 className="text-6xl font-bold">{description}</h1>
        </Reveal>
    );
}

export default Heading;
