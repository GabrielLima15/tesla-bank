'use client'

import { RevealWrapper } from 'next-reveal'
import { Button } from '../ui/button'
import Image from 'next/image'
import Apple from '../../../public/assets/apple-white.svg'
import PlayStore from '../../../public/assets/playstore-white.svg'
import TeslaIcon from '../../../public/assets/icon-tesla.svg'

export const SectionSix = () => {
  return (
    <div className="bg-brand-color-white dark:bg-zinc-900">
      <main className="flex justify-center px-8 py-32 lg:container lg:mx-auto lg:w-[95%] lg:items-center lg:justify-between xl:justify-between">
        <RevealWrapper
          origin="left"
          delay={350}
          duration={1000}
          easing="ease-in-out"
          distance="20px"
          reset={false}
        >
          <main className="pb-[2.5rem]">
            <h2 className="mb-[1.62rem] font-dmSans text-[2rem] font-medium leading-[2.5rem] tracking-[0.12rem] dark:text-white md:text-[3.5rem] md:leading-[4.4rem] xl:text-[4rem]">
              Uma nova experiência <br className="hidden md:flex" /> em
              <span className="text-brand-color-red">
                {' '}
                serviços financeiros.
              </span>
            </h2>
            <span className="font-inter text-[1rem] font-medium leading-[1.4rem] text-dark-20 dark:text-white md:text-[1.5rem] md:leading-[2.4rem]">
              Nossa abordagem inovadora e personalizada oferece uma <br />
              experiência única para atender às suas necessidades.
            </span>
            <div className="mt-[3.87rem] flex items-center space-x-1 md:space-x-[2.5rem]">
              <Button className="flex items-center justify-center space-x-2 whitespace-nowrap p-8 dark:dark:bg-brand-color-red dark:text-white dark:hover:bg-brand-color-red/75 md:space-x-4">
                <Image src={Apple} alt={''} />
                <div>
                  <p className="text-[0.875rem] font-normal">Download via</p>
                  <span className="text-[1.125rem] font-bold">Apple Store</span>
                </div>
              </Button>
              <Button className="flex items-center justify-center space-x-2 whitespace-nowrap p-8 dark:dark:bg-brand-color-red dark:text-white dark:hover:bg-brand-color-red/75 md:space-x-4">
                <Image src={PlayStore} alt={''} />
                <div>
                  <p className="text-[0.875rem] font-normal">Download via</p>
                  <span className="text-[1.125rem] font-bold">Google Play</span>
                </div>
              </Button>
            </div>
          </main>
        </RevealWrapper>
        <main className="hidden xl:flex">
          <RevealWrapper
            origin="right"
            delay={350}
            duration={1000}
            easing="ease-in-out"
            distance="20px"
            reset={false}
          >
            <div className="flex flex-col space-y-8">
              <div className="flex h-[23.625rem] w-[24rem] items-center justify-center rounded-[5rem] bg-brand-color-red">
                <Image src={TeslaIcon} alt="" />
              </div>
            </div>
          </RevealWrapper>
        </main>
      </main>
    </div>
  )
}
