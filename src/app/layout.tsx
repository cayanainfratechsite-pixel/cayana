// app/layout.tsx

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Maven_Pro } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";

const mavenPro = Maven_Pro({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Cayana, a modern and minimalistic blog template",
  description: "Cayana is a modern and minimalistic blog template.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hidelayout = ["/app-comming-soon"];
  return (
    <html lang="en" className={mavenPro.className}>
      <body>
        {/* Navbar at the top */}
        {!hidelayout && <Navbar />}

        {/* Centered image section */}
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
          }}
        >
          <Image
            src="http://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png"
            alt="Under Construction"
            width={1200}
            height={900}
          />
        </div> */}

        {/* Footer at the bottom */}

        {/* Render page-specific content if needed */}
        {children}
        {!hidelayout && (
          <>
            <Footer />
            <WhatsAppButton />
          </>
        )}
      </body>
    </html>
  );
}
