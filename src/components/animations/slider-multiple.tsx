'use client';

import { useKeenSlider } from 'keen-slider/react';
import {  useState } from 'react';

export default function SliderMultiple({ children }: { children: React.ReactNode }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [ref, internalSlider] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: () => {
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
    },[   
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
                }, 5000);
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
    ],);
    // const perview = useRef(4);
    // const [windowWidth, setWindowWidth] = useState(0);
    // useEffect(() => {
    //     setWindowWidth(window.innerWidth);
    //     if(window.innerWidth < 640) {
    //         perview.current = 1;
    //     } else if(window.innerWidth < 768) {
    //         perview.current = 2;
    //     } else if(window.innerWidth < 1024) {
    //         perview.current = 3;
    //     } else {
    //         perview.current = 4;
    //     }
    //     internalSlider.current?.options.

    // }, []);

    return (
        <>
            {
                <div ref={ref} className="keen-slider flex overflow-hidden w-fit">
                    {children}
                </div>
            }
        </>
    );
}
