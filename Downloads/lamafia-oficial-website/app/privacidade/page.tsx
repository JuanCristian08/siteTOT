import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politica de Privacidade",
  description:
    "Saiba como a Lamafia Oficial coleta, utiliza e protege suas informacoes.",
}

export default function PrivacidadePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Legal
        </p>
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
          Politica de Privacidade
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Ultima atualizacao: Fevereiro de 2026
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            1. Informacoes que coletamos
          </h2>
          <p>
            A Lamafia Oficial pode coletar informacoes basicas de navegacao, como endereco IP, tipo de navegador, paginas visitadas e tempo de permanencia no site. Essas informacoes sao utilizadas para melhorar a experiencia do usuario e analisar o desempenho do site.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            2. Uso de cookies
          </h2>
          <p>
            Utilizamos cookies e tecnologias similares para personalizar conteudo, analisar trafego e melhorar nossos servicos. Os cookies de terceiros podem ser utilizados por plataformas de afiliados (Amazon, Shopee, Mercado Livre) para rastrear compras realizadas atraves dos nossos links.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            3. Links de afiliados
          </h2>
          <p>
            Este site trabalha com programas de afiliados. Ao clicar em um produto e realizar uma compra nas plataformas parceiras, podemos receber uma comissao. Isso nao altera o preco do produto para voce. Todos os links direcionam para plataformas confiaveis e seguras.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            4. Compartilhamento de dados
          </h2>
          <p>
            Nao compartilhamos, vendemos ou alugamos suas informacoes pessoais para terceiros, exceto quando exigido por lei. As plataformas de afiliados possuem suas proprias politicas de privacidade que recomendamos consultar.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            5. Seguranca
          </h2>
          <p>
            Adotamos medidas de seguranca para proteger as informacoes coletadas. No entanto, nenhum metodo de transmissao pela internet e 100% seguro e nao podemos garantir seguranca absoluta.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            6. Seus direitos
          </h2>
          <p>
            Voce tem o direito de solicitar acesso, correcao ou exclusao dos seus dados pessoais a qualquer momento. Para exercer seus direitos, entre em contato conosco atraves da pagina de contato.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
            7. Alteracoes nesta politica
          </h2>
          <p>
            Reservamo-nos o direito de atualizar esta politica de privacidade a qualquer momento. Quaisquer alteracoes serao publicadas nesta pagina com a data da ultima atualizacao.
          </p>
        </div>
      </div>
    </section>
  )
}
