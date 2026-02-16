import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Vitrine Premium
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-balance">Exclusividade ao</span>
          <br />
          <span className="gold-text text-balance">seu alcance</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Descubra produtos selecionados das melhores lojas online. Qualidade, estilo e as melhores ofertas em um so lugar.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/produtos"
            className="group flex items-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-gold-light"
          >
            Explorar produtos
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/sobre"
            className="flex items-center gap-2 rounded-sm border border-border px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
          >
            Conhecer a marca
          </Link>
        </div>
      </div>
    </section>
  )
}
