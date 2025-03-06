import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";

import { Maven_Pro } from "next/font/google";


const mavenPro = Maven_Pro({
  subsets: ['latin'],
});

export const metadata = {
  title: "Cayana",
  description: "Cayana Infratech Pvt Ltd.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
        {/* Directly reference the image from the public folder */}
        <link rel="icon" href="/images/CAYANA.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/CAYANA.png" />
      </head>

      <body className={mavenPro.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
