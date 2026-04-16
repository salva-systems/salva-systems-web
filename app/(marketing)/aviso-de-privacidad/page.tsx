import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { buildMetadata } from "@/lib/content/site";

export const metadata: Metadata = buildMetadata(
  "Aviso de Privacidad",
  "Cómo Salva Systems recopila, usa y protege datos personales en su sitio y procesos comerciales.",
  "/aviso-de-privacidad"
);

export default function PrivacyNoticePage() {
  return (
    <LegalPage
      title="Aviso de Privacidad"
      intro="En Salva Systems tratamos la información con criterio, proporcionalidad y respeto. Este aviso resume cómo recopilamos, usamos y protegemos datos personales cuando alguien navega en nuestro sitio, nos contacta o solicita una propuesta."
      updatedAt="16 de abril de 2026"
      sections={[
        {
          title: "Responsable",
          paragraphs: [
            "Salva Systems es responsable del tratamiento de los datos personales recabados a través de este sitio y de los canales comerciales relacionados.",
            "Para temas de privacidad, derechos de acceso, rectificación, cancelación u oposición, puedes escribir a contacto@salvasystems.com.",
          ],
        },
        {
          title: "Qué datos podemos recopilar",
          bullets: [
            "Datos de identificación y contacto, como nombre, correo electrónico, teléfono y empresa.",
            "Información comercial relacionada con tu solicitud, proyecto, operación o necesidad tecnológica.",
            "Mensajes enviados por formularios, correo electrónico, WhatsApp u otros canales de contacto.",
            "Información técnica básica derivada del uso normal del sitio, cuando sea necesaria para seguridad, funcionamiento o medición.",
          ],
        },
        {
          title: "Para qué usamos la información",
          bullets: [
            "Responder solicitudes, analizar necesidades y dar seguimiento comercial.",
            "Preparar propuestas, cotizaciones, llamadas de descubrimiento y documentación previa al servicio.",
            "Prestar servicios, coordinar proyectos, soporte, mantenimiento o comunicación operativa.",
            "Mejorar el sitio, la experiencia del usuario, la seguridad y la calidad del servicio.",
            "Enviar información comercial o contenidos relacionados cuando exista consentimiento o una relación previa compatible.",
          ],
        },
        {
          title: "Con quién podríamos compartir datos",
          paragraphs: [
            "Podemos apoyarnos en proveedores tecnológicos, de infraestructura, análisis, comunicación, pagos, hosting, CRM, despliegue, monitoreo o soporte, únicamente cuando sea necesario para operar el sitio, dar seguimiento a solicitudes o prestar nuestros servicios.",
            "Entre estas categorías pueden intervenir proveedores de hosting, nube, bases de datos, correo, analítica, videollamadas, calendarios, pasarelas de pago, facturación y herramientas de productividad.",
          ],
        },
        {
          title: "Conservación y protección",
          paragraphs: [
            "Conservamos la información solo por el tiempo razonablemente necesario para cumplir las finalidades informadas, atender relaciones comerciales, dar seguimiento a proyectos, cumplir obligaciones aplicables y mantener evidencias básicas de operación y consentimiento.",
            "Aplicamos medidas administrativas, técnicas y organizativas razonables para proteger la información frente a pérdida, uso indebido o acceso no autorizado.",
          ],
        },
        {
          title: "Tus derechos",
          paragraphs: [
            "Puedes solicitar acceso, rectificación, cancelación u oposición respecto de tus datos personales, así como limitar su uso o revocar consentimientos cuando proceda.",
            "Para ejercer estos derechos, escríbenos a contacto@salvasystems.com indicando tu nombre, medio de contacto, relación con Salva Systems y el detalle de tu solicitud.",
          ],
        },
        {
          title: "Menores de edad",
          paragraphs: [
            "Este sitio no está dirigido principalmente a menores de edad. Cuando legalmente corresponda, cualquier tratamiento de datos de menores deberá contar con la autorización y base legal aplicable.",
          ],
        },
        {
          title: "Cambios a este aviso",
          paragraphs: [
            "Salva Systems podrá actualizar este aviso cuando cambien sus procesos, herramientas, servicios o requerimientos legales. La versión vigente será la publicada en esta misma página.",
          ],
        },
      ]}
      note={
        <>
          Este texto funciona como aviso público base para el sitio. Para operaciones más sensibles,
          contratos empresariales, salud, bases de datos de terceros o tratamiento de datos por cuenta
          de clientes, conviene complementarlo con documentos contractuales específicos.
        </>
      }
    />
  );
}
