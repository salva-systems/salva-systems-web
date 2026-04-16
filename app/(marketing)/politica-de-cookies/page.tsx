import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { buildMetadata } from "@/lib/content/site";

export const metadata: Metadata = buildMetadata(
  "Política de Cookies",
  "Información sobre el uso de cookies y tecnologías similares en el sitio de Salva Systems.",
  "/politica-de-cookies"
);

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      intro="Este sitio puede utilizar cookies y tecnologías similares para funcionar correctamente, mejorar la experiencia del usuario y entender de forma general cómo se usa la plataforma."
      updatedAt="16 de abril de 2026"
      sections={[
        {
          title: "Qué son las cookies",
          paragraphs: [
            "Las cookies son pequeños archivos que pueden almacenarse en tu dispositivo al visitar un sitio web. Sirven para recordar preferencias, habilitar funciones y, en algunos casos, medir interacción o rendimiento.",
          ],
        },
        {
          title: "Qué tipos podemos usar",
          bullets: [
            "Cookies necesarias para el funcionamiento técnico básico del sitio.",
            "Cookies de rendimiento o analítica para entender uso general, tráfico y comportamiento agregado.",
            "Cookies funcionales para recordar ciertas preferencias o facilitar la experiencia.",
            "Cookies publicitarias o de remarketing únicamente cuando lleguen a integrarse y corresponda su uso.",
          ],
        },
        {
          title: "Herramientas de terceros",
          paragraphs: [
            "Dependiendo de la evolución del sitio, algunas cookies pueden ser establecidas por herramientas de hosting, analítica, rendimiento, medición, formularios, publicidad o integraciones externas.",
            "La lista específica de herramientas puede cambiar con el tiempo conforme evolucionen nuestros procesos, campañas o necesidades técnicas.",
          ],
        },
        {
          title: "Cómo gestionarlas",
          paragraphs: [
            "Puedes aceptar, rechazar o limitar determinadas cookies no esenciales desde el banner o mecanismo de consentimiento disponible, cuando aplique.",
            "También puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que esto puede afectar ciertas funciones del sitio.",
          ],
        },
        {
          title: "Actualizaciones",
          paragraphs: [
            "Salva Systems podrá actualizar esta política si incorpora nuevas herramientas, cambia la forma de medir el sitio o modifica sus prácticas tecnológicas.",
          ],
        },
      ]}
      note={
        <>
          Esta política está pensada para crecer con el sitio. Si después integras Google Analytics,
          Meta Pixel, Clarity, Hotjar u otras herramientas, solo habría que ampliar esta página y
          conectar el banner de consentimiento.
        </>
      }
    />
  );
}
