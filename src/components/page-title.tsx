import Image from 'next/image';

export default function PageTitle({ title, src }: { title: string; src: string }) {
    return (
        <section className="bg-page-title relative flex  w-full h-[400px] flex-col items-center ">
            <Image
                src={src}
                alt="img"
                width="0"
                height="0"
                sizes="100vw"
                className=" bg-page-title absolute left-0 top-0 -z-10 h-full w-full object-cover opacity-[0.12] mix-blend-luminosity    "
            />
            <h1 className="silver mt-40 mb-6 text-6xl font-bold py-2">{title}</h1>
            <p className="super ">Hub Media / {title}</p>
        </section>
    );
}
