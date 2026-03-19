"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Cog, Wrench, Factory, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const highlights = [
  { icon: Cog, text: "Más de 60 años de trayectoria en el sector metalúrgico" },
  { icon: Wrench, text: "Fabricación de piezas a medida en metales y polímeros" },
  { icon: Factory, text: "Torneado, fresado de precisión, herrería, soldadura y más" },
  { icon: Shield, text: "Presupuesto sin compromiso en el menor tiempo posible" },
]

export function AboutTextSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Text content */}
          <ScrollAnimation direction="left" className="flex flex-col justify-center">
            <div>
              <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                Quiénes somos
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance uppercase tracking-wide">
                Soluciones integrales en metalurgia
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En Metalúrgica Somoza, contamos con más de 60 años de trayectoria en el sector metalúrgico, ofreciendo soluciones integrales y personalizadas para todo tipo de proyectos. Nos especializamos en la fabricación de piezas a medida, trabajando con una amplia gama de metales y polímeros, adaptándonos a las necesidades específicas de cada cliente.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nuestra empresa está equipada con tecnología de vanguardia para realizar torneado y fresado de precisión, así como la producción de piezas de herrería, soldadura, corte, embutido y más, garantizando la máxima calidad y eficiencia en cada proceso.
              </p>

              {/* Features — icon clean, text right */}
              <div className="space-y-3 mb-8">
                {highlights.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
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

          {/* Image — misma altura que el texto, badges más grandes con bg metálico */}
          <ScrollAnimation direction="right" className="flex flex-col">
            <div className="relative rounded-xl overflow-hidden shadow-xl flex-1 min-h-[360px]">
              <Image
                src="/images/2026-01-14.jpg"
                alt="Taller Metalúrgica Somoza"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-background/15" />

              {/* Badge: Ubicación – bottom left */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-background/90 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-xl">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-foreground text-sm font-semibold leading-tight">Villa Luro</p>
                  <p className="text-muted-foreground text-xs leading-tight mt-0.5">CABA, Argentina</p>
                </div>
              </div>

              {/* Badge: Años — top right — mismo estilo que btn primario */}
              <div className="absolute top-5 right-5 flex items-center gap-3 rounded-xl px-4 py-3 shadow-xl btn-metallic border border-white/20">
                <Clock className="h-5 w-5 flex-shrink-0 text-white dark:text-gray-900" />
                <div>
                  <p className="text-white dark:text-gray-900 text-sm font-bold leading-tight">+60 años</p>
                  <p className="text-white/80 dark:text-gray-900/70 text-xs leading-tight mt-0.5">de trayectoria</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
