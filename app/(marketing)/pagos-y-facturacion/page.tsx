import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { buildMetadata } from "@/lib/content/site";

export const metadata: Metadata = buildMetadata(
  "Pagos y Facturación",
  "Lineamientos generales de pagos, anticipos, cancelaciones, reembolsos y facturación en Salva Systems.",
  "/pagos-y-facturacion"
);

export default function PaymentsPage() {
  return (
    <LegalPage
      title="Pagos y Facturación"
      intro="En Salva Systems cada proyecto se aterriza por propuesta y alcance. Esta política resume los criterios generales que usamos para pagos, anticipos, cancelaciones, reembolsos y facturación."
      updatedAt="16 de abril de 2026"
      sections={[
        {
          title: "Esquema comercial",
          paragraphs: [
            "No manejamos precios públicos fijos para todos los servicios. Cada proyecto se cotiza según complejidad, alcance, tiempos, riesgos, nivel técnico y forma de colaboración.",
          ],
        },
        {
          title: "Métodos de pago",
          bullets: [
            "Transferencia bancaria.",
            "Tarjeta u otros medios autorizados cuando Salva Systems los habilite mediante proveedores especializados.",
            "En su caso, otros esquemas acordados expresamente por escrito.",
          ],
        },
        {
          title: "Anticipos y entregables",
          paragraphs: [
            "Los proyectos suelen requerir anticipo para iniciar. Los pagos posteriores pueden vincularse a etapas, hitos, entregables, periodos de soporte o esquemas mensuales, según se defina en la propuesta.",
            "Salva Systems puede suspender avances, entregas o accesos cuando existan pagos vencidos.",
          ],
        },
        {
          title: "Cancelaciones y reembolsos",
          bullets: [
            "No hay reembolso sobre trabajo ya ejecutado, horas ya invertidas ni entregables ya desarrollados.",
            "Si Salva Systems cancela un proyecto sin causa atribuible al cliente, podrá realizar el reembolso proporcional de lo no devengado.",
            "Cuando un proyecto se detiene por decisión del cliente, se liquidará lo efectivamente trabajado, comprometido o reservado hasta ese momento.",
            "Los productos digitales o accesos entregados no son reembolsables, salvo error atribuible a Salva Systems o disposición legal aplicable.",
          ],
        },
        {
          title: "Facturación",
          paragraphs: [
            "La facturación podrá solicitarse dentro de las 72 horas hábiles siguientes al pago o dentro del mismo mes calendario en que se haya realizado, lo que ocurra primero.",
            "El cliente es responsable de proporcionar datos fiscales correctos y completos. Cualquier corrección estará sujeta a viabilidad administrativa y a las disposiciones fiscales aplicables.",
          ],
        },
        {
          title: "Procesamiento y tiempos",
          paragraphs: [
            "Cuando intervengan bancos, pasarelas o plataformas externas, los tiempos de aplicación, validación, conciliación o confirmación pueden variar.",
            "Salva Systems no almacena datos completos de tarjetas bancarias cuando el procesamiento se realiza a través de terceros especializados.",
          ],
        },
      ]}
      note={
        <>
          Esta política resume criterios generales. Los términos económicos definitivos de cada relación
          se fijan por escrito en la propuesta, la cotización y los documentos del proyecto.
        </>
      }
    />
  );
}
