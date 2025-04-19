// app/layout.tsx

import "./globals.css";
import { Maven_Pro } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import AntiCopy from "@/components/AnitCopy";

const mavenPro = Maven_Pro({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Cayana, a modern and minimalistic blog template",
  description: "Cayana is a modern and minimalistic blog template.",
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
        <LayoutWrapper>
          <AntiCopy />
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
