"use client"

import { Button } from "@/components/ui/button"

export function MaterialSection() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/manual-universidade-corporativa.pdf"
    link.download = "Manual-da-Universidade-Corporativa-TOT.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    alert("Download iniciado! Obrigado pelo interesse.")
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-3xl p-12 lg:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">Material Gratuito</h2>
              <p className="text-xl text-white/95 mb-8 leading-relaxed">
                Conheça o nosso Manual da Universidade Corporativa. Nele, você encontrará os 6 passos para uma
                implantação de sucesso na sua empresa. Aproveite!
              </p>
              <Button
                onClick={handleDownload}
                className="bg-white hover:bg-gray-100 text-[#FF6B35] rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                BAIXE AGORA
              </Button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative hover:scale-105 transition-transform duration-300">
                <img
                  src="/ebook-cover-manual-da-universidade-corporativa-blu.jpg"
                  alt="Manual da Universidade Corporativa"
                  className="w-full max-w-sm rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
