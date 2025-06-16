"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20interior%201.jpg-LYcXiobQmMrEhZVAumtGPS3arzuel3.jpeg",
    alt: "Madame Chu venue interior - Modern dining space with traditional Asian lanterns and atmospheric lighting",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20interior%202.jpg-dMOEXGyUhGxeAKjtNcPcTl4K0JqHPy.jpeg",
    alt: "Madame Chu venue interior - Floral wall with illuminated MADAME signage",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20interior%203.jpg-h0XN6GiOMKIc8nYWUt0WJ4HvDt4Lxh.jpeg",
    alt: "Madame Chu venue interior - Live band performance with purple stage lighting",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20bar.jpg-P8WCW8jYfhZ1UYvaf8ZZNFwu8qp2qd.jpeg",
    alt: "Madame Chu venue bar - Bartender presenting a dramatic cocktail with purple smoke effect under neon lighting",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20opening.jpg-XQSyHlgPr7bLepV5ZKcsjwkNyC2cwi.jpeg",
    alt: "Madame Chu venue opening night - Packed crowd enjoying the atmosphere under wisteria decorations and glowing lanterns",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20outdoor.jpg-kRB83W5URTJqihh2wgfmrVTlTKLFVh.jpeg",
    alt: "Madame Chu venue exterior - Luxury sports cars parked outside the restaurant under atmospheric purple and orange lighting",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20guests.jpg-6Q8Gnkxb5pdumDAPG5jATSnjBj3IbA.jpeg",
    alt: "Madame Chu venue atmosphere - Guests enjoying an elegant evening under ambient lighting and decorative ceiling",
  },
]

export function ImageCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <div className="w-full h-full absolute inset-0">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-[70vh] md:h-screen">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-[70vh] md:h-screen">
              <div className="relative w-full h-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                  quality={90}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}
