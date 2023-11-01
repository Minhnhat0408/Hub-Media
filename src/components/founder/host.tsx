'use client';
import Tilt from 'react-parallax-tilt';
import Reveal from '../animations/reveal';
import LetterAppear from '../animations/letter-appear';
import { cn } from '@/lib/utils';

export default function Host({ name, title, img }: { name: string; title: string; img: string }) {
    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareBorderRadius="24px"
            glarePosition="all"
            className="phone:w-full bg-speaker flex h-full flex-col rounded-3xl p-6"
        >
            <h3 className="ff-super mb-2 text-3xl font-bold tracking-wider">{name}</h3>
            <p className="mb-10">{title}</p>

            <div className={cn('h-[400px] w-[400px] ', img)} />
        </Tilt>
    );
}
