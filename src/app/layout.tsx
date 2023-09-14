import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Hub Media - Connect Your Brand To The World",
  description: "Connect Your Brand To The World",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}




