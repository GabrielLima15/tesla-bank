'use client'
import Image from 'next/image'

import app from '../../../public/assets/app.svg'
import ScrollReveal from 'scrollreveal'
import { useEffect, useRef } from 'react'
import {
  CheckCircle,
  DollarSign,
  Heart,
  MousePointer,
  Smartphone,
  Smile,
} from 'lucide-react'

export const SectionTwo = () => {
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
    <main ref={containerRef} className="min-h-screen py-8">
      <div className="container mx-auto flex w-[80%] items-center justify-between">
        <main className="relative flex gap-2">
          <Image
            data-aos="fade-right"
            data-aos-delay="300"
            src={app}
            width={280}
            height={280}
            alt={''}
          />
          <div className="animation-moveIconOne absolute -left-8 -top-5 flex h-[5rem] w-[5rem] items-center justify-center rounded-md bg-white py-2 shadow-lg">
            <CheckCircle className="text-[#EB3850]" size={40} />
          </div>
          <div className="animation-moveIconTwo absolute -right-8 top-1/2 flex h-[5rem] w-[5rem] -translate-y-1/2 transform items-center justify-center rounded-md bg-white py-2 shadow-lg">
            <MousePointer className="text-[#EB3850]" size={40} />
          </div>
          <div className="animation-moveIconTre absolute -left-8 bottom-0 flex h-[5rem] w-[5rem] items-center justify-center rounded-md bg-white py-2 shadow-lg">
            <Heart className="text-[#EB3850]" size={40} />
          </div>
        </main>
        <main className="flex flex-col items-start gap-4">
          <h1 className="font-dmSans text-[3.5rem] font-medium leading-[3.85rem] tracking-[-0.1875rem] text-[#1A191E]">
            Abra sua conta <span className="text-[#EB3850]">gratuita</span>!
          </h1>
          <span className="font-inter text-[1.5rem] font-medium leading-[2.55rem] text-[#1A191E]">
            Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,{' '}
            <br />
            TEDs e transferências para todos os bancos sem pagar nada.
          </span>
          <div className="flex flex-col space-y-10">
            <div className="flex items-center space-x-10">
              <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-[0.5rem] bg-[#FFF8F9]">
                <DollarSign className="text-[#EB3850]" size={30} />
              </div>
              <div>
                <h3 className="mb-[0.5rem] font-dmSans text-[1.5rem] font-medium text-[#1A191E]">
                  Seu dinheiro rendendo mais
                </h3>
                <span className="font-inter text-[#1A191E]">
                  Rendem mais que a poupança e você resgata quando quiser.
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-10">
              <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-[0.5rem] bg-[#FFF8F9]">
                <Smartphone className="text-[#EB3850]" size={30} />
              </div>
              <div>
                <h3 className="mb-[0.5rem] font-dmSans text-[1.5rem] font-medium text-[#1A191E]">
                  Seu dinheiro rendendo mais
                </h3>
                <span className="font-inter text-[#1A191E]">
                  Rendem mais que a poupança e você resgata quando quiser.
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-10">
              <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-[0.5rem] bg-[#FFF8F9]">
                <Smile className="text-[#EB3850]" size={30} />
              </div>
              <div>
                <h3 className="mb-[0.5rem] font-dmSans text-[1.5rem] font-medium text-[#1A191E]">
                  Seu dinheiro rendendo mais
                </h3>
                <span className="font-inter text-[#1A191E]">
                  Rendem mais que a poupança e você resgata quando quiser.
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}
