'use client';
import useHandleScrollEvent from "@/hooks/useHandleScrollEvent";
import {  useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function ScrollTop() {
    const [display, setDisplay] = useState(true)
    useHandleScrollEvent((latest) => {
        const current = latest;
        if (current > 0) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    })


    return (
        <a className={" bottom-20 right-6 text-[42px] text-gradient hover:opacity-80 z-[1000]" +( display ? ' fixed' : ' hidden') } href="#">
            <BsArrowUpCircleFill />
        </a>
    );
}
