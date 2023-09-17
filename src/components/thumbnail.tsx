'use client';
import Image from 'next/image';
import MarkupButton from './markup-button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn, pathRemainLang } from '@/lib/utils';

function ThumbNail({
    href,
    title,
    description,
    src,
    flex,
}: {
    href: string;
    title: string;
    description: string;
    src: string;
    flex?: number;
}) {
    const pathname = usePathname();
    return (
        <article className={cn("parent group relative flex flex-[1] justify-center overflow-hidden",flex && ` flex-[${flex}]`)}>
            <Image src={src} alt="img" width={300} height={300} className="w-full " />
            <div className="parent absolute bottom-0 left-0 flex w-full translate-y-10 flex-col justify-center bg-black/50 p-8 opacity-0  backdrop-blur duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h1 className="mb-6 translate-y-20 text-4xl font-bold duration-500 group-hover:translate-y-0 hover:text-gradient">
                    <Link href={pathRemainLang({ pathname, newpath: href })}>{title}</Link>
                </h1>
                <p className="mb-6 max-w-[450px] translate-y-20 duration-500 group-hover:translate-y-0">{description}</p>
                <MarkupButton title="Read more" href={pathRemainLang({ pathname, newpath: href })} />
            </div>
        </article>
    );
}

export default ThumbNail;
