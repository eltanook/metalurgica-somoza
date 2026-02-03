"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
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

      {/* Dark overlay - reduced opacity for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80 dark:from-background/90 dark:via-background/80 dark:to-background" />

      {/* Grid pattern - black in light mode, cyan in dark mode */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.12)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground/95 dark:text-foreground mb-4 md:mb-6 text-balance max-w-4xl mx-auto leading-tight uppercase tracking-wide">
            Soluciones industriales a medida desde{" "}
            <span className="text-accent">1959</span>
          </h1>
        </ScrollAnimation>

        {/* Subheadline */}
        <ScrollAnimation direction="up" delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-foreground/75 dark:text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed text-pretty px-2">
            Más de 65 años de experiencia en mecanizado de piezas especiales, repuestos industriales y diseño de dispositivos para líneas de montaje.
          </p>
        </ScrollAnimation>

        {/* Trust badges - Auto-scrolling carousel */}
        <ScrollAnimation direction="up" delay={400}>
          <div className="mt-12 md:mt-16">
            <p className="text-sm sm:text-base text-muted-foreground mb-6 md:mb-8">Confían en nosotros</p>

            {/* Desktop: static grid */}
            <div className="hidden md:flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 px-4">
              {/* Ford */}
              <div className="h-12 sm:h-14 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/ford.png"
                  alt="Ford"
                  width={120}
                  height={64}
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Toyota */}
              <div className="h-12 sm:h-14 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/toyota.png"
                  alt="Toyota"
                  width={120}
                  height={64}
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Tubos Argentinos */}
              <div className="h-12 sm:h-14 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/tubos-argentinos.png"
                  alt="Tubos Argentinos"
                  width={140}
                  height={64}
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Galileo Technologies */}
              <div className="h-12 sm:h-14 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/galileo.png"
                  alt="Galileo Technologies"
                  width={140}
                  height={64}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>

            {/* Mobile: auto-scrolling carousel with blur edges */}
            <div className="md:hidden relative">
              {/* Left blur */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

              {/* Right blur */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              {/* Auto-scrolling carousel */}
              <div className="overflow-hidden">
                <div className="flex gap-12 animate-scroll-logos">
                  {/* First set */}
                  <div className="flex-shrink-0 h-12 w-auto">
                    <Image
                      src="/ford.png"
                      alt="Ford"
                      width={120}
                      height={64}
                      className="h-full w-auto object-contain opacity-70"
                    />
                  </div>
                  <div className="flex-shrink-0 h-12 w-auto">
                    <Image
                      src="/toyota.png"
                      alt="Toyota"
                      width={120}
                      height={64}
                      className="h-full w-auto object-contain opacity-70"
                    />
                  </div>
                  <div className="flex-shrink-0 h-12 w-auto">
                    <Image
                      src="/tubos-argentinos.png"
                      alt="Tubos Argentinos"
                      width={140}
                      height={64}
                      className="h-full w-auto object-contain opacity-70"
                    />
                  </div>
                  <div className="flex-shrink-0 h-12 w-auto">
                    <Image
                      src="/galileo.png"
                      alt="Galileo Technologies"
                      width={140}
                      height={64}
                      className="h-full w-auto object-contain opacity-70"
                    />
                  </div>

                  {/* Duplicate for seamless loop */}
                  <div className="flex-shrink-0 h-12 w-auto">
                    <Image
                      src="/ford.png"
                      alt="Ford"
                      width={120}
                      height={64}
                      className="h-full w-auto object-contain opacity-70"
                    />
                  </div>
                  <div className="flex-shrink-0 h-12 w-auto">
                    <Image
                      src="/toyota.png"
                      alt="Toyota"
                      width={120}
                      height={64}
                      className="h-full w-auto object-contain opacity-70"
                    />
                  </div>
                  <div className="flex-shrink-0 h-12 w-auto">
                    <Image
                      src="/tubos-argentinos.png"
                      alt="Tubos Argentinos"
                      width={140}
                      height={64}
                      className="h-full w-auto object-contain opacity-70"
                    />
                  </div>
                  <div className="flex-shrink-0 h-12 w-auto">
                    <Image
                      src="/galileo.png"
                      alt="Galileo Technologies"
                      width={140}
                      height={64}
                      className="h-full w-auto object-contain opacity-70"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
