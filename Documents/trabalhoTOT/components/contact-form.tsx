"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Obrigado! Entraremos em contato em breve.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section id="contact-form" className="py-20 bg-black dark:bg-gray-950 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-heading">
            Agende uma demonstração
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 border-0 h-14 text-lg focus:ring-2 focus:ring-[#FF6B35] transition-all"
              required
            />

            <Input
              type="email"
              placeholder="Seu email corporativo"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 border-0 h-14 text-lg focus:ring-2 focus:ring-[#FF6B35] transition-all"
              required
            />

            <Input
              type="text"
              placeholder="Qual empresa você trabalha?"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-white dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 border-0 h-14 text-lg focus:ring-2 focus:ring-[#FF6B35] transition-all"
              required
            />

            <Textarea
              placeholder="Digite aqui como podemos te ajudar"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-white dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 border-0 min-h-32 text-lg focus:ring-2 focus:ring-[#FF6B35] transition-all"
              required
            />

            <div className="flex items-center gap-3 text-white text-sm">
              <input type="checkbox" required className="w-4 h-4 accent-[#FF6B35]" />
              <span>I'm not a robot</span>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-[#FF6B35] hover:bg-[#FF5722] text-white rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
