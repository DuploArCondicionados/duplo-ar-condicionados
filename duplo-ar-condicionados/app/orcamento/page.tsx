"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export default function QuotePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    cnpj: "",
    email: "",
    telefone: "",
    quantidadeAparelhos: "",
    observacoes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Criar mensagem formatada para WhatsApp
    const message = `*SOLICITAÇÃO DE ORÇAMENTO*

📋 *Dados da Empresa:*
• Nome: ${formData.nomeEmpresa}
• CNPJ: ${formData.cnpj}
• E-mail: ${formData.email}
• Telefone: ${formData.telefone}

❄️ *Detalhes do Serviço:*
• Quantidade de Aparelhos: ${formData.quantidadeAparelhos}

📝 *Observações:*
${formData.observacoes || "Nenhuma observação adicional"}

---
Aguardo retorno para orçamento. Obrigado!`

    // Número do WhatsApp (substitua pelo número real)
    const phoneNumber = "5562993835605"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank")

    // Mostrar confirmação
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-800 mb-2">Orçamento Enviado com Sucesso!</h2>
                <p className="text-green-700 mb-4">Recebemos sua solicitação e entraremos em contato em breve.</p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-primary-medium hover:bg-primary-dark">
                  Enviar Novo Orçamento
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary-dark mb-4">Faça um Orçamento</h1>
            <p className="text-lg text-gray-600">
              Preencha o formulário abaixo e receba uma proposta personalizada para suas necessidades.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary-dark">Dados da Empresa</CardTitle>
              <CardDescription>Todas as informações são obrigatórias para elaborarmos seu orçamento.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nomeEmpresa">Nome da Empresa *</Label>
                    <Input
                      id="nomeEmpresa"
                      name="nomeEmpresa"
                      value={formData.nomeEmpresa}
                      onChange={handleChange}
                      required
                      placeholder="Digite o nome da empresa"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ *</Label>
                    <Input
                      id="cnpj"
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleChange}
                      required
                      placeholder="00.000.000/0000-00"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Número para Contato *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(62) 99999-9999"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantidadeAparelhos">Quantidade de Aparelhos *</Label>
                  <Input
                    id="quantidadeAparelhos"
                    name="quantidadeAparelhos"
                    type="number"
                    value={formData.quantidadeAparelhos}
                    onChange={handleChange}
                    required
                    placeholder="Ex: 5"
                    min="1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="observacoes">Observações</Label>
                  <Textarea
                    id="observacoes"
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleChange}
                    placeholder="Descreva detalhes sobre o projeto, tipo de ambiente, necessidades específicas..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary-medium hover:bg-primary-dark">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Solicitação de Orçamento
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
