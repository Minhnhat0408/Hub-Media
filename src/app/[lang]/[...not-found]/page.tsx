import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"
import Image from "next/image"
export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)
  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center">
      {/* Using the dictionary by selected language: */}
      <Image src={'/logo/logo.png'} alt="img" width="0" height="0" sizes="100vw" className=" h-auto  w-[10vw] " />
        <div  className="flex flex-col ml-10 ">
            <h1 className="text-9xl font-bold mb-6 mt-8 silver">404</h1>
             <h2 className="text-2xl font-bold silver uppercase"> {dictionary.pages["not-found"]}</h2>
        </div>
    </div>
  )
}