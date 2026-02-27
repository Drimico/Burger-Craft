import { ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CartBurgerCard from "@/components/cartComponents/CartBurgerCard";
import useCraftStore from "@/store/useCraftStore";
import useHomeStore from "@/store/useHomeStore";

const Cart = () => {
	const { t } = useTranslation();
	const { cart, removeFromCart, updateCartItemQty } = useHomeStore();
	const { craftedBurgers, removeCraftedBurger, updateCraftedBurgerQty } =
		useCraftStore();
	return (
		<div className="flex flex-col w-screen min-h-screen mt-[160px] items-center justify-evenly p-10 text-2xl relative text-white">
			<Link
				to="/"
				className="flex items-center gap-2 md:text-3xl text-2xl cursor-pointer hover:text-emerald-600 w-fit absolute top-[5%] left-[10%]"
			>
				<ChevronLeft className="animate-bounceX" size={30} />
				{t("ui.back_to_menu")}
			</Link>
			{cart.length === 0 && craftedBurgers.length === 0 && (
				<div className="absolute text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					{t("ui.empty_cart")}
				</div>
			)}
			<div className="flex flex-col gap-5 mt-20">
				<div className="flex flex-col gap-5 w-full">
					{cart.map((item) => (
						<CartBurgerCard
							key={item.cartId}
							name={`burgers.${item.id}.name`}
							price={item.price}
							orders={item.orders}
							id={item.cartId}
							img={item.img}
							selectedAdds={item.selectedAdds.map((add) => `adds.${add}`)}
							removeFn={removeFromCart}
							updateQtyFn={updateCartItemQty}
						/>
					))}
				</div>
				<div className="flex flex-col gap-5 w-full">
					{craftedBurgers.map((item) => (
						<CartBurgerCard
							img={item.img}
							key={item.id}
							id={item.id}
							name={item.name.startsWith("ui.") ? t(item.name) : item.name}
							price={item.price}
							orders={item.orders}
							selectedAdds={item.selectedItems?.map((item) => item.value)}
							removeFn={removeCraftedBurger}
							updateQtyFn={updateCraftedBurgerQty}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cart;
