"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function MapSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Google Maps styling for dark mode
  const darkModeStyle = "&style=element:geometry%7Ccolor:0x242f3e&style=element:labels.text.stroke%7Ccolor:0x242f3e&style=element:labels.text.fill%7Ccolor:0x746855&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi.park%7Celement:geometry%7Ccolor:0x263c3f&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x6b9a76&style=feature:road%7Celement:geometry%7Ccolor:0x38414e&style=feature:road%7Celement:geometry.stroke%7Ccolor:0x212a37&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x9ca5b3&style=feature:road.highway%7Celement:geometry%7Ccolor:0x746855&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x1f2835&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xf3d19c&style=feature:transit%7Celement:geometry%7Ccolor:0x2f3948&style=feature:transit.station%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:water%7Celement:geometry%7Ccolor:0x17263c&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x515c6d&style=feature:water%7Celement:labels.text.stroke%7Ccolor:0x17263c"

  const mapSrc = mounted && resolvedTheme === "dark"
    ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13138.77684067556!2d-58.50521!3d-34.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca103ffe7fcf%3A0x24f9dff28c2c84e5!2sVilla%20Luro%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar${darkModeStyle}`
    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13138.77684067556!2d-58.50521!3d-34.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca103ffe7fcf%3A0x24f9dff28c2c84e5!2sVilla%20Luro%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"

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

        {/* Map - reduced height */}
        <ScrollAnimation direction="up" delay={100}>
          <div className="aspect-[16/9] md:aspect-[21/9] bg-card border border-border rounded-lg overflow-hidden">
            <iframe
              src={mapSrc}
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
