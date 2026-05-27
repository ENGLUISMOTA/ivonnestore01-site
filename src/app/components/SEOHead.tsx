import { useEffect } from 'react';

export default function SEOHead() {
  useEffect(() => {
    document.title = 'Ivonne Store - Loja de Roupas no Guamá, Belém/PA | O lugar de comprar barato';

    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaTag('description', 'Ivonne Store - Moda masculina e feminina no Guamá, Belém/PA com a melhor relação custo-benefício. Venha conferir nossa coleção atualizada gastando pouco!');
    setMetaTag('keywords', 'loja de roupas Belém, moda Guamá, roupas Belém PA, loja no Guamá, moda acessível Belém, roupas femininas Belém, roupas masculinas Belém, Ivonne Store, Ivonne Store Belém');

    setMetaTag('og:title', 'Ivonne Store - Loja de Roupas no Guamá, Belém/PA', true);
    setMetaTag('og:description', 'Moda acessível e de qualidade no coração de Belém. Ganhe 10% de desconto na primeira compra!', true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:locale', 'pt_BR', true);

    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ClothingStore",
      "name": "Ivonne Store - Loja de Roupas",
      "description": "Moda masculina e feminina no Guamá, Belém/PA com a melhor relação custo-benefício da região",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua das Flores, 123",
        "addressLocality": "Guamá, Belém",
        "addressRegion": "PA",
        "addressCountry": "BR",
        "postalCode": "66075-000"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-1.4557",
        "longitude": "-48.4650"
      },
      "telephone": "+55-91-98765-4321",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "14:00"
        }
      ],
      "priceRange": "$$"
    });
  }, []);

  return null;
}
