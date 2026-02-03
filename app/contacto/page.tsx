import { ContactFormSection } from "@/components/contacto/contact-form-section"
import { MapSection } from "@/components/contacto/map-section"

export const metadata = {
  title: "Contacto y Cotizaciones - Taller Mecanizado CNC Villa Luro, CABA",
  description: "Contáctenos para cotizaciones sin cargo. Respuesta 24/48hs. Atención personalizada en Villa Luro, Buenos Aires. WhatsApp: +54 9 11 5563-2312 | Email: metalurgicasomoza@gmail.com. Servimos AMBA y zonas industriales.",
  keywords: ['cotizacion mecanizado cnc', 'presupuesto fresado cnc', 'contacto taller metalurgico', 'metalurgica villa luro contacto', 'whatsapp mecanizado', 'cotizacion sin cargo'],
  openGraph: {
    title: "Contacto - Cotizaciones Sin Cargo",
    description: "Hablemos de su proyecto. Respuesta rápida y atención personalizada.",
  }
}

export default function ContactoPage() {
  return (
    <>
      <ContactFormSection />
      <MapSection />
    </>
  )
}
