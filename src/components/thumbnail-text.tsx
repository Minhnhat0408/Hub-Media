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
}: {
    href: string;
    title: string;
    description: string;
    src: string;
    lang?: Locale;
}) {
    const pathname = usePathname();
    return (
        <article className={cn('group relative flex h-[500px] flex-1 flex-col border-r-[1px] border-muted-foreground')}>
            <div className="flex h-fit w-full flex-col justify-center px-[40px]  pb-5 ">
                <h1 className="mb-6 cursor-pointer text-4xl font-bold duration-500 group-hover:text-gradient ">
                    <Link href={pathRemainLang({ pathname, newpath: href })}>{title}</Link>
                </h1>
                <p className="mb-6 max-w-[450px]  text-muted-foreground ">{description}</p>
            </div>
            <Link href={pathRemainLang({ pathname, newpath: href })} className="relative flex flex-1 cursor-pointer items-center justify-center ">
                <div className=" flex">
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
                    className=" absolute h-2/3 w-2/3 object-cover opacity-0 duration-500  group-hover:h-full group-hover:w-full group-hover:opacity-100 "
                />
            </Link>
        </article>
    );
}

export default ThumbNailText;
