"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToNewsletter = () => {
    const newsletterElement = document.getElementById("newsletter")
    if (newsletterElement) {
      newsletterElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <div className="bg-[#FF6B35] text-white text-center py-3 px-4 text-sm">
        TOT News - A sua nova newsletter sobre Educação Corporativa!{" "}
        <button onClick={scrollToNewsletter} className="underline font-semibold hover:text-white/90 transition-colors">
          Inscreva-se aqui.
        </button>
      </div>
      <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-50 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold font-heading">
                <span className="text-black dark:text-white">T</span>
                <span className="inline-block w-8 h-8 rounded-full border-2 border-black dark:border-white relative mx-0.5">
                  <span className="absolute inset-0 flex items-center justify-center text-xs">🌍</span>
                </span>
                <span className="text-black dark:text-white">T</span>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors font-medium"
              >
                Fábrica de Conteúdo
              </Link>
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors font-medium"
              >
                Cursos de Prateleira
              </Link>
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors font-medium"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors font-medium"
              >
                Biblioteca de Ebooks
              </Link>
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors font-medium"
              >
                Plataforma
              </Link>
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors font-medium"
              >
                Consultoria
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                onClick={scrollToForm}
                className="bg-[#FF6B35] hover:bg-[#FF5722] text-white rounded-full px-6 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Agende uma demonstração
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
