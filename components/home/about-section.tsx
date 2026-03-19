"use client"

import Link from "next/link"
import { ArrowRight, Cog, Wrench, Factory, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ServicesCarouselSection } from "@/components/home/services-carousel-section"

const features = [
  {
    icon: Cog,
    title: "Mecanizado CNC",
    description: "Fresado y torneado de alta precisión con tecnología de última generación.",
  },
  {
    icon: Wrench,
    title: "Repuestos industriales",
    description: "Fabricación de repuestos bajo plano o muestra para mantenimiento urgente.",
  },
  {
    icon: Factory,
    title: "Dispositivos de montaje",
    description: "Diseño y fabricación de dispositivos para líneas de montaje automotriz.",
  },
  {
    icon: Shield,
    title: "Soldadura especializada",
    description: "Servicios de soldadura MIG, TIG y acero inoxidable a medida.",
  },
]

export function AboutSection() {
  return (
    <section className="py-14 md:py-28 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top row: left text + right carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
          {/* Content */}
          <ScrollAnimation direction="left">
            <div className="w-full">
              <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                Sobre nosotros
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance uppercase tracking-wide">
                Precisión, compromiso y respuesta ágil
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Metalúrgica Somoza es una empresa familiar con más de 65 años de experiencia. Desde nuestro taller trabajamos para industrias que buscan calidad y atención personalizada.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Utilizamos tecnología CNC y desarrollamos soluciones adaptadas a cada cliente. Acompañamos tanto a grandes empresas como a pymes que requieren mecanizados complejos.
              </p>
              <div className="flex flex-row flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contacto">
                    Solicitar presupuesto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent">
                  <Link href="/servicios">
                    Ver servicios
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right: Services carousel — taller cards */}
          <ScrollAnimation direction="right">
            <ServicesCarouselSection embedded />
          </ScrollAnimation>
        </div>

        {/* Bottom row: 4 features — icon left, text right */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} direction="up" delay={index * 100}>
              <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors h-full flex items-start gap-4">
                <feature.icon className="h-8 w-8 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-foreground font-semibold mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
