import Image from "next/image";

function Loading() {
    return ( 
        <main className="w-[100vw] h-[100vh] fixed z-10 flex flex-col justify-center items-center bg-background">
            <Image src={'/logo/logo.png'} alt="img" width="0" height="0" sizes="100vw" className=" h-auto  w-[10vw] animate-pulse" />
       
        </main>
     );
}

export default Loading;