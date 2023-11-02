'use client';
import useProgressScroll from '@/hooks/useProgressScroll';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

function ProgressIndicator() {
    const completion = useProgressScroll();
    const pathname = usePathname();
    return (
        <div className="relative z-10 h-1 w-full bg-white/60 ">
            <div
                style={{ transform: `translateX(${completion - 100}%)` }}
                className={cn('h-full  w-full bg-gradient ', pathname.includes('/founder') && 'bg-secondary')}
            ></div>
        </div>
    );
}

export default ProgressIndicator;
