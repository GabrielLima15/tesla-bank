interface CardsProps {
  title: string
  description: string
}

export const CardsFour = ({ title, description }: CardsProps) => {
  return (
    <div className="group flex  flex-col items-start gap-5 bg-white p-5 dark:bg-zinc-800">
      <h5 className="border-l-4 border-brand-color-red pl-3 font-dmSans text-[1.5rem] font-bold uppercase text-dark-10 dark:text-white">
        {title}
      </h5>
      <p className="font-inter text-[1.25rem] font-normal italic leading-[2.125rem] text-dark-10 dark:text-white">
        {description}
      </p>
    </div>
  )
}
