"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const courses = [
  {
    title: "Vendas Estratégicas",
    image: "/strategic-sales-training-illustration-with-money-s.jpg",
    description: "Desenvolva habilidades avançadas de vendas e estratégias para aumentar resultados.",
  },
  {
    title: "O Poder do Intra Empreendedor",
    image: "/entrepreneur-with-lightbulb-and-innovation-symbols.jpg",
    description: "Transforme ideias em ações dentro da sua empresa.",
  },
  {
    title: "Criatividade e Inovação",
    image: "/creative-innovation-with-colorful-brain-and-abstra.jpg",
    description: "Estimule o pensamento criativo e inovador na sua equipe.",
  },
  {
    title: "Atendimento ao Cliente",
    image: "/customer-service-professional-helping-client-illus.jpg",
    description: "Aprimore a experiência do cliente com técnicas eficazes.",
  },
  {
    title: "Negociação Estratégica",
    image: "/business-negotiation-handshake-with-strategy-eleme.jpg",
    description: "Domine técnicas de negociação para melhores resultados.",
  },
  {
    title: "Comunicação Não Violenta",
    image: "/peaceful-communication-with-heart-and-speech-bubbl.jpg",
    description: "Desenvolva comunicação empática e efetiva.",
  },
  {
    title: "Segurança da Informação",
    image: "/cybersecurity-shield-and-lock-with-digital-element.jpg",
    description: "Proteja dados e informações corporativas com segurança.",
  },
]

export function CoursesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = document.querySelectorAll(".course-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [currentIndex])

  useEffect(() => {
    if (!isAutoPlaying) return

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courses.length)
    }, 4000)

    return () => clearInterval(intervalId)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % courses.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-heading animate-fade-in-up">
          <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">
            Confira os nossos Cursos de Prateleira
          </span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 animate-fade-in-up animation-delay-200">
          Transforme sua equipe com nossos cursos especializados
        </p>

        <div className="relative max-w-7xl mx-auto">
          <Button
            onClick={prev}
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 hover:bg-[#FF6B35] dark:hover:bg-[#FF6B35] hover:text-white shadow-xl rounded-full w-14 h-14 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,107,53,0.5)]"
          >
            <ChevronLeft className="w-7 h-7" />
          </Button>

          <Button
            onClick={next}
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 hover:bg-[#FF6B35] dark:hover:bg-[#FF6B35] hover:text-white shadow-xl rounded-full w-14 h-14 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,107,53,0.5)]"
          >
            <ChevronRight className="w-7 h-7" />
          </Button>

          <div className="overflow-hidden px-16">
            <div
              className="flex gap-8 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {courses.map((course, index) => (
                <Card
                  key={index}
                  data-index={index}
                  className="course-card flex-shrink-0 overflow-hidden group relative dark:bg-gray-700 dark:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20 animate-fade-in-up"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 32) / itemsPerView}px)`,
                    animationDelay: `${(index % itemsPerView) * 150}ms`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/0 via-transparent to-transparent group-hover:from-[#FF6B35]/10 transition-all duration-500 z-10 pointer-events-none" />

                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-lg backdrop-blur-sm animate-pulse-subtle">
                      CURSO DE PRATELEIRA
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-white mb-2 font-heading transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {course.title}
                      </h3>
                      <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] w-12 shadow-lg shadow-[#FF6B35]/50"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-[#FF6B35]/50 dark:hover:bg-[#FF6B35]/50 w-2 hover:w-6"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
