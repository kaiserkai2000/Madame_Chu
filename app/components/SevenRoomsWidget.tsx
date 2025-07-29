"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function SevenRoomsWidget() {
  useEffect(() => {
    const initializeWidget = (buttonId: string, description: string) => {
      const button = document.getElementById(buttonId)
      if (button && !button.hasAttribute("data-sr-initialized")) {
        try {
          ;(window as any).SevenroomsWidget.init({
            venueId: "madamechu",
            triggerId: buttonId,
            type: "reservations",
            styleButton: false,
            clientToken: "",
          })
          button.setAttribute("data-sr-initialized", "true")
          console.log(`${description} initialized successfully`)
        } catch (error) {
          console.error(`Error initializing ${description}:`, error)
        }
      }
    }

    const initializeAllWidgets = () => {
      if (typeof window !== "undefined" && (window as any).SevenroomsWidget) {
        // Initialize desktop header button
        initializeWidget("sr-res-root", "Desktop header button")

        // Initialize dining section button
        initializeWidget("sr-res-root-dining", "Dining section button")

        // Initialize mobile button if it exists (it might not exist if menu is closed)
        initializeWidget("sr-res-root-mobile", "Mobile header button")
      }
    }

    // Set up a mutation observer to watch for dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            // Check if the mobile reservation button was added
            if (element.id === "sr-res-root-mobile" || element.querySelector("#sr-res-root-mobile")) {
              setTimeout(() => {
                if ((window as any).SevenroomsWidget) {
                  initializeWidget("sr-res-root-mobile", "Mobile header button (dynamic)")
                }
              }, 100)
            }
          }
        })
      })
    })

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

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
      observer.disconnect()
    }, 15000)

    return () => {
      clearInterval(retryInterval)
      observer.disconnect()
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
              // Initialize desktop header button
              const headerButton = document.getElementById("sr-res-root")
              if (headerButton && !headerButton.hasAttribute("data-sr-initialized")) {
                ;(window as any).SevenroomsWidget.init({
                  venueId: "madamechu",
                  triggerId: "sr-res-root",
                  type: "reservations",
                  styleButton: false,
                  clientToken: "",
                })
                headerButton.setAttribute("data-sr-initialized", "true")
                console.log("Desktop header button initialized on script load")
              }

              // Initialize dining button
              const diningButton = document.getElementById("sr-res-root-dining")
              if (diningButton && !diningButton.hasAttribute("data-sr-initialized")) {
                ;(window as any).SevenroomsWidget.init({
                  venueId: "madamechu",
                  triggerId: "sr-res-root-dining",
                  type: "reservations",
                  styleButton: false,
                  clientToken: "",
                })
                diningButton.setAttribute("data-sr-initialized", "true")
                console.log("Dining button initialized on script load")
              }

              // Mobile button might not exist yet, so we'll handle it dynamically
              console.log("Initial widgets initialized on script load")
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
