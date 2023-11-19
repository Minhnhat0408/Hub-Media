import Image from 'next/image';
import Reveal from './animations/reveal';
import { cn } from '@/lib/utils';

function Vision({ vision, src,ff }: { vision: string; src: string,ff?:boolean }) {
    return (
        <section className="relative flex h-[400px] w-full items-center justify-center overflow-hidden py-10 text-center md:py-20   xl:h-[500px]">
            {/* <h1 className="text-6xl super mb-3 font-bold">Tầm nhìn của Hub Media</h1> */}
            <Image
                src={src}
                width={0}
                height={0}
                alt="image"
                sizes="100vw"
                className={cn("absolute h-full w-auto 2xl:w-full 2xl:h-auto object-cover    ",!ff && 'md:w-full md:h-auto' )}
            />
            <Reveal scale={0.3} className=" bg-vision z-[1] flex h-fit w-[90%] justify-center   md:w-[70%]  ">
                <h2 className=" p-4 text-2xl font-bold text-white   xl:!p-16 xl:!text-[45px] xl:!leading-[50px] ssm:p-10 ssm:text-3xl ">
                    &ldquo; {vision} &rdquo;
                </h2>
            </Reveal>
        </section>
    );
}

export default Vision;
