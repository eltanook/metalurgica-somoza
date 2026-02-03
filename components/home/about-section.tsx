"use client"

import Link from "next/link"
import { ArrowRight, Cog, Wrench, Factory, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

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
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <ScrollAnimation direction="left">
            <div>
              <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                Sobre nosotros
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance uppercase tracking-wide">
                Precisión, compromiso y respuesta ágil
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Metalúrgica Somoza es una empresa familiar con más de 65 años de experiencia. Desde nuestro taller trabajamos para industrias que buscan calidad y atención personalizada.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Utilizamos tecnología CNC y desarrollamos soluciones adaptadas a cada cliente. Acompañamos tanto a grandes empresas como a pymes que requieren mecanizados complejos.
              </p>
              <Button asChild>
                <Link href="/nosotros">
                  Conocer más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.title} direction="right" delay={index * 100}>
                <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors h-full">
                  <feature.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
