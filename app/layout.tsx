import type { Metadata } from "next";
import {JetBrains_Mono  } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-jetbrains"
});

export const metadata: Metadata = {
  title: "EOTC Community",
  description: "EOTC Community - A platform for Ethiopian Orthodox Tewahedo Church community members  to connect and share.",
  icons: {
    icon: "icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className={jetBrainsMono.variable}>
      <body>{children}</body>
    </html>
  );
}