import Image from 'next/image'

interface CardsProps {
  title: string
  description: string
  src: string
  className?: string
}

export const CardsSeven = ({
  title,
  description,
  src,
  className,
}: CardsProps) => {
  return (
    <div
      className={`group flex  flex-col items-start gap-5 bg-white p-5 dark:bg-zinc-800 ${className}`}
    >
      <Image src={src} alt={''} />
      <h5 className=" pl-3 font-dmSans text-[1.75rem] font-bold leading-[2.1rem] tracking-[-0.0525rem] text-dark-10 dark:text-white">
        {title}
      </h5>
      <p className="font-inter text-[1rem] font-medium italic leading-[1.6rem] text-dark-10 dark:text-white">
        {description}
      </p>
    </div>
  )
}
