import ScrollTop from '@/components/scroll-top';
import { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';
import { Toaster } from 'react-hot-toast';
// ...
export const metadata: Metadata = {
    metadataBase: new URL('https://pbhubmedia.vercel.app/'),
    title: 'Hub Media - Kết nối thương hiệu của bạn ra thế giới',
    openGraph: {
        images: ['https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2F345329692_191612113793014_5846958053862937696_n.jpg?alt=media&token=f57c40d7-d18b-4f39-81b5-7abbeb973d80&_gl=1*11j8j1z*_ga*MjEzMTY3MzA4MS4xNjkxMzM2Nzk5*_ga_CW55HF8NVT*MTY5Njc0OTk2NC4yODMuMS4xNjk2NzUyOTYxLjU4LjAuMA..'],
        title: 'Hub Media - Kết nối thương hiệu của bạn ra thế giới',
        description:
            'Hub Media là một công ty cung cấp giải pháp marketing dành cho các doanh nghiệp hướng tới đối tượng là giới trẻ.',
        type: 'website',
        url: 'https://pbhubmedia.vercel.app/',
    },
    viewport: 'width=device-width, initial-scale=1',
    creator: 'Bùi Thu Phương',
    description:
        'Hub Media là một công ty cung cấp giải pháp marketing dành cho các doanh nghiệp hướng tới đối tượng là giới trẻ.',
};

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
           
            <body>
                <Toaster position="top-right" />
                {children}
                <ScrollTop />
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

export default RootLayout;
