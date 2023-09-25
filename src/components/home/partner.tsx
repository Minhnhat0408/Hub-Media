import Image from 'next/image';
import Mark from '../markup';
import Heading from '../heading';

function Partner() {
    return (
        <section id='partner' className="flex w-full flex-col items-center  bg-muted py-20">
            <Heading title={'Partner'} description={'Core Partner'} className='pb-10'/>
            <div className='flex justify-evenly w-full'>
                <Image
                    src={
                        'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fhubnetwork.png?alt=media&token=7230d249-dad2-428f-b95c-f238a178d507'
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[200px] object-contain duration-500 hover:scale-125 "
                    alt="logo"
                />
    
                <Image
                    src={
                        'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2FLOGO-DOAN-1.png?alt=media&token=493309ef-75d2-4dfb-a076-3743318c91f9'
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[100px] object-contain duration-500 hover:scale-125"
                    alt="logo"
                />
    
                <Image
                    src={
                        'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2FTheAnh28.png?alt=media&token=8e4da12d-ac1e-4eb7-b701-486a75e5ae98'
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[200px] object-contain duration-500 hover:scale-125"
                    alt="logo"
                />
    
                <Image
                    src={
                        'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2FTiktok_Logo.png?alt=media&token=2baafe9e-9b4c-4bff-9ffd-bee319f33423'
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[200px] object-contain duration-500 hover:scale-125"
                    alt="logo"
                />
    
                <Image
                    src={
                        'https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Ftt.png?alt=media&token=026e7732-ca74-4163-b955-c461820d32da'
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[200px] object-contain duration-500 hover:scale-125"
                    alt="logo"
                />
            </div>
        </section>
    );
}

export default Partner;
