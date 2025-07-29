"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Instagram, Facebook } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Initialize SevenRooms widget for mobile button when menu opens
  useEffect(() => {
    if (isMenuOpen && (window as any).SevenroomsWidget) {
      // Small delay to ensure the mobile button is rendered
      setTimeout(() => {
        const mobileButton = document.getElementById("sr-res-root-mobile")
        if (mobileButton && !mobileButton.hasAttribute("data-sr-initialized")) {
          try {
            ;(window as any).SevenroomsWidget.init({
              venueId: "madamechu",
              triggerId: "sr-res-root-mobile",
              type: "reservations",
              styleButton: false,
              clientToken: "",
            })
            mobileButton.setAttribute("data-sr-initialized", "true")
            console.log("Mobile reservation button initialized")
          } catch (error) {
            console.error("Error initializing mobile reservation button:", error)
          }
        }
      }, 100)
    }
  }, [isMenuOpen])

  return (
    <header className="bg-black/80 backdrop-blur-sm fixed w-full z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-purple-200">
            MADAME CHU
          </Link>

          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <a
              href="https://www.instagram.com/madamechu_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-purple-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61568614012563"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-purple-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>

            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="md:hidden text-purple-200">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/menu" className="text-purple-200 hover:text-purple-400 transition-colors">
                Menu
              </Link>
              <Link href="/vip-menu" className="text-purple-200 hover:text-purple-400 transition-colors">
                VIP Menu
              </Link>
              <Link href="/recommendations" className="text-purple-200 hover:text-purple-400 transition-colors">
                Recommendations
              </Link>
              <button
                id="sr-res-root"
                className="text-purple-200 hover:text-purple-400 transition-colors cursor-pointer"
              >
                Reservations
              </button>
              <Link
                href={pathname === "/" ? "/#contact" : "/?scrollTo=contact"}
                className="text-purple-200 hover:text-purple-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/menu"
              className="block text-purple-200 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/vip-menu"
              className="block text-purple-200 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              VIP Menu
            </Link>
            <Link
              href="/recommendations"
              className="block text-purple-200 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recommendations
            </Link>
            <button
              id="sr-res-root-mobile"
              className="block text-purple-200 hover:text-purple-400 transition-colors cursor-pointer text-left w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservations
            </button>
            <Link
              href={pathname === "/" ? "/#contact" : "/?scrollTo=contact"}
              className="block text-purple-200 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
