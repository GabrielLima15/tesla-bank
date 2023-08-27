interface CardsProps {
  title: string
  description: string
}

export const CardsFour = ({ title, description }: CardsProps) => {
  return (
    <div className="group flex  flex-col items-start gap-5 bg-white p-5">
      <h5 className="border-l-4 border-[#EB3850] pl-3 font-dmSans text-[1.5rem] font-bold uppercase text-[#1A191E]">
        {title}
      </h5>
      <p className="font-inter text-[1.25rem] font-normal italic leading-[2.125rem] text-[#1A191E]">
        {description}
      </p>
    </div>
  )
}
