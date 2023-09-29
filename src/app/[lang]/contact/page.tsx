import dynamic from 'next/dynamic';
import PageTitle from '@/components/page-title';

const Map = dynamic(() => import('./map'), {
    ssr: false,
});


// Client Components:
function ContactPage() {
    //
    return (
        <main className=" h-[1000px] w-full ">
            <PageTitle
                src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/services-breadcrumb.jpg"
                title="Contact"
            />
           <Map/>
        </main>
    );
}

export default ContactPage;
