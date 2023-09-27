import { cn } from '@/lib/utils';
import Link from 'next/link';

function MarkupButton({ title, href,className }: { title: string; href: string,className?:string }) {
    return (
        <Link href={href} className={cn("group/item cursor-pointer inline-flex w-fit items-center",className)}>
            <div className={cn('h-[1px] w-10 bg-muted-foreground duration-500 group-hover/item:w-0')}></div>
            <div className={cn('mx-2 inline-flex h-[8px] w-[8px] rounded-full bg-gradient')}>
                <div className="animate-ping-big absolute inline-flex h-[8px] w-[8px] rounded-full bg-gradient"></div>
            </div>
            <span className='mr-2'>{title}</span>
            <div className={cn('h-[1px] w-0 bg-muted-foreground duration-500 group-hover/item:w-10')}></div>
        </Link>
    );
}

export default MarkupButton;
