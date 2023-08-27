'use client'
import Image from 'next/image'

import app from '../../../public/assets/app.svg'
import appBlack from '../../../public/assets/app-black.svg'
import { RevealWrapper } from 'next-reveal'
import {
  CheckCircle,
  DollarSign,
  Heart,
  MousePointer,
  Smartphone,
  Smile,
} from 'lucide-react'

export const SectionTwo = () => {
  return (
    <RevealWrapper
      origin="top"
      delay={350}
      duration={1000}
      easing="ease-in-out"
      distance="20px"
      reset={false}
    >
      <main className="">
        <div className="flex justify-between px-8 py-40 lg:container lg:mx-auto lg:flex  lg:w-[95%] lg:items-center lg:justify-between">
          <main className="relative hidden gap-2 xl:flex">
            <div className="dark:hidden">
              <Image
                data-aos="fade-right"
                data-aos-delay="300"
                src={app}
                width={280}
                height={280}
                alt=""
              />
            </div>
            <div className="hidden dark:block">
              <Image
                data-aos="fade-right"
                data-aos-delay="300"
                src={appBlack}
                width={280}
                height={280}
                alt=""
              />
            </div>
            <div className="animation-moveIconOne absolute -left-8 -top-5 flex h-[5rem] w-[5rem] items-center justify-center rounded-md bg-white py-2 shadow-lg dark:bg-brand-color-red">
              <CheckCircle
                className="text-brand-color-red  dark:text-white"
                size={40}
              />
            </div>
            <div className="animation-moveIconTwo absolute -right-8 top-1/2 flex h-[5rem] w-[5rem] -translate-y-1/2 transform items-center justify-center rounded-md bg-white py-2 shadow-lg dark:bg-brand-color-red">
              <MousePointer
                className="text-brand-color-red dark:text-white"
                size={40}
              />
            </div>
            <div className="animation-moveIconTre absolute -left-8 bottom-0 flex h-[5rem] w-[5rem] items-center justify-center rounded-md bg-white py-2 shadow-lg dark:bg-brand-color-red">
              <Heart
                className="text-brand-color-red dark:text-white"
                size={40}
              />
            </div>
          </main>
          <main className="flex flex-col items-start gap-4">
            <h1 className="font-dmSans text-[2.3rem] font-medium tracking-[-0.1875rem] text-dark-10 dark:text-white md:text-[3.5rem] md:leading-[3.85rem]">
              Abra sua conta{' '}
              <span className="text-brand-color-red">gratuita</span>!
            </h1>
            <span className="font-inter text-[1rem] font-medium text-dark-10 dark:text-white md:text-[1.5rem] md:leading-[2.55rem]">
              Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,{' '}
              <br />
              TEDs e transferências para todos os bancos sem pagar nada.
            </span>
            <div className="flex flex-col space-y-10">
              <div className="flex items-center space-x-10 py-8 md:py-0">
                <div className="flex items-center justify-center rounded-[0.5rem] bg-brand-color-white p-4 dark:bg-brand-color-red">
                  <DollarSign
                    className="text-brand-color-red dark:text-white"
                    size={30}
                  />
                </div>
                <div>
                  <h3 className="mb-[0.5rem] font-dmSans text-[1.5rem] font-medium text-dark-10 dark:text-white">
                    Seu dinheiro rendendo mais
                  </h3>
                  <span className="font-inter text-dark-10 dark:text-white">
                    Rendem mais que a poupança e você resgata quando quiser.
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-10 py-8 md:py-0">
                <div className="flex items-center justify-center rounded-[0.5rem] bg-brand-color-white p-4 dark:bg-brand-color-red">
                  <Smartphone
                    className="text-brand-color-red dark:text-white"
                    size={30}
                  />
                </div>
                <div>
                  <h3 className="mb-[0.5rem] font-dmSans text-[1.5rem] font-medium text-dark-10 dark:text-white">
                    Seu dinheiro rendendo mais
                  </h3>
                  <span className="font-inter text-dark-10 dark:text-white">
                    Rendem mais que a poupança e você resgata quando quiser.
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-10 py-8 md:py-0">
                <div className="flex items-center justify-center rounded-[0.5rem] bg-brand-color-white p-4 dark:bg-brand-color-red">
                  <Smile
                    className="text-brand-color-red dark:text-white"
                    size={30}
                  />
                </div>
                <div>
                  <h3 className="mb-[0.5rem] font-dmSans text-[1.5rem] font-medium text-dark-10 dark:text-white">
                    Seu dinheiro rendendo mais
                  </h3>
                  <span className="font-inter text-dark-10 dark:text-white">
                    Rendem mais que a poupança e você resgata quando quiser.
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
    </RevealWrapper>
  )
}
