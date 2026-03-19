"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Cog, CircleDot, Flame, Ruler, Wrench, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useEffect, useState } from "react"

const machines = [
  {
    icon: Cog,
    name: "Fresadora CNC",
    description: "Mecanizado de piezas de alta precisión en 3 ejes con tolerancias mínimas.",
  },
  {
    icon: CircleDot,
    name: "Torno CNC",
    description: "Fabricación de piezas cilíndricas con control numérico computarizado.",
  },
  {
    icon: Flame,
    name: "Equipos de soldadura",
    description: "Soldadura MIG, TIG e inoxidable para estructuras y piezas especiales.",
  },
  {
    icon: Ruler,
    name: "Instrumentos de medición",
    description: "Control dimensional de precisión certificado en cada trabajo.",
  },
  {
    icon: Wrench,
    name: "Herramientas especiales",
    description: "Equipamiento dedicado para trabajos específicos de herrería y embutido.",
  },
  {
    icon: Settings,
    name: "Accesorios CNC",
    description: "Complementos y portaherramientas para mecanizado especializado.",
  },
]

const carouselImages = [
  "/images/2025-02-06 (1).jpg",
  "/images/2025-02-06 (2).jpg",
  "/images/2025-02-06 (3).jpg",
]

const FADE_DURATION = 900
const SLIDE_INTERVAL = 4000

function MachineImageCarousel() {
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIdx = (current + 1) % carouselImages.length
      setNext(nextIdx)
      setTimeout(() => {
        setCurrent(nextIdx)
        setNext(null)
      }, FADE_DURATION)
    }, SLIDE_INTERVAL)
    return () => clearInterval(interval)
  }, [current])

  const goTo = (idx: number) => {
    if (idx === current) return
    setNext(idx)
    setTimeout(() => {
      setCurrent(idx)
      setNext(null)
    }, FADE_DURATION)
  }

  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl h-full min-h-[300px] md:min-h-[460px]">
      {/* Base image */}
      <Image
        src={carouselImages[current]}
        alt={`Maquinaria Metalúrgica Somoza ${current + 1}`}
        fill
        className="object-cover"
        sizes="33vw"
      />
      {/* Fading-in image */}
      {next !== null && (
        <Image
          key={next}
          src={carouselImages[next]}
          alt={`Maquinaria Metalúrgica Somoza ${next + 1}`}
          fill
          className="object-cover animate-hero-fade-in"
          style={{ animationDuration: `${FADE_DURATION}ms` }}
          sizes="33vw"
        />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/10" />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-5" : "bg-white/60 w-1.5 hover:bg-white/90"}`}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function MachinesSection() {
  return (
    <section className="py-14 md:py-28">
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

        {/* Main layout: col-4 carousel | col-8 features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left col-4: Image carousel */}
          <ScrollAnimation direction="left" className="lg:col-span-1 h-full">
            <MachineImageCarousel />
          </ScrollAnimation>

          {/* Right col-8: 6 features in 2x3 grid + CTA aligned right */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
              {machines.map((machine, index) => (
                <ScrollAnimation key={machine.name} direction="right" delay={index * 80}>
                  <div className="bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition-colors group h-full flex items-start gap-4">
                    <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                      <machine.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-1 text-sm">{machine.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {machine.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            {/* CTAs — primary left, secondary right */}
            <ScrollAnimation direction="up" delay={500}>
              <div className="flex flex-row flex-wrap gap-3 pt-4">
              <Button asChild>
                <Link href="/contacto">
                  Solicitar cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/servicios">
                  Ver todos nuestros servicios
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
