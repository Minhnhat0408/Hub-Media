'use client';
import Tilt from 'react-parallax-tilt';
import Reveal from '../animations/reveal';
import LetterAppear from '../animations/letter-appear';
import Host from './host';
import { Locale } from '@/i18n.config';

export default function FounderHosts({ lang }: { lang: Locale }) {
    return (
        <section
            id='hosts'
            style={{
                backgroundImage: "url('/images/bg-ff.png')",
                boxShadow: '0px 0px 22px 10px rgba(0,0,0,0.8) inset',
            }}
            className="xl-max:px-7 sm-max:!py-8 flex h-fit w-full flex-col  px-10 py-20 text-white "
        >
            <LetterAppear className="text-shadow mb-10 text-6xl font-bold tracking-widest !text-[#66b09f]">
                {lang === 'en' ? 'Hosts' : 'Người dẫn'}
            </LetterAppear>
            <div className="flex w-full flex-wrap">
                <div className="phone:w-  phone:flex-auto m-4 flex h-full flex-1 flex-col items-center justify-center xl:mb-10">
                    <Host name={'Bùi Thu Phương'} title={'Phó Chủ tịch Hub Network'} img="phuong" />
                </div>
                <div className="phone:w-full phone:flex-auto m-4 flex h-full flex-1 flex-col items-center justify-center ">
                    <Host name={'Trần Quang Hưng'} title={'Phó Bí thư Thành đoàn Hà Nội'} img="hung" />
                </div>
            </div>
        </section>
    );
}
