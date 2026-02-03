"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image with fixed attachment */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />

      {/* Grid pattern with cyan color and horizontal blur fade */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      {/* Horizontal blur fade (vignette on sides) */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,22,40,0.9)_0%,transparent_15%,transparent_85%,rgba(10,22,40,0.9)_100%)] dark:bg-[linear-gradient(90deg,rgba(10,22,40,0.9)_0%,transparent_15%,transparent_85%,rgba(10,22,40,0.9)_100%)]" />
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <div className="container relative mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <ScrollAnimation direction="fade" delay={0}>
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 relative">
              <Image
                src="/logo.png"
                alt="Metalúrgica Somoza Logo"
                fill
                className="object-contain invert dark:invert-0"
                priority
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Headline */}
        <ScrollAnimation direction="up" delay={100}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 md:mb-6 text-balance max-w-4xl mx-auto leading-tight uppercase tracking-wide">
            Soluciones industriales a medida desde{" "}
            <span className="text-accent">1959</span>
          </h1>
        </ScrollAnimation>

        {/* Subheadline */}
        <ScrollAnimation direction="up" delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed text-pretty px-2">
            Más de 65 años de experiencia en mecanizado de piezas especiales, repuestos industriales y diseño de dispositivos para líneas de montaje.
          </p>
        </ScrollAnimation>

        {/* CTA Buttons */}
        <ScrollAnimation direction="up" delay={300}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button asChild size="lg" className="w-full sm:w-auto sm:min-w-[200px]">
              <Link href="/contacto">
                Solicitar cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[200px] bg-transparent">
              <a href="https://wa.me/5491155632312" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </ScrollAnimation>

        {/* Trust badges */}
        <ScrollAnimation direction="up" delay={400}>
          <div className="mt-12 md:mt-16">
            <p className="text-sm sm:text-base text-muted-foreground mb-6 md:mb-8">Confían en nosotros</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16">
              {["Ford", "Toyota", "Tubos Argentinos", "Galileo Technologies"].map((client) => (
                <span
                  key={client}
                  className="text-muted-foreground/70 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-foreground transition-colors"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
