import BurgerCardInfo from "./BurgerCardInfo"

interface BurgerCardProps {
  description: string
  index: number
  name: string
  price: number
  weight: number
  adds: {
    name: string
    weight: number
    price: number
  }[]
  img: string
}

const BurgerCard = ({
  description,
  name,
  price,
  weight,
  adds,
  img,
  index,
}: BurgerCardProps) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-fit relative ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
    >
      <div className="relative flex w-fit ">
        <img className="object-contain" src={img} alt="burger-image" />
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[100%] border-4 border-emerald-700 h-20 w-64 flex justify-center items-center ">
          <div className="bg-black text-4xl h-16 w-60 flex items-center justify-center text-emerald-700 font-mono ">
            {price} lei
          </div>
        </div>
      </div>
      <BurgerCardInfo
        index={index}
        adds={adds}
        price={price}
        weight={weight}
        name={name}
        description={description}
      />
    </div>
  )
}

export default BurgerCard
