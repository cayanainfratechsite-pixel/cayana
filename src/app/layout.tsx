import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from '@/components/Navbar'
// import Header from "../header";
import Footer from "@/components/Footer";

import { Maven_Pro } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const mavenPro = Maven_Pro({
  subsets: ['latin'],
});

export const metadata = {
  title: "Cayana",
  description: "Cayana is a modern and minimalistic blog template.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mavenPro.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
