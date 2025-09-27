export const routing = {
  locales: ['en', 'am'],
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'never' as const, // <-- add 'as const' to ensure correct type!
};