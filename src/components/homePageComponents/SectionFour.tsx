'use client'
import { CardsFour } from '../CardsFour'
import { RevealList } from 'next-reveal'

export const SectionFour = () => {
  return (
    <div className="bg-white dark:bg-dark-20">
      <main className="flex-col justify-between px-8 py-40 lg:container lg:mx-auto lg:w-[95%] lg:items-center lg:justify-between">
        <main className="pb-[2.5rem] md:space-x-0">
          <span className="font-dmSans text-[1.25rem] font-bold uppercase text-brand-color-red">
            #depoimentos
          </span>
          <h2 className="mb-8 font-dmSans text-[2rem] font-medium leading-[1.2] tracking-[0.105rem] text-dark-10 dark:text-white md:mb-0 md:text-[2.7rem] md:leading-[3.85rem] lg:text-[3.5rem]">
            TeslaBank fora das telinhas: <br />
          </h2>
          <span className="mb-8 font-dmSans text-[2rem] font-normal leading-[1.5] tracking-[0.105rem] text-dark-10 dark:text-white md:mb-0 md:leading-[3.85rem] lg:text-[3rem] xl:text-[3.5rem]">
            Veja o que estão falam sobre nós.
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
          <div className="space-y-8">
            <main className="grid grid-cols-1 space-y-8 xl:grid-cols-3 xl:space-x-8 xl:space-y-0">
              <CardsFour
                title="nikola tesla"
                description="Estou realmente impressionado com a qualidade do serviço do TeslaBank. Desde que comecei a usá-lo, todas as minhas transações financeiras ficaram mais fáceis e ágeis."
              />
              <CardsFour
                title="steve jobs"
                description="O TeslaBank é uma verdadeira revolução no mundo financeiro. Eu não preciso mais enfrentar filas em agências bancárias ou lidar com taxas e tarifas absurdas."
              />
              <CardsFour
                title="Alan Turing"
                description="Eu era bastante cético em relação ao banco digital, mas decidi experimentar por curiosidade. Fiquei surpreso com a facilidade e segurança das transações, além de todas as funcionalidades exclusivas oferecidas."
              />
            </main>
          </div>
        </RevealList>
      </main>
    </div>
  )
}
