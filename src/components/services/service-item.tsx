import Image from 'next/image';
import MarkupButton from '../markup-button';
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
        <article className={cn('flex  w-full flex-col items-center p-4 xl:!p-20  ssm:p-10 ', className)}>
            <div className="group relative mb-10 aspect-[20/21]  w-full overflow-hidden ">
                <Image
                    src={src}
                    alt="img"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full object-bottom h-full object-cover duration-500 hover:scale-125 "
                />
                <div className="absolute bottom-0  flex w-full translate-y-10 flex-col items-center justify-center bg-black/50 p-8 opacity-0  backdrop-blur duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <MarkupButton
                        title={lang === 'vi' ? 'Tìm hiểu thêm' : 'Read more'}
                        href={'/' + lang + href}
                        className="sm:py-6"
                    />
                </div>
            </div>
            <h1 className="mb-6 cursor-pointer text-center text-2xl font-bold duration-500 hover:text-gradient sm:text-4xl ">
                <Link href={'/' + lang + href}>{title}</Link>
            </h1>
            <p className="mb-6 max-w-[450px] text-center  text-muted-foreground ">{description}</p>
        </article>
    );
}
