"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "next-themes"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Chatbot from "@/components/WhatsApp"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Chatbot />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
