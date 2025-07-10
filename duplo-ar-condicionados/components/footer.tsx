import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo-duplo-ar.png"
                alt="Duplo Ar-Condicionados"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Promovendo saúde, conforto e bem-estar através de soluções completas em climatização.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="text-gray-300 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/orcamento" className="text-gray-300 hover:text-white transition-colors">
                  Faça um Orçamento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Instalação de Ar-Condicionado</li>
              <li>Rede Frigorígena</li>
              <li>Limpeza de Ar-Condicionado</li>
              <li>Manutenção</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-light" />
                <span className="text-gray-300">62 9 9383 5605

</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-light" />
                <span className="h-4 px-0 text-slate-200 w-3 mx-0 tracking-tight">{"duploarcondicionados@gmail.com"}</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-light" />
                <span className="text-gray-300">Goiânia e Região</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary-light" />
                <span className="text-gray-300">Seg-Sex: 8h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© 2025 Agencia NextWave. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
