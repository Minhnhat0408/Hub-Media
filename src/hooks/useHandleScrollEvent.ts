"use client"
import { useMotionValueEvent, useScroll } from "framer-motion";


const useHandleScrollEvent = (callback: (latestValue: number) => void) => {
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", callback);
};

export default useHandleScrollEvent;


