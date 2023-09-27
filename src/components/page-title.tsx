import Image from "next/image";

export default function PageTitle({title}: {title: string}) {

    return (
        <section className="w-full flex flex-col items-center page-title  h-[700px] relative ">
            <Image src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/services-breadcrumb.jpg" alt="img" width="0" height="0" sizes="100vw" className=" -z-10 h-auto w-full opacity-20 object-cover absolute mix-blend-luminosity" />
            <h1 className="silver text-6xl font-bold mt-40">
                {title}    
            </h1>
            <p className="super">
                Hub Media / {title}
            </p>
        </section>
    )
}