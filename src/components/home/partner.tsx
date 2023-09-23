import Image from 'next/image';

function Partner() {
    return (
        <section className="flex w-full justify-evenly bg-muted py-20">
            <Image
                src={'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fhubnetwork.png?alt=media&token=7230d249-dad2-428f-b95c-f238a178d507'}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain w-[200px] hover:scale-125 duration-500 "
                alt="logo"
            />

            <Image
                src={'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2FLOGO-DOAN-1.png?alt=media&token=493309ef-75d2-4dfb-a076-3743318c91f9'}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain w-[100px] hover:scale-125 duration-500"
                alt="logo"
            />

            <Image
                src={'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2FTheAnh28.png?alt=media&token=8e4da12d-ac1e-4eb7-b701-486a75e5ae98'}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain w-[200px] hover:scale-125 duration-500"
                alt="logo"
            />

            <Image
                src={'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2FTiktok_Logo.png?alt=media&token=2baafe9e-9b4c-4bff-9ffd-bee319f33423'}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain w-[200px] hover:scale-125 duration-500"
                alt="logo"
            />

            <Image src={'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Ftt.png?alt=media&token=026e7732-ca74-4163-b955-c461820d32da'} width={0} height={0} sizes="100vw" className="object-contain w-[200px] hover:scale-125 duration-500" alt="logo" />
        </section>
    );
}

export default Partner;
