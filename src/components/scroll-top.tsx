'use client';
import { useMotionValueEvent, useScroll } from "framer-motion";
import {  useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function ScrollTop() {
    const [display, setDisplay] = useState(true)
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const current = scrollY.get();
        if (current > 0) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    });

    return (
        <a className={" bottom-20 right-6 text-[42px] text-gradient hover:opacity-80 z-[1000]" +( display ? ' fixed' : ' hidden') } href="#">
            <BsArrowUpCircleFill />
        </a>
    );
}
