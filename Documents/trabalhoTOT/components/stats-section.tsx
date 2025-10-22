"use client"

import { useEffect, useState, useRef } from "react"

export function StatsSection() {
  const [counts, setCounts] = useState({ learners: 0, projects: 0, engagement: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        learners: Math.floor(2.5 * progress * 100) / 100,
        projects: Math.floor(1200 * progress),
        engagement: Math.floor(97 * progress),
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounts({ learners: 2.5, projects: 1200, engagement: 97 })
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group animate-fade-in-up">
            <div className="mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF6B35]/20 blur-xl rounded-full group-hover:bg-[#FF6B35]/40 transition-all duration-500" />
                <img
                  src="/three-people-icon.jpg"
                  alt="Aprendizes"
                  className="w-24 h-24 dark:brightness-90 relative z-10"
                />
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent mb-3 font-heading">
              + de {counts.learners.toFixed(1)} milhões
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">de aprendizes impactados com os nossos cursos.</p>
          </div>

          <div className="text-center group animate-fade-in-up animation-delay-200">
            <div className="mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF6B35]/20 blur-xl rounded-full group-hover:bg-[#FF6B35]/40 transition-all duration-500" />
                <img
                  src="/computer-screen-with-x-icon.jpg"
                  alt="Projetos"
                  className="w-24 h-24 dark:brightness-90 relative z-10"
                />
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent mb-3 font-heading">
              + de {counts.projects}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">projetos entregues para os nossos clientes.</p>
          </div>

          <div className="text-center group animate-fade-in-up animation-delay-400">
            <div className="mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF6B35]/20 blur-xl rounded-full group-hover:bg-[#FF6B35]/40 transition-all duration-500" />
                <img
                  src="/graduation-cap-with-magnifying-glass-icon.jpg"
                  alt="Engajamento"
                  className="w-24 h-24 dark:brightness-90 relative z-10"
                />
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent mb-3 font-heading">
              {counts.engagement}%
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              de engajamento e conclusão dos cursos desenvolvidos pela TOT
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
