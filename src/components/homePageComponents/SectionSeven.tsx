'use client'
import { ArrowRight } from 'lucide-react'
import { RevealList } from 'next-reveal'
import imgCadrOne from '../../../public/assets/blog-cards/one.svg'
import imgCardTwo from '../../../public/assets/blog-cards/two.svg'
import imgCardThree from '../../../public/assets/blog-cards/three.svg'
import { CardsSeven } from '../CardsSeven'

export const SectionSeven = () => {
  return (
    <div className="bg-white dark:bg-dark-20">
      <main className="flex-col justify-between px-8 py-40 lg:container lg:mx-auto lg:w-[95%] lg:items-center lg:justify-between">
        <main className="flex justify-between pb-[2.5rem] md:space-x-0">
          <h2 className="mb-8 font-dmSans text-[2rem] font-medium leading-[1.2] tracking-[0.105rem] text-dark-10 dark:text-white md:mb-0 md:text-[2.7rem] md:leading-[3.85rem] lg:text-[3.5rem]">
            Blog
          </h2>
          <span className="flex items-center space-x-8 font-dmSans text-[1.125rem] font-semibold leading-[1.125rem] tracking-[0.03375rem] text-brand-color-red">
            Todas as postagens
            <span className="pl-2">
              <ArrowRight size={20} />
            </span>
          </span>
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
          <div className="">
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:space-x-8">
              <CardsSeven
                src={imgCadrOne}
                title="Como começar a usar o TeslaBank para sua startup"
                description="Descubra como a sua startup pode se beneficiar dos serviços financeiros do TeslaBank. Nesta postagem, apresentamos um guia fácil para ajudá-lo a começar a usar o TeslaBank."
              />
              <CardsSeven
                src={imgCardTwo}
                title="10 coisas que ninguém te contou sobre o TeslaBank"
                description="Você está pensando em usar o TeslaBank para gerenciar suas finanças pessoais? Antes de decidir, confira esta postagem para descobrir 10 coisas que ninguém te contou sobre o TeslaBank."
              />
              <CardsSeven
                src={imgCardThree}
                title="7 maneiras de melhorar seus hábitos de poupança"
                description="Você deseja economizar dinheiro, mas acha difícil manter bons hábitos de poupança? Confira esta postagem para descobrir sete maneiras eficazes de melhorar seus hábitos de poupança."
              />
            </main>
          </div>
        </RevealList>
      </main>
    </div>
  )
}
