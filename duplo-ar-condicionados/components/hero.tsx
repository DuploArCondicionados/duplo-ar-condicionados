"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-light/10 to-primary-medium/10 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-dark leading-tight">
                Conforto e qualidade em climatização
              </h1>
              <p className="text-xl text-gray-600 mt-4">
                Para sua casa ou empresa. Promovemos saúde, conforto e bem-estar com soluções completas em
                ar-condicionado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary-medium hover:bg-primary-dark text-lg px-8"
                onClick={() => window.open("https://wa.me/5562993835605", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-medium text-primary-medium hover:bg-primary-medium hover:text-white text-lg px-8 bg-transparent"
                onClick={() => (window.location.href = "/orcamento")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                8+ anos de experiência
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Atendimento em Goiânia
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                100% Clientes Satisfeitos
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/cliente-satisfeito.jpg"
              alt="Cliente satisfeita com ar-condicionado instalado"
              width={600}
              height={500}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary-dark">100%</div>
              <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
