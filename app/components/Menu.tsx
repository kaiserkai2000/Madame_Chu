const menuItems = [
  { name: 'Pho Bo', description: 'Traditional Vietnamese beef noodle soup', price: '$18' },
  { name: 'Banh Mi', description: 'Vietnamese baguette with various fillings', price: '$12' },
  { name: 'Goi Cuon', description: 'Fresh spring rolls with prawns and herbs', price: '$14' },
  { name: 'Ca Kho To', description: 'Caramelized fish in clay pot', price: '$22' },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-purple-900 to-purple-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-200">OUR MENU</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="border border-purple-700 rounded-lg p-6 hover:bg-purple-900/50 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-purple-100">{item.name}</h3>
              <p className="text-purple-300 mb-4">{item.description}</p>
              <p className="text-purple-200 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
