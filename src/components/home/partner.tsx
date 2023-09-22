import Image from 'next/image';

function Partner() {
    return (
        <section className="flex w-full justify-evenly bg-muted py-20">
            <Image
                src={'/logo/hubnetwork.png'}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain w-[200px] hover:scale-125 duration-500 "
                alt="logo"
            />

            <Image
                src={'/logo/LOGO-DOAN-1.png'}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain w-[100px] hover:scale-125 duration-500"
                alt="logo"
            />

            <Image
                src={'/logo/TheAnh28.png'}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain w-[200px] hover:scale-125 duration-500"
                alt="logo"
            />

            <Image
                src={'/logo/Tiktok_Logo.png'}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain w-[200px] hover:scale-125 duration-500"
                alt="logo"
            />

            <Image src={'/logo/tt.png'} width={0} height={0} sizes="100vw" className="object-contain w-[200px] hover:scale-125 duration-500" alt="logo" />
        </section>
    );
}

export default Partner;
