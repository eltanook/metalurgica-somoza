"use client"

import Link from "next/link"
import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const videos = [
  {
    id: 1,
    title: "Fresado CNC de precisión",
    description: "Mecanizado de pieza compleja con múltiples operaciones.",
  },
  {
    id: 2,
    title: "Torneado de ejes especiales",
    description: "Fabricación de componentes cilíndricos en serie.",
  },
  {
    id: 3,
    title: "Soldadura TIG en acero inoxidable",
    description: "Proceso de soldadura de alta calidad.",
  },
  {
    id: 4,
    title: "Montaje de dispositivos",
    description: "Ensamblaje de dispositivo para línea automotriz.",
  },
]

export function ServicesVideosSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              En acción
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance uppercase tracking-wide">
              Vea nuestro trabajo
            </h2>
          </div>
        </ScrollAnimation>

        {/* Videos Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <ScrollAnimation key={video.id} direction="up" delay={index * 100}>
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors group cursor-pointer">
                {/* Video Thumbnail */}
                <div className="aspect-[16/8] relative bg-secondary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Play className="h-5 w-5 text-accent ml-0.5" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-foreground font-semibold mb-1 group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation direction="up" delay={400}>
          <div className="text-center mt-12 p-8 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3 uppercase tracking-wide">
              ¿Tiene un proyecto en mente?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contáctenos para discutir sus necesidades y recibir una cotización sin cargo.
            </p>
            <Button asChild>
              <Link href="/contacto">
                Contactar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
