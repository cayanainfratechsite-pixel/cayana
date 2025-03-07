// File: app/layout.tsx (or wherever your global RootLayout is located)
import "./globals.css";
import { Maven_Pro } from "next/font/google";
import ConditionalLayout from "@/components/ConditionalLayout";

const mavenPro = Maven_Pro({
  subsets: ["latin"],
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
        <link rel="icon" href="/images/fav.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/fav.png" />
      </head>

      <body className={mavenPro.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
