import Image from 'next/image';

export default function PageTitle({ title, src }: { title: string; src: string }) {
    return (
        <section className="bg-page-title relative flex  w-full xl:h-[400px] md:h-[250px] h-[180px]  flex-col  items-center ">
            <Image
                src={src}
                alt="img"
                width="0"
                height="0"
                sizes="100vw"
                className=" bg-page-title absolute left-0 top-0 -z-10 h-full w-full object-cover opacity-[0.2] mix-blend-luminosity    "
            />
            <h1 className="silver xl:mt-40 text-center md:mt-28 mt-16 mb-6 md:!text-6xl ssm:text-5xl text-[34px] font-bold py-2">{title}</h1>
            <p className="super ">Hub Media / {title}</p>
        </section>
    );
}
