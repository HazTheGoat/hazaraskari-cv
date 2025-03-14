import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hazar Askari - Portfolio",
  description: "My life, my work, my portfolio",
  openGraph: {
    title: "Hazar Askari - Portfolio",
    description: "My life, my work, my portfolio",
    type: "website",
    locale: "no_NO",
    url: "https://www.hazaraskari.dev",
    images: [
      {
        url: "https://www.hazaraskari.dev/thumb.png",
        width: 800,
        height: 600,
        alt: "Hazar Askari",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
      <GoogleTagManager gtmId="GTM-5R73NZ4F" />
      <GoogleAnalytics gaId="G-G40KRJH5BN" />
    </html>
  );
}
