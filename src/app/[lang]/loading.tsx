import Image from "next/image";

function Loading() {
    return ( 
        <main className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-background">
            <Image src={'/logo/logo.png'} alt="img" width="0" height="0" sizes="100vw" className=" h-auto  w-[10vw] animate-pulse" />
            {/* <h1 className="text-4xl super tracking-wider font-bold mt-10">
                Loading...
            </h1> */}
        </main>
     );
}

export default Loading;