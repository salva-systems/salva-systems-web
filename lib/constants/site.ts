export const DEFAULT_LOCALE = "es" as const;
export const SUPPORTED_LOCALES = ["es", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const COMPANY = {
  name: "Salva Systems",
  legalName: "Salva Systems S.L.",
  domain: "https://salvasystems.com",
  email: "contacto@salvasystems.com",
  phone: "+34 900 123 456",
  city: "Madrid",
};
