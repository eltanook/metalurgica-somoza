"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Volver al inicio"
            >
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.png"
                  alt="Metalúrgica Somoza Logo"
                  fill
                  className="object-contain invert dark:invert-0"
                />
              </div>
              <span className="text-foreground font-medium">
                Metalúrgica Somoza
              </span>
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Soluciones industriales a medida desde 1959. Más de 65 años de experiencia en mecanizado de precisión y desarrollo de dispositivos industriales.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold font-serif uppercase tracking-wide">Navegación</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold font-serif uppercase tracking-wide">Contacto</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:metalurgicasomoza@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                metalurgicasomoza@gmail.com
              </a>
              <a
                href="https://wa.me/5491155632312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <FaWhatsapp className="h-4 w-4" />
                +54 9 11 5563-2312
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                Villa Luro, CABA
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4">
              <Button asChild size="sm">
                <Link href="/contacto">
                  Contactar ahora
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            {new Date().getFullYear()} Metalúrgica Somoza. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-xs">
            Servicios: AMBA y zonas industriales
          </p>
        </div>
      </div>
    </footer>
  )
}
