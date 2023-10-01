import MarkupButton from '@/components/markup-button';
import PageTitle from '@/components/page-title';
import ServiceItem from '@/components/service-item';
import { Locale } from '@/i18n.config';
import { getDictionary, getServices } from '@/lib/dictionary';
export type ServiceThumbnail = {
    [name: string]: {
        description: string;
        src: string;
        href: string;
    };
};
async function ServicesPage({ params: { lang } }: { params: { lang: Locale } }) {
    // const response = await axios.get(`${process.env.URL}/api/service`)
    // const data = response.data.services
    // console.log(data)
    const services = await getServices(lang);
    return (
        <main className=" h-fit w-full py-20 ">
            <PageTitle
                src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/services-breadcrumb.jpg"
                title="Services"
            />
            
            <section className=" grid w-full grid-cols-2 p-20 ">
                {Object.entries(services as ServiceThumbnail).map(([title, infor], index: number) => {
                    
                    return (
                        <ServiceItem
                            key={index}
                            title={title}
                            description={infor.description}
                            src={infor.src}
                            href={infor.href}
                            lang={lang}
                            className={index % 2 !== 0 ? ' translate-y-20':''}
                        />
                    );
                })}
            </section>
        </main>
    );
}

export default ServicesPage;
