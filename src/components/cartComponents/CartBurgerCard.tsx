import useHomeStore from "@/store/useHomeStore"
import { Minus, Plus } from "lucide-react"

interface CartBurgerCardProps {
  id: string
  burger: {
    name: string
    img: string
    price: number
    orders: number
    adds?: {
      name: string
      weight: number
      price: number
    }[]
    selectedAdds?: string[]
  }
}

const CartBurgerCard = ({ burger, id }: CartBurgerCardProps) => {
  const { updateCartItemQty, removeFromCart } = useHomeStore()

  const handleIncrease = () => {
    updateCartItemQty(id, burger.orders + 1)
  }

  const handleDecrease = () => {
    if (burger.orders > 1) {
      updateCartItemQty(id, burger.orders - 1)
    }
  }

  const totalPrice = burger.price * burger.orders

  return (
    <div className="flex items-center justify-between gap-20 h-fit text-white">
      <div className="flex gap-5 items-center w-full">
        <img
          className="h-30 border-4 border-emerald-800"
          src={`${burger.img}`}
          alt=""
        />
        <div className="flex flex-col">
          {burger.name}
          <div className="flex gap-2">
            {burger.selectedAdds?.map((addName, index, array) => (
              <span
                key={addName + burger.name}
                className="text-lg text-emerald-500"
              >
                {addName}
                {index < array.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-20 w-full">
        <div className="flex gap-3 items-center justify-center">
          <button 
            className="cursor-pointer" 
            type="button" 
            onClick={handleDecrease}
            disabled={burger.orders <= 1}
          >
            <Minus className={burger.orders <= 1 ? "opacity-50" : ""} />
          </button>
          <span>{burger.orders}</span>
          <button 
            className="cursor-pointer" 
            type="button" 
            onClick={handleIncrease}
          >
            <Plus />
          </button>
        </div>
        <div className="flex gap-2 justify-center">
          Pret: <span className="text-emerald-800">{burger.price} Lei</span>
        </div>
        <div className="flex gap-2 justify-center">
          Total: <span className="text-emerald-800">{totalPrice} Lei</span>
        </div>
        <button 
          onClick={() => removeFromCart(id)} 
          type="button" 
          className="w-10 h-10 transition-transform duration-500 hover:rotate-90 cursor-pointer"
        >
          <img className="size-10 object-cover" src="/images/x.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default CartBurgerCard