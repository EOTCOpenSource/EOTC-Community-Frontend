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

  // Client-side language switching
  const switchLocale = async (newLocale: string) => {
    if (newLocale === locale) return;

    // Dynamically import new messages
    const messages = (await import(`../../messages/${newLocale}.json`)).default;

    // Dispatch event to update RootLayoutClient
    window.dispatchEvent(
      new CustomEvent("next-intl-messages", {
        detail: { locale: newLocale, messages },
      })
    );

    setLocale(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`; // optional: persist
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
