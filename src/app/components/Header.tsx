import { ChevronDown } from 'lucide-react'

export const Header = () => {
  return (
    <header className="flex items-center justify-evenly">
      <h1 className="font-dmSans text-red-logo flex justify-between text-2xl font-bold leading-8">
        teslabank.
      </h1>
      <nav className="flex items-center">
        <a
          className="font-inter pb-2 pl-2 pr-3 pt-2 text-[1rem] font-medium text-[#1A191E]"
          href=""
        >
          Benefícios
        </a>
        <a
          className="font-inter flex items-center gap-x-2  pb-2 pl-2 pr-3 pt-2 text-[1rem] font-medium text-[#1A191E]"
          href=""
        >
          Conta Digital
          <ChevronDown fill="" size={10} className="text-[#1A191E]" />
        </a>
        <a
          className="font-inter pb-2 pl-2 pr-3 pt-2 text-[1rem] font-medium text-[#1A191E]"
          href=""
        >
          Suporte
        </a>
        <a
          className="font-inter flex items-center gap-x-2  pb-2 pl-2 pr-3 pt-2 text-[1rem] font-medium text-[#1A191E]"
          href=""
        >
          Blog
          <ChevronDown fill="" size={10} className="text-[#1A191E]" />
        </a>
      </nav>
      <div className="inline-flex items-center justify-end gap-x-8 py-6">
        <span className="text-[#EB3850]">Entrar</span>
        <button className="flex items-center justify-center rounded-[0.25rem] bg-[#EB3850] px-6 py-3">
          Abrir Conta
        </button>
      </div>
    </header>
  )
}
