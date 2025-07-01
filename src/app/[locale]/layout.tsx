import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { metadataContent } from "constants/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{locale: string }>}) {
  const {locale} = await params
  const t = metadataContent[locale as "uz" | "ru" | "en"] ?? metadataContent.uz;

  return {
    title: t.title,
    description: t.description,
    keywords: [
      "Clamo",
      "litsenziya",
      "akkreditatsiya",
      "davlat muassasasi",
      "ruxsatnoma",
      "ta'lim litsenziyasi",
      "sog‘liqni saqlash akkreditatsiyasi",
      "Uzbekistan",
      "litsenziyalash markazi",
      "akkreditatsiya qilish",
    ],
    authors: [{ name: "Clamo" }],
    creator: "Clamo",
    icons: { icon: "/HeadLogo.svg" },
    openGraph: {
      title: t.title,
      description: t.ogDescription,
      url: "https://clamotest.vercel.app",
      siteName: "Clamo",
      images: [
        {
          url: "https://clamotest.vercel.app/og-image.png",
          width: 1200,
          height: 630,
          alt: "Clamo – Litsenziya va Akkreditatsiya platformasi",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.twitterDescription,
      images: ["https://clamotest.vercel.app/og-image.png"],
    },
  };
}




export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{locale: string}>
}>) {

  const locale =  (await params).locale
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ToastContainer />
            {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
