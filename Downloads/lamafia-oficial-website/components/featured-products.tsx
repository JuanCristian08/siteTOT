import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured)

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Selecao Especial
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Produtos em Destaque
          </h2>
        </div>
        <Link
          href="/produtos"
          className="group flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          Ver todos
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={index < 4} />
        ))}
      </div>
    </section>
  )
}
