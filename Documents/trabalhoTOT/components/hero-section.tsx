"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handlePlayVideo = () => {
    alert("Vídeo de demonstração em breve!")
  }

  return (
    <section className="relative bg-gradient-to-br from-[#1a1a3e] via-[#2d2d6e] to-[#1a1a3e] dark:from-[#0a0a1e] dark:via-[#1d1d4e] dark:to-[#0a0a1e] min-h-[600px] flex items-center overflow-hidden transition-colors">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-24 border border-blue-400/30 rounded"></div>
        <div className="absolute top-40 right-20 w-24 h-20 border border-blue-400/30 rounded"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-20 border border-blue-400/30 rounded"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-16 border border-blue-400/30 rounded"></div>
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 h-full">
        <img
          src="/silhouette-of-person-with-raised-hand-against-digi.jpg"
          alt="Person interacting with digital interfaces"
          className="w-full h-full object-cover object-left opacity-80 dark:opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-heading">
            Aumente o engajamento dos seus treinamentos corporativos
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Aqui na TOT Educação Corporativa te ajudamos a revolucionar o Treinamento e Desenvolvimento da sua empresa.
          </p>
          <div className="flex items-center gap-4">
            <Button
              onClick={scrollToContact}
              className="bg-[#FF6B35] hover:bg-[#FF5722] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Agendar demonstração
            </Button>
            <button
              onClick={handlePlayVideo}
              className="w-14 h-14 rounded-full bg-[#FF6B35] hover:bg-[#FF5722] flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            >
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
