'use client';
import Image from 'next/image';
import MarkupButton from './markup-button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn, pathRemainLang } from '@/lib/utils';

function ThumbNailImage({
    href,
    title,
    description,
    src,
    className,
    lang,
}: {
    href: string;
    title: string;
    description: string;
    src: string;
    className?: string;
    lang?: string;
}) {
    const pathname = usePathname();
    return (
        <article
            className={cn('group relative flex  justify-center overflow-hidden', className)}
        >
            <Image src={src} alt="img" width="0" height="0" sizes="100vw" className="object-cover object-right h-[400px] w-full" />
            <div className="absolute bottom-0 left-0 flex w-full translate-y-10 flex-col justify-center bg-black/50 p-8 opacity-0  backdrop-blur duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h1 className="mb-6 translate-y-20 text-4xl font-bold duration-500 hover:text-gradient group-hover:translate-y-0">
                    <Link href={pathRemainLang({ pathname, newpath: href })}>{title}</Link>
                </h1>
                <p className="mb-6 max-w-[450px] translate-y-20 duration-500 group-hover:translate-y-0">
                    {description}
                </p>
                <MarkupButton title={lang === 'vi' ? 'Tìm hiểu thêm': 'Read more'} href={pathRemainLang({ pathname, newpath: href })} />
            </div>
        </article>
    );
}

export default ThumbNailImage;
