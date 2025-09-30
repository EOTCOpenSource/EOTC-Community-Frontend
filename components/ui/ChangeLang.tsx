"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { LanguagesIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./dropdown-menu";

export default function ChangeLang() {
  const currentLocale = useLocale();
  const [locale, setLocale] = React.useState(currentLocale);

  React.useEffect(() => {
    setLocale(currentLocale);
  }, [currentLocale]);

  const switchLocale = async (newLocale: string) => {
    if (newLocale === locale) return;

    try {
      const messages = (await import(`../../messages/${newLocale}.json`)).default;

      setLocale(newLocale);

      window.dispatchEvent(
        new CustomEvent("next-intl-messages", {
          detail: { locale: newLocale, messages },
        })
      );

      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      
    } catch (error) {
      console.error("Error loading locale messages:", error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <LanguagesIcon
          width={24}
          height={24}
          className="hover:opacity-80 transition cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLocale("en")}>
          {locale === "en" ? "✓ " : ""} English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("am")}>
          {locale === "am" ? "✓ " : ""} አማርኛ
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}