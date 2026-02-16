"use client"

import { useState } from "react"
import { products, categories } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { cn } from "@/lib/utils"

export function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default")

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "default") return 0
    const priceA = parseFloat(a.price.replace(/[^\d,]/g, "").replace(",", "."))
    const priceB = parseFloat(b.price.replace(/[^\d,]/g, "").replace(",", "."))
    return sortBy === "price-asc" ? priceA - priceB : priceB - priceA
  })

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300",
              activeCategory === null
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-secondary text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-secondary text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="w-full rounded-sm border border-border bg-secondary px-4 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground outline-none transition-colors focus:border-primary sm:w-auto"
          aria-label="Ordenar produtos"
        >
          <option value="default">Ordenar por</option>
          <option value="price-asc">Menor preco</option>
          <option value="price-desc">Maior preco</option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={index < 4} />
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
        </div>
      )}
    </div>
  )
}
