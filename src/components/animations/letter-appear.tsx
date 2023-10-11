'use client';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LetterAppear({ children, className }: { children: string; className?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div
            ref={ref}
            className={cn(
                ' relative  flex h-fit justify-center text-3xl font-bold md:!text-5xl xl:!text-6xl  ssm:text-4xl ',
            )}
        >
            {children.split(' ').map((word, index) => {
                let time =
                    index < 1
                        ? 80
                        : 80 *
                          children
                              .split(' ')
                              .splice(0, index)
                              .reduce((a, b) => {
                                  return a + b.length;
                              }, 0);
                return (
                    <span key={index} className="mr-4 flex">
                        {word.split('').map((char, ind) => {
                            time += 80;
                            return (
                                <span
                                    className={cn(
                                        'translate-x-[50px] scale-150 py-2 opacity-0 duration-700  ',
                                        isInView && ' opacity-1 super flex  translate-x-0 scale-100',
                                        className,
                                    )}
                                    style={{ transitionDelay: time + 'ms' }}
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
    );
}
