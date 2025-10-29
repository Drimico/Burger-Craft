import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import CartBurgerCard from "@/components/cartComponents/CartBurgerCard"
import useHomeStore from "@/store/useHomeStore"

const Cart = () => {
  const { cart } = useHomeStore()
  
  return (
    <div className="flex flex-col w-screen h-screen mt-[160px] items-center justify-evenly p-10 text-2xl">
      <Link
        to="/"
        className="flex items-center gap-2 text-white text-3xl font-mono cursor-pointer hover:text-emerald-800 group w-fit"
      >
        <ChevronLeft className="group-hover:animate-bounceX" size={30} /> 
        Inapoi la meniu
      </Link>
      <div className="flex flex-col gap-5">
        {cart.length === 0 ? (
          <div>Cosul este gol</div>
        ) : (
          cart.map((item) => (
            <CartBurgerCard key={item.cartId} burger={item} id={item.cartId} />
          ))
        )}
      </div>
    </div>
  )
}

export default Cart