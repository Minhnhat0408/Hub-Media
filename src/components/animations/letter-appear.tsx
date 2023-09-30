'use client';
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LetterAppear({children,className} : {children:string,className?:string}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref} className={cn(' h-fit  relative flex text-6xl justify-center  font-bold ')}>
                {children.split(' ').map((word, index) => {
                    let time = index <1 ? 80: 80*children.split(' ').splice(0,index).reduce((a,b)=>{
                        return a + b.length
                    },0);
                    return (
                        <span key={index} className="mr-4 flex">
                            {word.split('').map((char, ind) => {
                                time += 80;
                                return (
                                    <span
                                        className={cn("opacity-0 py-2 translate-x-[50px] scale-150 duration-700  " ,isInView && ' flex opacity-1 translate-x-0  super scale-100',className)}
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
    )
}