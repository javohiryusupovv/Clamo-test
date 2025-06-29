import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clamo – Litsenziyalash va Akkreditatsiyalash Markazi",
  description:
    "Clamo — litsenziyalash va akkreditatsiyalash bo‘yicha xizmatlar ko‘rsatadigan davlat muassasasi. Ta'lim, sog‘liqni saqlash va boshqa sohalarda yuridik shaxslarni rasmiy ro‘yxatdan o‘tkazish va sifatini baholashga doir barcha jarayonlarni yengil va shaffof tarzda amalga oshiring.",
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
  icons: {icon: "/HeadLogo.svg"},
  openGraph: {
    title: "Clamo – Litsenziyalash va Akkreditatsiyalash Markazi",
    description:
      "Davlat litsenziya va akkreditatsiya jarayonlarini raqamlashtirish va soddalashtirishga yo‘naltirilgan platforma. Clamo orqali muassasangizni tez, qulay va shaffof tarzda ro‘yxatdan o‘tkazing.",
    url: "https://clamodone.vercel.app",
    siteName: "Clamo",
    images: [
      {
        url: "/og-image.png", // yoki to‘liq URL: https://yourdomain.com/og-image.png
        width: 1200,
        height: 630,
        alt: "Clamo – Litsenziya va Akkreditatsiya platformasi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clamo – Litsenziyalash va Akkreditatsiyalash Markazi",
    description:
      "Litsenziya va akkreditatsiyani Clamo orqali tez, oson va ishonchli tarzda oling.",
    images: ["/og-image.png"],
  },
};



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
