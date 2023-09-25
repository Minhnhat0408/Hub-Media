import axios from "axios";

type Service = {
    title:string,
    description:string,
    price:string,
    thumbnail?:string,
}
async function Service({params: {title}}:{params:{title:string}}) {

    const response = await axios.get(`${process.env.URL}/api/service`,{
        params:{
            title: title
        }
    })
    const data : Service = response.data.service

    return ( 
        <main className="w-full h-[100vh] flex flex-col justify-center items-center text-white">
            <h1 className="text-white">{data.title}</h1>
            <p className="text-white">{data.description}</p>
            <p className="text-white">{data.price}</p>
        </main>
     );
}

export default Service;