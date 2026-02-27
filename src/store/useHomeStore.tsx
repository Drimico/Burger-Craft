// useHomeStore.ts
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { type BurgerData, burgers } from "@/consts/burgers";

interface CartItem extends BurgerData {
	selectedAdds: string[];
	cartId: string;
}

interface HomeStoreProps {
	cart: CartItem[];
	addToCart: (
		burgerIndex: number,
		qty: number,
		selectedAddNames: string[],
	) => void;
	updateCartItemQty: (cartId: string, newQty: number) => void;
	removeFromCart: (cartId: string) => void;
}

const useHomeStore = create<HomeStoreProps>()(
	persist(
		(set, get) => ({
			cart: [],
			addToCart: (burgerIndex, qty, selectedAddNames) => {
				const burger = burgers[burgerIndex];
				const adds = burger.adds.filter((add) =>
					selectedAddNames.includes(add.id),
				);

				const totalPrice = adds.reduce(
					(sum, add) => sum + add.price,
					burger.price,
				);
				const totalWeight = adds.reduce(
					(sum, add) => sum + add.weight,
					burger.weight,
				);

				const cartItemIndex = get().cart.findIndex(
					(item) =>
						item.id === burger.id &&
						JSON.stringify(item.selectedAdds?.sort()) ===
							JSON.stringify(selectedAddNames.sort()),
				);

				if (cartItemIndex !== -1) {
					const updatedCart = [...get().cart];
					updatedCart[cartItemIndex] = {
						...updatedCart[cartItemIndex],
						orders: updatedCart[cartItemIndex].orders + qty,
					};
					set({ cart: updatedCart });
				} else {
					const newItem = {
						...burger,
						selectedAdds: selectedAddNames,
						orders: qty,
						price: totalPrice,
						weight: totalWeight,
						cartId: `${burger.id}-${Date.now()}-${Math.random()}`,
					};
					set({ cart: [...get().cart, newItem] });
				}
			},

			updateCartItemQty: (cartId, newQty) => {
				set({
					cart: get().cart.map((item) =>
						item.cartId === cartId
							? { ...item, orders: Math.max(1, newQty) }
							: item,
					),
				});
			},

			removeFromCart: (cartId) => {
				set({
					cart: get().cart.filter((item) => item.cartId !== cartId),
				});
			},
		}),
		{
			name: "HomeStore",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ cart: state.cart }),
		},
	),
);

export const useBurgers = () => burgers;

export default useHomeStore;
