import { Minus, Plus } from "lucide-react";
import type { CartBurgerCardProps } from "@/types/burgerTypes";
import { useTranslation } from "react-i18next";

const CartBurgerCard = ({ name, price, orders, id, img, selectedAdds, removeFn, updateQtyFn }: CartBurgerCardProps) => {
  const {t} = useTranslation();
  const handleIncrease = () => {
    updateQtyFn(id, orders + 1);
  };
  console.log(name);
  
  const handleDecrease = () => {
    if (orders > 1) {
      updateQtyFn(id, orders - 1);
    }
  };

  const totalPrice = price * orders;

  return (
    <div className="flex flex-col md:flex-row h-fit w-full justify-center text-white gap-10">
      <div className="flex gap-5 items-center w-full">
        <div className="h-40 w-full flex">
          <img className="border-4 border-emerald-800 object-cover w-60 h-full" src={img} alt="" />
        </div>
        <div className="flex flex-col w-full">
          {t(name)}
          <div className="flex gap-2 flex-wrap">
            {selectedAdds?.map(
              (addName, index, array) =>
                addName !== "-" && (
                  <span key={addName + name} className="text-lg text-emerald-500 w-fit">
                    {t(addName)}
                    {index < array.length - 1 ? "," : ""}
                  </span>
                ),
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around w-full">
        <div className="flex gap-3 md:text-xl text-lg">
          <button className="cursor-pointer" type="button" onClick={handleDecrease} disabled={orders <= 1}>
            <Minus className={orders <= 1 ? "opacity-50" : ""} />
          </button>
          <span>{orders}</span>
          <button className="cursor-pointer" type="button" onClick={handleIncrease}>
            <Plus />
          </button>
        </div>
        <div className="flex gap-2 justify-center items-center md:text-xl text-lg">
          {t("ui.price")}: <span className="text-emerald-800 ">{price} Lei</span>
        </div>
        <div className="flex gap-2 justify-center items-center md:text-xl text-lg">
          {t("ui.total")}: <span className="text-emerald-800 ">{totalPrice} Lei</span>
        </div>
        <button onClick={() => removeFn(id)} type="button" className="w-10 h-10 transition-transform duration-500 hover:rotate-90 cursor-pointer">
          <img className="size-10 object-cover" src="/images/x.webp" alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartBurgerCard;
