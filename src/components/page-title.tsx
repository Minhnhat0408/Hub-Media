import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function PageTitle({ title, src, className }: { title: string; src: string; className?: string }) {
    return (
        <section className="bg-page-title relative flex  h-fit w-full flex-col items-center   xl:h-[400px] ">
            <Image
                src={src}
                alt="img"
                width="0"
                height="0"
                sizes="100vw"
                className=" bg-page-title absolute left-0 top-0 -z-10 h-full w-full object-cover opacity-[0.1] mix-blend-luminosity    "
            />
            <h1
                className={cn(
                    'silver mb-6 mt-16 py-2 text-center text-[34px] lg:px-20 font-bold md:mt-28 md:!text-6xl xl:mt-40 ssm:text-5xl ',
                    className,
                )}
            >
                {title}
            </h1>
            <p className="super text-center sm:text-base text-sm ">Hub Media / {title}</p>
        </section>
    );
}
