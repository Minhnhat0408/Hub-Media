import type { Metadata } from 'next';
import { Locale, i18n } from '@/i18n.config';
import Header from '@/components/header/header-server';
import { getDictionary } from '@/lib/dictionary';
import { Footer } from '@/components/footer';
import Script from 'next/script';
import './globals.css';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const { metadata } = await getDictionary(params.lang);
    return {
        metadataBase: new URL('https://pbhubmedia.vercel.app/'),
        title: metadata.title,
        openGraph: {
            images: ['/images/backlog.png'],
        },
        description: metadata.description,
    };
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const { navigation } = await getDictionary(params.lang);

    return (
        <html lang={params.lang}>
            <body>
                <Header lang={params.lang} navigation={navigation} />
                {children}
                <Footer lang={params.lang} />
                <div id="fb-root"></div>
                <div id="fb-customer-chat" className="fb-customerchat"></div>

                <Script id="fb" strategy="lazyOnload">
                    {`
                        var chatbox = document.getElementById('fb-customer-chat');
                        chatbox.setAttribute("page_id", "102422339523278");
                        chatbox.setAttribute("attribution", "biz_inbox");
                        window.fbAsyncInit = function() {
                            FB.init({
                            xfbml            : true,
                            version          : 'v18.0'
                            });
                        };

                        (function(d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) return;
                            js = d.createElement(s); js.id = id;
                            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                            fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));`}
                </Script>
            </body>
        </html>
    );
}
