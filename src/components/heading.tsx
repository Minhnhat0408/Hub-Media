
import Mark from './markup';
import { cn } from '@/lib/utils';
import LetterAppear from './animations/letter-appear';
function Heading({ title, description,className }: { title: string; description: string,className?:string }) {

    return (
        <header  className={cn("flex flex-col items-center justify-center pb-20",className)}>
            <div className="mb-2 flex ">
                <Mark horizontal dotanimate />
                <h2 className="ml-3 mr-3 text-2xl silver ">{title}</h2>
                <Mark horizontal dotanimate flip />
            </div>
            <LetterAppear>{description}</LetterAppear>
        </header>
    );
}

export default Heading;
