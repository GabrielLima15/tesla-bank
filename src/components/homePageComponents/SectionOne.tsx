'use client'

import { Check, ArrowRight } from 'lucide-react'
import Image from 'next/image'

import cardOne from '../../../public/assets/carOne.svg'
import cardTwo from '../../../public/assets/cardTwo.svg'
import playStore from '../../../public/assets/playStore.svg'
import apple from '../../../public/assets/appe.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'
import { RevealWrapper } from 'next-reveal'

export const SectionOne = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <main className="">
        <div className="flex justify-center px-8 py-28 lg:container lg:mx-auto lg:flex lg:h-auto  lg:w-[95%] lg:items-center lg:justify-between">
          <RevealWrapper
            origin="top"
            delay={350}
            duration={1000}
            easing="ease-in-out"
            distance="20px"
            reset={false}
          >
            <main className="flex flex-col items-start gap-4">
              <h1 className="font-dmSans  text-[2.2rem] font-medium text-dark-10 dark:text-white md:text-[5rem] md:leading-[1.2] lg:text-[6rem] xl:text-[5rem] xl:leading-[6.05rem] xl:tracking-[-0.165rem] 2xl:text-[5.5rem]">
                TeslaBank <br className="hidden min-[425px]:block" /> seu banco
                digital.
              </h1>
              <span className="font-inter text-[0.9rem] font-medium leading-[1.8] text-dark-10 dark:text-white md:text-[1.5rem] md:leading-[2.55rem]">
                Com TeslaBank, você pode realizar transferências <br />{' '}
                bancárias com zero taxa e pagar suas contas.
              </span>
              <div className="mb-14 justify-center gap-12 md:inline-flex">
                <li className="list-none flex-col items-start gap-12">
                  <span className="flex items-center gap-4 font-inter font-medium leading-[2.025rem] text-dark-10 dark:text-white">
                    <Check className="text-brand-color-red" />
                    Transferência instantânea
                  </span>
                  <span className="flex items-center gap-4 font-inter font-medium leading-[2.025rem] text-dark-10 dark:text-white">
                    <Check className="text-brand-color-red" />
                    Sem taxas absurdas
                  </span>
                </li>
                <li className="list-none flex-col items-start gap-12">
                  <span className="flex items-center gap-4 font-inter font-medium leading-[2.025rem] text-dark-10 dark:text-white">
                    <Check className="text-brand-color-red" />
                    Pagamentos em todo o mundo
                  </span>
                  <span className="flex items-center gap-4 font-inter font-medium leading-[2.025rem] text-dark-10 dark:text-white">
                    <Check className="text-brand-color-red" />
                    100% pensando em você
                  </span>
                </li>
              </div>
              <div className="flex flex-col-reverse items-center justify-center gap-y-8 md:flex md:flex-row md:gap-x-12 md:gap-y-0">
                <button className="flex h-[3.75rem] w-[15.438rem] items-center justify-center gap-x-[0.625rem] rounded-[0.25rem] bg-[#EB3850]">
                  <span className="font-inter text-[1.25rem] font-medium text-white">
                    Abrir uma conta
                  </span>
                  <ArrowRight className="text-white" />
                </button>
                <div className="flex gap-x-[2.5rem]">
                  <Image
                    src={apple}
                    alt=""
                    className="h-[1.74575rem] w-[1.74575rem]"
                  />
                  <Image
                    src={playStore}
                    alt=""
                    className="h-[1.74575rem] w-[1.74575rem]"
                  />
                </div>
              </div>
            </main>
          </RevealWrapper>
          <main className="relative mr-8 hidden pt-20 xl:flex">
            <Image
              data-aos="fade-right"
              data-aos-delay="350"
              src={cardOne}
              width={350}
              height={350}
              alt={''}
              className="relative z-10 h-[30rem] w-[30rem]"
            />
            <Image
              data-aos="fade-left"
              src={cardTwo}
              width={350}
              height={350}
              alt={''}
              className="absolute bottom-20 left-24 z-0 h-[30rem] w-[30rem] rotate-[10deg] transform"
            />
          </main>
        </div>
      </main>
    </>
  )
}
