'use client';
import Image from 'next/image';
import { useState } from 'react';
import SliderMultiple from '../animations/slider-multiple';
export default function Team() {
    const [open, setOpen] = useState('');
    return (
        <section
            id="team"
            className="flex w-full  gap-y-10 bg-background py-16  md:py-20"
        >
            <SliderMultiple>
                <Image
                    src={
                        'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548137/hub-media/oy6xdla9zf9qiuyyxtao.jpg'
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="keen-slider__slide cursor-pointer object-cover  w-full"
                    alt="logo"
                    onClick={() =>
                        setOpen(
                            'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548137/hub-media/oy6xdla9zf9qiuyyxtao.jpg',
                        )
                    }
                />
                <Image
                    src={
                        'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/dy5ntrnrobkbod2lwsjr.jpg'
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="keen-slider__slide cursor-pointer object-cover  w-full"
                    alt="logo"
                    onClick={() =>
                        setOpen(
                            'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/dy5ntrnrobkbod2lwsjr.jpg',
                        )
                    }
                />
                <Image
                    src={
                        'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/jc6i0lgehlhk0bdq2jsl.jpg'
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="keen-slider__slide cursor-pointer object-cover  w-full"
                    alt="logo"
                    onClick={() =>
                        setOpen(
                            'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/jc6i0lgehlhk0bdq2jsl.jpg',
                        )
                    }
                />
                <Image
                    src={
                        'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/rcl8nblist0cfmtpb7p4.jpg'
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="keen-slider__slide cursor-pointer object-cover  w-full"
                    alt="logo"
                    onClick={() =>
                        setOpen(
                            'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/rcl8nblist0cfmtpb7p4.jpg',
                        )
                    }
                />
                <Image
                    src={
                        'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/mmop7t67vej81j9vluvk.jpg'
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="keen-slider__slide cursor-pointer object-cover  w-full"
                    alt="logo"
                    onClick={() =>
                        setOpen(
                            'https://res.cloudinary.com/dtbvalhlc/image/upload/v1697548129/hub-media/mmop7t67vej81j9vluvk.jpg',
                        )
                    }
                />
            </SliderMultiple>

            {open !== '' && (
                <div
                    className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/70"
                    onClick={() => setOpen('')}
                >
                    <Image
                        src={open}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[100vw] object-cover md:h-[80vh] md:w-auto"
                        alt="logo"
                    />
                </div>
            )}
        </section>
    );
}
