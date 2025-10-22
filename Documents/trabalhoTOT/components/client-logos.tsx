"use client"

import { useEffect, useRef } from "react"

const logos = [
  "Electrolux",
  "Tenda",
  "Alfa Seguradora",
  "Jeesco",
  "Neoenergia",
  "Casa Marcos",
  "Ebermo",
  "Domus",
  "ArcelorMittal",
  "Círculo",
  "Cotrijal",
  "Credibrf",
  "Cresol",
  "CIS",
  "Hemas",
  "IRB Brasil RE",
  "LWART",
  "Bradesco",
  "Cooxupé",
  "Totvs",
  "Banco Pan",
  "Mobyan",
  "Condor",
  "Ailos",
  "Banco Master",
  "Lojado Mecanico",
  "Prefeitura de Passo Fundo",
  "MDS Group",
  "Nidec",
  "Plasvale",
  "UNICRED",
  "Viveo",
  "SESC",
  "TDF",
  "FAPES",
  "Bemol",
  "Sicredi",
  "Cooper",
]

export function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 20)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 py-12 border-y border-gray-200 dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-4">
        <div ref={scrollRef} className="flex items-center gap-12 overflow-hidden" style={{ scrollBehavior: "auto" }}>
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              style={{ minWidth: "160px", height: "80px" }}
            >
              <img
                src={`/.jpg?height=60&width=140&query=${logo} company logo grayscale professional`}
                alt={`${logo} logo`}
                className="max-w-full max-h-full object-contain dark:brightness-0 dark:invert dark:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
