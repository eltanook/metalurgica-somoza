"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectCTASection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/cemrecan-yurtman-enPxH6uqABg-unsplash.webp')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/75 dark:bg-background/85" />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative container mx-auto px-4 py-24 md:py-32 text-center">
        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
          Contacto
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 uppercase tracking-wide text-balance">
          ¿Tiene un proyecto en mente?
        </h2>
        <p className="text-foreground/70 leading-relaxed mb-10 max-w-xl mx-auto text-lg">
          Contáctenos para discutir sus necesidades y recibir una cotización sin cargo. Respondemos en el menor tiempo posible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contacto">
              Solicitar cotización
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent">
            <Link href="/servicios">
              Ver servicios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
