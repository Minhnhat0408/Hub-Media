import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"
import Image from "next/image"
export default async function NotFound({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)
  return (
    <div className="w-screen h-screen bg-background flex justify-center  items-center">
      {/* Using the dictionary by selected language: */}
      <div className="w-fit relative flex justify-center">
        <Image src={'/logo/logo.png'} alt="img" width="0" height="0" sizes="100vw" className=" h-fit self-end sm:mb-2 mb-1  sm:w-[160px] w-[100px]  " />
          <div  className="flex self-end flex-col sm:ml-10 ml-4  ">
              <h1 className="sm:text-9xl text-7xl font-bold mb-6 mt-8 silver">404</h1>
               <h2 className="sm:text-2xl  font-bold silver uppercase"> {dictionary.pages["not-found"]}</h2>
          </div>
      </div>
    </div>
  )
}