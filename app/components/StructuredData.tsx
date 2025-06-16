import Script from "next/script"

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Madame Chu",
    image: "https://madamechu.com/restaurant-image.jpg",
    url: "https://madamechu.com",
    telephone: "+6562216788",
    address: {
      "@type": "PostalAddress",
      streetAddress: "331 New Bridge Road, #01-03 Dorsett Residences",
      addressLocality: "Singapore",
      postalCode: "088764",
      addressCountry: "SG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.2803983987074323,
      longitude: 103.83790607531947,
    },
    servesCuisine: ["Vietnamese", "Chinese"],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "15:00",
        closes: "00:00",
      },
    ],
    menu: "https://madamechu.com/menu",
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  )
}
