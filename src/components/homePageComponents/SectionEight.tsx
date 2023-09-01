'use client'

import { Smartphone } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { RevealWrapper } from 'next-reveal'

export const SectionEight = () => {
  return (
    <div className="bg-white dark:bg-dark-20">
      <main className="flex-col justify-between px-8 pb-[9.38rem] lg:container lg:mx-auto lg:w-[95%] lg:items-center lg:justify-between">
        <RevealWrapper
          origin="left"
          delay={350}
          duration={1000}
          easing="ease-in-out"
          distance="20px"
          reset={false}
        >
          <main className="flex flex-col items-center justify-center pb-[2.5rem] md:space-x-0">
            <span className="font-dmSans text-[1.25rem] font-bold uppercase leading-normal text-brand-color-red">
              #ajuda
            </span>
            <h2 className="mb-[1rem] font-dmSans text-[2rem] font-semibold leading-normal tracking-[-0.105rem] text-dark-20 dark:text-white md:text-[3.5rem]">
              Ficou alguma dúvida?
            </h2>
            <span className="text-center font-inter text-[1.5rem] font-medium leading-normal text-dark-20 dark:text-white">
              Confira nossa lista de perguntas frequentes que recebemos
            </span>
          </main>
        </RevealWrapper>
        <div className="container mx-auto xl:w-[50%]">
          <RevealWrapper
            origin="right"
            delay={350}
            duration={1000}
            easing="ease-in-out"
            distance="20px"
            reset={false}
          >
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="border-none">
                  <div className="flex items-center space-x-[1.56rem]">
                    <div className="rounded-md bg-brand-color-white p-2 dark:bg-brand-color-red">
                      <Smartphone
                        size={30}
                        className="text-brand-color-red dark:text-white"
                      />
                    </div>
                    <span className="font-dmSans text-[1.25rem] font-medium text-dark-20 dark:text-white">
                      Como posso abrir uma conta bancária?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <span className="font-inter font-normal text-dark-20/50 dark:text-white/50">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center space-x-[1.56rem]">
                    <div className="rounded-md bg-brand-color-white p-2 dark:bg-brand-color-red">
                      <Smartphone
                        size={30}
                        className="text-brand-color-red dark:text-white"
                      />
                    </div>
                    <span className="font-dmSans text-[1.25rem] font-medium text-dark-20 dark:text-white">
                      Qual é o meu saldo atual?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <span className="font-inter font-normal text-dark-20/50 dark:text-white/50">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex items-center space-x-[1.56rem]">
                    <div className="rounded-md bg-brand-color-white p-2 dark:bg-brand-color-red">
                      <Smartphone
                        size={30}
                        className="text-brand-color-red dark:text-white"
                      />
                    </div>
                    <span className="font-dmSans text-[1.25rem] font-medium text-dark-20 dark:text-white">
                      Como faço para transferir dinheiro para outra conta?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <span className="font-inter font-normal text-dark-20/50 dark:text-white/50">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </RevealWrapper>
        </div>
      </main>
    </div>
  )
}
