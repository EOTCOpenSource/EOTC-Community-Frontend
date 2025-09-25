import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
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

// NOTE: This should live inside `app/[locale]/layout.tsx`
export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={jetBrainsMono.variable}>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
