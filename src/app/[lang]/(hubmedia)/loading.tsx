import Image from "next/image";

function Loading() {
    return ( 
        <main className="w-[100vw] h-[100vh] fixed z-[200] flex flex-col justify-center items-center bg-background">
            <Image src={'/logo/logo.png'} alt="img" width="0" height="0" sizes="100vw" className=" h-auto  xl:!w-[15vw] md:!w-[20vw] ssm:w-[25vw] w-[30vw]    animate-pulse" />
        </main>
     );
}

export default Loading;