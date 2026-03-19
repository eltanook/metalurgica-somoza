import { ServicesCardsSection } from "@/components/servicios/services-cards-section"
// import { ServicesVideosSection } from "@/components/servicios/services-videos-section" // HIDDEN: awaiting real video content (en acción). CTA "Proyecto en mente" movido a inicio.

export const metadata = {
  title: "Servicios de Mecanizado CNC, Fresado y Torneado Industrial | Metalúrgica Somoza",
  description: "Fresado CNC 3/4/5 ejes, torneado CNC alta precisión, soldadura MIG/TIG, rectificado industrial y fabricación de dispositivos en Versalles, CABA. Atendemos industria automotriz y metalmecánica. Cotización en 24hs.",
  keywords: ['fresado cnc versalles', 'torneado cnc caba', 'soldadura industrial', 'mecanizado precision', 'metalmecanicas', 'repuestos industriales', 'soldadura mig tig', 'rectificado industrial', 'fabricacion piezas especiales argentina'],
  openGraph: {
    title: "Servicios de Mecanizado CNC y Metalmecánica",
    description: "Fresado, torneado, soldadura y fabricación de dispositivos industriales. Especialistas en Versalles, CABA.",
  }
}

export default function ServiciosPage() {
  return (
    <>
      <ServicesCardsSection />
      {/* <ServicesVideosSection /> HIDDEN: awaiting real video content */}
    </>
  )
}

