import './globals.css';
import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
// import { Locale, i18n } from '@/i18n.config';
// import Header from '@/components/header/header-server';
// import { getDictionary } from '@/lib/dictionary';
const prompt = Prompt({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});


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


// export async function generateStaticParams() {
//     return i18n.locales.map((locale) => ({ lang: locale }));
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body className={prompt.className}>
                {children}
            </body>
        </html>
    );
}
