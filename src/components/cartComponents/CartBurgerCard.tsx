import { Minus, Plus } from "lucide-react";
import useHomeStore from "@/store/useHomeStore";
import type { CartBurgerCardProps } from "@/types/burgerTypes";

const CartBurgerCard = ({ name, price, orders, id, img, selectedAdds }: CartBurgerCardProps) => {
  const { updateCartItemQty, removeFromCart } = useHomeStore();

  const handleIncrease = () => {
    updateCartItemQty(id, orders + 1);
  };

  const handleDecrease = () => {
    if (orders > 1) {
      updateCartItemQty(id, orders - 1);
    }
  };

  const totalPrice = price * orders;

  return (
    <div className="flex h-fit w-full justify-center text-white gap-10">
      <div className="flex gap-5 items-center md:w-150 sm:w-80 xs:w-100">
        <img className="h-40 border-4 border-emerald-800 w-50 object-cover" src={`${img}`} alt="" />
        <div className="flex flex-col">
          {name}
          <div className="flex gap-2 flex-wrap">
            {selectedAdds?.map(
              (addName, index, array) =>
                addName !== "-" && (
                  <span key={addName + name} className="text-lg text-emerald-500 w-fit">
                    {addName !== "-" && addName}
                    {index < array.length - 1 ? "," : ""}
                  </span>
                )
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between md:w-150 lg:flex-row sm:flex-col sm:w-100 xs:w-100">
        <div className="flex gap-3 ">
          <button
            className="cursor-pointer"
            type="button"
            onClick={handleDecrease}
            disabled={orders <= 1}
          >
            <Minus className={orders <= 1 ? "opacity-50" : ""} />
          </button>
          <span>{orders}</span>
          <button className="cursor-pointer" type="button" onClick={handleIncrease}>
            <Plus />
          </button>
        </div>
        <div className="flex gap-2 justify-center">
          Pret: <span className="text-emerald-800">{price} Lei</span>
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
  );
};

export default CartBurgerCard;
