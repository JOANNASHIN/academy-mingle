import Header from '@/components/header/Header';
import style from './Layout.style';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  function setFontSize() {
    const htmlDoc = document.documentElement;

    if (globalThis.innerWidth > globalThis.innerHeight) {
      htmlDoc.style.fontSize = (globalThis.innerHeight / 320) * 62.5 + '%';
    } else {
      htmlDoc.style.fontSize = (globalThis.innerWidth / 320) * 62.5 + '%';
    }
  }

  useEffect(() => {
    let enSizing = false;

    globalThis.dispatchEvent(new Event('resize'));

    globalThis.onresize = function () {
      if (!enSizing) {
        globalThis.requestAnimationFrame(function () {
          setFontSize();
          enSizing = false;
        });
      }
      enSizing = true;
    };
  }, []);

  return (
    <div css={style}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
