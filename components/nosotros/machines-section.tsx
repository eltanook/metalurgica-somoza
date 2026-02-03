"use client"

import Link from "next/link"
import { ArrowRight, Cog, CircleDot, Flame, Ruler, Wrench, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const machines = [
  {
    icon: Cog,
    name: "Fresadora CNC",
    description: "Mecanizado de piezas de alta precisión en 3 ejes.",
  },
  {
    icon: CircleDot,
    name: "Torno CNC",
    description: "Fabricación de piezas cilíndricas con tolerancias ajustadas.",
  },
  {
    icon: Flame,
    name: "Equipos de soldadura",
    description: "Soldadura MIG, TIG y de acero inoxidable.",
  },
  {
    icon: Ruler,
    name: "Instrumentos de medición",
    description: "Control dimensional de precisión certificado.",
  },
  {
    icon: Wrench,
    name: "Herramientas especiales",
    description: "Equipamiento para trabajos específicos.",
  },
  {
    icon: Settings,
    name: "Accesorios CNC",
    description: "Complementos para mecanizado especializado.",
  },
]

export function MachinesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              Equipamiento
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance uppercase tracking-wide">
              Nuestras máquinas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
              Contamos con tecnología CNC de última generación para garantizar la máxima precisión en cada trabajo.
            </p>
          </div>
        </ScrollAnimation>

        {/* Machines Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((machine, index) => (
            <ScrollAnimation key={machine.name} direction="up" delay={index * 100}>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors group h-full">
                <machine.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-foreground font-semibold mb-2">{machine.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {machine.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation direction="up" delay={600}>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/contacto">
                Solicitar cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
