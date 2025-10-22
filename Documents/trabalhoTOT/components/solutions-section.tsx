"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function SolutionsSection() {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Nossas soluções
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Escolha a solução que atende às suas necessidades e revolucione a área de Treinamento e Desenvolvimento da
              sua empresa.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#FF5722] hover:to-[#FF6B35] text-white rounded-full px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[#FF6B35]/50 relative overflow-hidden group"
            >
              <span className="relative z-10">Agendar uma demonstração</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-white dark:bg-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 dark:border-gray-600 group animate-fade-in-up hover:shadow-[#FF6B35]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/0 to-[#FF6B35]/0 group-hover:from-[#FF6B35]/5 group-hover:to-[#FF8C42]/5 transition-all duration-500" />
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10">
                <img src="/stack-of-books-icon-orange.jpg" alt="Cursos de Prateleira" className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-heading relative z-10">
                Cursos de Prateleira
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                Prontos para disponibilizar de forma rápida para seus colaboradores.
              </p>
            </Card>

            <Card className="p-8 bg-white dark:bg-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 dark:border-gray-600 group animate-fade-in-up animation-delay-200 hover:shadow-[#FF6B35]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/0 to-[#FF6B35]/0 group-hover:from-[#FF6B35]/5 group-hover:to-[#FF8C42]/5 transition-all duration-500" />
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10">
                <img src="/vr-goggles-icon-orange.jpg" alt="Fábrica de Conteúdo" className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-heading relative z-10">
                Fábrica de Conteúdo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                Desenvolvimento de cursos corporativos com experiência de aprendizagem.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
