import { Minus, Plus } from "lucide-react"
import {  useState } from "react"
import useHomeStore from "@/store/useHomeStore"
import { Checkbox } from "../ui/checkbox"

interface BurgerCardProps {
  description: string
  index: number
  name: string
  weight: number
  price: number
  adds: {
    name: string
    weight: number
    price: number
  }[]
}

const BurgerCardInfo = ({
  name,
  index,
  description,
  adds,
}: BurgerCardProps) => {
  const [orders, setOrders] = useState(1)
  const [checkedAdds, setCheckedAdds] = useState<boolean[]>(() =>
    adds.map(() => false),
  )
  const { addToCart, getOriginalBurger } = useHomeStore()

  const burger = getOriginalBurger(index)

  const currentPrice = checkedAdds.reduce(
    (sum, checked, idx) => sum + (checked ? adds[idx].price : 0),
    burger.price,
  )

  const currentWeight = checkedAdds.reduce(
    (sum, checked, idx) => sum + (checked ? adds[idx].weight : 0),
    burger.weight,
  )

  const handleToggleAdd = (id: number, checked: boolean | "indeterminate") => {
    const newCheckedAdds = [...checkedAdds]
    newCheckedAdds[id] =
      checked === "indeterminate" ? !newCheckedAdds[id] : checked
    setCheckedAdds(newCheckedAdds)
  }

  return (
    <div
      className={`bg-gray-200 flex flex-col h-70 min-w-100 max-w-130 items-center p-3 relative ${index % 2 === 0 ? "right-10" : "left-10"}`}
    >
      <div className="md:text-4xl xxs:text-xl font-bold font-mono text-black/70 text-shadow-2xs">
        {name}
      </div>
      <div className="text-xl text-black/40 font-bold text-shadow-2xs">
        {description}
      </div>
      <span className="text-2xl text-emerald-700 font-bold">
        {currentWeight} gr
      </span>
      <span className="text-2xl text-emerald-700 font-bold">
        {currentPrice} MDL
      </span>

      <div className="p-2 w-full flex gap-4 font-mono justify-center items-center">
        {adds.map((ingredient, id) => (
          <div
            key={ingredient.name}
            className="flex items-center justify-center gap-2"
          >
            <Checkbox
              checked={checkedAdds[id]}
              onCheckedChange={(checked) => handleToggleAdd(id, checked)}
            />
            {ingredient.name}
          </div>
        ))}
      </div>

      <div className="flex gap-3 text-2xl font-bold justify-center items-center absolute top-[80%]">
        <button
          type="button"
          onClick={() => setOrders((prev) => Math.max(1, prev - 1))}
        >
          <Minus size={20} className="text-red-700" />
        </button>
        <span>{orders}</span>
        <button type="button" onClick={() => setOrders((prev) => prev + 1)}>
          <Plus size={20} className="text-emerald-800" />
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          const selectedAdds = adds
            .filter((_, idx) => checkedAdds[idx])
            .map((add) => add.name)
          addToCart(index, orders, selectedAdds)
          setOrders(1)
          setCheckedAdds(adds.map(() => false))
        }}
        className="flex w-50 p-2 text-2xl items-center justify-center bg-gray-400 text-emerald-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[100%] cursor-pointer"
      >
        Adauga in cos
      </button>
    </div>
  )
}
export default BurgerCardInfo