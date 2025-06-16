import { Suspense } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import MenuPreview from "./components/MenuPreview"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Dining from "./components/Dining"
import ScrollHandler from "./components/ScrollHandler"

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <Header />
      <main>
        <Hero />
        <About />
        <Dining />
        <MenuPreview />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
