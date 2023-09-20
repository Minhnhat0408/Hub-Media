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



// export async function generateStaticParams() {
//     return i18n.locales.map((locale) => ({ lang: locale }));
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={prompt.className}>
                {children}
            </body>
        </html>
    );
}
