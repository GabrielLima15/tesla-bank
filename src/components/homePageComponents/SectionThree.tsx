'use client'

import {
  Clock,
  CreditCard,
  Gift,
  Percent,
  Shield,
  ShoppingCart,
} from 'lucide-react'
import { Cards } from '../Cards'
import { RevealList } from 'next-reveal'

export const SectionThree = () => {
  return (
    <div className="bg-brand-color-white dark:bg-zinc-900">
      <main className="flex-col justify-between px-8 py-32 lg:container lg:mx-auto lg:w-[95%] lg:items-center lg:justify-between">
        <main className="pb-[2.5rem]">
          <span className="font-dmSans text-[1.25rem] font-bold uppercase text-brand-color-red">
            #inovação
          </span>
          <h2 className="font-dmSans text-[1.5rem] font-medium tracking-[0.105rem] text-dark-10 dark:text-white md:text-[3.5rem] md:leading-[3.85rem]">
            Quais as vantagens <br /> de usar
            <span className="text-brand-color-red">TeslaBank</span>?
          </h2>
        </main>
        <RevealList
          origin="top"
          delay={350}
          duration={1000}
          easing="ease-in-out"
          distance="20px"
          reset={false}
          interval={60}
        >
          <div className="flex flex-col  space-y-8">
            <main className="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
              <Cards
                icon={
                  <CreditCard
                    className="text-brand-color-red transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
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
                    className="text-brand-color-red transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
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
                    className="text-brand-color-red transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
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
                    className="text-brand-color-red transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
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
                    className="text-brand-color-red transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
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
                    className="text-brand-color-red transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                    size={30}
                  />
                }
                title="Receba prêmios"
                description="Os usuários têm acesso a um programa de recompensas que oferece pontos a cada transação realizada com o cartão, que podem ser trocados por diversos prêmios."
                linkText="Veja como"
              />
            </main>
          </div>
        </RevealList>
      </main>
    </div>
  )
}
