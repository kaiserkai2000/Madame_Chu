"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function SevenRoomsWidget() {
  useEffect(() => {
    const initializeAllWidgets = () => {
      if (typeof window !== "undefined" && (window as any).SevenroomsWidget) {
        try {
          // Initialize main header button
          const headerButton = document.getElementById("sr-res-root")
          if (headerButton) {
            ;(window as any).SevenroomsWidget.init({
              venueId: "madamechu",
              triggerId: "sr-res-root",
              type: "reservations",
              styleButton: false,
              clientToken: "",
            })
            console.log("Header button initialized")
          }

          // Initialize mobile header button
          const mobileButton = document.getElementById("sr-res-root-mobile")
          if (mobileButton) {
            ;(window as any).SevenroomsWidget.init({
              venueId: "madamechu",
              triggerId: "sr-res-root-mobile",
              type: "reservations",
              styleButton: false,
              clientToken: "",
            })
            console.log("Mobile button initialized")
          }

          // Initialize dining section button
          const diningButton = document.getElementById("sr-res-root-dining")
          if (diningButton) {
            ;(window as any).SevenroomsWidget.init({
              venueId: "madamechu",
              triggerId: "sr-res-root-dining",
              type: "reservations",
              styleButton: false,
              clientToken: "",
            })
            console.log("Dining button initialized")
          }

          console.log("All SevenRooms widgets initialized successfully")
        } catch (error) {
          console.error("Error initializing SevenRooms widgets:", error)
        }
      }
    }

    // Try to initialize immediately if script is already loaded
    if ((window as any).SevenroomsWidget) {
      initializeAllWidgets()
    }

    // Also set up a retry mechanism
    const retryInterval = setInterval(() => {
      if ((window as any).SevenroomsWidget) {
        initializeAllWidgets()
        clearInterval(retryInterval)
      }
    }, 1000)

    // Clean up after 15 seconds
    setTimeout(() => {
      clearInterval(retryInterval)
    }, 15000)

    return () => {
      clearInterval(retryInterval)
    }
  }, [])

  return (
    <Script
      src="https://www.sevenrooms.com/widget/embed.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log("SevenRooms script loaded")
        // Small delay to ensure script is fully ready
        setTimeout(() => {
          if (typeof window !== "undefined" && (window as any).SevenroomsWidget) {
            try {
              // Initialize header button
              ;(window as any).SevenroomsWidget.init({
                venueId: "madamechu",
                triggerId: "sr-res-root",
                type: "reservations",
                styleButton: false,
                clientToken: "",
              })

              // Initialize mobile button if it exists
              const mobileButton = document.getElementById("sr-res-root-mobile")
              if (mobileButton) {
                ;(window as any).SevenroomsWidget.init({
                  venueId: "madamechu",
                  triggerId: "sr-res-root-mobile",
                  type: "reservations",
                  styleButton: false,
                  clientToken: "",
                })
              }

              // Initialize dining button if it exists
              const diningButton = document.getElementById("sr-res-root-dining")
              if (diningButton) {
                ;(window as any).SevenroomsWidget.init({
                  venueId: "madamechu",
                  triggerId: "sr-res-root-dining",
                  type: "reservations",
                  styleButton: false,
                  clientToken: "",
                })
              }

              console.log("SevenRooms widgets initialized on script load")
            } catch (error) {
              console.error("Error in onLoad initialization:", error)
            }
          }
        }, 1000)
      }}
      onError={(error) => {
        console.error("Failed to load SevenRooms script:", error)
      }}
    />
  )
}
