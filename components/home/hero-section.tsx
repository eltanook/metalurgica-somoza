"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useEffect, useState } from "react"

const heroImages = [
  "/images/alerkiv-C2S_2gmmQlw-unsplash.jpg",
  "/images/cemrecan-yurtman-enPxH6uqABg-unsplash.jpg",
  "/images/cemrecan-yurtman-MU2wR8smaO4-unsplash.jpg",
  "/images/hans-westbeek-qMTgBiOuGtQ-unsplash.jpg",
]

const FADE_DURATION = 1200 // ms
const SLIDE_INTERVAL = 6000 // ms

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIdx = (current + 1) % heroImages.length
      setNext(nextIdx)
      // After fade-in of next completes, snap current = next and clear next
      setTimeout(() => {
        setCurrent(nextIdx)
        setNext(null)
      }, FADE_DURATION)
    }, SLIDE_INTERVAL)
    return () => clearInterval(interval)
  }, [current])

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Base image layer (current) — always visible, no transition needed */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: `url('${heroImages[current]}')` }}
      />

      {/* Transitioning-in image (next) — fades in on top */}
      {next !== null && (
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed animate-hero-fade-in"
          style={{ backgroundImage: `url('${heroImages[next]}')` }}
        />
      )}

      {/* Dark overlay — sits above both image layers */}
      <div className="absolute inset-0 bg-background/60 dark:bg-background/80" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.10)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Scroll indicator — animated arrow + text, bottom center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-foreground/50 select-none pointer-events-none">
        <span className="text-xs tracking-widest uppercase font-medium">Deslizar</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>

      <div className="container relative mx-auto px-4 py-20 text-center z-20">
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

        {/* Trust badges */}
        <ScrollAnimation direction="up" delay={400}>
          <div className="mt-12 md:mt-16">
            <p className="text-sm sm:text-base text-muted-foreground mb-6 md:mb-8">Confían en nosotros</p>

            {/* Desktop: static grid */}
            <div className="hidden md:flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 px-4">
              <div className="h-12 sm:h-14 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image src="/ford.png" alt="Ford" width={120} height={64} className="h-full w-auto object-contain" />
              </div>
              <div className="h-12 sm:h-14 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image src="/toyota.png" alt="Toyota" width={120} height={64} className="h-full w-auto object-contain" />
              </div>
              <div className="h-12 sm:h-14 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image src="/tubos-argentinos.png" alt="Tubos Argentinos" width={140} height={64} className="h-full w-auto object-contain" />
              </div>
              <div className="h-12 sm:h-14 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image src="/galileo.png" alt="Galileo Technologies" width={140} height={64} className="h-full w-auto object-contain" />
              </div>
            </div>

            {/* Mobile: auto-scrolling */}
            <div className="md:hidden relative w-full">
              {/* Gradient fade overlays — sit on top of the scrolling track */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              {/* Scrolling track — clips internally so page doesn't overflow */}
              <div className="overflow-hidden w-full">
                <div className="flex gap-12 animate-scroll-logos py-4 w-max">
                  {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-12 flex-shrink-0 items-center">
                      <div className="flex-shrink-0 h-10 w-auto"><Image src="/ford.png" alt="Ford" width={100} height={40} className="h-full w-auto object-contain opacity-70" /></div>
                      <div className="flex-shrink-0 h-10 w-auto"><Image src="/toyota.png" alt="Toyota" width={100} height={40} className="h-full w-auto object-contain opacity-70" /></div>
                      <div className="flex-shrink-0 h-10 w-auto"><Image src="/tubos-argentinos.png" alt="Tubos Argentinos" width={120} height={40} className="h-full w-auto object-contain opacity-70" /></div>
                      <div className="flex-shrink-0 h-10 w-auto"><Image src="/galileo.png" alt="Galileo Technologies" width={120} height={40} className="h-full w-auto object-contain opacity-70" /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
