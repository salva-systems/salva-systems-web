import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { buildMetadata } from "@/lib/content/site";

export const metadata: Metadata = buildMetadata(
  "Términos y Condiciones",
  "Condiciones generales de uso del sitio web y de interacción comercial con Salva Systems.",
  "/terminos-y-condiciones"
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Términos y Condiciones"
      intro="Estas condiciones regulan el acceso y uso del sitio web de Salva Systems, así como el marco general de las interacciones comerciales iniciadas desde esta plataforma."
      updatedAt="16 de abril de 2026"
      sections={[
        {
          title: "Uso del sitio",
          paragraphs: [
            "Este sitio tiene fines informativos, comerciales y de contacto. Su uso implica aceptar estas condiciones y comprometerse a utilizarlo de forma lícita, responsable y compatible con su propósito.",
          ],
        },
        {
          title: "Propiedad intelectual",
          bullets: [
            "El contenido del sitio, incluyendo textos, estructura, diseño, identidad visual, interfaces, metodología y materiales propios, pertenece a Salva Systems o se utiliza con autorización.",
            "No está permitido copiar, reproducir, distribuir, extraer, hacer scraping, modificar o explotar el contenido sin autorización previa y por escrito.",
            "Las marcas, nombres comerciales, logotipos y signos distintivos mostrados en el sitio conservan la titularidad que legalmente les corresponda.",
          ],
        },
        {
          title: "Información y alcance",
          paragraphs: [
            "La información publicada en este sitio se presenta con fines generales de referencia. No constituye por sí misma una oferta vinculante, una auditoría formal ni una garantía de resultado específico.",
            "Completar un formulario, enviar un mensaje o solicitar información no obliga a Salva Systems a aceptar un proyecto, emitir propuesta ni iniciar relación contractual.",
          ],
        },
        {
          title: "Contratación de servicios",
          paragraphs: [
            "Cuando exista interés mutuo en colaborar, la contratación se formalizará mediante propuesta, cotización, contrato, alcance o documento equivalente.",
            "Los entregables, tiempos, pagos, propiedad intelectual, soporte y responsabilidades concretas se definirán por escrito en cada proyecto.",
          ],
        },
        {
          title: "Disponibilidad y terceros",
          paragraphs: [
            "Salva Systems puede modificar, actualizar, suspender o retirar contenido, funciones o servicios del sitio en cualquier momento.",
            "No garantizamos disponibilidad ininterrumpida del sitio ni ausencia absoluta de errores, especialmente cuando intervienen servicios, plataformas o infraestructuras de terceros.",
          ],
        },
        {
          title: "Limitación de responsabilidad",
          paragraphs: [
            "Salva Systems no será responsable por decisiones comerciales, técnicas o estratégicas tomadas exclusivamente con base en la información general publicada en este sitio.",
            "Tampoco será responsable por interrupciones, incompatibilidades, caídas o afectaciones derivadas exclusivamente de terceros, del uso inadecuado del sitio o de información incompleta proporcionada por el usuario.",
          ],
        },
        {
          title: "Jurisdicción",
          paragraphs: [
            "Estas condiciones se interpretan conforme a la legislación mexicana. Para cualquier controversia relacionada con el sitio, las partes se someten a la jurisdicción de los tribunales competentes de Monterrey, Nuevo León, salvo disposición legal aplicable en contrario.",
          ],
        },
      ]}
      note={
        <>
          Para proyectos reales, las condiciones definitivas de servicio no viven solo aquí: se aterrizan
          en propuesta, contrato y alcance específico por proyecto.
        </>
      }
    />
  );
}
