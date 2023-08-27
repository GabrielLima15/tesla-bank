'use client'
import { CardsFour } from '../CardsFour'
import { RevealList } from 'next-reveal'

export const SectionFour = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto flex w-[80%] flex-col  py-[9.38rem]">
        <main className="pb-[2.5rem]">
          <span className="font-dmSans text-[1.25rem] font-bold uppercase text-[#EB3850]">
            #depoimentos
          </span>
          <h2 className="font-dmSans text-[3.5rem] font-medium leading-[3.85rem] tracking-[0.105rem] text-[#1A191E]">
            TeslaBank fora das telinhas: <br />
          </h2>
          <span className="font-dmSans text-[3.5rem] font-normal leading-[3.85rem] tracking-[0.105rem] text-[#1A191E]">
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
            <main className="grid grid-cols-1 xl:grid-cols-3 xl:space-x-8">
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
