import Image from 'next/image';
import MarkupButton from './markup-button';
import { Locale } from '@/i18n.config';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ServiceItem({
    title,
    description,
    href,
    src,
    lang,
    className,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
    lang: Locale;
    className?: string;
}) {
    return (
        <article className={cn('flex h-full w-full flex-col items-center p-20 ', className)}>
            <div className="group relative mb-10 h-[700px] w-full overflow-hidden ">
                <Image
                    src={src}
                    alt="img"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-full w-full duration-500 hover:scale-125 "
                />
                <div className="absolute bottom-0  flex w-full translate-y-10 flex-col items-center justify-center bg-black/50 p-8 opacity-0  backdrop-blur duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <MarkupButton title={lang === 'vi' ? 'Tìm hiểu thêm' : 'Read more'} href={'/' + lang + href} className="py-6" />
                </div>
            </div>
            <h1 className="mb-6 cursor-pointer text-center text-4xl font-bold duration-500 hover:text-gradient ">
            <Link href={'/' + lang + href}>{title}</Link>
            </h1>
            <p className="mb-6 max-w-[450px] text-center  text-muted-foreground ">{description}</p>
        </article>
    );
}
