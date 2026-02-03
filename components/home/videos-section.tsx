"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const videos = [
  {
    id: 1,
    title: "Fresadora CNC en acción",
    description: "Mecanizado de pieza de alta precisión con fresadora CNC.",
  },
  {
    id: 2,
    title: "Torno CNC trabajando",
    description: "Fabricación de componente cilíndrico con tolerancias ajustadas.",
  },
  {
    id: 3,
    title: "Soldadura TIG",
    description: "Proceso de soldadura TIG en acero inoxidable.",
  },
  {
    id: 4,
    title: "Control de calidad",
    description: "Verificación dimensional con instrumentos de precisión.",
  },
]

export function VideosSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              Nuestro trabajo
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance uppercase tracking-wide">
              Máquinas en funcionamiento
            </h2>
          </div>
        </ScrollAnimation>

        {/* Carousel */}
        <ScrollAnimation direction="up" delay={100}>
          <div className="relative max-w-4xl mx-auto">
            {/* Main Video */}
            <div className="aspect-video bg-card border border-border rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors cursor-pointer">
                    <Play className="h-8 w-8 text-accent ml-1" />
                  </div>
                  <h3 className="text-foreground font-semibold text-lg">
                    {videos[currentIndex].title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {videos[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full bg-transparent"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Anterior</span>
              </Button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-accent"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  >
                    <span className="sr-only">Video {index + 1}</span>
                  </button>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full bg-transparent"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Siguiente</span>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
