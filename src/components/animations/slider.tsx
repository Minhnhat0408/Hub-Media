'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Slider({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true);
            },

            loop: true,
        },
        [   
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 2000);
                }
                slider.on('created', () => {
                    slider.container.addEventListener('mouseover', () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener('mouseout', () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on('dragStarted', clearNextTimeout);
                slider.on('animationEnded', nextTimeout);
                slider.on('updated', nextTimeout);
            },
        ],
    );

    return (
        <div className="flex flex-col items-center">
            <h3 className='text-4xl mb-10 silver font-bold'>Portfolio</h3>
            <div ref={ref} className={'keen-slider cursor-grab lg:order-none order-1 ' + className}>
                {children}
            </div>
            {loaded && instanceRef.current && (
                <div className="mt-6 flex lg:order-none order-2  justify-center">
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx);
                                }}
                                className={'mx-2 h-8 group'}
                            >
                                <div
                                    className={
                                        'h-[2px] sm:w-16 w-10 bg-muted-foreground group-hover:!bg-gradient' +
                                        (currentSlide === idx ? ' !bg-gradient ' : '')
                                    }
                                ></div>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
