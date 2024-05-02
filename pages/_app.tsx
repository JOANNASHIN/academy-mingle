import type { AppProps } from 'next/app';
import '@/styles/global.scss';

import { Noto_Sans_KR } from 'next/font/google';

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--noto-sans',
  display: 'swap',
  weight: ['200', '400', '600', '800'],
});

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${noto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default app;
