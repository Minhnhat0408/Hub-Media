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
            <div ref={ref} className={'keen-slider ' + className}>
                {children}
            </div>
            {loaded && instanceRef.current && (
                <div className="mt-6 flex  justify-center">
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx);
                                }}
                                className={'mr-8 h-8 group'}
                            >
                                <div
                                    className={
                                        'h-[2px] w-16 bg-muted-foreground group-hover:!bg-gradient' +
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
