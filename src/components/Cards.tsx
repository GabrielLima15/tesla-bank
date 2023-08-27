import { ReactElement } from 'react'

interface CardsProps {
  icon: ReactElement
  title: string
  description: string
  linkText: string
}

export const Cards = ({ icon, title, description, linkText }: CardsProps) => {
  return (
    <>
      <div className="group flex flex-col items-start gap-5 bg-white p-5 dark:bg-zinc-800 lg:w-[17.5rem]">
        {icon}
        <h5 className="font-dmSans text-lg font-medium leading-8 tracking-[0.01575rem] text-dark-10 dark:text-white">
          {title}
        </h5>
        <p className="font-inter text-sm font-medium leading-6 text-dark-10 dark:text-white">
          {description}
        </p>
        <a
          href="http://"
          className="font-inter text-xs font-semibold uppercase text-brand-color-red underline"
        >
          {linkText}
        </a>
      </div>
    </>
  )
}
