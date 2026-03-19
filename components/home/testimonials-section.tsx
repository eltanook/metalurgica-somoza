"use client"

import { useEffect, useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"

// Google Reviews – Metalúrgica Somoza (5.0 ★ · 4 opiniones)
const testimonials = [
  {
    id: 1,
    quote: "Excelente, cumplidores",
    author: "Alfredo Bruno",
    role: "Local Guide",
    time: "Hace 8 años",
  },
  {
    id: 2,
    quote: "Excelente atención",
    author: "Nikholas Shaffer",
    role: "Local Guide",
    time: "Hace 4 años",
  },
  {
    id: 3,
    quote: "Excelente!!!",
    author: "Fernando Pastor",
    role: "Local Guide",
    time: "Hace 4 años",
  },
  {
    id: 4,
    quote: "Excelente servicio y atención al cliente. Muy recomendable.",
    author: "Igor Sultan",
    role: "Local Guide",
    time: "Hace un año",
  },
]

const StarRow = () => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
)

export function TestimonialsSection() {
  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const newValue = prev - 0.5
        if (Math.abs(newValue) >= testimonials.length * 340) {
          return 0
        }
        return newValue
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

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
            {/* Google rating badge */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <GoogleIcon className="w-5 h-5" />
              <span className="text-foreground font-semibold">5.0</span>
              <StarRow />
              <span className="text-muted-foreground text-sm">en Google</span>
            </div>
          </div>
        </ScrollAnimation>

        {/* Carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-4">
            <div
              className="flex gap-6 transition-none"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[300px] bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors flex flex-col"
                >
                  {/* Stars always top */}
                  <StarRow />

                  {/* Quote - flex-1 so it grows and pushes footer down */}
                  <p className="text-muted-foreground leading-relaxed mt-3 mb-auto pb-6 text-sm italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Footer always at bottom */}
                  <div className="flex items-center justify-between gap-2 pt-4 border-t border-border/50">
                    <div>
                      <p className="text-foreground font-medium text-sm">{testimonial.author}</p>
                      <p className="text-muted-foreground text-xs">{testimonial.role} · {testimonial.time}</p>
                    </div>
                    <GoogleIcon className="w-5 h-5 flex-shrink-0 opacity-70" />
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
