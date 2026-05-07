"use client"

import { Home, Building, Factory, Ruler, FileText, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Desenvolvimento de Projetos:",
      features: ["Projetos Arquitetônicos Residenciais (unifamiliares e multifamiliares).", "Projetos para fins Comerciais e de Serviços.", "Projetos Industriais e de Galpões Logísticos", "Projetos Preventivos de Incêndio", "Compatibilização de projetos complementares (estrutural, elétrico, hidrossanitário)."],
    },
    {
      icon: Building,
      title: "Regularização Imobiliária (Core Business)",
      features: ["Análise e diagnóstico documental e cadastral.", "Obtenção de Habite-se, CND/INSS e Alvarás.", " Averbação de Construção em Cartório de Registro de Imóveis.", "Retificação de Área, Desmembramento e Unificação."],
    },
    {
      icon: Ruler,
      title: "Interface e Gestão",
      features: ["Relacionamento com Prefeituras ", "Órgãos Ambientais e Cartórios", "Gestão e Fiscalização de Obras.", "Laudos técnicos", "Execução e acompanhamento de obras."],
    },
  ]

  const scrollToContact = () => {
    const element = document.querySelector("#contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em engenharia civil, desde o projeto até a execução, com qualidade e
            responsabilidade técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

      
      </div>
    </section>
  )
}

export default Services