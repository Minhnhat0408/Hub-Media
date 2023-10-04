import dynamic from 'next/dynamic';
import PageTitle from '@/components/page-title';
import { FaWpforms } from 'react-icons/fa';
import { BsFillTelephoneFill, BsMessenger } from 'react-icons/bs';
import Mark from '@/components/markup';
import Link from 'next/link';
import Image from 'next/image';
import { TbBrandFacebook, TbBrandLinkedin, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';
import LetterAppear from '@/components/animations/letter-appear';
import Reveal from '@/components/animations/reveal';
import ContactForm from '../contact-form';
import { getDictionary, getServices, getSpecifiedService } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
const Map = dynamic(() => import('@/components/map'), {
    ssr: false,
});

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const { metadata } = await getDictionary(params.lang);
    return {
        title: metadata.contact.title,
        openGraph: {
            images: ['/images/backlog.png'],
        },
        description: metadata.contact.description,
    };
}

export default async function ContactPage({ params: { lang, title } }: { params: { lang: Locale; title: string } }) {
    const services  = await getServices(lang);
    let defaultService: string | undefined = undefined;
    let defaultMsg: string = ''
   if (title) {
        if (title[1] && Number(title[1]) < 3) {
            const s = await getSpecifiedService(lang, title[0]);
            defaultMsg = s.msg[Number(title[1])]
        } 
        Object.entries(services).forEach(([key, value]) => {
            if (value.href.split('/')[2] === title[0]) {
                defaultService = key;
            }
            
        });
        if(!defaultService || Number(title[1]) >2 ) {
            redirect('/' + lang + '/not-found')
        }
        
    }

    return (
        <main className="w-full  ">
            <PageTitle
                src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/services-breadcrumb.jpg"
                title={lang === 'vi' ? 'Liện hệ' : 'Contact'}
            />

            <section  className="w-full lg:!p-20  xl:!px-40 lg:!px-28  ssm:p-10 !p-4 !py-10 !pt-20 ">
                <Reveal hiddenX={200} className="flex justify-center lg:gap-x-20 md:gap-x-16 gap-x-4">
                    <div className="group flex flex-1 flex-col items-center  ">
                        <Link
                            aria-label='Messenger'
                            href={'https://www.facebook.com/messages/t/102422339523278'}
                            target="_blank"
                            className="relative flex items-center justify-center xl:text-8xl md:text-7xl text-5xl text-gradient duration-500 group-hover:scale-[120%] "
                        >
                            <div className="animate-ping-big-slow absolute inline-flex xl:h-16 xl:w-16 md:h-12 md:w-12 h-8 w-8 rounded-full bg-gradient"></div>
                            <BsMessenger />
                        </Link>
                        <p className="mt-10 md:!w-48 ssm:w-28 w-16  text-center xl:!text-xl ssm:text-base text-sm text-muted-foreground ">
                        {lang === 'vi' ? 'Liên lạc với chúng tôi bằng Messenger' : 'Contact us via Facebook Messenger'}
                        </p>
                    </div>
                    <div className="group flex flex-1 flex-col items-center ">
                        <Link
                            aria-label='Phone'
                            href={'tel:0965053420'}
                            className="relative flex items-center justify-center xl:text-8xl md:text-7xl text-5xl text-gradient duration-500 group-hover:scale-[120%] "
                        >
                            <div className="animate-ping-big-slow absolute inline-flex xl:h-16 xl:w-16 md:h-12 md:w-12 h-8 w-8 rounded-full bg-gradient"></div>
                            <BsFillTelephoneFill />
                        </Link>

                        <p className="mt-10 md:!w-48 ssm:w-28 w-16  text-center xl:!text-xl ssm:text-base text-sm text-muted-foreground ">
                         {lang === 'vi' ? 'Gọi trực tiếp cho chúng tôi' : 'Make a phone call directly to us'}
                        </p>
                    </div>
                    <div className="group flex flex-1 flex-col items-center  ">
                        <Link
                            href={'#form'}
                            aria-label='Form'
                            className="relative flex items-center justify-center xl:text-8xl md:text-7xl text-5xl text-gradient duration-500 group-hover:scale-[120%] "
                        >
                            <div className="animate-ping-big-slow absolute inline-flex xl:h-16 xl:w-16 md:h-12 md:w-12 h-8 w-8 rounded-full bg-gradient"></div>
                            <FaWpforms />
                        </Link>
                        <p className="mt-10 md:!w-48 ssm:w-28 w-16  text-center xl:!text-xl ssm:text-base text-sm text-muted-foreground ">
                         {lang === 'vi' ? 'Điền vào form và gửi cho chúng tôi' : 'Fill the form to contact us'}
                      
                        </p>
                    </div>
                </Reveal>
            </section>
            <Reveal hiddenX={-200} className="flex w-full items-center justify-center md:gap-x-20 gap-x-6 xl:p-20 p-10 ssm:px-20 px-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 113 113.1"
                    xmlSpace="preserve"
                    className="md:h-[120px] md:w-[120px] w-20 h-20 fill-white  duration-500 group-hover:scale-110"
                >
                    <g>
                        {' '}
                        <g transform="translate(0)">
                            {' '}
                            <g>
                                {' '}
                                <path d="M54.7,109.1c-1.7,0-3.4-0.2-5-0.5c-6-1.3-10.2-4.9-12.2-10.4c-0.7-1.9-0.4-4.1,0.9-5.7c4.8-5.8,16.9-9.6,23.1-8.4    c1.6,0.3,2.8,1.5,3.2,3c0.4,1.7,0.6,3.4,0.7,5c0,0.1,0.1,0.2,0.1,0.2c0,0,0.1,0,0.2,0c5.3-1.8,11-5.6,16.3-11.1    c5.2-5.5,8.9-11.3,10.4-16.7c0-0.1,0-0.2-0.1-0.2c0,0-0.1-0.1-0.2-0.1c-1.7,0-3.4-0.2-5-0.5c-1.6-0.3-2.8-1.6-3.2-3.1    c-1.4-6.1,1.9-18.4,7.5-23.4c1.6-1.4,3.8-1.8,5.7-1.2c5.6,1.8,9.4,5.8,10.9,11.7c3,11.9-3.7,29-16.7,42.5    C80.2,101.9,66.1,109.1,54.7,109.1z M59.2,86.6c-5.4,0-14.7,2.9-18.6,7.6c-0.7,0.8-0.9,2-0.5,3c1.7,4.6,5.1,7.6,10.1,8.6    c11.1,2.4,26.9-4.7,39.2-17.6l0,0c12.4-12.8,18.9-28.9,16.1-39.9c-1.2-4.9-4.4-8.3-9-9.7c-1-0.3-2.2-0.1-3,0.6    c-5.1,4.6-7.7,16-6.6,20.7c0.1,0.5,0.5,0.9,1,1c1.5,0.3,3,0.4,4.5,0.4c0.8,0,1.6,0.3,2.1,0.9c0.6,0.6,0.9,1.3,0.9,2.1    c0,0.3,0,0.5-0.1,0.8c-1.7,5.9-5.5,12.1-11.1,17.9c-5.6,5.8-11.7,9.9-17.4,11.8c-1.6,0.5-3.3-0.4-3.8-1.9    c-0.1-0.2-0.1-0.5-0.1-0.8c-0.1-1.5-0.3-3-0.6-4.5c-0.1-0.5-0.5-0.8-1-0.9C60.6,86.6,59.9,86.6,59.2,86.6z"></path>{' '}
                            </g>{' '}
                        </g>{' '}
                        <g transform="translate(0)">
                            {' '}
                            <g>
                                {' '}
                                <path d="M47.2,69.3h-19c-0.5,0-1-0.2-1.4-0.6c-0.4-0.4-0.7-0.9-0.7-1.5c0-0.6,0.2-1.1,0.6-1.6l0.8-0.9c5.9-6.5,12-13.2,15.7-18.1    c1.8-2.4,2.1-5.5,0.8-8.2c-1.2-2.7-3.7-4.3-6.6-4.5c-0.2,0-0.3,0-0.5,0c-4.9,0-9,4-9,9c0,0.8-0.6,1.4-1.4,1.4    c-0.8,0-1.4-0.6-1.4-1.4c0-6.5,5.3-11.8,11.8-11.8c0.2,0,0.4,0,0.6,0c3.9,0.2,7.3,2.5,9,6.1c1.7,3.7,1.3,7.9-1.1,11.1    c-3.7,4.9-9.8,11.6-15.6,18.1h17.6c0.8,0,1.4,0.6,1.4,1.4C48.6,68.6,48,69.3,47.2,69.3z"></path>{' '}
                            </g>{' '}
                            <g>
                                {' '}
                                <path d="M71.6,69.3c-0.8,0-1.4-0.6-1.4-1.4V58H52.6c0,0,0,0,0,0c-0.4,0-0.7-0.1-1-0.4c-0.3-0.3-0.5-0.6-0.5-1.1    c0-0.4,0.1-0.8,0.4-1.1l18.7-23.4c0.3-0.4,0.7-0.6,1.2-0.6c0,0,0,0,0,0c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.4,0.7,0.4,1.1v22.1h2.7    c0.8,0,1.4,0.6,1.4,1.4c0,0.8-0.6,1.4-1.4,1.4H73v9.8C73,68.6,72.3,69.3,71.6,69.3z M53.6,57.2L53.6,57.2    C53.6,57.2,53.6,57.2,53.6,57.2z M52.6,55.3C52.6,55.3,52.6,55.3,52.6,55.3L52.6,55.3C52.6,55.3,52.6,55.3,52.6,55.3z M70.2,36.6    l-15,18.7h15V36.6z M72.4,33.8L72.4,33.8C72.3,33.8,72.4,33.8,72.4,33.8z M70.2,33.1C70.2,33.1,70.2,33.1,70.2,33.1L70.2,33.1z"></path>{' '}
                            </g>{' '}
                        </g>{' '}
                        <path d="M32.3,92.8c-0.2,0-0.4,0-0.6-0.1C15,85.3,4.1,68.7,4,50.4C4,24.8,25.1,4.1,51,4.1c0.1,0,0.1,0,0.2,0  C69,4.1,85,13.9,93.1,29.8c0.3,0.7,0.1,1.5-0.6,1.9c-0.7,0.3-1.5,0.1-1.9-0.6C83,16.1,67.9,6.8,51.1,6.8c0,0-0.1,0-0.1,0  C26.6,6.8,6.8,26.4,6.8,50.4c0.1,17.2,10.3,32.8,26,39.7c0.7,0.3,1,1.1,0.7,1.8C33.3,92.4,32.8,92.8,32.3,92.8z"></path>{' '}
                        <path d="M51,11.9c-0.8,0-1.4-0.6-1.4-1.4v-5c0-0.8,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4v5C52.4,11.3,51.8,11.9,51,11.9z"></path>{' '}
                        <path d="M31,17.2c-0.5,0-0.9-0.2-1.2-0.7l-2.5-4.4c-0.4-0.7-0.2-1.5,0.5-1.9c0.7-0.4,1.5-0.2,1.9,0.5l2.5,4.4  c0.4,0.7,0.2,1.5-0.5,1.9C31.5,17.2,31.3,17.2,31,17.2z"></path>{' '}
                        <path d="M16.4,31.8c-0.2,0-0.5-0.1-0.7-0.2l-4.4-2.5c-0.7-0.4-0.9-1.2-0.5-1.9c0.4-0.7,1.2-0.9,1.9-0.5l4.4,2.5  c0.7,0.4,0.9,1.2,0.5,1.9C17.4,31.6,16.9,31.8,16.4,31.8z"></path>{' '}
                        <path d="M6.1,51.8c-0.8,0-1.4-0.6-1.4-1.4C4.7,49.6,5.3,49,6,49l5,0c0,0,0,0,0,0c0.8,0,1.4,0.6,1.4,1.4s-0.6,1.4-1.4,1.4L6.1,51.8  C6.1,51.8,6.1,51.8,6.1,51.8z"></path>{' '}
                        <path d="M12.1,74.3c-0.5,0-0.9-0.2-1.2-0.7c-0.4-0.7-0.2-1.5,0.5-1.9l4.4-2.5c0.7-0.4,1.5-0.2,1.9,0.5c0.4,0.7,0.2,1.5-0.5,1.9  l-4.4,2.5C12.6,74.2,12.3,74.3,12.1,74.3z"></path>{' '}
                        <path d="M28.6,90.7c-0.2,0-0.5-0.1-0.7-0.2c-0.7-0.4-0.9-1.2-0.5-1.9l2.5-4.4c0.4-0.7,1.2-0.9,1.9-0.5c0.7,0.4,0.9,1.2,0.5,1.9  L29.8,90C29.5,90.5,29,90.7,28.6,90.7z"></path>{' '}
                        <path d="M85.5,31.7c-0.5,0-0.9-0.2-1.2-0.7c-0.4-0.7-0.2-1.5,0.5-1.9l4.4-2.5c0.7-0.4,1.5-0.2,1.9,0.5c0.4,0.7,0.2,1.5-0.5,1.9  l-4.4,2.5C86,31.7,85.7,31.7,85.5,31.7z"></path>{' '}
                        <path d="M70.9,17.2c-0.2,0-0.5-0.1-0.7-0.2c-0.7-0.4-0.9-1.2-0.5-1.9l2.5-4.4c0.4-0.7,1.2-0.9,1.9-0.5c0.7,0.4,0.9,1.2,0.5,1.9  l-2.5,4.4C71.8,16.9,71.3,17.2,70.9,17.2z"></path>
                    </g>
                </svg>
                <h3 className="xl:max-w-[600px] block  sm:max-w-[400px] flex-1 xl:text-7xl md:text-5xl text-3xl  font-bold text-gradient ">
                         {lang === 'vi' ? 'Phản hồi trong vòng 1 tiếng' : "We'll response to you in an hour"}

                    </h3>
                {/* <p className="w-[30%] text-3xl text-muted-foreground">Thanks for reaching out to us</p> */}
            </Reveal>
            <section id="form"  className="flex md:flex-nowrap flex-wrap  w-full xl:!p-20 ssm:p-10 p-4 gap-y-20">
                <div className="xl:ml-10 flex md:w-[55%] w-full  flex-col">
                    <div className="sm:mb-8  flex gap-x-4 ">
                        <Mark dotanimate lineanimate horizontal classDot="ml-4" />
                        <p className="sm:text-3xl text-xl text-muted-foreground">{lang === 'vi' ? 'Kết nối' : "Get in touch"}</p>
                    </div>
                    <div className="flex">
                        <LetterAppear className="xl:!text-5xl ssm:text-4xl text-3xl font-bold !text-white">{lang === 'vi' ? 'Liên hệ qua Email' : "Reach out to us"}</LetterAppear>
                    </div>
                    <ContactForm lang={lang}  listServices={services} defaultService={defaultService} defaultMsg={defaultMsg} />
                </div>
                <div className="flex-1  2xl:pl-40 xl:pl-28 md:pl-10  2xl:pr-10  ">
                    <Reveal
                        hiddenY={200}
                        className="flex h-full flex-col gap-y-5 border-[1px] border-gradient xl:p-[60px] lg:p-10 p-6" 
                    >
                        <h2 className="xl:text-[54px] lg:text-5xl text-4xl font-bold">Thanks!</h2>
                        <p className="w-[80%] text-muted-foreground">
                          {lang === 'vi' ? 'Xin hãy đợi chúng tôi phản hồi.' : "Please wait for our community department to response to you."}
                        </p>
                        <Image
                            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/career-img.jpg"
                            width={0}
                            height={0}
                            alt="image"
                            sizes="100vw"
                            className="h-auto w-full"
                        />
                        <h2 className="mt-12  text-3xl font-bold"> {lang === 'vi' ? 'Góp ý' : "Enquiries"}</h2>
                        <div className="flex lg:!flex-row md:!flex-col ssm:flex-row flex-col justify-between gap-x-4">
                            <p>0965053420</p>
                            <p>hubmedia.vietnam@gmail.com</p>
                        </div>
                        <ul className="flex lg:!items-center md:!items-start ssm:items-center  lg:!flex-row md:!flex-col ssm:flex-row flex-col gap-x-4 text-base text-muted-foreground  ">
                            <li className='flex mb-1'>
                                <div className=" cursor-pointer duration-1000 hover:text-gradient">
                                    <Link href={'https://www.facebook.com/HubMediaVN'} target="_blank">
                                        <TbBrandFacebook />
                                    </Link>
                                </div>
                                <div className=" cursor-pointer duration-1000 hover:text-gradient">
                                    <Link href={'http://linkedin.com/company/hub-media-vietnam'} target="_blank">
                                        <TbBrandLinkedin />
                                    </Link>
                                </div>
                                <div className=" cursor-pointer duration-1000 hover:text-gradient">
                                    <Link href={'https://www.youtube.com/@FoundersFridayVN'} target="_blank">
                                        <TbBrandYoutube />
                                    </Link>
                                </div>
                                <div className=" cursor-pointer duration-1000 hover:text-gradient">
                                    <Link href={'https://www.tiktok.com/@hubmedia_?_t=8frc2o4VZGE&_r=1'}>
                                        <TbBrandTiktok />
                                    </Link>
                                </div>
                            </li>
                            <li className="flex-1 lg:!text-right md:!text-left ssm:text-right text-base"> {lang === 'vi' ? 'Giờ làm việc: 8:00 - 17:00' : "Working hour: 8:00 - 17:00"}</li>
                        </ul>
                    </Reveal>
                </div>
            </section>
            <Map />
        </main>
    );
}
