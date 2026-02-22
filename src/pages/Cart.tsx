import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import CartBurgerCard from "@/components/cartComponents/CartBurgerCard";
import useCraftStore from "@/store/useCraftStore";
import useHomeStore from "@/store/useHomeStore";

const Cart = () => {
  const { cart } = useHomeStore();
  const { craftedBurgers } = useCraftStore();
  return (
    <div className="flex flex-col w-screen h-screen mt-[160px] items-center justify-evenly p-10 text-2xl ">
      <Link
        to="/"
        className="flex items-center gap-2 text-white text-3xl cursor-pointer hover:text-emerald-800 group w-fit"
      >
        <ChevronLeft className="group-hover:animate-bounceX" size={30} />
        Inapoi la meniu
      </Link>
      <div className="flex flex-col gap-5 xlg:w-400 lg:w-250 md:w-200 xs:w-100">
        {cart.length === 0 ? (
          <div>Cosul este gol</div>
        ) : (
          cart.map((item) => (
            <CartBurgerCard
              key={item.cartId}
              name={item.name}
              price={item.price}
              orders={item.orders}
              id={item.cartId}
              img={item.img}
              selectedAdds={item.selectedAdds}
            />
          ))
        )}
      </div>
      <div className="flex flex-col gap-5 xlg:w-400 lg:w-250 md:w-200 xs:w-100">
        {craftedBurgers.length === 0 ? (
          <div></div>
        ) : (
          craftedBurgers.map((item) => (
            <CartBurgerCard
              img={item.img}
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              orders={item.orders}
              selectedAdds={item.selectedItems?.map((item) => item.value)}
              
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
