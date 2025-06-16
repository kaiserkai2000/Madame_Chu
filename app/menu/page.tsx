import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import Header from "../components/Header"

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Explore our diverse menu featuring both Chinese and Vietnamese cuisines. From appetizers to main courses, discover our unique blend of traditional and modern flavors.",
}

const chineseMenu = {
  appetisers: [
    {
      name: "Spicy firecracker chicken",
      chinese: "麻香辣子鸡丁",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Spicy%20firecracker%20chicken.png",
      alt: "Spicy firecracker chicken - A vibrant dish of diced chicken with chili",
    },
    {
      name: "Truffle French fries",
      chinese: "松露薯条",
      isVegan: true,
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Truffle%20French%20fries.jpg",
      alt: "Truffle French fries - Golden crispy fries with truffle seasoning",
    },
    {
      name: "Deep-fried charcoal crispy tofu",
      chinese: "黑炭炸豆腐",
      isVegan: true,
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Deep%20fried%20charcoal%20crispy%20tofu%20Vegan.png",
      alt: "Deep-fried charcoal crispy tofu - Black charcoal-coated crispy tofu cubes",
    },
    {
      name: "Crispy black garlic pork belly",
      chinese: "黑蒜酥脆五花肉",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Crispy%20black%20garlic%20pork%20belly.png",
      alt: "Crispy black garlic pork belly - Caramelized pork belly with black garlic sauce",
    },
    {
      name: "Shanghai smoked cod fish",
      chinese: "上海熏鳕鱼",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Shanghai%20smoked%20cod%20fish.png",
      alt: "Shanghai smoked cod fish - Delicately smoked cod fish, Shanghai style",
    },
    {
      name: "Crispy Cordycep flowers",
      chinese: "避风塘虫草花",
      isVegan: true,
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Crispy%20Cordycep%20flowers%20(Vegan).png",
      alt: "Crispy Cordycep flowers - Crispy fried cordycep mushrooms",
    },
    {
      name: "French bean with olive leaves and Sakura shrimps",
      chinese: "樱花虾榄菜炒四季豆",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/French%20bean%20with%20olive%20leaves%20and%20Sakura%20shrimps.png",
      alt: "French bean with olive leaves and Sakura shrimps - Stir-fried green beans with tiny pink shrimp",
    },
    {
      name: "Passion fruit tiger prawn ball",
      chinese: "百香果老虎虾球",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Passion%20fruit%20tiger%20prawn%20ball.png",
      alt: "Passion fruit tiger prawn ball - Golden fried prawn balls with passion fruit sauce",
    },
    {
      name: "Garlic Pea Sprout (Dou Miao) stir fry",
      chinese: "香炒豆苗",
      isVegan: true,
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Garlic%20Pea%20Sprout%20(Dou%20Miao)%20stir%20fry.jpg",
      alt: "Garlic Pea Sprout stir fry - Fresh pea sprouts stir-fried with garlic",
    },
  ],
  mains: [
    {
      name: "Black truffle seafood egg white fried rice",
      chinese: "黑松露蛋白炒饭",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Black%20truffle%20seafood%20egg%20white%20fried%20rice.png",
      alt: "Black truffle seafood egg white fried rice - Elegant white fried rice with seafood and truffle",
    },
    {
      name: "XO fried rice with crab meat",
      chinese: "XO蟹肉海鲜炒饭",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/XO%20fried%20rice%20with%20crab%20meat.png",
      alt: "XO fried rice with crab meat - Luxurious fried rice with fresh crab meat and XO sauce",
    },
    {
      name: "Shanghai noodle with scallops",
      chinese: "葱油带子捞上海面",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Shanghai%20noodle%20with%20scallops.png",
      alt: "Shanghai noodle with scallops - Shanghai-style noodles topped with pan-seared scallops",
    },
    {
      name: "Wok-fried seafood mee sua",
      chinese: "家乡海鲜面线",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Wok-fried%20seafood%20mee%20sua.png",
      alt: "Wok-fried seafood mee sua - Thin wheat noodles with assorted seafood",
    },
  ],
}

const vietnameseMenu = {
  appetisers: [
    {
      name: "Chả giò chay",
      description: "Fried Vegan spring rolls",
      isVegan: true,
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Fried%20Vegan%20spring%20rolls.jpg",
      alt: "Fried Vegan spring rolls - Crispy rolls filled with vegetables",
    },
    {
      name: "Chả giò 3 loại",
      description: "Fried spring rolls platter: Pork, Seafood, Vegetarian",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Fried%20spring%20rolls%20platter%20Pork%20Seafood%20Vegetarian.png",
      alt: "Fried spring rolls platter - Assortment of three different spring rolls",
    },
    {
      name: "Gỏi chay",
      description: "Crunchy Vietnamese Vegan salad with fried tofu",
      isVegan: true,
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Crunchy%20Vietnamese%20Vegan%20salad%20with%20fried%20tofu.jpg",
      alt: "Crunchy Vietnamese Vegan salad - Fresh vegetables with fried tofu",
    },
    {
      name: "Gỏi gà",
      description: "Crunchy Vietnamese chicken salad",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Crunchy%20Vietnamese%20chicken%20salad.png",
      alt: "Crunchy Vietnamese chicken salad - Shredded chicken with fresh herbs and vegetables",
    },
    {
      name: "Gỏi Bò",
      description: "Crunchy Vietnamese beef salad",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Crunchy%20Vietnamese%20beef%20salad.jpg",
      alt: "Crunchy Vietnamese beef salad - Tender sliced beef with fresh herbs",
    },
    {
      name: "Nghêu hấp sả",
      description: "Spicy steamed clams",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Spicy%20steamed%20clams.png",
      alt: "Spicy steamed clams - Clams steamed with lemongrass and chili",
    },
    {
      name: "Bánh Khọt",
      description: "Mini pancakes with prawn and coconut cream",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Mini%20pancakes%20with%20prawn%20and%20coconut%20cream.jpg",
      alt: "Mini pancakes with prawn - Crispy rice pancakes topped with prawns",
    },
    {
      name: "Bánh Tráng Nướng",
      description: "Vietnamese rice paper pizza",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Vietnamese%20rice%20paper%20pizza.jpg",
      alt: "Vietnamese rice paper pizza - Crispy rice paper with savory toppings",
    },
    {
      name: "Bò lá lốt",
      description: "Grilled beef wrapped in betel leaves",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Grilled%20beef%20wrapped%20in%20betel%20leaves.png",
      alt: "Grilled beef wrapped in betel leaves - Aromatic beef rolls",
    },
  ],
  mains: [
    {
      name: "Bún chả",
      description: "Grilled pork with dipping rice vermicelli",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Grilled%20pork%20with%20dipping%20rice%20vermicelli.jpg",
      alt: "Grilled pork with rice vermicelli - Chargrilled pork with noodles",
    },
    {
      name: "Bánh đa cua",
      description: "Crab noodle soup with brown noodles",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Crab%20noodle%20soup%20with%20brown%20noodles.jpg",
      alt: "Crab noodle soup - Rich crab broth with brown rice noodles",
    },
    {
      name: "Miến gà",
      description: "Chicken glass noodles soup",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Chicken%20glass%20noodles%20soup.png",
      alt: "Chicken glass noodles soup - Clear broth with tender chicken and glass noodles",
    },
    {
      name: "Bún bò",
      description: "Spicy beef noodle soup",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Spicy%20beef%20noodle%20soup.png",
      alt: "Spicy beef noodle soup - Aromatic beef broth with rice noodles",
    },
    {
      name: "Bánh hỏi bò lá lốt",
      description: "Fine rice vermicelli with grilled beef wrapped in betel leaves",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Fine%20rice%20vermicelli%20with%20grilled%20beef%20wrapped%20in%20betel%20leaves.jpg",
      alt: "Fine rice vermicelli with beef in betel leaves - Delicate rice noodles with beef rolls",
    },
    {
      name: "Phở bò",
      description: "Premium Beef Pho",
      image: "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Wagyu%20Beef%20Pho.png",
      alt: "Premium Beef Pho - Vietnamese noodle soup with premium beef slices",
    },
    {
      name: "Bún thịt nướng",
      description: "Southern Dry Rice Vermicelli with grilled Pork and fried spring roll",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Southern%20Dry%20Rice%20Vermicelli%20with%20grilled%20Pork%20and%20fried%20spring%20roll.jpg",
      alt: "Southern Dry Rice Vermicelli - Grilled pork and spring roll with vermicelli",
    },
    {
      name: "Phở gà",
      description: "Chicken Pho",
      image: "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Chicken%20Pho.jpg",
      alt: "Chicken Pho - Traditional Vietnamese chicken noodle soup",
    },
    {
      name: "Hủ tiếu khô",
      description: "Dry pork and seafood noodles",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Dry%20pork%20and%20seafood%20noodles.jpg",
      alt: "Dry pork and seafood noodles - Rice noodles with pork and seafood",
    },
    {
      name: "Cơm suon",
      description: "Rice with grilled pork chop, meat loaf and sunny-side up",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Rice%20with%20grilled%20pork%20chop%2C%20meat%20loaf%20and%20sunny-side%20up.png",
      alt: "Rice with grilled pork chop - Complete meal with rice, pork, and egg",
    },
    {
      name: "Bò Kho bánh mì",
      description: "Vietnamese beef stew with crispy baguette",
      image:
        "https://raw.githubusercontent.com/kaiserkai2000/Madame_Chu/main/public/images/Vietnamese%20beef%20stew%20with%20crispy%20baguette.png",
      alt: "Vietnamese beef stew with baguette - Rich beef stew served with crusty bread",
    },
  ],
}

export default function FullMenu() {
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
      <div className="container mx-auto px-6 py-12 pt-24">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-200">Our Menu</h1>

        {/* Chinese Menu Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-200">Chinese Menu (Dining Hall)</h2>

          {/* Appetisers */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Appetisers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chineseMenu.appetisers.map((item, index) => (
                <div
                  key={index}
                  className="border border-purple-700 rounded-lg p-6 hover:bg-purple-900/50 transition duration-300"
                >
                  <div className="mb-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-100">{item.name}</h4>
                  <p className="text-purple-300 mb-2">{item.chinese}</p>
                  {item.isVegan && (
                    <span className="inline-block px-2 py-1 text-sm bg-green-900 text-green-100 rounded">Vegan</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mains */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Mains</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chineseMenu.mains.map((item, index) => (
                <div
                  key={index}
                  className="border border-purple-700 rounded-lg p-6 hover:bg-purple-900/50 transition duration-300"
                >
                  <div className="mb-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-100">{item.name}</h4>
                  <p className="text-purple-300">{item.chinese}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vietnamese Menu Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-purple-200">Vietnamese Menu (Dining Hall)</h2>

          {/* Appetisers */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Appetisers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vietnameseMenu.appetisers.map((item, index) => (
                <div
                  key={index}
                  className="border border-purple-700 rounded-lg p-6 hover:bg-purple-900/50 transition duration-300"
                >
                  <div className="mb-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-100">{item.name}</h4>
                  <p className="text-purple-300 mb-2">{item.description}</p>
                  {item.isVegan && (
                    <span className="inline-block px-2 py-1 text-sm bg-green-900 text-green-100 rounded">Vegan</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mains */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Mains</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vietnameseMenu.mains.map((item, index) => (
                <div
                  key={index}
                  className="border border-purple-700 rounded-lg p-6 hover:bg-purple-900/50 transition duration-300"
                >
                  <div className="mb-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-100">{item.name}</h4>
                  <p className="text-purple-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="bg-purple-600 text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-purple-500 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
