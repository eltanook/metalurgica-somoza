// Structured Data for Metalúrgica Somoza
export function generateStructuredData() {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://metalurgicasomoza.com/#organization",
        "name": "Metalúrgica Somoza",
        "description": "Empresa familiar con más de 65 años de experiencia en mecanizado CNC, fresado, torneado, soldadura y fabricación de dispositivos industriales",
        "url": "https://metalurgicasomoza.com",
        "telephone": "+54-11-5563-2312",
        "email": "metalurgicasomoza@gmail.com",
        "priceRange": "$$",
        "foundingDate": "1959",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Villa Luro",
            "addressLocality": "Buenos Aires",
            "addressRegion": "CABA",
            "postalCode": "1407",
            "addressCountry": "AR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-34.6425",
            "longitude": "-58.5052"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Buenos Aires"
            },
            {
                "@type": "State",
                "name": "AMBA"
            }
        ],
        "openingHours": "Mo-Fr 08:00-17:00",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Metalurgia",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Fresado CNC",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Fresado CNC de Alta Precisión",
                                "description": "Mecanizado CNC de piezas especiales con tolerancias ajustadas"
                            }
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Torneado CNC",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Torneado CNC Industrial",
                                "description": "Fabricación de componentes cilíndricos en serie y unitarios"
                            }
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Soldadura Especializada",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Soldadura MIG/TIG",
                                "description": "Soldadura especializada en acero inoxidable y estructuras a medida"
                            }
                        }
                    ]
                }
            ]
        },
        "sameAs": [
            "https://wa.me/5491155632312"
        ]
    }

    return organizationData
}
