import type { Metadata } from "next"
import { ProductsGrid } from "@/components/products-grid"

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Explore nossa colecao curada de produtos premium. Encontre as melhores ofertas em tecnologia, acessorios, calcados e beleza.",
}

export default function ProdutosPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Colecao Completa
        </p>
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
          Nossos Produtos
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Navegue por todos os produtos da nossa vitrine. Clique em qualquer item para conferir a oferta diretamente na loja.
        </p>
      </div>

      <ProductsGrid />
    </section>
  )
}
