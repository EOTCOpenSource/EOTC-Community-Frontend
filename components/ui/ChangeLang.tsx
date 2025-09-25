"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { LanguagesIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = newLocale; // assumes routes are like /en/... or /am/...
    router.push(segments.join("/"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <LanguagesIcon
          width={24}
          height={24}
          className="hover:opacity-80 transition cursor-pointer"
        />
        {/* <span className="sr-only">Change language</span> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          {locale === "en" ? "✓ " : ""} English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("am")}>
          {locale === "am" ? "✓ " : ""} አማርኛ
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
