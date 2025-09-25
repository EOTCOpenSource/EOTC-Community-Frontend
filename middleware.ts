import createIntlMiddleware from "next-intl/middleware";

export const middleware = createIntlMiddleware({
  locales: ["en", "am"],
  defaultLocale: "en",
  // localeDetection: true, // to detect current language first
});

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"], // apply to all pages except API/_next
};
