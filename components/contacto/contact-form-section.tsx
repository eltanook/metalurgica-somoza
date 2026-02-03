"use client"

import { Mail, MapPin, Clock } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ScrollAnimation } from "@/components/scroll-animation"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "metalurgicasomoza@gmail.com",
    href: "mailto:metalurgicasomoza@gmail.com",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp / Tel",
    value: "+54 9 11 5563-2312",
    href: "https://wa.me/5491155632312",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Villa Luro, CABA",
    href: null,
  },
  {
    icon: Clock,
    label: "Servicios",
    value: "AMBA y zonas industriales",
    href: null,
  },
]

export function ContactFormSection() {
  return (
    <section className="relative">
      {/* Header with background */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Dark overlay - improved visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80 dark:from-background/95 dark:via-background/85 dark:to-background" />

        {/* Grid pattern with cyan color - darker in light mode */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="container relative mx-auto px-4 py-20">
          <ScrollAnimation direction="up">
            <div className="text-center">
              <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                Contacto
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance uppercase tracking-wide">
                Hablemos de su proyecto
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
                Atención personalizada y cotizaciones sin cargo. Complete el formulario y nos pondremos en contacto a la brevedad.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Form & Info Grid */}
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Form (col-8) */}
          <ScrollAnimation direction="left" className="lg:col-span-2">
            <form
              action="https://formsubmit.co/metalurgicasomoza@gmail.com"
              method="POST"
              className="bg-card border border-border rounded-lg p-6 md:p-8"
            >
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value="Nuevo mensaje desde el sitio web" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Su nombre"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="su@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+54 9 11 ..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de su empresa"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="¿En qué podemos ayudarlo?"
                  required
                />
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describa su proyecto o consulta..."
                  rows={11}
                  required
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Enviar mensaje
              </Button>
            </form>
          </ScrollAnimation>

          {/* Contact Info (col-4) */}
          <ScrollAnimation direction="right" className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-foreground font-semibold mb-6 font-serif uppercase tracking-wide">
                Información de contacto
              </h3>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-accent transition-colors text-sm font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground text-sm font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA - made smaller */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
              <h4 className="text-foreground font-semibold text-sm mb-1">
                ¿Prefiere WhatsApp?
              </h4>
              <p className="text-muted-foreground text-xs mb-3">
                Respuesta rápida
              </p>
              <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                <a
                  href="https://wa.me/5491155632312"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir WhatsApp
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section >
  )
}
