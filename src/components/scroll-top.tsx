'use client';
import useHandleScrollEvent from '@/hooks/useHandleScrollEvent';
import { usePathname } from 'next/navigation';
import { use, useState } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

export default function ScrollTop() {
    const [display, setDisplay] = useState(true);
    const pathname = usePathname();
    useHandleScrollEvent((latest) => {
        const current = latest;
        if (current > 0) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    });

    return (
        <a
            aria-label="Go to Top"
            className={
                ' bottom-20 right-6 z-[1000] text-[42px] text-gradient hover:opacity-80' +
                (display ? ' fixed' : ' hidden')
            }
            href="#"
        >
            <BsArrowUpCircleFill />
        </a>
    );
}
