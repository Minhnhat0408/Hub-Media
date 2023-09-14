import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Hub Media - Connect Your Brand To The World",
  openGraph: {
    images: [
      {
        url: '/backlog.jpg',
        width: 800,
        height: 600,
      }],
  },
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




