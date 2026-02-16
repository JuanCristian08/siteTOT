import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Leia os termos de uso do site Lamafia Oficial e entenda as regras de utilizacao.",
}

export default function TermosPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Legal
        </p>
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
          Termos de Uso
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Ultima atualizacao: Fevereiro de 2026
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            1. Aceitacao dos termos
          </h2>
          <p>
            Ao acessar e utilizar o site Lamafia Oficial, voce concorda com estes termos de uso. Caso nao concorde com algum dos termos, recomendamos que nao utilize o site.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            2. Natureza do servico
          </h2>
          <p>
            A Lamafia Oficial e uma vitrine digital que exibe produtos de terceiros. Nao somos uma loja virtual e nao realizamos vendas diretas. Todos os produtos exibidos sao comercializados por plataformas externas como Amazon, Shopee e Mercado Livre.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            3. Compras externas
          </h2>
          <p>
            Ao clicar em um produto, voce sera redirecionado para a plataforma do vendedor. Toda transacao comercial, incluindo pagamento, entrega, troca e devolucao, e de responsabilidade exclusiva da plataforma onde a compra foi realizada. A Lamafia nao se responsabiliza por problemas relacionados a compras externas.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            4. Links de afiliados
          </h2>
          <p>
            Os links exibidos no site sao links de afiliados. Isso significa que podemos receber uma comissao por compras realizadas atraves desses links, sem custo adicional para voce. A presenca de links de afiliados nao influencia na selecao ou avaliacao dos produtos.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            5. Precos e disponibilidade
          </h2>
          <p>
            Os precos e a disponibilidade dos produtos exibidos podem variar a qualquer momento, pois sao definidos pelas plataformas parceiras. A Lamafia nao garante a precisao dos precos exibidos no site.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            6. Propriedade intelectual
          </h2>
          <p>
            Todo o conteudo do site, incluindo textos, imagens, logotipos e design, e propriedade da Lamafia Oficial e protegido pelas leis de propriedade intelectual. E proibida a reproducao sem autorizacao previa.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            7. Limitacao de responsabilidade
          </h2>
          <p>
            A Lamafia Oficial nao se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso do site ou da impossibilidade de usa-lo. O uso do site e por sua conta e risco.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            8. Alteracoes nos termos
          </h2>
          <p>
            Podemos alterar estes termos de uso a qualquer momento. As alteracoes entram em vigor imediatamente apos sua publicacao no site. Recomendamos que voce revise os termos periodicamente.
          </p>
        </div>
      </div>
    </section>
  )
}
