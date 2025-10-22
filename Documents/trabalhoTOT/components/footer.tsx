"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", { name, email })
    alert("Obrigado por se inscrever! Você receberá nossas novidades em breve.")
    setName("")
    setEmail("")
  }

  const handleChatClick = () => {
    window.open("https://wa.me/5547964275326", "_blank")
  }

  const handleSocialClick = (platform: string) => {
    const urls: Record<string, string> = {
      instagram: "https://instagram.com/toteduca",
      linkedin: "https://linkedin.com/company/toteduca",
      facebook: "https://facebook.com/toteduca",
      whatsapp: "https://wa.me/5547964275326",
    }
    window.open(urls[platform], "_blank")
  }

  return (
    <footer className="bg-black dark:bg-gray-950 text-white transition-colors" id="newsletter">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-heading">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <p>R. Antônio da Veiga, 419, Sala 10 - Victor Konder, Blumenau - SC - 89012-500</p>
              <p>
                <Link href="tel:4796427-5326" className="hover:text-[#FF6B35] transition-colors">
                  (47) 96427-5326
                </Link>
              </p>
              <p>
                <Link href="tel:473516-4418" className="hover:text-[#FF6B35] transition-colors">
                  (47) 3516-4418
                </Link>
              </p>
              <p>
                <Link href="mailto:contato@toteduca.com.br" className="hover:text-[#FF6B35] transition-colors">
                  contato@toteduca.com.br
                </Link>
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => handleSocialClick("instagram")}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B35] flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocialClick("linkedin")}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B35] flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocialClick("facebook")}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B35] flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocialClick("whatsapp")}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B35] flex items-center justify-center transition-all hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 font-heading">Início</h3>
            <nav className="space-y-3">
              <Link href="#" className="block text-gray-300 hover:text-[#FF6B35] transition-colors">
                Homepage
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-[#FF6B35] transition-colors">
                Fábrica de Conteúdo
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-[#FF6B35] transition-colors">
                Cursos de Prateleira
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-[#FF6B35] transition-colors">
                Aprenda com a TOT
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-[#FF6B35] transition-colors">
                Blog
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-[#FF6B35] transition-colors">
                Termos de Uso
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 font-heading">Se inscreva para receber novidades</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Escreva o seu nome aqui"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 focus:border-[#FF6B35] transition-colors"
                required
              />
              <Input
                type="email"
                placeholder="Escreva o seu melhor e-mail aqui"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 focus:border-[#FF6B35] transition-colors"
                required
              />
              <div className="flex items-center gap-3 text-sm">
                <input type="checkbox" required className="w-4 h-4 accent-[#FF6B35]" />
                <span className="text-gray-300">I'm not a robot</span>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Ok
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          COPYRIGHT © 2025. TOT EDUCAÇÃO CORPORATIVA. TODOS OS DIREITOS RESERVADOS
        </div>
      </div>

      <button
        onClick={handleChatClick}
        className="fixed bottom-6 right-6 bg-[#FF6B35] hover:bg-[#FF5722] text-white rounded-full px-6 py-4 shadow-2xl flex items-center gap-2 font-semibold transition-all hover:scale-110 z-50 animate-pulse hover:animate-none"
      >
        <MessageCircle className="w-5 h-5" />
        Estamos online!
      </button>
    </footer>
  )
}
