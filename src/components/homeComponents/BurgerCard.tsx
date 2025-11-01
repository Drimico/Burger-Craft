import { useState } from "react"
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
  adds,
  img,
  index,
}: BurgerCardProps) => {
  const [checkedAdds, setCheckedAdds] = useState<boolean[]>(() =>
    adds.map(() => false),
  )
  const currentPrice = checkedAdds.reduce(
    (sum, checked, idx) => sum + (checked ? adds[idx].price : 0),
    price,
  )
  return (
    <div
      className={`flex items-center justify-center w-full h-fit relative ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
    >
      <div className="relative flex w-fit ">
        <img className="object-contain" src={img} alt="burger-image" />
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[100%] border-4 border-emerald-700 h-20 w-64 flex justify-center items-center ">
          <div className="bg-black text-4xl h-16 w-60 flex items-center justify-center text-emerald-700 font-mono ">
            {currentPrice} lei
          </div>
        </div>
      </div>
      <BurgerCardInfo
        checkedAdds={checkedAdds}
        setCheckedAdds={setCheckedAdds}
        index={index}
        adds={adds}
        name={name}
        description={description}
      />
    </div>
  )
}

export default BurgerCard
