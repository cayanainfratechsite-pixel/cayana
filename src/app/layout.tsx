// app/layout.tsx

import "./globals.css";
import { Maven_Pro } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import AntiCopy from "@/components/AnitCopy";
import Script from "next/script";

const mavenPro = Maven_Pro({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Cayana Infratech | Top Real Estate Developer in Odisha",
  description: "Cayana Infratech | Top Real Estate Developer in Odisha",
  verification: {
    google: "oTkyv4RdP1sKlve3OYoCNDouMJG2yRApIx68AfIRIFk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mavenPro.className}>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1594412811752628&ev=PageView&noscript=1"
          />
        </noscript>
        <LayoutWrapper>
          <AntiCopy />
          {children}
        </LayoutWrapper>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1594412811752628');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
