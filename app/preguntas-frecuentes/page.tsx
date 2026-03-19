"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState } from "react"

const faqs = [
  {
    q: "¿Qué servicios ofrece Metalúrgica Somoza?",
    a: "Ofrecemos fresado CNC, torneado CNC, soldadura especializada (MIG, TIG, acero inoxidable), fabricación de dispositivos para líneas de montaje automotriz e industrial, y mecanizado de repuestos y herramientas industriales bajo plano o muestra. Trabajamos con metales y polímeros, adaptándonos a la necesidad específica de cada proyecto.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización?",
    a: "Puede contactarnos por WhatsApp al +54 9 11 5563-2312, enviarnos un email a metalurgicasomoza@gmail.com o completar el formulario de contacto en nuestra página web. Respondemos en el menor tiempo posible, generalmente dentro de las 24 a 48 horas hábiles. La cotización es siempre sin cargo.",
  },
  {
    q: "¿Fabrican piezas bajo plano o únicamente bajo muestra?",
    a: "Trabajamos bajo ambas modalidades. Si dispone de un plano técnico (PDF, DXF, DWG u otro formato), lo analizamos y presupuestamos. Si tiene una pieza a replicar o reparar, también podemos tomar medidas directamente de la muestra. En ambos casos garantizamos las tolerancias requeridas.",
  },
  {
    q: "¿Realizan trabajos en producción unitaria o solo en serie?",
    a: "Realizamos tanto producción unitaria (una sola pieza) como fabricación en serie. Somos especialmente ágiles para urgencias de mantenimiento industrial donde se necesita una o pocas piezas con entrega rápida, y también competitivos en series medianas y largas.",
  },
  {
    q: "¿Cuáles son los plazos de entrega habituales?",
    a: "Los plazos dependen de la complejidad y cantidad de las piezas, así como de la carga de trabajo del momento. Piezas simples en producción unitaria pueden estar listas en 24 a 72 horas. Trabajos más complejos o series se presupuestan con un plazo estimado desde el inicio. Siempre comunicamos el plazo de forma transparente antes de comenzar.",
  },
  {
    q: "¿Con qué materiales trabajan?",
    a: "Mecanizamos principalmente aceros al carbono, acero inoxidable, aluminio, bronce, latón, cobre y polímeros técnicos como nylon, teflón o poliuretano. Si su proyecto requiere un material específico, consúltenos y evaluamos la viabilidad.",
  },
  {
    q: "¿Atienden a empresas o también a particulares?",
    a: "Atendemos principalmente a empresas industriales, fábricas, talleres y pymes que requieren piezas mecanizadas. También atendemos a particulares para proyectos específicos. Entre nuestros clientes se encuentran empresas como Ford, Toyota, Galileo Technologies y Tubos Argentinos.",
  },
  {
    q: "¿En qué zona geográfica prestan servicio?",
    a: "Nuestro taller está ubicado en Villa Luro, Ciudad Autónoma de Buenos Aires. Atendemos a clientes de toda la zona AMBA (Área Metropolitana de Buenos Aires) y zonas industriales del Gran Buenos Aires. Para envíos a otras provincias, coordinamos con servicios de logística.",
  },
  {
    q: "¿Qué información necesitan para presupuestar una pieza?",
    a: "Cuanta más información aporte, más preciso será el presupuesto. Idealmente: plano técnico o muestra física, material deseado, cantidad de piezas, tolerancias requeridas y plazo necesario. Si no cuenta con todo esto, contáctese igual: lo asesoramos para definir los detalles técnicos.",
  },
  {
    q: "¿Tienen garantía sobre los trabajos realizados?",
    a: "Sí. Todos nuestros trabajos pasan por un control dimensional antes de la entrega. Si por algún motivo una pieza no cumple con las especificaciones acordadas, la corregimos o reponemos sin cargo adicional. Nuestro objetivo es la satisfacción total del cliente, algo que sostenemos con más de 60 años de trabajo continuo en el sector.",
  },
]

function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <ScrollAnimation direction="up" delay={index * 40}>
      <div className={`bg-card border rounded-xl overflow-hidden transition-colors ${open ? "border-accent/60" : "border-border hover:border-accent/30"}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-4 p-6 text-left"
          aria-expanded={open}
        >
          <span className="text-accent font-bold font-serif text-lg flex-shrink-0 min-w-[2rem] text-right">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex-1 text-foreground font-semibold text-base leading-snug">{faq.q}</span>
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-accent" : ""}`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <p className="px-6 pb-6 pl-16 text-muted-foreground text-sm leading-relaxed">
            {faq.a}
          </p>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default function PreguntasFrecuentesPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 uppercase tracking-wide text-balance">
              Preguntas frecuentes
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Respuestas a las consultas más habituales sobre nuestros servicios, plazos y formas de trabajo.
            </p>
          </div>
        </ScrollAnimation>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* CTA — no icon */}
        <ScrollAnimation direction="up" delay={300}>
          <div className="mt-16 text-center p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              ¿No encontró su respuesta?
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Contáctenos directamente y respondemos su consulta con el mayor detalle posible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/contacto">
                  Enviar consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <a href="https://wa.me/5491155632312" target="_blank" rel="noopener noreferrer">
                  Escribir por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
