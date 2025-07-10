import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Snowflake, Sparkles, Settings } from "lucide-react"

const services = [
  {
    title: "Instalação de Ar-Condicionado",
    description: "Solução completa para climatização de ambientes, com eficiência e segurança",
    icon: Snowflake,
  },
  {
    title: "Rede Frigorígena",
    description: "Infraestrutura para ambientes comerciais e corporativos",
    icon: Settings,
  },
  {
    title: "Limpeza de Ar-Condicionado",
    description: "Higienização interna para preservar a saúde e economizar energia",
    icon: Sparkles,
  },
  {
    title: "Manutenção",
    description: "Serviço preventivo e corretivo especializado",
    icon: Wrench,
  },
]

export function ServicesHighlight() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em climatização com foco na sua saúde, conforto e bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-primary-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-medium" />
                </div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
