import UnderConstruction from '@/components/underconstruction';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function LiveStreamPage({ params: { lang } }: { params: { lang: Locale } }) {
    const {pages} = await getDictionary(lang);

    return (
        <main className="h-fit w-full py-[60px] md:py-[90px] bg-background">
            <UnderConstruction construction={pages.underconstruction} />
        </main>
    );
}