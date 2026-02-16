import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="relative overflow-hidden rounded-lg border border-border/50 bg-secondary/30 px-6 py-16 text-center sm:px-12 lg:px-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-primary blur-3xl" />
        </div>

        <div className="relative z-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Nao perca
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Encontre o produto perfeito
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Navegue por nossa colecao curada e descubra ofertas exclusivas nas maiores lojas do Brasil.
          </p>
          <Link
            href="/produtos"
            className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-gold-light"
          >
            Ver todos os produtos
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
