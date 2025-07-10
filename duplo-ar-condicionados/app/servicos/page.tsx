import { ServiceCard } from "@/components/service-card"
import { Wrench, Snowflake, Sparkles, Settings } from "lucide-react"

const services = [
  {
    title: "Instalação de Ar-Condicionado",
    description: "Solução completa para climatização de ambientes, com eficiência e segurança.",
    icon: Snowflake,
    image: "/images/instalacao.jpg",
  },
  {
    title: "Rede Frigorígena",
    description: "Infraestrutura para ambientes comerciais e corporativos, com instalação técnica especializada.",
    icon: Settings,
    image: "/images/rede-frigorigena.jpg",
  },
  {
    title: "Limpeza de Ar-Condicionado",
    description: "Higienização interna para preservar a saúde, melhorar o desempenho e economizar energia.",
    icon: Sparkles,
    image: "/images/limpeza.jpg",
  },
  {
    title: "Manutenção",
    description: "Serviço preventivo e corretivo para garantir o funcionamento contínuo dos aparelhos.",
    icon: Wrench,
    image: "/images/manutencao.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Nossos Serviços</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em climatização com foco na sua saúde, conforto e bem-estar. Conheça nossos
            serviços especializados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </main>
  )
}
