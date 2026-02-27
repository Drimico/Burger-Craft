import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { initialSelections } from "@/consts/initialSelections";
import type {
	BurgerOption,
	CraftedBurgers,
	SelectedItem,
} from "@/types/burgerTypes";

interface CraftStore {
	craftedBurgers: CraftedBurgers[];
	selections: SelectedItem[][];
	updateSelection: (
		text: string,
		weight: number | null,
		price: number | null,
		index: number,
		sectionIndex: number,
		img: string | null,
	) => void;
	updateCraftedBurgerQty: (cartId: string, newQty: number) => void;
	addToCart: (burgerName: string) => void;
	removeSelection: (sectionIndex: number, itemId: number) => void;
	removeCraftedBurger: (cartId: string) => void;
	addSelection: (sectionId: number, options: BurgerOption[]) => void;
	resetSelections: () => void;
}

const useCraftStore = create<CraftStore>()(
	persist(
		(set, get) => ({
			craftedBurgers: [],
			selections: initialSelections,
			addToCart: (burgerName) => {
				const ingredients = get().selections.flat();
				const price = ingredients.reduce(
					(sum, item) => sum + (item.price ?? 0),
					0,
				);
				const weight = ingredients.reduce(
					(sum, item) => sum + (item.weight ?? 0),
					0,
				);
				set((state) => {
					const updatedBurgers = state.craftedBurgers.find((burger) => {
						return (
							JSON.stringify(burger.selectedItems) ===
								JSON.stringify(ingredients) && burger.name === burgerName
						);
					});

					if (updatedBurgers) {
						const updatedBurgersCopy = state.craftedBurgers.map((burger) => {
							return burger === updatedBurgers
								? { ...burger, orders: burger.orders + 1 }
								: burger;
						});
						updatedBurgers.orders++;
						return { craftedBurgers: updatedBurgersCopy };
					} else {
						return {
							craftedBurgers: [
								...state.craftedBurgers,
								{
									img: "/images/craftedBurger.webp",
									name: burgerName,
									selectedItems: ingredients,
									weight,
									price,
									id: uuidv4(),
									orders: 1,
								},
							],
						};
					}
				});
			},
			updateSelection: (text, weight, price, index, sectionIndex, img) =>
				set((state) => ({
					selections: state.selections.map((section, idx) =>
						idx === sectionIndex
							? section.map((item, i) =>
									i === index
										? { ...item, value: text, weight, price, img }
										: item,
								)
							: section,
					),
				})),
			updateCraftedBurgerQty: (cartId, newQty) => {
				set({
					craftedBurgers: get().craftedBurgers.map((burger) =>
						burger.id === cartId
							? { ...burger, orders: Math.max(1, newQty) }
							: burger,
					),
				});
			},
			removeSelection: (sectionIndex, itemId) =>
				set((state) => ({
					selections: state.selections.map((section, idx) =>
						idx === sectionIndex
							? section.filter((item) => item.id !== itemId)
							: section,
					),
				})),
			removeCraftedBurger: (cartId) =>
				set((state) => ({
					craftedBurgers: state.craftedBurgers.filter(
						(burger) => burger.id !== cartId,
					),
				})),
			addSelection: (sectionId, options) =>
				set((state) => {
					const sectionIndex = sectionId - 1;
					const section = state.selections[sectionIndex];
					const maxId = Math.max(...section.map((item) => item.id));

					return {
						selections: state.selections.map((section, idx) =>
							idx === sectionIndex
								? [
										...section,
										{
											id: maxId + 1,
											value: options[0].text,
											price: options[0].price,
											weight: options[0].weight,
											img: options[0].img,
										},
									]
								: section,
						),
					};
				}),
			resetSelections: () => {
				set({ selections: initialSelections });
			},
		}),

		{
			name: "CraftStore",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				craftedBurgers: state.craftedBurgers,
			}),
		},
	),
);

export default useCraftStore;
