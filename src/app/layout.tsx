import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hub Media - Connect your brand to the world',
    openGraph: {
        images: ['/backlog.png', './favicon.ico'],
    },
    description: 'Connect your brand to the world',
};

export default function LangLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
