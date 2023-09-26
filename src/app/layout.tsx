import Script from "next/script";
import React from "react";

function RootLayout({children} : {children: React.ReactNode}) {
    return ( 
        <html lang="vi">
            <body>
                {children}
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