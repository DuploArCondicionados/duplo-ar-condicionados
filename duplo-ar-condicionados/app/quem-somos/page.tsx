"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-dark mb-4">Quem Somos</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/quem-somos.jpg"
                alt="Técnico da Duplo Ar-Condicionados atendendo cliente"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-primary-light/10 p-8 rounded-lg">
                <p className="text-lg leading-relaxed text-gray-700">
                  Somos a <strong className="text-primary-dark">Duplo Ar-Condicionados</strong>: empresa que nasceu após
                  8 anos de experiência do Fundador, Carlos, no mercado.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                  A nossa missão é promover <strong className="text-primary-medium">saúde, conforto e bem-estar</strong>{" "}
                  para nossos clientes a fim de que sua rotina seja mais leve.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                  Entre em contato conosco e faça um orçamento!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary-medium hover:bg-primary-dark"
                  onClick={() => window.open("https://wa.me/5562993835605", "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-medium text-primary-medium hover:bg-primary-medium hover:text-white bg-transparent"
                  onClick={() => (window.location.href = "/orcamento")}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-dark mb-2">8+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-dark mb-2">100%</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
