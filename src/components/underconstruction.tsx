import Image from "next/image";


export default function UnderConstruction({construction}: {construction: string[]}) {
    return <div className="w-screen h-screen bg-background flex justify-center items-center">
      {/* Using the dictionary by selected language: */}
      <div className="w-fit  mx-auto relative flex justify-center">
        <Image src={'/logo/logo.png'} alt="img" width="0" height="0" sizes="100vw" className=" h-fit self-end sm:mb-2 mb-1  sm:w-[100px] w-[80px]  " />
          <div  className="flex self-end flex-col sm:ml-10 ml-4  ">
              <h1 className="lg:text-4xl md:text-3xl text-lg font-bold ssm:mb-6 !mb-1   silver">{construction[0]}</h1>
               <h2 className="lg:text-5xl md:text-4xl text-xl font-bold silver uppercase"> {construction[1]}</h2>
          </div>
      </div>
    </div>
}