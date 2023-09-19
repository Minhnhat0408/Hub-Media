'use client';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Reveal({
    children,
    opacity = 0,
    hiddenY = 0,
    hiddenX = 0,
    duration = 0.8,
    scale = 1,
    delay = 0.25,
    initial = 'hidden',
    animate = 'visible',
    preanimation = false,
    className,
}: {
    children: React.ReactNode;
    opacity?: number;
    hiddenY?: number;
    hiddenX?: number;
    duration?: number;
    scale?: number;
    delay?: number;
    initial?: string;
    animate?: string;
    preanimation?: boolean;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
            slideControls.start('visible');
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <>
            <motion.div 
                variants={{
                    hidden: { opacity: opacity, y: hiddenY, x: hiddenX, scale: scale },
                    visible: { opacity: 1, y: 0, x: 0, scale: 1 },
                }}
                initial={initial}
                animate={mainControls}
                exit={'hidden'}
                ref={ref}
                className={className || 'relative w-fit'}
                transition={{ duration: duration, delay: delay }}
            >
                {children}
            </motion.div>
            {preanimation && (
                <motion.div
                    variants={{
                        hidden: { left: 0 },
                        visible: { left: '100%' },
                    }}
                    initial={initial}
                    animate={slideControls}
                    transition={{ duration: 0.5, ease: 'easeIn' }}
                    style={{
                        position: 'absolute',
                        top: 4,
                        bottom: 4,
                        left: 0,
                        right: 0,
                        background: '#8a2be2',
                        zIndex: 20,
                    }}
                />
            )}
        </>
    );
}

export default Reveal;
