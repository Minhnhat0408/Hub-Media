import Image from "next/image";


export default function UnderConstruction({construction}: {construction: string[]}) {
    return <div className="w-screen h-screen bg-background flex justify-center items-center">
      {/* Using the dictionary by selected language: */}
      <Image src={'/logo/logo.png'} alt="img" width="0" height="0" sizes="100vw" className=" h-auto  w-[10vw] " />
        <div  className="flex flex-col ml-10 ">
            <h1 className="text-4xl font-bold mb-6   silver">{construction[0]}</h1>
             <h2 className="text-5xl font-bold silver uppercase"> {construction[1]}</h2>
        </div>
    </div>
}