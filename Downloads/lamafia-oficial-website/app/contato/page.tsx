import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Mail, MessageCircle, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Lamafia Oficial. Estamos prontos para ajudar voce.",
}

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Atendimento rapido e direto",
    value: "Enviar mensagem",
    href: "https://wa.me/5547997708943?text=Ola,%20vim%20pelo%20site%20Lamafia!",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Para parcerias e negocios",
    value: "contato@lamafia.com",
    href: "mailto:contato@lamafia.com",
  },
  {
    icon: MapPin,
    title: "Localizacao",
    description: "Operamos de forma digital",
    value: "Brasil",
    href: "#",
  },
]

export default function ContatoPage() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-7xl">

        {/* TOPO */}
        <div className="mb-16 text-center mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Fale conosco
          </p>

          <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Contato
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Tem alguma duvida, sugestao ou quer propor uma parceria? Entre em contato conosco. Respondemos o mais rapido possivel.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-16 place-items-center">

          {/* CARDS */}
          <div className="flex flex-col gap-8 items-center text-center w-full">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="
                  group
                  rounded-xl
                  border border-border/50
                  bg-card
                  p-10
                  transition-all duration-300
                  hover:border-primary/40 hover:gold-glow
                  w-full
                  max-w-xl
                  lg:max-w-2xl
                "
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-border/50 bg-secondary transition-colors group-hover:border-primary/40 mx-auto">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-base font-semibold uppercase tracking-widest text-foreground">
                  {info.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {info.description}
                </p>

                <p className="mt-4 text-base font-medium text-primary">
                  {info.value}
                </p>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
