import Image from 'next/image'
import { ImageCarousel } from './ImageCarousel'

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-screen w-full overflow-hidden">
      <ImageCarousel />
      
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="w-full max-w-3xl mx-auto px-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MadameChu_Logo_Hero-1ieumt1XbiQmD8hsoVDWePYZnWSubS.png"
            alt="Madame Chu logo - Modern Vietnamese and Chinese Cuisine"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
