"use client"

import Link from "next/link"
import { ArrowRight, Cog, CircleDot, Factory, Wrench, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const services = [
  {
    icon: Cog,
    title: "Fresado CNC",
    description: "Fabricamos piezas de alta precisión mediante fresado CNC. Trabajamos con metales y plásticos de forma personalizada, garantizando terminaciones limpias y tolerancias ajustadas.",
    features: [
      "Piezas de alta precisión",
      "Metales y plásticos",
      "Tolerancias ajustadas",
      "Terminaciones limpias",
    ],
  },
  {
    icon: CircleDot,
    title: "Torneado CNC",
    description: "Contamos con tornos CNC para mecanizar piezas cilíndricas, tanto en producción unitaria como en serie. Ideal para fabricar pistones, bujes, cuplas, ejes y componentes especiales.",
    features: [
      "Producción unitaria y en serie",
      "Pistones y bujes",
      "Cuplas y ejes",
      "Componentes especiales",
    ],
  },
  {
    icon: Factory,
    title: "Dispositivos para líneas de montaje",
    description: "Desarrollamos dispositivos a medida para plantas de montaje automotriz e industrial. Funcionalidad adaptada al puesto de trabajo y alta durabilidad.",
    features: [
      "Diseño personalizado",
      "Montaje automotriz",
      "Alta durabilidad",
      "Funcionalidad adaptada",
    ],
  },
  {
    icon: Wrench,
    title: "Herramientas y repuestos industriales",
    description: "Mecanizamos todo tipo de repuestos bajo plano o muestra: filtros, conectores roscados, adaptadores, bridas, bloques. Ideal para mantenimiento y reparaciones urgentes.",
    features: [
      "Fabricación bajo plano",
      "Repuestos bajo muestra",
      "Filtros y conectores",
      "Reparaciones urgentes",
    ],
  },
  {
    icon: Flame,
    title: "Soldadura especializada",
    description: "Ofrecemos servicios de soldadura MIG, TIG y de acero inoxidable, adaptados a las necesidades de cada cliente. Fabricamos estructuras a medida, soportes, bastidores y piezas especiales.",
    features: [
      "Soldadura MIG/TIG",
      "Acero inoxidable",
      "Estructuras a medida",
      "Bastidores y soportes",
    ],
  },
]

export function ServicesCardsSection() {
  return (
    <section className="relative">
      {/* Header with background */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />

        {/* Grid pattern with cyan color and horizontal blur fade */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Horizontal blur fade (vignette on sides) */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,22,40,0.9)_0%,transparent_15%,transparent_85%,rgba(10,22,40,0.9)_100%)] dark:bg-[linear-gradient(90deg,rgba(10,22,40,0.9)_0%,transparent_15%,transparent_85%,rgba(10,22,40,0.9)_100%)]" />
        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="container relative mx-auto px-4 py-20">
          <ScrollAnimation direction="up">
            <div className="text-center">
              <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                Nuestros servicios
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance uppercase tracking-wide">
                Soluciones industriales completas
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
                Ofrecemos una amplia gama de servicios de mecanizado y fabricación para satisfacer las necesidades de su industria.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={service.title} direction="up" delay={index * 100}>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors group flex flex-col h-full">
                <service.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full mt-auto bg-transparent">
                  <Link href="/contacto">
                    Solicitar cotización
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section >
  )
}
