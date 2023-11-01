import PageTitle from '@/components/page-title';
import ServiceItem from '@/components/services/service-item';
import { Locale } from '@/i18n.config';
import { getDictionary, getServices } from '@/lib/dictionary';
import { Metadata } from 'next';
export type ServiceThumbnail = {
    [name: string]: {
        description: string;
        src: string;
        href: string;
    };
};

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const { metadata } = await getDictionary(params.lang);
    return {
        title: metadata.services.title,
        openGraph: {
            images: ['/images/backlog.png'],
        },
        description: metadata.services.description,
    };
}

async function ServicesPage({ params: { lang } }: { params: { lang: Locale } }) {
    const services = await getServices(lang);
    return (
        <main className=" h-fit w-full py-[60px] md:py-[90px] ">
            <PageTitle
                src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fbghub.JPG?alt=media&token=07da7fd8-9f51-479c-848a-691c6972c227&_gl=1*3zs0og*_ga*MjEzMTY3MzA4MS4xNjkxMzM2Nzk5*_ga_CW55HF8NVT*MTY5Njc0OTk2NC4yODMuMS4xNjk2NzUxNzE1LjQ0LjAuMA."
                title={lang === 'vi' ? 'Dịch vụ' : 'Services'}
            />

            <section className=" grid w-full grid-cols-1 py-10 md:p-10 lg:grid-cols-2 xl:p-20  ">
                {Object.entries(services as ServiceThumbnail).map(([title, infor], index: number) => {
                    return (
                        <ServiceItem
                            key={index}
                            title={title}
                            description={infor.description}
                            src={infor.src}
                            href={infor.href}
                            lang={lang}
                            className={index % 2 !== 0 ? ' lg:translate-y-20' : ''}
                        />
                    );
                })}
            </section>
        </main>
    );
}

export default ServicesPage;
