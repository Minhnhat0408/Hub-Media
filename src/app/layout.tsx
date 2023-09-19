import './globals.css';
import type { Metadata } from 'next';


// export async function generateMetadata(
//   { params }: { params: { lang: Locale } },
// ): Promise<Metadata> {
//   console.log(params.lang)
//   const { metadata } = await getDictionary(params.lang)
//   return {
//     metadataBase: new URL("https://pbhubmedia.vercel.app/"),
//     alternates: {
//       canonical: '/',
//       languages: {
//         'en': '/en',
//         'vi': '/vi',
//       },
//     },
//     title: metadata.title,
//     openGraph:{
//       images: ['/images/backlog.png'],
//     },
//     description: metadata.description,
//   }
// }
export const metadata: Metadata = {
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
        <html>
          {children}
        </html>
    );
}
