'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn, pathRemainLang } from '@/lib/utils';
import Mark from './markup';
import { Locale } from '@/i18n.config';

function ThumbNailText({
    href,
    title,
    description,
    src,
    lang,
    className
}: {
    href: string;
    title: string;
    description: string;
    src: string;
    lang?: Locale;
    className?: string;
}) {
    const pathname = usePathname();
    return (
        <article className={cn('group relative flex h-[500px] md:py-0 py-6 xl:flex-1 md:w-1/2 w-full   flex-col border-r-[1px] border-muted-foreground',className)}>
            <div className="flex h-fit w-full flex-col justify-center xl:items-start lg:items-center sm:px-[40px] px-4  pb-5 ">
                <h1 className="mb-6 cursor-pointer sm:text-4xl text-2xl  font-bold duration-500 group-hover:text-gradient ">
                    <Link href={pathRemainLang({ pathname, newpath: href })}>{title}</Link>
                </h1>
                <p className="mb-6 max-w-[450px] xl:text-left lg:text-center  text-muted-foreground ">{description}</p>
            </div>
            <Link href={pathRemainLang({ pathname, newpath: href })} className="relative flex flex-1 cursor-pointer items-center justify-center  ">
                <div className=" md:flex hidden">
                    <Mark horizontal classLine='w-10' classDot='h-2 w-2' />
                    <h2 className="ml-3 mr-3 text-muted-foreground text-xl">{lang === 'vi' ? 'Tìm hiểu thêm': 'Know more'}</h2>
                    <Mark horizontal flip classLine='w-10' classDot='h-2 w-2' />
                </div>
                <Image
                    
                    src={src}
                    alt="img"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className=" absolute object-bottom  md:h-2/3 md:w-2/3 w-full md:px-0 px-4 h-full  object-cover md:opacity-0  duration-500  group-hover:h-full group-hover:w-full group-hover:opacity-100 "
                />
            </Link>
        </article>
    );
}

export default ThumbNailText;
