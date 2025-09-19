'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface YandexMetricaProps {
  ymId: string;
}

declare global {
  interface Window {
    ym: (id: number, action: string, params?: Record<string, unknown>) => void;
  }
}

export default function YandexMetrica({ ymId }: YandexMetricaProps) {
  useEffect(() => {
    // Initialize Yandex Metrica when component mounts
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(parseInt(ymId), 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true
      });
    }
  }, [ymId]);

  return (
    <>
      {/* Yandex Metrica Script */}
      <Script
        id="yandex-metrica"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${ymId}', 'ym');
          `
        }}
      />
      
      {/* Noscript fallback */}
      <noscript>
        <div>
          <img 
            src={`https://mc.yandex.ru/watch/${ymId}`} 
            style={{ position: 'absolute', left: '-9999px' }} 
            alt="" 
          />
        </div>
      </noscript>
    </>
  );
}
