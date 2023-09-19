'use client';
import { animate, useInView, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

function Counter({
    from,
    to,
    duration = 1,
    className,
}: {
    from: number;
    to: number;
    duration?: number;
    className: string;
}) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true, // Only trigger once when the element comes into view
    });

    useEffect(() => {
        const node = nodeRef.current;

        if (inView) {
            const controls = animate(from, to, {
                duration: duration,
                onUpdate(value) {
                    node!.textContent = value.toFixed(0);
                },
            });

            return () => controls.stop();
        }
    }, [from, to, inView,duration]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center">
            <span ref={nodeRef} className={className} />
        </div>
    );
}

export default Counter;
