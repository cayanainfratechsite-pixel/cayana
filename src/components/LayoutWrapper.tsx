// components/LayoutWrapper.tsx

"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hidelayout = ["/app-comming-soon"];

  const shouldHideLayout = hidelayout.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {children}
      {!shouldHideLayout && (
        <>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}
