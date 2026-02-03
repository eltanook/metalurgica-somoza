"use client"

import Link from "next/link"
import { Play, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const videoItems = [
  {
    id: 1,
    title: "Fresadora CNC de alta precisión",
    description: "Nuestra fresadora CNC permite fabricar piezas de alta precisión en metales y plásticos. Ideal para componentes con tolerancias ajustadas y terminaciones limpias. Trabajamos con diversos materiales adaptándonos a las necesidades específicas de cada proyecto industrial.",
    features: ["Tolerancias de 0.01mm", "Metales y plásticos", "Terminación de superficie"],
  },
  {
    id: 2,
    title: "Torno CNC para producción en serie",
    description: "Con nuestros tornos CNC mecanizamos piezas cilíndricas tanto en producción unitaria como en serie. Fabricamos pistones, bujes, cuplas, ejes y componentes especiales con la máxima precisión y repetibilidad.",
    features: ["Producción unitaria y en serie", "Pistones y bujes", "Ejes y cuplas"],
  },
  {
    id: 3,
    title: "Soldadura MIG y TIG especializada",
    description: "Ofrecemos servicios de soldadura MIG, TIG y de acero inoxidable adaptados a cada necesidad. Fabricamos estructuras a medida, componentes de herrería, soportes, bastidores y piezas especiales para proyectos industriales.",
    features: ["Soldadura MIG/TIG", "Acero inoxidable", "Estructuras a medida"],
  },
  {
    id: 4,
    title: "Control de calidad dimensional",
    description: "Cada pieza pasa por un estricto control de calidad dimensional. Utilizamos instrumentos de medición de precisión para verificar que todos los componentes cumplan con las especificaciones requeridas por nuestros clientes.",
    features: ["Instrumentos de precisión", "Verificación dimensional", "Certificación de calidad"],
  },
]

export function VideosAlternatingSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              Nuestro proceso
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance uppercase tracking-wide">
              Tecnología en acción
            </h2>
          </div>
        </ScrollAnimation>

        {/* Alternating Videos */}
        <div className="space-y-16 md:space-y-24">
          {videoItems.map((item, index) => (
            <ScrollAnimation key={item.id} direction={index % 2 === 0 ? "left" : "right"} delay={100}>
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Video */}
                <div className="aspect-video bg-card border border-border rounded-lg overflow-hidden relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Play className="h-6 w-6 text-accent ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="sm">
                      <Link href="/contacto">
                        Enviar mensaje
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="bg-transparent">
                      <Link href="/servicios">
                        Ver servicios
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
