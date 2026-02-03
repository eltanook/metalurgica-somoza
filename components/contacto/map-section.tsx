"use client"

import { ScrollAnimation } from "@/components/scroll-animation"

export function MapSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              Ubicación
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance uppercase tracking-wide">
              Dónde encontrarnos
            </h2>
            <p className="text-muted-foreground mt-4">
              Villa Luro, Ciudad Autónoma de Buenos Aires
            </p>
          </div>
        </ScrollAnimation>

        {/* Map */}
        <ScrollAnimation direction="up" delay={100}>
          <div className="aspect-[16/9] md:aspect-[16/7] bg-card border border-border rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13138.77684067556!2d-58.50521!3d-34.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca103ffe7fcf%3A0x24f9dff28c2c84e5!2sVilla%20Luro%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Metalúrgica Somoza en Villa Luro, Buenos Aires"
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
