'use client';

import { cn } from '@/lib/utils';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
export default function SliderMultiple({
    children,
    view,
    className,
}: {
    children: React.ReactNode;
    className?: string;
    view?: 'auto' | number | (() => number);
}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            slides: {
                perView: view
                    ? view
                    : () => {
                          if (window.innerWidth < 640) {
                              return 1;
                          } else if (window.innerWidth < 768) {
                              return 2;
                          } else if (window.innerWidth < 1280) {
                              return 3;
                          } else {
                              return 4;
                          }
                      },
                spacing: 60,
            },
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

                    nextTimeout();
                });
                slider.on('dragStarted', clearNextTimeout);
                slider.on('animationEnded', nextTimeout);
                slider.on('updated', nextTimeout);
            },
        ],
    );

    return (
        <>
            {
                <div className={cn(' group relative w-full', className)}>
                    <div ref={ref} className={cn('keen-slider ')}>
                        {children}
                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                            />
                        </>
                    )}
                </div>
            }
        </>
    );
}

function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
    const disabeld = props.disabled ? ' fill-muted-foreground' : '';
    return (
        <svg
            onClick={props.onClick}
            className={`absolute top-1/2  h-10 w-10 -translate-y-[50%] cursor-pointer fill-white opacity-0 duration-500 group-hover:opacity-100 ${
                props.left ? ' -left-10' : ' -right-10'
            } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
            {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
        </svg>
    );
}
