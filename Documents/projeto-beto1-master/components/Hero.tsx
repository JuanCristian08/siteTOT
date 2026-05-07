"use client"

import { ArrowRight, Building2, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    { icon: Building2, label: "Projetos Concluídos", value: "700+" },
    { icon: Users, label: "Clientes Satisfeitos", value: "1000+" },
    { icon: Award, label: "Anos de Experiência", value: "19+" },
  ]

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center text-center">
          {/* Content */}
          <div className="space-y-8 flex flex-col items-center max-w-4xl">
            <div className="space-y-4">
              <div className="flex justify-center">

                <Image
                  src="/sualogo.jpg"
                  alt="Logo Pering"
                  width={500}
                  height={200}
                  priority
                  className="w-[300px] sm:w-[300px] lg:w-[500px] h-auto"
                />
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Referência em engenharia e regularização imobiliária, transformando ideias em projetos reais com a solidez de 19 anos de experiência.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group"
                onClick={() =>
                  window.open(
                    "https://wa.me/5547988641744?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.",
                    "_blank"
                  )
                }
              >
                Solicitar Orçamento

                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-2">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero