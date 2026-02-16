import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <span className="font-serif text-2xl font-bold tracking-wider gold-text">
              LAMAFIA
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Sua vitrine premium de produtos selecionados. Encontre o melhor com exclusividade e elegancia.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Navegacao
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Legal
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/privacidade" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Politica de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Lamafia Oficial. Todos os direitos reservados. Este site utiliza links de afiliados.
          </p>
        </div>
      </div>
    </footer>
  )
}
