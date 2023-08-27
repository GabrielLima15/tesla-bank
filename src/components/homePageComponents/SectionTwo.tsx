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
      <main className="min-h-screen py-8">
        <div className="container mx-auto flex w-[80%] items-center justify-between">
          <main className="relative flex gap-2">
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
            <h1 className="font-dmSans text-[3.5rem] font-medium leading-[3.85rem] tracking-[-0.1875rem] text-dark-10 dark:text-white">
              Abra sua conta{' '}
              <span className="text-brand-color-red">gratuita</span>!
            </h1>
            <span className="font-inter text-[1.5rem] font-medium leading-[2.55rem] text-dark-10 dark:text-white">
              Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,{' '}
              <br />
              TEDs e transferências para todos os bancos sem pagar nada.
            </span>
            <div className="flex flex-col space-y-10">
              <div className="flex items-center space-x-10">
                <div className="bg-brand-color-white flex h-[4rem] w-[4rem] items-center justify-center rounded-[0.5rem] dark:bg-brand-color-red">
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
              <div className="flex items-center space-x-10">
                <div className="bg-brand-color-white flex h-[4rem] w-[4rem] items-center justify-center rounded-[0.5rem] dark:bg-brand-color-red">
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
              <div className="flex items-center space-x-10">
                <div className="bg-brand-color-white flex h-[4rem] w-[4rem] items-center justify-center rounded-[0.5rem] dark:bg-brand-color-red">
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
