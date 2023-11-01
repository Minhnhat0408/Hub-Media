import { Locale } from '@/i18n.config';

import { Footer } from '@/components/footer';

export default async function DefaultLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    return (
        <>
            {children}
            <Footer lang={params.lang} />
        </>
    );
}
