import PageTitle from "@/components/page-title";
import axios from "axios";
export type Service = {
    title:string,
    description:string,
    price:string,
    thumbnail?:string,
}
async function ServicesPage() {
    const response = await axios.get(`${process.env.URL}/api/service`)
    const data = response.data.services
    console.log(data)
    return ( 
        <main className="w-full bg-page-title bg-background ">
            <PageTitle title="Services"/>
            <section className="py-20 w-full ">
                {
                    // data.map((service,ind)  => (
                    //     <div key={} className="flex flex-col justify-center items-center">
                    //         <h1 className="text-white">{service.title}</h1>
                    //         <p className="text-white">{service.description}</p>
                    //         <p className="text-white">{service.price}</p>
                    //     </div>
                    // ))
                }
            </section>
        </main>
     );
}

export default ServicesPage;        