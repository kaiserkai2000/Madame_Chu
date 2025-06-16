import Link from "next/link"
import Image from "next/image"

const previewItems = [
  {
    name: "Phở bò",
    description: "Premium Beef Pho",
    image: "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Wagyu%20Beef%20Pho.png",
    alt: "Premium Beef Pho - Vietnamese noodle soup with premium beef",
  },
  {
    name: "Shanghai smoked cod fish",
    description: "上海熏鳕鱼",
    image:
      "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Shanghai%20smoked%20cod%20fish.png",
    alt: "Shanghai smoked cod fish - Traditional smoked cod fish preparation",
  },
  {
    name: "Passion fruit tiger prawn ball",
    description: "百香果老虎虾球",
    image:
      "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Passion%20fruit%20tiger%20prawn%20ball.png",
    alt: "Passion fruit tiger prawn ball - Crispy prawn balls with tropical sauce",
  },
  {
    name: "Bò lá lốt",
    description: "Grilled beef wrapped in betel leaves",
    image:
      "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Grilled%20beef%20wrapped%20in%20betel%20leaves.png",
    alt: "Grilled beef wrapped in betel leaves - Traditional Vietnamese beef rolls",
  },
]

export default function MenuPreview() {
  return (
    <section id="menu" className="py-20 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(88, 28, 135, 0.85)),
            url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer.jpg-H8A3pv9fNAfHzFwx2VknQ91QZZHntK.jpeg')
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "500px",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-200">OUR MENU</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {previewItems.map((item, index) => (
            <Link
              href={`/menu?dish=${encodeURIComponent(item.name)}`}
              key={index}
              className="border border-purple-700 rounded-lg p-6 hover:bg-purple-900/50 transition duration-300 flex flex-col md:flex-row items-center cursor-pointer"
            >
              <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4" data-dish={item.name}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-2 text-purple-100">{item.name}</h3>
                <p className="text-purple-300 mb-4">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/menu"
            className="bg-purple-600 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-purple-500 transition duration-300"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
