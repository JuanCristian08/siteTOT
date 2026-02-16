import { ShieldCheck, Truck, Star, Zap } from "lucide-react"

const props = [
  {
    icon: Star,
    title: "Curadoria Premium",
    description: "Cada produto e selecionado criteriosamente para garantir qualidade e exclusividade.",
  },
  {
    icon: ShieldCheck,
    title: "Compra Segura",
    description: "Todos os links direcionam para plataformas confiaveis como Amazon, Shopee e Mercado Livre.",
  },
  {
    icon: Truck,
    title: "Entrega Garantida",
    description: "As plataformas parceiras oferecem rastreamento e garantia de entrega em todo o Brasil.",
  },
  {
    icon: Zap,
    title: "Melhores Ofertas",
    description: "Monitoramos precos constantemente para trazer sempre as melhores oportunidades.",
  },
]

export function ValueProps() {
  return (
    <section className="border-y border-border/50 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Por que a Lamafia?
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Uma experiencia premium
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border/50 bg-secondary transition-all duration-300 group-hover:border-primary/40 group-hover:gold-glow">
                <prop.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground">
                {prop.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
