import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Script from "next/script";
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Script id="gtm-script" src="https://www.googletagmanager.com/gtag/js?id=G-7VVMGTQXGF" strategy="lazyOnload" />
      <Script id="gtm-script-1" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7VVMGTQXGF');
          window.dataLayer.push({
            page_path: window.location.pathname
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;

