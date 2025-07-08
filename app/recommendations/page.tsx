import type { Metadata } from "next"
import Image from "next/image"
import Header from "../components/Header"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Traditional Vietnamese Recommendations | Madame Chu",
  description:
    "Discover our carefully selected traditional Vietnamese dishes, including our premium beef pho, grilled beef in betel leaves, spicy beef noodle soup, and Vietnamese beef stew.",
  openGraph: {
    title: "Traditional Vietnamese Recommendations | Madame Chu",
    description: "Explore authentic Vietnamese cuisine at Madame Chu Singapore",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.Madame%27s%20Chu%20Premium%20pho-vMGIlIeLP1V0vzrpRJaseErzhU9FnO.jpeg",
        width: 1200,
        height: 630,
        alt: "Madame Chu's Premium Beef Pho",
      },
    ],
  },
}

const recommendations = [
  {
    id: "betel-leaves",
    name: "Grilled beef wrapped in betel leaves",
    vietnameseName: "Bò lá lốt",
    description:
      "This is a traditional Vietnamese dish where minced beef mixed with garlic and shallots are wrapped in Betel leaves and grilled to perfection. Betel leaves are not a common herb locally and are sourced directly from Vietnam. These unique heart-shaped leaves, with its distinctive minty flavor combined with the earthiness aroma of ground beef leaves one with an insatiable desire for more.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.Bo%20la%20lotGrilled%20beef%20wrapped%20in%20betel%20leaves-AYx4m1v0LffZyYH4Tucjp5B89Hgath.jpeg",
    alt: "Grilled beef wrapped in betel leaves - Traditional Vietnamese beef rolls with aromatic betel leaves",
  },
  {
    id: "beef-pho",
    name: "Madame's premium beef pho",
    vietnameseName: "Phở bò",
    description:
      'Pho is possibly one of the most well-known dishes in the world to the extent that the word "Pho" was even added to the Merriam-Webster Dictionary in 2014. The soul of a Pho lies in the broth which requires 4-5 hours of low heat boiling and in the cuts of the beef. Using different cuts of meat with varying textures makes Madame Chu\'s beef pho really stand out from the crowd.',
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.Madame%27s%20Chu%20Premium%20pho-vMGIlIeLP1V0vzrpRJaseErzhU9FnO.jpeg",
    alt: "Premium Beef Pho - Vietnamese noodle soup with premium beef slices",
  },
  {
    id: "spicy-noodle",
    name: "Spicy beef noodle soup",
    vietnameseName: "Bún bò",
    description:
      "This beef noodle originates from Central Vietnam, in the city of Huế. Vietnamese food is not known to be spicy like its Thai neighbours but spicy food is celebrated in the city of Huế. The dish is served with beef shank, pork slices and Huế pork sausages with Vietnamese herbs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15.Bun%20boSpicy%20beef%20noodle%20soup-Uw5fgyf9smq50VFzowUPTcx2Tljom1.jpeg",
    alt: "Spicy beef noodle soup - Aromatic beef broth with rice noodles",
  },
  {
    id: "beef-stew",
    name: "Vietnamese beef stew with crispy baguette",
    vietnameseName: "Bò Kho bánh mì",
    description:
      "Vietnamese bò kho (beef stew) is packed with tender, fall-apart braised chunks of beef loaded with herbs, aromatics and a delicious gravy that tastes heavenly with crispy Vietnamese baguette.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18.Bo%20Kho%20banh%20miVietnamese%20beef%20stew%20with%20crispy%20baguette-bm8y0uKNgup1yQB2WI6LLsfePpsoPf.jpeg",
    alt: "Vietnamese beef stew with baguette - Rich beef stew served with crusty bread",
  },
]

export default function Recommendations() {
  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(88, 28, 135, 0.85), rgba(0, 0, 0, 0.85)),
          url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer.jpg-H8A3pv9fNAfHzFwx2VknQ91QZZHntK.jpeg')
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "500px",
      }}
    >
      <Header />
      <main className="container mx-auto px-6 py-12 pt-24">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-200">Traditional Vietnamese Recommendations</h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-16">
            {recommendations.map((dish) => (
              <article key={dish.id} className="scroll-m-20" id={dish.id}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h2 className="text-2xl font-bold mb-2 text-purple-200">{dish.name}</h2>
                    <h3 className="text-xl mb-4 text-purple-300 italic">{dish.vietnameseName}</h3>
                    <p className="text-purple-100 leading-relaxed">{dish.description}</p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={dish.image || "/placeholder.svg"}
                        alt={dish.alt}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center space-x-4">
          <Link
            href="/menu"
            className="bg-purple-600 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-purple-500 transition duration-300"
          >
            View Full Menu
          </Link>
          <a
            href="https://www.sevenrooms.com/explore/madamechu/reservations/create/search?tracking=Website"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-purple-500 transition duration-300"
          >
            Make a Reservation
          </a>
        </div>
      </main>
    </div>
  )
}
