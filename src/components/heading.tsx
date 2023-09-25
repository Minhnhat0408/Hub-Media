'use client';
import { useRef } from 'react';
import Mark from './markup';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
function Heading({ title, description,className }: { title: string; description: string,className?:string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <header ref={ref} className={cn("flex flex-col items-center justify-center pb-20",className)}>
            <div className="mb-2 flex ">
                <Mark horizontal dotanimate />
                <h2 className="ml-3 mr-3 text-2xl text-muted-foreground ">{title}</h2>
                <Mark horizontal dotanimate flip />
            </div>

            <div className={cn(' h-fit  relative flex text-6xl justify-center  font-bold ')}>
                {description.split(' ').map((word, index) => {
                    let time = index <1 ? 80: index*80*description.split(' ')[index-1].length;
                    return (
                        <span key={index} className="mr-4 flex">
                            {word.split('').map((char, ind) => {
                                time += 80;
                                return (
                                    <span
                                        className={cn("opacity-0 pt-2 translate-x-[50px] scale-150 duration-700  " ,isInView && ' flex opacity-1 translate-x-0  super scale-100')}
                                        style={{ transitionDelay: time  + 'ms' }}
                                        key={ind}
                                    >
                                        {char}
                                    </span>
                                );
                            })}
                        </span>
                    );
                })}
            </div>
        </header>
    );
}

export default Heading;
