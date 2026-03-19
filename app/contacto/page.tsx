import { ContactFormSection } from "@/components/contacto/contact-form-section"
import { MapSection } from "@/components/contacto/map-section"

export const metadata = {
  title: "Contacto y Cotizaciones - Taller Mecanizado CNC Versalles, CABA",
  description: "Solicite su cotización de mecanizado CNC, fresado o torneado sin cargo. Respuesta en 24hs. Atención personalizada en Versalles, CABA. WhatsApp: +54 9 11 5563-2312. Servimos a toda Argentina.",
  keywords: ['cotizacion mecanizado cnc argentina', 'presupuesto fresado cnc', 'contacto taller metalurgico versalles', 'metalurgica caba contacto', 'whatsapp mecanizado', 'cotizacion metalmecanica'],
  openGraph: {
    title: "Contacto - Cotizaciones Sin Cargo | Metalúrgica Somoza",
    description: "Hablemos de su proyecto de mecanizado. Respuesta rápida y atención personalizada en CABA.",
  },
  alternates: {
    canonical: '/contacto',
  },
}

export default function ContactoPage() {
  return (
    <>
      <ContactFormSection />
      <MapSection />
    </>
  )
}
