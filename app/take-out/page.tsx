import type { Metadata } from "next"
import Image from "next/image"
import Header from "../components/Header"
import { PhoneIcon as WhatsApp } from "lucide-react"

export const metadata: Metadata = {
  title: "Take Out | Madame Chu",
  description:
    "Take out menu for Dorsett Singapore guests, featuring a selection of Chinese and Vietnamese dishes from Madame Chu.",
}

const chineseMenu = [
  {
    name: "Spicy firecracker chicken",
    chinese: "麻香辣子鸡丁",
    price: "$18",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Deep-fried charcoal crispy tofu",
    chinese: "黑炭炸豆腐",
    price: "$14",
    isVegan: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Crispy black garlic pork belly",
    chinese: "黑蒜酥脆五花肉",
    price: "$28",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Truffle French fries",
    chinese: "松露薯条",
    price: "$12",
    isVegan: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Shanghai smoked cod fish",
    chinese: "上海熏鳕鱼",
    price: "$28",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Garlic Pea Sprout (Dou Miao) stir fry",
    chinese: "香炒豆苗",
    price: "$16",
    isVegan: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Crispy Cordycep flowers",
    chinese: "避风塘虫草花",
    price: "$26",
    isVegan: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "French bean with olive leaves & Sakura shrimp",
    chinese: "樱花虾榄菜炒四季豆",
    price: "$18",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Passion fruit tiger prawn balls",
    chinese: "百香果老虎虾球",
    price: "$28",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Black truffle seafood egg white fried rice",
    chinese: "黑松露蛋白炒饭",
    price: "$24",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "XO fried rice with crab meat",
    chinese: "XO蟹肉海鲜炒饭",
    price: "$24",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Shanghai noodles with scallops",
    chinese: "葱油带子捞上海面",
    price: "$20",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Wok-fried seafood mee sua",
    chinese: "家乡海鲜面线",
    price: "$18",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Fragrant white rice",
    chinese: "白饭",
    price: "$2",
    isVegan: true,
    image: "/placeholder.svg?height=200&width=200",
  },
]

const vietnameseMenu = [
  {
    name: "Crunchy Vietnamese beef salad",
    vietnamese: "Gỏi bò",
    price: "$20",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Spicy steamed clams",
    vietnamese: "Nghêu hấp sả",
    price: "$25",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Mini pancakes with prawn & coconut cream",
    vietnamese: "Bánh Khọt",
    price: "$16",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Vietnamese rice paper pizza",
    vietnamese: "Bánh Tráng Nướng",
    price: "$10",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Vietnamese fried spring rolls",
    vietnamese: "Chả giò chay",
    price: "$12",
    isVegan: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Vietnamese fried pork & prawn spring rolls",
    vietnamese: "Chả giò",
    price: "$15",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Crunchy Vietnamese salad with fried tofu",
    vietnamese: "Gỏi chay",
    price: "$14",
    isVegan: true,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Crunchy Vietnamese chicken salad",
    vietnamese: "Gỏi gà",
    price: "$16",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Crab noodle soup with brown noodles",
    vietnamese: "Bánh đa cua",
    price: "$24",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Chicken glass noodle soup",
    vietnamese: "Miến gà",
    price: "$20",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Spicy beef & pork noodle soup",
    vietnamese: "Bún bò",
    price: "$22",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Grilled beef wrapped in betel leaves",
    vietnamese: "Bò lá lốt",
    price: "$16",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Madame's premium beef pho",
    vietnamese: "Madame's phở bò",
    price: "$28",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Rice with grilled pork chop, meat loaf & sunny-side up egg",
    vietnamese: "Cơm sườn",
    price: "$22",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Vietnamese beef stew with crispy baguette",
    vietnamese: "Bò Kho bánh mì",
    price: "$20",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dry pork & seafood noodles",
    vietnamese: "Hủ tiếu khô",
    price: "$22",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Chicken pho",
    vietnamese: "Phở gà",
    price: "$22",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Southern grilled pork vermicelli",
    vietnamese: "Bún thịt nướng",
    price: "$21",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Fine rice vermicelli with grilled beef wrapped in betel leaves",
    vietnamese: "Bánh hỏi bò lá lốt",
    price: "$19",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function InRoomDining() {
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
        <div className="flex items-center justify-between mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dorsett-sg-s9hwY3ozDcbiBGJ3S2hcNZqPzuplDv.svg"
            alt="Dorsett Singapore Logo"
            width={204}
            height={72}
            className="mr-4"
          />
          <h1 className="text-4xl font-bold text-center text-purple-200">Take Out Dining Menu</h1>
        </div>
        <p className="text-center text-purple-100 mb-4">Exclusive for Dorsett Singapore guests</p>
        <p className="text-center text-purple-100 mb-8">
          Experience authentic Vietnamese and Chinese cuisine in the comfort of your room by Madame Chu, a restaurant
          just across our hotel lobby. You can contact us through WhatsApp or call us to make an order. Order and
          collect from the hotel reception, payment can be made via credit card upon collection.
        </p>

        <div className="text-center mb-8">
          <a
            href="https://wa.me/6582054725"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-green-500 transition duration-300 inline-flex items-center"
          >
            <WhatsApp className="mr-2" size={24} />
            Order via WhatsApp
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-200">Chinese Menu</h2>
          <p className="text-purple-100 mb-4">Available: 3pm - 10:30pm, Monday to Sunday</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chineseMenu.map((item, index) => (
              <div
                key={index}
                className="border border-purple-700 rounded-lg p-6 hover:bg-purple-900/50 transition duration-300"
              >
                <div className="mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-100">{item.name}</h3>
                <p className="text-purple-300 mb-2">{item.chinese}</p>
                <p className="text-purple-200 font-bold">{item.price}</p>
                {item.isVegan && (
                  <span className="inline-block px-2 py-1 text-sm bg-green-900 text-green-100 rounded mt-2">Vegan</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-200">Vietnamese Menu</h2>
          <p className="text-purple-100 mb-4">Available: 12pm - 10:30pm, Monday to Sunday</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vietnameseMenu.map((item, index) => (
              <div
                key={index}
                className="border border-purple-700 rounded-lg p-6 hover:bg-purple-900/50 transition duration-300"
              >
                <div className="mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-100">{item.name}</h3>
                <p className="text-purple-300 mb-2">{item.vietnamese}</p>
                <p className="text-purple-200 font-bold">{item.price}</p>
                {item.isVegan && (
                  <span className="inline-block px-2 py-1 text-sm bg-green-900 text-green-100 rounded mt-2">Vegan</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/6582054725"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-green-500 transition duration-300 inline-flex items-center"
          >
            <WhatsApp className="mr-2" size={24} />
            Order via WhatsApp
          </a>
        </div>

        <p className="text-center text-purple-100 mt-8">Call the restaurant or text WhatsApp to order: +65 8205 4725</p>
      </main>
    </div>
  )
}
