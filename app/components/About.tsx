import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
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
        <div className="relative flex justify-center items-center mb-8">
          {/* Decorative lips image */}
          <div className="absolute left-1/3 -translate-x-3/4 opacity-20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/madame_lips_pink-cHQv3vQzspnDMl1LKWRxkrkWD2KfQe.png"
              alt=""
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-purple-200 relative z-10">ABOUT THE MADAME</h2>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-purple-100">
            Madame Chu is a dining experience in Chinatown, Singapore, offering a sophisticated twist on beloved
            Vietnamese and Chinese cuisine.
          </p>
          <p className="text-purple-100">
            Madame Chu reimagines Vietnamese dining by blending traditional flavors with contemporary culinary
            techniques to craft a truly unique gastronomic experience. Set in a lively, high-energy space, the
            restaurant captures the rich culture and vibrant spirit of Vietnam, offering guests an unforgettable journey
            where flavor and ambiance come together seamlessly.
          </p>
        </div>
      </div>
    </section>
  )
}
