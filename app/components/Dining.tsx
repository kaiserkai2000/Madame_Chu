"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageModal } from "./ImageModal"

const sections = [
  {
    title: "Main Dining Hall",
    description:
      "Our spacious dining area seats up to 64 guests, offering a vibrant and welcoming atmosphere. Perfect for casual meals, gatherings, and celebrations.",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20interior%201.jpg-LYcXiobQmMrEhZVAumtGPS3arzuel3.jpeg",
        alt: "Main Dining Hall - View of the elegant dining space",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20opening.jpg-XQSyHlgPr7bLepV5ZKcsjwkNyC2cwi.jpeg",
        alt: "Main Dining Hall - Packed venue with wisteria decorations and ambient lighting",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20interior%202.jpg-dMOEXGyUhGxeAKjtNcPcTl4K0JqHPy.jpeg",
        alt: "Main Dining Hall - Floral wall with illuminated signage",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20bar.jpg-P8WCW8jYfhZ1UYvaf8ZZNFwu8qp2qd.jpeg",
        alt: "Main Dining Hall - Bar area with dramatic lighting",
      },
    ],
  },
  {
    title: "VIP Rooms",
    description:
      "For a more exclusive dining experience, explore our three VIP rooms, each featuring an exclusive menu tailored to elevate your dining journey. Ideal for private parties, business meetings, or special occasions.",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue_VIP.jpg-dvHxmA8zBuT9LeRY5IZRRZCeqGI9Y7.jpeg",
        alt: "VIP Room - Round table with elegant orange and cream chairs, surrounded by cherry blossom murals",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20vip%20food.jpg-T7kcyTsMQDWqXg8mGIAogDXTP67mWs.jpeg",
        alt: "VIP Room - Luxurious round table setting with multiple Chinese and Vietnamese dishes elegantly presented on white porcelain",
      },
    ],
  },
  {
    title: "Live Entertainment",
    description:
      "At Madame Chu, we go beyond exceptional cuisine. Enjoy the rhythms of live bands and the beats of our resident DJ, creating an unforgettable ambiance for your evenings.",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20interior%203.jpg-h0XN6GiOMKIc8nYWUt0WJ4HvDt4Lxh.jpeg",
        alt: "Live Entertainment - Stage area with purple lighting",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20opening.jpg-XQSyHlgPr7bLepV5ZKcsjwkNyC2cwi.jpeg",
        alt: "Live Entertainment - Packed venue with wisteria decorations and ambient lighting",
      },
    ],
  },
]

export default function Dining() {
  const [modalImages, setModalImages] = useState<{
    images: { src: string; alt: string }[]
    initialSlide: number
  } | null>(null)

  const handleImageClick = (sectionImages: { src: string; alt: string }[], initialSlide: number) => {
    setModalImages({ images: sectionImages, initialSlide })
  }

  const handleCloseModal = () => {
    setModalImages(null)
  }

  return (
    <section className="py-20 pb-24 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(88, 28, 135, 0.85), rgba(0, 0, 0, 0.85)),
            url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer.jpg-H8A3pv9fNAfHzFwx2VknQ91QZZHntK.jpeg')
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "500px",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-200">DINING EXPERIENCE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handleImageClick(section.images, 0)}
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src={section.images[0].src || "/placeholder.svg"}
                  alt={section.images[0].alt}
                  fill
                  className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative p-6 min-h-[300px] rounded-lg border border-purple-700/50 backdrop-blur-sm flex flex-col items-center justify-center text-center z-10">
                <h3 className="text-xl font-semibold mb-4 text-purple-100">{section.title}</h3>
                <p className="text-purple-200">{section.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="mb-2 text-purple-100">
            Make your reservation today to secure your table and experience the perfect blend of food, music, and luxury
            at Madame Chu.
          </p>
          <p className="mb-6 text-purple-100">
            For groups above eight pax, event and VIP bookings please contact{" "}
            <a href="mailto:info@virtureventure.org" className="text-purple-300 hover:text-purple-100 underline">
              info@virtureventure.org
            </a>{" "}
            or book VIP{" "}
            <a
              href="https://sevn.ly/xIfboARl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-100 underline"
            >
              here
            </a>
            .
          </p>
          <a
            href="https://www.sevenrooms.com/explore/madamechu/reservations/create/search?tracking=Website"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-purple-500 transition duration-300"
          >
            Reserve Now
          </a>
        </div>
      </div>

      <ImageModal
        isOpen={!!modalImages}
        onClose={handleCloseModal}
        images={modalImages?.images || []}
        initialSlide={modalImages?.initialSlide || 0}
      />
    </section>
  )
}
