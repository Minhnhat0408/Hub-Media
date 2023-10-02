'use client';
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function ScrollTop() {
  
    return (
        <a className={"fixed bottom-20 right-6 text-[40px] text-gradient hover:opacity-80 z-[100]" } href="#">
            <BsArrowUpCircleFill />
        </a>
    );
}
