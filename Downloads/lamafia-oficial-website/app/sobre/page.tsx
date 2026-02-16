import type { Metadata } from "next"
import { Target, Eye, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheca a Lamafia Oficial. Nossa missao e trazer exclusividade, qualidade e as melhores ofertas para voce.",
}

const values = [
  {
    icon: Target,
    title: "Missao",
    description:
      "Conectar pessoas a produtos de alta qualidade, oferecendo uma experiencia de compra premium atraves de uma curadoria cuidadosa e links confiaveis para as maiores plataformas do mercado.",
  },
  {
    icon: Eye,
    title: "Visao",
    description:
      "Ser a referencia em vitrine digital de produtos premium no Brasil, reconhecida pela excelencia na selecao, transparencia e experiencia do usuario.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Qualidade acima de tudo. Transparencia com nosso publico. Compromisso com a experiencia do cliente. Curadoria rigorosa e selecao criteriosa de cada produto.",
  },
]

export default function SobrePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="mb-16 max-w-3xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Sobre nos
        </p>
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
          A Lamafia Oficial
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            A Lamafia nasceu da paixao por curadoria e exclusividade. Somos uma vitrine digital premium que seleciona os melhores produtos das maiores plataformas de e-commerce do Brasil, como Amazon, Shopee e Mercado Livre.
          </p>
          <p>
            Nosso objetivo e simples: facilitar sua vida. Em vez de perder horas pesquisando em dezenas de lojas, voce encontra aqui uma selecao criteriosa dos melhores itens, com precos competitivos e links diretos para compra segura.
          </p>
          <p>
            Cada produto exibido em nossa vitrine passa por uma analise de qualidade, relevancia e valor. Trabalhamos com programas de afiliados oficiais, o que significa que voce compra diretamente nas plataformas que ja conhece e confia.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-lg border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:gold-glow"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-secondary">
              <value.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
              {value.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-lg border border-border/50 bg-secondary/30 p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-primary">500+</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              Produtos selecionados
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-primary">50K+</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              Visitantes mensais
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-primary">98%</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              Satisfacao dos clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
