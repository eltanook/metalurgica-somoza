# Metalúrgica Somoza - Sitio Web Oficial

Sitio web moderno y profesional para **Metalúrgica Somoza**, una empresa con más de 65 años de trayectoria en el sector metalmecánico, especializada en mecanizado CNC de mantenimiento y precisión.

## 🚀 Tecnologías

Este proyecto está construido con las últimas tecnologías en desarrollo web:

- **Framework**: [Next.js 16](https://nextjs.org/) (React 19)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/) y [shadcn/ui](https://ui.shadcn.com/)
- **Iconos**: [Lucide React](https://lucide.dev/) y [React Icons](https://react-icons.github.io/react-icons/)
- **Animaciones**: [Embla Carousel](https://www.embla-carousel.com/) y animaciones personalizadas en CSS.
- **Formularios**: React Hook Form con validación [Zod](https://zod.dev/).

## ✨ Características

- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y escritorio.
- **SEO Optimizado**: Implementación de metadatos, `sitemap.xml`, `robots.txt` y schemas estructurados.
- **Interfaz Premium**: Diseño metálico y profesional que refleja la identidad de la empresa.
- **Interactividad**: Botón de WhatsApp flotante, formularios de contacto y componentes interactivos.

## 🛠️ Estructura del Proyecto

```text
├── app/              # Rutas y páginas de Next.js (contacto, nosotros, servicios, etc.)
├── components/       # Componentes de React reutilizables
│   ├── ui/           # Componentes base de la biblioteca UI
│   ├── home/         # Secciones específicas de la página de inicio
│   └── ...           # Otros componentes organizados por secciones
├── lib/              # Utilidades y funciones auxiliares
├── public/           # Archivos estáticos (imágenes, logo, etc.)
└── styles/           # Configuración de estilos globales
```

## 🏁 Comenzando

### Requisitos

- Node.js (v20 o superior recomendado)
- pnpm (gestor de paquetes)

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/eltanook/metalurgica-somoza-web.git
    ```
2.  Instala las dependencias:
    ```bash
    pnpm install
    ```

### Desarrollo

Inicia el servidor de desarrollo:
```bash
pnpm dev
```
La aplicación estará disponible en `http://localhost:3000`.

### Construcción

Crea la versión de producción:
```bash
pnpm build
```

## 🌐 Despliegue

El proyecto está configurado para ser desplegado en **Netlify** o **Vercel**. 
Contiene un archivo `netlify.toml` para una configuración automática de las funciones de Next.js en Netlify.

---

Desarrollado con ❤️ para Metalúrgica Somoza.
