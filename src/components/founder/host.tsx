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
            className="ssm:w-fit w-full bg-speaker flex h-full flex-col rounded-3xl p-6"
        >
            <h3 className="ff-super mb-2 sm:text-3xl text-xl font-bold tracking-wider">{name}</h3>
            <p className="sm:mb-10 mb-4 sm:text-base text-sm">{title}</p>

            <div className={cn(' ssm:w-[400px] w-full ssm:h-[400px] h-[200px]', img)} />
        </Tilt>
    );
}
