"use client";

import * as React from "react";
import { NextIntlClientProvider } from "next-intl";
import { timeZone } from "../i18n/config";

export default function RootLayoutClient({
  children,
  initialLocale,
  initialMessages,
}: {
  children: React.ReactNode;
  initialLocale: string;
  initialMessages: Record<string, string>;
}) {
  const [locale, setLocale] = React.useState(initialLocale);
  const [messages, setMessages] = React.useState(initialMessages);

  React.useEffect(() => {
    const handleLocaleChange = (event: CustomEvent) => {
      const { locale: newLocale, messages: newMessages } = event.detail;
      if (newLocale && newMessages) {
        setLocale(newLocale);
        setMessages(newMessages);

        document.documentElement.lang = newLocale;
      }
    };

    const eventHandler = (e: Event) => handleLocaleChange(e as CustomEvent);

    window.addEventListener("next-intl-messages", eventHandler);

    return () => {
      window.removeEventListener("next-intl-messages", eventHandler);
    };
  }, []);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={timeZone}
    >
      {children}
    </NextIntlClientProvider>
  );
}
