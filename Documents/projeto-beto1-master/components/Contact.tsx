"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 47 8864-1744",
      action: () => window.open("tel:+554788641744"),
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "pering.eng@gmail.com",
      action: () => window.open("mailto:pering.eng@gmail.com"),
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Blumenau, SC - Brasil",
      action: () => {},
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 9h às 17h",
      action: () => {},
    },
  ]

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para um projeto de engenharia civil.")
    window.open(`https://wa.me/554788641744?text=${message}`, "_blank")
  }

  return (
    <section id="contato" className="min-h-screen flex items-center justify-center bg-background px-4 py-20">
      <div className="w-full max-w-3xl flex flex-col items-center gap-10 text-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Informações de Contato</h2>
          <p className="text-muted-foreground max-w-xl">
            Pronto para começar seu projeto? Entre em contato conosco e solicite um orçamento gratuito.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 w-full">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              onClick={info.action}
              className={`cursor-pointer hover:shadow-md transition-shadow ${
                info.action.toString() !== "() => {}" ? "hover:bg-muted/50" : ""
              }`}
            >
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">{info.title}</h4>
                  <p className="text-muted-foreground">{info.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 w-full max-w-md">
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Fale Conosco!</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Fale conosco diretamente pelo WhatsApp para um atendimento mais rápido
            </p>
            <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chamar no WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Contact