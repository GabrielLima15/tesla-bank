'use client'
import Image from 'next/image'
import cardOne from '../../../public/assets/cards-group/cardOne.svg'
import cardTwo from '../../../public/assets/cards-group/cardTwo.svg'
import cardThree from '../../../public/assets/cards-group/cardThree.svg'
import { Button } from '../ui/button'
import { RevealList, RevealWrapper } from 'next-reveal'

export const SectionFive = () => {
  return (
    <div className="bg-white dark:bg-dark-20">
      <main className="flex-col justify-between px-8 pb-[9.38rem] lg:container lg:mx-auto lg:w-[95%] lg:items-center lg:justify-between">
        <main className="flex flex-col items-center justify-center pb-[2.5rem] md:space-x-0">
          <span className="font-dmSans text-[1.25rem] font-bold uppercase text-brand-color-red">
            #cartões
          </span>
          <h2 className="mb-[1.5rem] text-center font-dmSans text-[2rem] font-medium leading-[1] tracking-[-0.135rem] text-dark-10 dark:text-white md:text-[3.5rem] md:leading-[3.95rem]  xl:text-[4.5rem] xl:leading-[4.95rem]">
            Cartão perfeito <br /> para suas necessidades.
          </h2>
          <span className="text-center text-[1rem] font-medium leading-[1.5rem] text-dark-10 dark:text-white md:text-[1.5rem] md:leading-[2.4rem]">
            Encontre o cartão perfeito para suas necessidades financeiras.
            <br /> Seja para viagens ou compras do dia a dia, temos uma opção
            que se adapta a você.
          </span>
        </main>
        <div className="mb-0 flex flex-col items-center justify-center pb-0">
          <div className="relative hidden md:block">
            <Image
              src={cardOne}
              alt={''}
              className="relative"
              data-aos="fade-right"
            />
            <Image
              src={cardTwo}
              alt={''}
              className="relative bottom-52"
              data-aos="fade-left"
              data-aos-delay="350"
            />
            <Image
              src={cardThree}
              alt={''}
              className="absolute bottom-28"
              data-aos="fade-up"
              data-aos-dalay="450"
            />
          </div>
          <RevealList
            origin="top"
            delay={350}
            duration={1000}
            easing="ease-in-out"
            distance="20px"
            reset={false}
            interval={20}
          >
            <div className="relative block md:hidden">
              <Image src={cardOne} alt={''} className="relative" />
              <Image src={cardTwo} alt={''} className="relative bottom-36" />
              <Image src={cardThree} alt={''} className="absolute bottom-16" />
            </div>
          </RevealList>
          <div className="flex justify-between gap-x-[0.625rem]">
            <Button className="flex items-center justify-center whitespace-nowrap rounded-[0.375rem] bg-brand-color-red  transition-colors delay-150 duration-300 hover:bg-brand-color-red/75 dark:bg-brand-color-red dark:text-white dark:hover:bg-brand-color-red/75 md:px-[1.5rem] md:py-[1rem]">
              Abrir uma conta
            </Button>
            <Button className="flex items-center justify-center whitespace-nowrap border-2 bg-transparent px-6 py-4 font-inter text-[1.25rem] font-medium leading-[1.25rem] text-dark-20 transition-colors delay-150 duration-300 hover:border-0 hover:bg-brand-color-red hover:text-white dark:border-0 dark:hover:bg-brand-color-red dark:hover:text-white">
              Comparar cartões
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
