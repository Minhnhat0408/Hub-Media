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
        <main className=" h-fit w-full py-20 ">
            <PageTitle
                src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/services-breadcrumb.jpg"
                title={lang === 'vi' ? 'Dịch vụ' : 'Services'}
            />

            <section className=" grid w-full grid-cols-1 py-10 md:p-10 lg:grid-cols-2 2xl:p-20  ">
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
