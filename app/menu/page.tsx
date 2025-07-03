import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import Header from "../components/Header"

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Explore our diverse menu featuring both Chinese and Vietnamese cuisines. From appetizers to main courses, discover our unique blend of traditional and modern flavors.",
}

// Vietnamese dishes (1-18 + final dish 39)
const vietnameseMenu = [
  {
    name: "Cha gio chay",
    description: "Fried Vegan spring rolls",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.Cha%20gio%20chayFried%20Vegan%20spring%20rolls-Skz7UYvEZZ3poeb5gghCLtlwM5J5NZ.png",
    alt: "Cha gio chay - Fried Vegan spring rolls",
    isVegan: true,
  },
  {
    name: "Cha gio",
    description: "Fried Pork & Prawn Spring Rolls",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.Cha%20gio%20Fried%20Pork%20%26Prawn%20Spring%20Rolls-MiSSrCuzZucd2dhWe7KEXJ03FVWXBM.jpeg",
    alt: "Cha gio - Fried Pork & Prawn Spring Rolls",
  },
  {
    name: "Banh Khot",
    description: "Mini pancakes with prawn and coconut cream",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.Banh%20KhotMini%20pancakes%20with%20prawn%20and%20coconut%20cream-IELODBqJptObzvXqCFvdMjiiwpqreB.jpeg",
    alt: "Banh Khot - Mini pancakes with prawn and coconut cream",
  },
  {
    name: "Bo la lot",
    description: "Grilled beef wrapped in betel leaves",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.Bo%20la%20lotGrilled%20beef%20wrapped%20in%20betel%20leaves-AYx4m1v0LffZyYH4Tucjp5B89Hgath.jpeg",
    alt: "Bo la lot - Grilled beef wrapped in betel leaves",
  },
  {
    name: "Banh Trang Nuong",
    description: "Vietnamese rice paper pizza",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.Banh%20Trang%20NuongVietnamese%20rice%20paper%20pizza-SuJilow4Z0Iv1AmpIyHPz5a3vBXwPa.jpeg",
    alt: "Banh Trang Nuong - Vietnamese rice paper pizza",
  },
  {
    name: "Pho ga",
    description: "Chicken Pho",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.Pho%20ga%20Chicken%20Pho-UHUh6RqIQ18zMwHnpa1oXWb1IvqjHP.jpeg",
    alt: "Pho ga - Chicken Pho",
  },
  {
    name: "Madame's Chu Premium pho",
    description: "Premium beef pho",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.Madame%27s%20Chu%20Premium%20pho-vMGIlIeLP1V0vzrpRJaseErzhU9FnO.jpeg",
    alt: "Madame's Chu Premium pho - Premium beef pho",
  },
  {
    name: "Tomahawk beef pho (2-3pax)",
    description: "Tomahawk beef pho for 2-3 people",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.Tomahawk%20beef%20pho%20%282-3pax%29-oUslsWztVIaC5h2QzJVJBpcMXF9vKX.jpeg",
    alt: "Tomahawk beef pho (2-3pax) - Tomahawk beef pho for 2-3 people",
  },
  {
    name: "Goi chay",
    description: "Crunchy Vietnamese Vegan salad with fried tofu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9.Goi%20chayCrunchy%20Vietnamese%20Vegan%20salad%20with%20fried%20tofu-b8r8hUetHmT4lNHOu1a75bY63YJ4Ds.jpeg",
    alt: "Goi chay - Crunchy Vietnamese Vegan salad with fried tofu",
    isVegan: true,
  },
  {
    name: "Goi Ga",
    description: "Crunchy Vietnamese chicken salad",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.Goi%20GaCrunchy%20Vietnamese%20chicken%20salad-rjN0WfAM2C1MS2Em9qGpllgKRuGWYX.png",
    alt: "Goi Ga - Crunchy Vietnamese chicken salad",
  },
  {
    name: "Mien ga",
    description: "Chicken glass noodles soup",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12.Mien%20gaChicken%20glass%20noodles%20soup-CDtUfCFdOIHUGvjY5HKKfoDCDKKAp4.jpeg",
    alt: "Mien ga - Chicken glass noodles soup",
  },
  {
    name: "Hu tieu kho",
    description: "Dry pork and seafood noodles",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13.Hu%20tieu%20khoDry%20pork%20and%20seafood%20noodles-w8UommWJ24BexU3YiVXyuC7lJa5IXY.jpeg",
    alt: "Hu tieu kho - Dry pork and seafood noodles",
  },
  {
    name: "Banh da cua",
    description: "Crab noodle soup with brown noodles",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14.Banh%20da%20cuaCrab%20noodle%20soup%20with%20brown%20noodles-nMJjjzpREuqMM87wv6GYqsvJiJ6vlS.jpeg",
    alt: "Banh da cua - Crab noodle soup with brown noodles",
  },
  {
    name: "Bun bo",
    description: "Spicy beef noodle soup",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15.Bun%20boSpicy%20beef%20noodle%20soup-Uw5fgyf9smq50VFzowUPTcx2Tljom1.jpeg",
    alt: "Bun bo - Spicy beef noodle soup",
  },
  {
    name: "Com suon",
    description: "Rice with grilled pork chop, meat loaf and sunny-side up",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16.Com%20suon%20Rice%20wgrilled%20pork%20chop%2C%20meat%20loaf%20and%20sunny-side%20up-Uk2eHF6U4SMRhS4vgBm69GK5YJS0M0.jpeg",
    alt: "Com suon - Rice with grilled pork chop, meat loaf and sunny-side up",
  },
  {
    name: "Bun cha",
    description: "Grilled pork with dipping rice vermicelli",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17.Bun%20chaGrilled%20pork%20with%20dipping%20rice%20vermicelli-6qjbswJXdyZC2fy9qsjQ4koNZ0wExO.jpeg",
    alt: "Bun cha - Grilled pork with dipping rice vermicelli",
  },
  {
    name: "Bo Kho banh mi",
    description: "Vietnamese beef stew with crispy baguette",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18.Bo%20Kho%20banh%20miVietnamese%20beef%20stew%20with%20crispy%20baguette-bm8y0uKNgup1yQB2WI6LLsfePpsoPf.jpeg",
    alt: "Bo Kho banh mi - Vietnamese beef stew with crispy baguette",
  },
  {
    name: "Spicy steamed clams",
    vietnamese: "Nghêu hấp sả",
    description: "Spicy steamed clams with lemongrass",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/39.%20Special%20Menu%20Spicy%20steamed%20clams-yMYMMZUvH3vlNfmt7CgnnSuM8HFMwn.png",
    alt: "Spicy steamed clams - Vietnamese style steamed clams with dipping sauce",
  },
]

// Complete Chinese dishes (19-38)
const chineseMenu = [
  {
    name: "Spicy firecracker chicken",
    chinese: "麻辣辣子鸡丁",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19.%E9%BA%BB%E8%BE%A3%E8%BE%A3%E5%AD%90%E9%B8%A1%E4%B8%81Spicy%20firecracker%20chicken-OMV3g5ccRjCv98XIvltl0jwK63Fm5J.jpeg",
    alt: "Spicy firecracker chicken - Diced chicken with chili and spices",
  },
  {
    name: "Cumin Bullet Ribs",
    chinese: "孜然烤子弹排骨",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20.%E5%AD%9C%E7%84%B6%E7%83%A4%E5%AD%90%E5%BC%B9%E6%8E%92%E9%AA%A8%20Cumin%20Bullet%20Ribs-i33GSaqyO56NgsgH4GNzf0G7x0nTnp.jpeg",
    alt: "Cumin Bullet Ribs - Spiced grilled ribs with cumin",
  },
  {
    name: "Piggy On Fire",
    chinese: "火焰八戒",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21.%E7%81%AB%E7%84%B0%E5%85%AB%E6%88%92Piggy%20On%20Fire-se9CYg3gn2FiDmW5HifN10hUXBkeXm.jpeg",
    alt: "Piggy On Fire - Flaming pork dish served on sizzling plate",
  },
  {
    name: "Katsu Pork Collar",
    chinese: "秘制香脆慢煮肉",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22.%E7%A7%98%E5%88%B6%E9%A6%99%E8%84%86%E6%85%A2%E7%85%AE%E8%82%89Katsu%20Pork%20Collar-qVoISfZPSmbD14miou4G9cBApZ7EGt.jpeg",
    alt: "Katsu Pork Collar - Sliced pork collar with crispy coating and dipping sauce",
  },
  {
    name: "Fire & Ice Pork",
    chinese: "冰镇古老肉",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23.%E5%86%B0%E9%95%87%E5%8F%A4%E8%80%81%E8%82%89%20Fire%20%26%20Ice%20Pork-Zyupr53eU38vqwRfjEogIoVN0Wvk26.jpeg",
    alt: "Fire & Ice Pork - Sweet and sour pork served in ice bowl",
  },
  {
    name: "French bean with olive leaves & Sakura shrimp",
    chinese: "樱花虾榄菜炒四季豆",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24.%E6%A8%B1%E8%8A%B1%E8%99%BE%E6%A6%84%E8%8F%9C%E7%82%92%E5%9B%9B%E5%AD%A3%E8%B1%86%20French%20bean%20with%20olive%20leaves%20and%20Sakura%20shrimps-9ZRIEYPSvwLAZyjOiPhL5JxVc4zd5n.png",
    alt: "French bean with olive leaves & Sakura shrimp - Stir-fried green beans with sakura shrimp",
  },
  {
    name: "Passion fruit tiger prawn balls",
    chinese: "百香果老虎虾球",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25.%E7%99%BE%E9%A6%99%E6%9E%9C%E8%80%81%E8%99%8E%E8%99%BE%E7%90%83%20Passion%20fruit%20tiger%20prawn%20ball-X1RFHC6MRWxtYplJsjAR580RYyasaJ.jpeg",
    alt: "Passion fruit tiger prawn balls - Golden fried prawn balls with passion fruit sauce",
  },
  {
    name: "Seven Spice Pork",
    chinese: "七味小鲜肉",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26.%E4%B8%83%E5%91%B3%E5%B0%8F%E9%B2%9C%E8%82%89%20Seven%20Spice%20Pork-0dTVAITnwcS9F1c5cDeAqH5Pv0XHln.jpeg",
    alt: "Seven Spice Pork - Grilled pork with vegetables on wooden serving board",
  },
  {
    name: "Crispy black garlic pork belly",
    chinese: "黑蒜酥脆五花肉",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27.%E9%BB%91%E8%92%9C%E9%85%A5%E8%84%86%E4%BA%94%E8%8A%B1%E8%82%89Crispy%20black%20garlic%20pork%20belly-r62Taxb5rAWBnOYnb10JrmC56QC20S.png",
    alt: "Crispy black garlic pork belly - Crispy pork belly pieces with black garlic",
  },
  {
    name: "Deep-fried charcoal crispy tofu",
    chinese: "黑炭炸豆腐",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28.%E9%BB%91%E7%82%AD%E7%82%B8%E8%B1%86%E8%85%90Deep-fried%20bamboo%20with%20charcoal%20crispy%20tofu-d9cgMS3hGdcgJDuU4SBXidrFMDU0q0.png",
    alt: "Deep-fried charcoal crispy tofu - Black charcoal-coated fried tofu balls",
    isVegan: true,
  },
  {
    name: "Thai Fusion Grilled Squid",
    chinese: "泰式墨鱼",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29%E6%B3%B0%E5%BC%8F%E5%A2%A8%E9%B1%BCThai%20Fusion%20Grilled%20Squid-s6dr9dRyQkGuVJbcN41SYWcQsfJaNd.jpeg",
    alt: "Thai Fusion Grilled Squid - Grilled squid in yellow curry sauce",
  },
  {
    name: "Cheezy Wedges",
    chinese: "贵州酱薯块",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30.%E8%B4%B5%E5%B7%9E%E9%85%B1%E8%96%AF%E5%9D%97%20Cheezy%20Wedges-IU4cFnIYQeRYdbhD0W5pRVBYgqQgVe.jpeg",
    alt: "Cheezy Wedges - Potato wedges with dipping sauces",
    isVegan: true,
  },
  {
    name: "Shanghai smoked fish",
    chinese: "上海烟熏鱼",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31.%E4%B8%8A%E6%B5%B7%E7%83%9F%E7%86%8F%E9%B1%BCShanghai%20smoked%20fish-Jg7NEjG1W0SNqGtb5tA759wR35xrR5.png",
    alt: "Shanghai smoked fish - Glazed smoked fish pieces with microgreens",
  },
  {
    name: "Handmade Crispy Chili Crab Cakes",
    chinese: "辣椒蟹肉饼",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/32.%E8%BE%A3%E6%A4%92%E8%9F%B9%E8%82%89%E9%A5%BCHandmade%20Crispy%20Chili%20Crab%20Cakes-LeCFWSemz1JKFOhp7HfmWbnTDMjhOl.jpeg",
    alt: "Handmade Crispy Chili Crab Cakes - Golden fried crab cakes with lettuce garnish",
  },
  {
    name: "Fried Pasta with Chinese Sausage",
    chinese: "腊味不是稻",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33.%E8%85%8A%E5%91%B3%E4%B8%8D%E6%98%AF%E7%A8%BBFried%20Pasta%20w%20Chinese%20Sausage-kejA28HlsjBcznNHelvzZNc7GeWpmI.jpeg",
    alt: "Fried Pasta with Chinese Sausage - Golden fried noodles with Chinese sausage",
  },
  {
    name: "Volcanic Crab Cheese Rice",
    chinese: "辣椒螃蟹芝士拌饭",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/34.%E8%BE%A3%E6%A4%92%E8%9E%83%E8%9F%B9%E8%8A%9D%E5%A3%AB%E6%8B%8C%E9%A5%ADVolcanic%20Crab%20Cheese%20Rice-ycnr5hWkXGq9b0jFs6F4ttsEFMigIB.jpeg",
    alt: "Volcanic Crab Cheese Rice - Sizzling rice dish with melted cheese on hot plate",
  },
  {
    name: "Black truffle seafood egg white fried rice",
    chinese: "黑松露蛋白炒饭",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/35.%E9%BB%91%E6%9D%BE%E9%9C%B2%E8%9B%8B%E7%99%BD%E7%82%92%E9%A5%ADBlack%20truffle%20seafood%20egg%20white%20fried%20rice-Mujeg9bkCw82H2cnVj9yff9l0WggMy.jpeg",
    alt: "Black truffle seafood egg white fried rice - Light colored fried rice with seafood and roe",
  },
  {
    name: "XO fried rice with crab meat",
    chinese: "XO蟹肉海鲜炒饭",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/36.xo%20%E8%9F%B9%E8%82%89%E6%B5%B7%E9%B2%9C%E7%82%92%E9%A5%AD%C2%AD%20XO%20fried%20rice%20with%20crab%20meat-DIwU8PoVqYb4Rnf91u4UUNreU8V93z.jpeg",
    alt: "XO fried rice with crab meat - Fried rice with crab meat and XO sauce",
  },
  {
    name: "Shanghai noodles with scallops",
    chinese: "葱油带子捞上海面",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/37.%E8%91%B1%E6%B2%B9%E5%B8%A6%E5%AD%90%E6%8D%9E%E4%B8%8A%E6%B5%B7%E9%9D%A2shangai%20noodlesw%3Acrispy%20prawn%20balls-LbLOQOjigPj7QL2ZiZgAfCjg0yhYXd.jpeg",
    alt: "Shanghai noodles with scallops - Thin noodles with scallops and crispy prawn balls",
  },
  {
    name: "Tiger Prawn Porridge with crispy grains",
    chinese: "虾汤泡饭",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/38.%E8%99%BE%E6%B1%A4%E6%B3%A1%E9%A5%AD%C2%ADTiger%20Pran%20Porridge%20w%20crispy%20Grains-UogwWg42EOs99T85UmqBVHvUHXKY8Y.jpeg",
    alt: "Tiger Prawn Porridge with crispy grains - Rice porridge with prawns and crispy grains",
  },
]

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
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-200">Our Complete Menu</h1>

        <div className="text-center mb-12">
          <p className="text-purple-100 text-lg">
            Discover our authentic Vietnamese and Chinese cuisine
          </p>
        </div>

        {/* Vietnamese Menu Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-200">Vietnamese Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vietnameseMenu.map((item, index) => (
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
                {item.vietnamese && <p className="text-purple-300 mb-2 italic">{item.vietnamese}</p>}
                <p className="text-purple-300 mb-2">{item.description}</p>
                {item.isVegan && (
                  <span className="inline-block px-2 py-1 text-sm bg-green-900 text-green-100 rounded">Vegan</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chinese Menu Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-200">Chinese Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chineseMenu.map((item, index) => (
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
