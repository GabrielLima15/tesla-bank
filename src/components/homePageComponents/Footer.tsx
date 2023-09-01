export const Footer = () => {
  return (
    <div className="bg-[#F9F9F9]  dark:bg-zinc-800/50">
      <main className="lg:w-[95 px-8 lg:container lg:mx-auto">
        <div className="flex justify-center space-x-4 py-[2.44rem] md:space-x-10 lg:space-x-60 xl:space-x-[34.44rem]">
          <span className="font-inter text-[1.125rem] font-normal text-dark-20 dark:text-white">
            Copyright © 2023{' '}
            <span className="font-dmSans font-bold">GCLDEV</span>. Todos os
            direitos reservados.
          </span>
          <span className="font-dmSans text-[1rem] font-bold leading-normal text-brand-color-red">
            Powered by {`{ }`}
          </span>
        </div>
      </main>
    </div>
  )
}
