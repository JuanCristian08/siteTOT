"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { Product } from "@/lib/products"

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border/50 bg-card transition-all duration-500 hover:border-primary/40 hover:gold-glow"
    >
      <div className="gold-shine relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            {product.platform}
          </span>
          <span className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            {product.category}
          </span>
        </div>

        <h3 className="font-serif text-lg font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
          {product.name}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{product.price}</span>
          <span className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors duration-300 group-hover:text-primary">
            Ver oferta
            <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </div>
    </a>
  )
}
