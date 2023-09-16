import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import HeaderUI from './header-client';
import ProgressIndicator from './progress-indicator';
export default async function Header({ lang }: { lang: Locale }) {
    const { navigation } = await getDictionary(lang);

    return (
        <header className="fixed z-10 w-full">
            <ProgressIndicator />
            <HeaderUI lang={lang} navigation={navigation} />
        </header>
    );
}
