import { ChevronDown } from 'lucide-react'

export const Header = () => {
  return (
    <header className="flex items-center justify-evenly">
      <h1 className="flex justify-between font-dmSans text-2xl font-bold leading-8 text-brand-color-red">
        teslabank.
      </h1>
      <nav className="flex items-center">
        <a
          className="pb-2 pl-2 pr-3 pt-2 font-inter text-[1rem] font-medium text-dark-10 dark:text-white"
          href=""
        >
          Benefícios
        </a>
        <a
          className="flex items-center gap-x-2 pb-2 pl-2  pr-3 pt-2 font-inter text-[1rem] font-medium text-dark-10 dark:text-white"
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
          className="pb-2 pl-2 pr-3 pt-2 font-inter text-[1rem] font-medium text-dark-10 dark:text-white"
          href=""
        >
          Suporte
        </a>
        <a
          className="flex items-center gap-x-2 pb-2 pl-2  pr-3 pt-2 font-inter text-[1rem] font-medium text-dark-10 dark:text-white"
          href=""
        >
          Blog
          <ChevronDown
            fill=""
            size={10}
            className="text-dark-10 dark:text-white"
          />
        </a>
      </nav>
      <div className="inline-flex items-center justify-end gap-x-8 py-6">
        <span className="text-brand-color-red">Entrar</span>
        <button className="flex items-center justify-center rounded-[0.25rem] bg-[#EB3850] px-6 py-3 text-white">
          Abrir Conta
        </button>
      </div>
    </header>
  )
}
