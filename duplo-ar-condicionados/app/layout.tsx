import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Duplo Ar-Condicionados - Conforto e Qualidade em Climatização",
  description:
    "Especialistas em instalação, manutenção e limpeza de ar-condicionado em Goiânia. Promovemos saúde, conforto e bem-estar para sua casa ou empresa.",
  keywords: "ar-condicionado, climatização, instalação, manutenção, limpeza, Goiânia, rede frigorígena",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
