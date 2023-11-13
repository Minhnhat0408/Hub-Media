'use client';
import Tilt from 'react-parallax-tilt';
import Reveal from '../animations/reveal';
import LetterAppear from '../animations/letter-appear';
import Host from './host';
import { Locale } from '@/i18n.config';

export default function FounderHosts({ lang }: { lang: Locale }) {
    return (
        <section
            id="hosts"
            style={{
                backgroundImage: "url('https://utfs.io/f/c234207f-fca0-4293-8a30-87a4a402c53a-1jqloo.png')",
                boxShadow: '0px 0px 22px 10px rgba(0,0,0,0.8) inset',
            }}
            className="flex  h-fit w-full flex-col px-4  py-20 text-white md:px-10 "
        >
            <LetterAppear className="sm:text-shadow text-shadow-sm mb-10 text-4xl font-bold tracking-widest !text-secondary sm:text-6xl">
                Hosts
            </LetterAppear>
            <div className="flex w-full flex-col flex-wrap gap-x-10 lg:flex-row">
                <div className="  flex h-full flex-1 flex-col items-center justify-center ">
                    <Host name={'Trần Quang Hưng'} title={'Phó Bí thư Thành đoàn Hà Nội'} img="hung" />
                </div>
                <div className="   mb-10 flex h-full flex-1 flex-col items-center justify-center lg:mb-0">
                    <Host name={'Phoebe'} title={'Phó Chủ tịch Hub Network'} img="phuong" />
                </div>
            </div>
        </section>
    );
}
