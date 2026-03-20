"use client"

import Link from "next/link"
import { ArrowRight, Cog, CircleDot, Factory, Wrench, Flame, MessageCircle } from "lucide-react"
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
            backgroundImage: "url('/images/cemrecan-yurtman-MU2wR8smaO4-unsplash.webp')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/50 dark:bg-background/80" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="container relative mx-auto px-4 py-20">
          <ScrollAnimation direction="up">
            <div className="text-center">
              <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                Nuestros servicios
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 text-balance uppercase tracking-wide">
                Soluciones industriales completas
              </h1>
              {/* Animated accent hr */}
              <div className="w-24 h-1 bg-accent mx-auto mb-6 animate-pulse" />
              <p className="text-foreground/75 dark:text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
                Ofrecemos una amplia gama de servicios de mecanizado y fabricación para satisfacer las necesidades de su industria.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Services Grid — 5 service cards + 1 CTA card */}
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

          {/* 6th card: CTA — accent-styled */}
          <ScrollAnimation direction="up" delay={500}>
            <div className="relative bg-accent/10 border-2 border-accent/40 rounded-lg p-6 hover:border-accent transition-colors group flex flex-col h-full overflow-hidden">
              {/* Subtle pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
              <div className="relative flex flex-col flex-1">
                <MessageCircle className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  ¿Necesita algo diferente?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  Trabajamos con todo tipo de proyectos industriales a medida. Consultenos y encontraremos la solución adecuada para su necesidad específica.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Proyectos a medida", "Respuesta rápida", "Presupuesto sin cargo", "Asesoramiento técnico"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-auto">
                  <Link href="/contacto">
                    Contactar ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
