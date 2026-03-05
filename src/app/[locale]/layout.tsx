import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { metadataContent } from "constants/page";
import YandexMetrica from "@/components/YandexMetrica";
import StructuredData from "@/components/StructuredData";

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

  const baseUrl = "https://clamo.uz";
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    title: t.title,
    description: t.description,
    keywords: [
      "CLAMO",
      "litsenziya",
      "akkreditatsiya",
      "davlat muassasasi",
      "ruxsatnoma",
      "ta'lim litsenziyasi",
      "sog'liqni saqlash akkreditatsiyasi",
      "Uzbekistan",
      "litsenziyalash markazi",
      "akkreditatsiya qilish",
      "лицензирование",
      "аккредитация",
      "licensing",
      "accreditation",
      "медицинская лицензия",
      "образовательная лицензия",
      "медицинская аккредитация"
    ],
    authors: [{ name: "CLAMO" }],
    creator: "CLAMO",
    publisher: "CLAMO",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.png", type: "image/png" },
        { url: "/favicon.png", type: "image/x-icon" },
      ],
      shortcut: "/favicon.png",
      apple: "/apple-touch-icon.png"
    },

    manifest: "/manifest.json",
    alternates: {
      canonical: currentUrl,
      languages: {
        'uz': `${baseUrl}/uz`,
        'ru': `${baseUrl}/ru`,
        'en': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.ogDescription,
      url: currentUrl,
      siteName: "CLAMO",
      locale: locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "CLAMO – Litsenziya va Akkreditatsiya platformasi",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.twitterDescription,
      images: [`${baseUrl}/og-image.png`],
      creator: "@CLAMO_uz",
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
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
      <head>
        <StructuredData 
          type="Organization" 
          data={{
            name: "CLAMO",
            description: "Licensing and Accreditation Center",
            url: "https://clamo.uz",
            logo: "https://clamo.uz/HeadLogo.svg",
            phone: "+998-55-514-30-03",
            email: "clamosocial@gmail.com",
            address: "улица Мирзакалон Исмоилий, дом 2A",
            socialMedia: [
              "https://t.me/CLAMO_uz",
              "https://instagram.com/clamo.uz",
              "https://facebook.com/CLAMORasmiy"
            ]
          }} 
        />
        <StructuredData 
          type="WebSite" 
          data={{
            name: "CLAMO",
            url: "https://clamo.uz",
            description: "Licensing and Accreditation Center"
          }} 
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
          <YandexMetrica ymId={process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || "104200055"} />
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ToastContainer />
            {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
