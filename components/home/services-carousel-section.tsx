"use client"

import { useEffect, useState } from "react"
import { Cog, CircleDot, Factory, Wrench, Flame, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const services = [
  {
    icon: Cog,
    title: "Fresado CNC",
    description: "Piezas de alta precisión en metales y plásticos, con tolerancias ajustadas y acabados limpios.",
  },
  {
    icon: CircleDot,
    title: "Torneado CNC",
    description: "Mecanizado de piezas cilíndricas en producción unitaria o en serie: pistones, bujes, ejes y más.",
  },
  {
    icon: Factory,
    title: "Dispositivos de montaje",
    description: "Diseño y fabricación de dispositivos a medida para plantas de montaje automotriz e industrial.",
  },
  {
    icon: Wrench,
    title: "Repuestos industriales",
    description: "Fabricación bajo plano o muestra: filtros, conectores, adaptadores y piezas de reposición urgente.",
  },
  {
    icon: Flame,
    title: "Soldadura especializada",
    description: "Soldadura MIG, TIG e inoxidable. Estructuras, soportes, bastidores y piezas especiales.",
  },
]

interface Props {
  /** When true, renders without section wrapper (for embedding inside another section) */
  embedded?: boolean
}

function CarouselCore() {
  const [current, setCurrent] = useState(0)
  const total = services.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 4000)
    return () => clearInterval(timer)
  }, [total])

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <div className="w-full overflow-hidden">
      {/* Carousel track */}
      <div className="overflow-hidden rounded-xl w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="flex-shrink-0 w-full px-1">
                <div className="bg-card border border-border rounded-xl p-8 py-12 text-center flex flex-col items-center gap-4 min-h-[280px] justify-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-5">
        <Button variant="outline" size="icon" onClick={prev} className="rounded-full bg-transparent h-8 w-8">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-border"}`}
              aria-label={`Ir a servicio ${i + 1}`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-transparent h-8 w-8">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export function ServicesCarouselSection({ embedded }: Props) {
  if (embedded) {
    return <CarouselCore />
  }

  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up">
          <div className="text-center mb-10">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-3 block">
              Servicios
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground uppercase tracking-wide">
              Lo que hacemos
            </h2>
          </div>
        </ScrollAnimation>
        <div className="max-w-2xl mx-auto">
          <CarouselCore />
        </div>
      </div>
    </section>
  )
}
