"use client"

import { useEffect, useState } from "react"
import { Quote } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const testimonials = [
  {
    id: 1,
    quote: "Excelente calidad en el mecanizado de piezas especiales. Siempre cumplen con los plazos acordados y la atención es muy profesional.",
    author: "Responsable de compras",
    company: "Empresa automotriz",
  },
  {
    id: 2,
    quote: "Trabajamos con Metalúrgica Somoza hace más de 10 años. Su capacidad de respuesta ante urgencias es invaluable para nuestro mantenimiento.",
    author: "Jefe de mantenimiento",
    company: "Industria metalúrgica",
  },
  {
    id: 3,
    quote: "Los dispositivos que fabricaron para nuestra línea de montaje superaron nuestras expectativas en calidad y funcionalidad.",
    author: "Ingeniero de procesos",
    company: "Planta de producción",
  },
  {
    id: 4,
    quote: "Respuesta rápida y precisión impecable. Son nuestro proveedor de confianza para piezas de reposición urgentes.",
    author: "Gerente de operaciones",
    company: "Fábrica de autopartes",
  },
  {
    id: 5,
    quote: "La calidad del trabajo y el compromiso con los tiempos de entrega son excepcionales. Altamente recomendados.",
    author: "Director técnico",
    company: "Empresa de ingeniería",
  },
]

export function TestimonialsSection() {
  const [translateX, setTranslateX] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const newValue = prev - 0.5
        // Reset when reaching the duplicate set
        if (Math.abs(newValue) >= testimonials.length * 340) {
          return 0
        }
        return newValue
      })
    }, 30)
    
    return () => clearInterval(interval)
  }, [])

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance uppercase tracking-wide">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </ScrollAnimation>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left blur */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Right blur */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex gap-6 transition-none"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[320px] bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
                >
                  <Quote className="h-8 w-8 text-accent/40 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="text-foreground font-medium text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
