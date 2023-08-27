'use client'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive)
    document.body.classList.toggle('overflow-body')
  }
  return (
    <header className="flex justify-between px-8 py-2 lg:container md:absolute md:w-full lg:mx-auto lg:flex  lg:w-[95%] lg:items-center lg:justify-between">
      <h1
        className={`z-50 flex justify-between font-dmSans text-2xl font-bold leading-8 text-brand-color-red ${
          isMenuActive ? 'fixed left-[33px]' : ''
        }`}
      >
        teslabank.
      </h1>
      <button
        onClick={toggleMenu}
        className={`z-50 text-gray-600 hover:text-gray-800 focus:outline-none lg:hidden ${
          isMenuActive ? 'fixed right-8' : ''
        }`}
      >
        <div
          className={`${
            isMenuActive ? 'move-x-one' : ''
          } reset-icon-move bg-gray-500`}
        ></div>
        <div
          className={`${
            isMenuActive ? 'move-x-two' : ''
          } reset-icon-move bg-gray-500`}
        ></div>
      </button>
      <nav
        className={`menu-mobile ${
          isMenuActive
            ? 'fixed inset-0 z-10 flex flex-col items-center justify-center bg-white dark:bg-dark-20 lg:static lg:flex lg:items-center lg:space-x-6'
            : 'hidden lg:flex lg:items-center lg:space-x-6'
        }`}
      >
        <a
          className="pb-2 pl-2 pr-3 pt-2 font-inter text-2xl font-medium text-dark-10 dark:text-white lg:text-[1rem]"
          href=""
        >
          Benefícios
        </a>
        <a
          className="flex items-center gap-x-2 pb-2 pl-2  pr-3 pt-2 font-inter text-2xl font-medium text-dark-10 dark:text-white lg:text-[1rem]"
          href=""
        >
          Conta Digital
          <ChevronDown
            fill=""
            size={10}
            className="text-dark-10 dark:text-white"
          />
        </a>
        <a
          className="pb-2 pl-2 pr-3 pt-2 font-inter text-2xl font-medium text-dark-10 dark:text-white lg:text-[1rem]"
          href=""
        >
          Suporte
        </a>
        <a
          className="flex items-center gap-x-2 pb-2 pl-2  pr-3 pt-2 font-inter text-2xl font-medium text-dark-10 dark:text-white lg:text-[1rem]"
          href=""
        >
          Blog
          <ChevronDown
            fill=""
            size={10}
            className="text-dark-10 dark:text-white"
          />
        </a>
        <div className="flex flex-col items-center justify-center lg:hidden">
          <a
            className="flex items-center gap-x-2 pb-2 pl-2  pr-3 pt-2 font-inter text-2xl font-medium text-brand-color-red lg:text-[1rem]"
            href=""
          >
            Entrar
          </a>
          <a
            className="flex items-center justify-center rounded-[0.25rem] bg-[#EB3850] px-6 py-3 text-white"
            href=""
          >
            Abrir Conta
          </a>
        </div>
      </nav>
      <div className="hidden items-center justify-end gap-x-8 py-6 lg:inline-flex">
        <span className="text-brand-color-red">Entrar</span>
        <button className="flex items-center justify-center rounded-[0.25rem] bg-[#EB3850] px-6 py-3 text-white">
          Abrir Conta
        </button>
      </div>
    </header>
  )
}
