import { Locale, i18n } from '@/i18n.config'

export default async function Home({
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
