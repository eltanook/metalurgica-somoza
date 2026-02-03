"use client"

import React from "react"

import { useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const projects = [
  {
    id: 1,
    title: "Dispositivos de montaje automotriz",
    category: "Ford Argentina",
    description: "Diseño y fabricación de dispositivos para línea de montaje de vehículos.",
    image: "/images/portfolio/automotive-devices.jpg",
  },
  {
    id: 2,
    title: "Piezas de precisión CNC",
    category: "Toyota",
    description: "Mecanizado de componentes especiales con tolerancias ajustadas.",
    image: "/images/portfolio/cnc-precision.jpg",
  },
  {
    id: 3,
    title: "Repuestos industriales",
    category: "Tubos Argentinos",
    description: "Fabricación de repuestos bajo plano para mantenimiento de planta.",
    image: "/images/portfolio/industrial-spare-parts.jpg",
  },
  {
    id: 4,
    title: "Componentes especiales",
    category: "Galileo Technologies",
    description: "Desarrollo de piezas a medida para equipos de alta tecnología.",
    image: "/images/portfolio/special-components.jpg",
  },
  {
    id: 5,
    title: "Estructuras de soldadura",
    category: "Industria General",
    description: "Fabricación de bastidores y soportes industriales personalizados.",
    image: "/images/portfolio/welding-structures.jpg",
  },
  {
    id: 6,
    title: "Herramientas especiales",
    category: "PyMEs",
    description: "Mecanizado de herramientas y adaptadores para maquinaria.",
    image: "/images/portfolio/special-tools.jpg",
  },
]

export function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX)
    scrollRef.current.scrollLeft = scrollLeft - walk
  }, [isDragging, startX, scrollLeft])

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false)
  }, [])

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                Portafolio
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance uppercase tracking-wide">
                Proyectos destacados
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                className="rounded-full bg-transparent"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Anterior</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                className="rounded-full bg-transparent"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Siguiente</span>
              </Button>
            </div>
          </div>
        </ScrollAnimation>

        {/* Horizontal Scroll */}
        <ScrollAnimation direction="up" delay={100}>
          <div className="relative">

            <div
              ref={scrollRef}
              className={`flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-2 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
                >
                  <div className="bg-card border border-border rounded-lg overflow-hidden h-full hover:border-accent/50 transition-colors group">
                    {/* Image */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <span className="text-accent text-xs font-medium tracking-wider uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-foreground font-semibold mt-2 mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation direction="up" delay={200}>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/contacto">
                Solicitar información
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
