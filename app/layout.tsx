import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";

import { getLocale } from "next-intl/server";       

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "EOTC Community",
  description:
    "EOTC Community - A platform for Ethiopian Orthodox Tewahedo Church community members to connect and share.",
  icons: {
    icon: "icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = (await import(`../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={jetBrainsMono.variable}>
      <body>
        <RootLayoutClient initialLocale={locale} initialMessages={messages}>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}