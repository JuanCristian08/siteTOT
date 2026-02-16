"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-primary/30 bg-card p-12 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Send className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="font-serif text-2xl font-bold text-foreground">Mensagem enviada!</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Obrigado pelo contato. Retornaremos o mais breve possivel.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border/50 bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Nome
          </label>
          <input
            id="name"
            type="text"
            required
            className="rounded-sm border border-border bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            placeholder="Seu nome"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="rounded-sm border border-border bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Assunto
        </label>
        <input
          id="subject"
          type="text"
          required
          className="rounded-sm border border-border bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          placeholder="Assunto da mensagem"
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Mensagem
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="resize-none rounded-sm border border-border bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          placeholder="Escreva sua mensagem aqui..."
        />
      </div>

      <button
        type="submit"
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-gold-light"
      >
        Enviar mensagem
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  )
}
