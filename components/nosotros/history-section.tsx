"use client"

import { Calendar, Users, Award, Target } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { CounterUp } from "@/components/counter-up"

const milestones = [
  {
    year: "1959",
    title: "Fundación",
    description: "Iniciamos operaciones como taller de mecanizado familiar en Buenos Aires.",
  },
  {
    year: "1980",
    title: "Expansión",
    description: "Ampliamos nuestras instalaciones e incorporamos nuevos equipos.",
  },
  {
    year: "2000",
    title: "Tecnología CNC",
    description: "Modernizamos el taller con maquinaria CNC de última generación.",
  },
  {
    year: "Hoy",
    title: "Líderes en precisión",
    description: "Más de 65 años entregando soluciones industriales de calidad.",
  },
]

const stats = [
  { icon: Calendar, value: 65, prefix: "+", suffix: "", label: "Años de experiencia" },
  { icon: Users, value: 100, prefix: "", suffix: "+", label: "Clientes satisfechos" },
  { icon: Award, value: 1000, prefix: "", suffix: "+", label: "Proyectos completados" },
  { icon: Target, value: 100, prefix: "", suffix: "%", label: "Compromiso" },
]

export function HistorySection() {
  return (
    <section className="relative">
      {/* Header with fixed background */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Fixed background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/nosotros-header-bg.jpg')",
          }}
        />

        {/* Dark overlay - improved visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/55 to-background/75 dark:from-background/90 dark:via-background/80 dark:to-background" />
        {/* Grid pattern with cyan color - darker in light mode */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="container relative mx-auto px-4 py-20">
          <ScrollAnimation direction="up">
            <div className="text-center">
              <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                Nuestra historia
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance uppercase tracking-wide">
                Tradición y tecnología desde 1959
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
                Metalúrgica Somoza es una empresa familiar con más de 65 años de experiencia en mecanizado de piezas especiales, repuestos industriales y diseño de dispositivos para líneas de montaje.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Stats - positioned to overlap with header background */}
      <div className="relative -mt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <ScrollAnimation key={stat.label} direction="up" delay={index * 100}>
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors shadow-lg">
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="text-3xl font-serif font-bold text-foreground mb-1">
                    <CounterUp
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-10 text-center uppercase tracking-wide">
              Nuestra trayectoria
            </h2>
          </ScrollAnimation>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollAnimation key={milestone.year} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                  <div
                    className={`relative flex items-start gap-6 md:gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 mt-1.5" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="text-accent font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-foreground font-semibold mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
