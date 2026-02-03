import { ServicesCardsSection } from "@/components/servicios/services-cards-section"
import { ServicesVideosSection } from "@/components/servicios/services-videos-section"

export const metadata = {
  title: "Servicios de Mecanizado CNC, Fresado y Torneado Industrial | Metalúrgica Somoza",
  description: "Fresado CNC 3/4/5 ejes, torneado CNC alta precisión, soldadura MIG/TIG, rectificado industrial y fabricación de dispositivos. Atendemos industria automotriz, oil & gas y manufactura en AMBA. Cotización sin cargo 24/48hs.",
  keywords: ['fresado cnc', 'torneado cnc', 'soldadura industrial', 'mecanizado precision', 'dispositivos montaje', 'repuestos industriales', 'soldadura mig tig', 'rectificado industrial', 'fabricacion piezas especiales'],
  openGraph: {
    title: "Servicios de Mecanizado CNC Profesional",
    description: "Fresado, torneado, soldadura y fabricación de dispositivos industriales. +65 años de experiencia.",
  }
}

export default function ServiciosPage() {
  return (
    <>
      <ServicesCardsSection />
      <ServicesVideosSection />
    </>
  )
}
