'use client';
import { useRef } from 'react';
import Mark from './markup';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
function Heading({ title, description }: { title: string; description: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const time = useRef(0);
    return (
        <header ref={ref} className="flex flex-col items-center justify-center pb-20">
            <div className="mb-3 flex">
                <Mark horizontal dotanimate />
                <h2 className="ml-3 mr-3 text-2xl text-muted-foreground ">{title}</h2>
                <Mark horizontal dotanimate flip />
            </div>

            <div className={cn(' relative m-0 flex text-6xl  font-bold ')}>
                {description.split(' ').map((word, index) => {
                    return (
                        <span key={index} className="mr-4 flex">
                            {word.split('').map((char, ind) => {
                                time.current += 80;
                                // let delay = `delay-[${time.current}]`;
                                return (
                                    <span
                                        className={cn("opacity-0 translate-x-[50px] scale-150 duration-700  " ,isInView && ' flex opacity-1 translate-x-0  super scale-100')}
                                        style={{ transitionDelay: time.current - 1600 + 'ms' }}
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
