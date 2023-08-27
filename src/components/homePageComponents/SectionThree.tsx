'use client'

import {
  Clock,
  CreditCard,
  Gift,
  Percent,
  Shield,
  ShoppingCart,
} from 'lucide-react'
import { useRef, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { Cards } from '../Cards'

export const SectionThree = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    async function animate() {
      if (containerRef.current) {
        const sr = (await import('scrollreveal')).default
        sr().reveal(containerRef.current, {
          delay: 350,
          distance: '20px',
          duration: 1000,
          easing: 'ease-in-out',
          origin: 'top',
        })
      }
    }
    animate()
  }, [])

  return (
    <div className="min-h-screen bg-[#FFF8F9]">
      <main className="container mx-auto flex w-[80%] flex-col  py-[9.38rem]">
        <main className="pb-[2.5rem]">
          <span className="font-dmSans text-[1.25rem] font-bold uppercase text-[#EB3850]">
            #inovação
          </span>
          <h2 className="leading-[3.85rem ] font-dmSans text-[3.5rem] font-medium tracking-[0.105rem] text-[#1A191E]">
            Quais as vantagens <br /> de usar
            <span className="text-[#EB3850]">TeslaBank</span>?
          </h2>
        </main>
        <div ref={containerRef} className="flex flex-col space-y-8">
          <main className="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
            <Cards
              icon={
                <CreditCard
                  className="text-[#EB3850] transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  size={30}
                />
              }
              title="Cartão TeslaBank"
              description="O Cartão TeslaBank é um cartão de crédito exclusivo para clientes da TeslaBank, uma instituição financeira líder em inovação e tecnologia."
              linkText="Veja as opções"
            />
            <Cards
              icon={
                <ShoppingCart
                  className="text-[#EB3850] transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  size={30}
                />
              }
              title="Investimentos"
              description="O cartão também oferece diversos benefícios, como descontos em taxas de corretagem, acesso a fundos de investimento exclusivos e cashback em investimentos."
              linkText="Conheça os investimentos"
            />
            <Cards
              icon={
                <Clock
                  className="text-[#EB3850] transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  size={30}
                />
              }
              title="Atendimento 24h"
              description="No TeslaBank, os usuários têm acesso a um atendimento ao cliente sempre disponível, 24 horas por dia, 7 dias por semana. "
              linkText="Veja as opções"
            />
          </main>
          <main className="flex flex-col justify-end space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
            <Cards
              icon={
                <Shield
                  className="text-[#EB3850] transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  size={30}
                />
              }
              title="Segurança"
              description="Os usuários contam com sistemas avançados de segurança, como verificação de identidade, monitoramento de transações e notificações de uso não autorizado."
              linkText="Conheça as seguranças"
            />
            <Cards
              icon={
                <Percent
                  className="text-[#EB3850] transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  size={30}
                />
              }
              title="Sem taxas"
              description="Com o cartão TeslaBank, os usuários podem aproveitar ao máximo seus recursos financeiros, sem se preocupar com custos adicionais ou taxas escondidas."
              linkText="Como funciona"
            />
            <Cards
              icon={
                <Gift
                  className="text-[#EB3850] transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  size={30}
                />
              }
              title="Receba prêmios"
              description="Os usuários têm acesso a um programa de recompensas que oferece pontos a cada transação realizada com o cartão, que podem ser trocados por diversos prêmios."
              linkText="Veja como"
            />
          </main>
        </div>
      </main>
    </div>
  )
}
