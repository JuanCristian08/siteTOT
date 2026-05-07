"use client"

import { CheckCircle, Users, Lightbulb, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Qualidade",
      description: "Compromisso com a excelência em cada projeto executado",
    },
    {
      icon: Users,
      title: "Confiança",
      description: "Relacionamento transparente e duradouro com nossos clientes",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Soluções criativas e tecnologias de ponta",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Projetos seguros seguindo todas as normas técnicas",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[650px] h-[800px] rounded-2xl overflow-hidden shadow-2xl">

              <Image
                src="/fotobeto1.jpg"
                alt="Engenheiro"
                width={800}
                height={900}
                quality={100}
                priority
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

          </div>

          {/* Content */}
     <div className="space-y-6 flex flex-col items-center text-center">
  <h2 className="text-3xl sm:text-4xl font-bold">
    Sobre o Engenheiro
  </h2>

  <p className="text-lg text-muted-foreground leading-relaxed">
    Sou Everton Pering, Engenheiro Civil, e nos últimos 19 anos construí uma carreira com um propósito duplo:
    resolver problemas e criar oportunidades.
  </p>

  <p className="text-lg text-muted-foreground leading-relaxed">
    Como especialista em regularização imobiliária, eu trago segurança e valorizo o patrimônio dos meus clientes,
    navegando pela complexidade de leis para legalizar o que já existe.
  </p>

  <p className="text-lg text-muted-foreground leading-relaxed">
    Paralelamente, como projetista, eu coloco essa mesma experiência em prática para criar o novo.
    Desenvolvo projetos residenciais, comerciais e industriais eficientes e inteligentes,
    garantindo que cada nova construção comece com o alicerce correto,
    tanto do ponto de vista técnico quanto legal.
  </p>

  <p className="text-lg text-muted-foreground leading-relaxed">
    Meu maior ativo é essa visão 360°, que me permite transformar um imóvel irregular
    em um ativo valioso ou tirar uma grande ideia do papel e transformá-la em realidade,
    com total tranquilidade para o proprietário.
  </p>

  <p className="text-lg text-muted-foreground leading-relaxed">
    Especializado em projetos residenciais, comerciais e industriais,
    oferecemos soluções completas desde o planejamento até a execução,
    utilizando as mais modernas tecnologias e metodologias do mercado.
  </p>
</div>
</div>

{/* Values Grid */}
<div className="mt-16 flex justify-center">
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
    {values.map((value, index) => (
      <Card key={index} className="border-0 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <value.icon className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h3 className="font-semibold mb-2">{value.title}</h3>

              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

      </div>
    </section>
  )
}

export default About