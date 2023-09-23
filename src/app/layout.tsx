import './globals.css';
import type { Metadata } from 'next';



export const metadata: Metadata = {
    metadataBase: new URL("https://pbhubmedia.vercel.app/"),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'vi': '/vi',
      },
    },
    title: 'Hub Media - Connect your brand to the world',
    openGraph: {
        images: ['/images/backlog.png'],
    },
    description:
        'Hub Media is a digital marketing agency that provides livestreaming services, video production, and digital marketing services to connect your brand to the world.',
  };



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body >
                {children}
            </body>
        </html>
    );
}
