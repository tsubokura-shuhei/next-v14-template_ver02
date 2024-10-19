import type { Metadata } from "next";
import "ress";
import "@/app/styles/globals.css";
import styles from "./styles/main.module.scss";

import { notoSansJP } from "./fonts/fonts";
import Header from "./components/layout/header/page";
import Footer from "./components/layout/footer/page";

// const geistSans = localFont({
//   src: "./public/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./public/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

//Googleフォント

//Meta情報
export const metadata: Metadata = {
  title: "ポイントサイト",
  description:
    "ポイントの総合サイトです。全国のポイントが貯まる・使えるお店のクーポンやキャンペーンなどのお得情報が満載。ゲームやプレゼントでポイントが貯まります。貯まったポイントを様々な商品に交換もできます。",
  keywords: ["ポイント", "ポイントカード", "モバイルカード"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "http://point.jp/",
    images: "/images/ogp.jpg",
    siteName: "ポイントサイト",
    title: "ポイントサイト",
    description:
      "ポイントの総合サイトです。全国のポイントが貯まる・使えるお店のクーポンやキャンペーンなどのお得情報が満載。ゲームやプレゼントでポイントが貯まります。貯まったポイントを様々な商品に交換もできます。",
  },
  twitter: {
    card: "summary_large_image",
  },
  facebook: {
    appId: "010101010101010",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className={styles.wrapper}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
