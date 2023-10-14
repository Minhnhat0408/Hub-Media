'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import MarkupButton from '../markup-button';
import Link from 'next/link';

export default function BlogItem({title,cover,date, short }: { short?: boolean,title:string,cover:string,date:string }) {
    return (
        <>
            {short ? (
                <article className='flex w-full gap-x-4'>
                    <Link href={'/'} className="flex h-[110px] w-[110px] items-center overflow-hidden ">
                        <Image
                            src={cover}
                            alt="img"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className=" h-full w-auto  object-cover object-center duration-500  "
                        />
                    </Link>
                    <div className="space-y-2 flex-1 flex flex-col justify-center">
                        <p className="text-xs font-bold uppercase text-gradient">{date}</p>
                        <Link  href={'/'} className="text-lg font-bold hover:text-gradient duration-500">{title}</Link>
                    </div>
                </article>
            ) : (
                <article  className={cn('flex w-full flex-col gap-y-6 pb-10  ')}>
                    <Link href={'/'} className="flex h-[280px] w-full items-center overflow-hidden ">
                        <Image
                            src={cover}
                            alt="img"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className=" h-auto w-full  scale-125 object-cover object-center duration-500  hover:scale-100"
                        />
                    </Link>
                    <div className="flex flex-col gap-y-2">
                        <p className="text-xs font-bold uppercase text-gradient">{date}</p>
                        <Link href={'/'} className="text-2xl font-bold hover:text-gradient duration-500 ">{title}</Link>
                    </div>
                    <p className="text-muted-foreground ">
                        Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius
                        morbi enim...
                    </p>
                    <MarkupButton title="Read more" href="/blog" />
                </article>
            )}
        </>
    );
}
