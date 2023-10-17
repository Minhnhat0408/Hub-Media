'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function Team() {
    const [open, setOpen] = useState('');
    return (
        <section id="team" className="flex flex-wrap w-full justify-center gap-y-10  sm:gap-x-10 gap-x-4 bg-background py-16  md:py-20">
            <Image
                src={'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548137/hub-media/oy6xdla9zf9qiuyyxtao.jpg'}
                width={0}
                height={0}
                sizes="100vw"
                className="lg:w-[22%] w-[45%]  cursor-pointer object-cover"
                alt="logo"
                onClick={() => setOpen('https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548137/hub-media/oy6xdla9zf9qiuyyxtao.jpg')}
            />
            <Image
                src={'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/jc6i0lgehlhk0bdq2jsl.jpg'}
                width={0}
                height={0}
                sizes="100vw"
                className="lg:w-[22%] w-[45%]  cursor-pointer object-cover"
                alt="logo"
                onClick={() => setOpen('https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/jc6i0lgehlhk0bdq2jsl.jpg')}
            />
            <Image
                src={'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/rcl8nblist0cfmtpb7p4.jpg'}
                width={0}
                height={0}
                sizes="100vw"
                className="lg:w-[22%] w-[45%]  cursor-pointer object-cover"
                alt="logo"
                onClick={() => setOpen('https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/rcl8nblist0cfmtpb7p4.jpg')}
            />
            <Image
                src={'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/mmop7t67vej81j9vluvk.jpg'}
                width={0}
                height={0}
                sizes="100vw"
                className="lg:w-[22%] w-[45%]  cursor-pointer object-cover"
                alt="logo"
                onClick={() => setOpen('https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/mmop7t67vej81j9vluvk.jpg')}
            />
            {open !== '' && (
                <div className="z-50 fixed h-screen w-screen top-0 left-0 flex items-center justify-center bg-black/70" onClick={() => setOpen('')}>
                    <Image
                        src={
                            open
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="md:h-[80vh] md:w-auto w-[100vw] object-cover"
                        alt="logo"
                    />
                </div>
            )}
        </section>
    );
}
