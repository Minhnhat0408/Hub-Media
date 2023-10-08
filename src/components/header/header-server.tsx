import { Locale } from '@/i18n.config';
import HeaderUI from './header-client';
import ProgressIndicator from './progress-indicator';

export default async function Header({lang,navigation} : {lang: Locale,navigation: object}) {

    return (
        <header className="fixed z-10 w-full">
            <ProgressIndicator />
     <HeaderUI lang={lang} navigation={navigation} />
        </header>
    );
}   
