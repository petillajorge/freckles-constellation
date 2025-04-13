export type Locale = (typeof locales)[number];

export const locales = ["en","ru","es"] as const;
export const defaultLocale: Locale = "en";