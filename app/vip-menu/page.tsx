import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import Header from "../components/Header"

export const metadata: Metadata = {
  title: "VIP Menu | Madame Chu",
  description:
    "Experience our exclusive VIP dining with carefully curated multi-course menus featuring premium ingredients and signature dishes.",
}

const vipMenus = [
  {
    price: "$88",
    courses: [
      {
        category: "Appetizers",
        chinese: "前菜",
        dishes: [
          {
            name: "Black truffle edamame",
            chinese: "黑松露百合毛豆",
          },
          {
            name: "Cherry tomatoes with sour plum",
            chinese: "话梅圣女果",
          },
          {
            name: "Crispy white bait fish and ice plant salad",
            chinese: "香脆白饭鱼冰菜藜麦沙律",
          },
        ],
      },
      {
        category: "Soup",
        chinese: "汤品",
        dishes: [
          {
            name: "Hot and sour soup with fresh scallops",
            chinese: "菊花带子酸辣汤",
          },
        ],
      },
      {
        category: "Main Course",
        chinese: "主菜",
        dishes: [
          {
            name: "Passion fruit tiger prawn balls",
            chinese: "百香果老虎虾球",
          },
          {
            name: "Kung pao chicken with pine nuts",
            chinese: "松子京葱公保鸡丁",
          },
          {
            name: "Asparagus in XO sauce with sakura shrimps",
            chinese: "樱花虾XO芦笋",
          },
          {
            name: "Fusion stir-fried seafood pasta",
            chinese: "海鲜不是稻",
          },
        ],
      },
      {
        category: "Seasonal Desserts",
        chinese: "甜品",
        dishes: [],
      },
    ],
  },
  {
    price: "$128",
    courses: [
      {
        category: "Appetizers",
        chinese: "前菜",
        dishes: [
          {
            name: "Sichuan kou shui chicken in chilli oil sauce",
            chinese: "四川口水鸡",
          },
          {
            name: "Scallop quinoa tart",
            chinese: "带子藜麦塔",
          },
          {
            name: "Crispy monkey head mushroom",
            chinese: "脆膳猴头菇",
          },
        ],
      },
      {
        category: "Soup",
        chinese: "汤品",
        dishes: [
          {
            name: "Double treasures fish maw soup",
            chinese: "蟹肉花胶海味羹",
          },
        ],
      },
      {
        category: "Main Course",
        chinese: "主菜",
        dishes: [
          {
            name: "Spicy stir-fried pork belly with celtuce",
            chinese: "香辣莴笋五花肉",
          },
          {
            name: "Grilled silver cod fish with bush honey",
            chinese: "灌木蜂蜜烤银鳕鱼",
          },
          {
            name: "Lily vegetable broth in jade rings",
            chinese: "百合金汤时蔬玉环",
          },
          {
            name: "Black truffle seafood egg white fried rice",
            chinese: "黑松露蛋白炒饭",
          },
        ],
      },
      {
        category: "Seasonal Desserts",
        chinese: "甜品",
        dishes: [],
      },
    ],
  },
  {
    price: "$168",
    courses: [
      {
        category: "Appetizers",
        chinese: "前菜",
        dishes: [
          {
            name: "Green sichuan peppercorn abalone mushrooms",
            chinese: "青花椒莴笋鲍鱼菇",
          },
          {
            name: "Osmanthus sweet potato and yam petals",
            chinese: "桂花紫薯山药",
          },
          {
            name: "Shanghai smoked cod fish",
            chinese: "上海蜜汁熏鳕鱼",
          },
          {
            name: "Deep-fried charcoal crispy tofu",
            chinese: "黑炭炸豆腐",
          },
        ],
      },
      {
        category: "Soup",
        chinese: "汤品",
        dishes: [
          {
            name: "Shark's fin in thick chicken stock",
            chinese: "浓鸡汤大鲍翅",
          },
        ],
      },
      {
        category: "Main Course",
        chinese: "主菜",
        dishes: [
          {
            name: "Pan-fried US marbled beef with red wine sauce",
            chinese: "生煎美国雪花肥牛红酒汁",
          },
          {
            name: "Golden garlic and white sauce baked half lobster",
            chinese: "金蒜白汁焗半边龙虾",
          },
          {
            name: "Rainbow vegetables",
            chinese: "彩虹缤纷番茄汤",
          },
          {
            name: "Rainbow cold noodles with Ikura and abalone",
            chinese: "五彩鲑鱼子鲍鱼冷面",
          },
        ],
      },
      {
        category: "Seasonal Desserts",
        chinese: "甜品",
        dishes: [],
      },
    ],
  },
]

export default function VIPMenu() {
  return (
    <div
      className="min-h-screen text-gray-800 relative"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.65)),
          url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer.jpg-H8A3pv9fNAfHzFwx2VknQ91QZZHntK.jpeg')
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "500px",
      }}
    >
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-yellow-700">VIP Menu</h1>
          <p className="text-gray-800 text-lg max-w-3xl mx-auto font-medium">
            Experience our exclusive VIP dining with carefully curated multi-course menus featuring premium ingredients
            and signature dishes. Perfect for special occasions and intimate gatherings.
          </p>
        </div>

        {/* VIP Room Images - Moved to top */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-700">VIP Dining Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue_VIP.jpg-dvHxmA8zBuT9LeRY5IZRRZCeqGI9Y7.jpeg"
                alt="VIP Room - Elegant round table with orange chairs and cherry blossom murals"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Madame%20Chu%20venue%20vip%20food.jpg-T7kcyTsMQDWqXg8mGIAogDXTP67mWs.jpeg"
                alt="VIP Dining - Luxurious table setting with multiple Chinese dishes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {vipMenus.map((menu, menuIndex) => (
            <div
              key={menuIndex}
              className="bg-white/70 backdrop-blur-md border-2 border-yellow-300 rounded-lg p-8 hover:shadow-2xl hover:bg-white/80 transition-all duration-300 relative shadow-xl"
            >
              {/* Price Header */}
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white text-3xl font-bold py-4 px-6 rounded-full inline-block shadow-xl">
                  {menu.price}
                </div>
              </div>

              {/* Menu Courses */}
              <div className="space-y-6">
                {menu.courses.map((course, courseIndex) => (
                  <div key={courseIndex}>
                    <div className="mb-4 border-b border-yellow-200 pb-2">
                      <h3 className="text-xl font-bold text-yellow-700 mb-1">{course.category}</h3>
                      <p className="text-yellow-600 text-sm font-medium">{course.chinese}</p>
                    </div>

                    {course.dishes.length > 0 ? (
                      <div className="space-y-3">
                        {course.dishes.map((dish, dishIndex) => (
                          <div key={dishIndex} className="pl-4 border-l-2 border-yellow-200">
                            <h4 className="text-gray-900 font-medium leading-relaxed">{dish.name}</h4>
                            <p className="text-yellow-600 text-sm">{dish.chinese}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="pl-4 border-l-2 border-yellow-200">
                        <p className="text-yellow-700 italic">Seasonal selection</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Booking Information */}
        <div className="bg-white/60 backdrop-blur-md border border-yellow-300 rounded-lg p-8 mb-12 shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-yellow-700 text-center">VIP Room Reservations</h3>
          <div className="text-center space-y-4">
            <p className="text-gray-800 font-medium">
              Our three exclusive VIP rooms offer an intimate dining experience perfect for special occasions, business
              meetings, or private celebrations.
            </p>
            <p className="text-gray-800 font-medium">
              For VIP bookings and group reservations above 8 guests, please contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:info@virtureventure.org"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-3 px-6 rounded-full font-semibold hover:from-yellow-700 hover:to-yellow-600 transition duration-300 shadow-xl"
              >
                Email: info@virtureventure.org
              </a>
              <a
                href="https://sevn.ly/xIfboARl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-3 px-6 rounded-full font-semibold hover:from-yellow-700 hover:to-yellow-600 transition duration-300 shadow-xl"
              >
                Book VIP Online
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-3 px-8 rounded-full text-xl font-semibold hover:from-yellow-700 hover:to-yellow-600 transition duration-300 mr-4 shadow-xl"
          >
            Back to Home
          </Link>
          <Link
            href="/menu"
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-3 px-8 rounded-full text-xl font-semibold hover:from-yellow-700 hover:to-yellow-600 transition duration-300 shadow-xl"
          >
            View Regular Menu
          </Link>
        </div>
      </div>
    </div>
  )
}
