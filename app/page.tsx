import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
// import { PortfolioSection } from "@/components/home/portfolio-section" // HIDDEN: awaiting real portfolio images
// import { VideosSection } from "@/components/home/videos-section" // HIDDEN: awaiting real video content
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { MachinesSection } from "@/components/nosotros/machines-section"
import { ProjectCTASection } from "@/components/home/project-cta-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Metalúrgica Somoza | Mecanizado CNC de Mantenimiento y Precisión en CABA',
  description: 'Taller metalúrgico especializado en mecanizado CNC, fresado y torneado industrial en Versalles, CABA. Más de 65 años fabricando piezas especiales para grandes industrias. Calidad y rapidez garantizada.',
  keywords: ['metalúrgica versalles', 'metalmecanicas', 'mecanizado industrial argentina', 'taller de mecanizado caba', 'piezas de precisión metalúrgica', 'mecanizado versalles', 'metalurgica caba'],
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <PortfolioSection /> HIDDEN: awaiting real portfolio images */}
      {/* <VideosSection /> HIDDEN: awaiting real video content */}
      <MachinesSection />
      <ProjectCTASection />
      <TestimonialsSection />
    </>
  )
}

