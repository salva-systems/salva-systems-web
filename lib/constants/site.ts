export const DEFAULT_LOCALE = "es" as const;
export const SUPPORTED_LOCALES = ["es", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const COMPANY = {
  name: "Salva Systems",
  legalName: "Salva Systems",
  domain: "https://salvasystems.com",
  email: "contacto@salvasystems.com",
  phone: "+52 833 367 4769",
  city: "Tampico · Monterrey",
  whatsappUrl: "https://wa.me/528333674769?text=Hola,%20quiero%20analizar%20mi%20negocio%20con%20Salva%20Systems",
};
