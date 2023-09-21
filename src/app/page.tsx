import { Locale } from '@/i18n.config'
import { Metadata } from 'next';


export default async function NotFound({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  return (
    <main className="flex min-h-screen flex-col items-center h-[100vh] ">
      Nothing here
    </main>
  )
}
