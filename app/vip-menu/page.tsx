import Link from 'next/link'
import Image from 'next/image'

const vipMenuItems = Array(10).fill(null).map((_, index) => ({
  name: `VIP Dish ${index + 1}`,
  description: `Exclusive description for VIP Dish ${index + 1}`,
  price: `$${Math.floor(Math.random() * 50) + 50}`,
  image: `/placeholder.svg?height=200&width=200`
}))

export default function VIPMenu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-200">VIP Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vipMenuItems.map((item, index) => (
            <div key={index} className="border border-purple-700 rounded-lg p-6 hover:bg-purple-900/50 transition duration-300 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-2 text-purple-100">{item.name}</h3>
                <p className="text-purple-300 mb-4">{item.description}</p>
                <p className="text-purple-200 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/" className="bg-purple-600 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-purple-500 transition duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
