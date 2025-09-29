"use client";

import { NextIntlClientProvider } from "next-intl";
import { useLocale, useMessages } from "next-intl";
import { useEffect, useState } from "react";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialLocale = useLocale();
  const initialMessages = useMessages();
  const [locale, setLocale] = useState(initialLocale);
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    const handler = (event: CustomEvent) => {
      if (event.detail?.locale && event.detail?.messages) {
        setLocale(event.detail.locale);
        setMessages(event.detail.messages);
      }
    };
    window.addEventListener("next-intl-messages", handler as EventListener);
    return () => {
      window.removeEventListener(
        "next-intl-messages",
        handler as EventListener
      );
    };
  }, []);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
