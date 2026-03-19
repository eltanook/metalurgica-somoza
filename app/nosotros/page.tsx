import { HistoryHeaderSection, HistoryTimelineSection } from "@/components/nosotros/history-section"
import { MachinesSection } from "@/components/nosotros/machines-section"
import { AboutTextSection } from "@/components/nosotros/about-text-section"

export const metadata = {
  title: "65 Años de Experiencia en Mecanizado CNC | Nuestra Historia",
  description: "Empresa familiar metalúrgica desde 1959. Más de 65 años fabricando piezas especiales para Ford, Toyota, Galileo Technologies y +100 empresas. Conoce nuestra trayectoria, maquinaria CNC y capacidades de fabricación en Villa Luro, CABA.",
  keywords: ['empresa familiar metalurgica', '65 anos experiencia', 'historia metalurgica somoza', 'taller tradicional buenos aires', 'maquinaria cnc', 'capacidades fabricacion'],
  openGraph: {
    title: "65 Años de Tradición y Tecnología - Metalúrgica Somoza",
    description: "Desde 1959 entregando soluciones industriales de calidad. Conoce nuestra historia.",
  }
}

export default function NosotrosPage() {
  return (
    <>
      {/* 1. Header with bg image + stats */}
      <HistoryHeaderSection />
      {/* 2. Quiénes somos — BETWEEN header and timeline */}
      <AboutTextSection />
      {/* 3. Timeline de trayectoria */}
      <HistoryTimelineSection />
      {/* 4. Nuestras máquinas */}
      <MachinesSection />
    </>
  )
}
