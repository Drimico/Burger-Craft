import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { initialSelections } from "@/consts/initialSelections";
import type {
  BurgerOption,
  BurgerSection,
  CraftedBurgers,
  SelectedItem,
} from "@/types/burgerTypes";
import { burgerOptions } from "../consts/burgerOptions";

interface CraftStore {
  craftedBurgers: CraftedBurgers[];
  burgerOptions: BurgerSection[];
  selections: SelectedItem[][];
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
  updateSelection: (
    text: string,
    weight: number | null,
    price: number | null,
    index: number,
    sectionIndex: number,
    img: string | null
  ) => void;
  addToCart: (burgerName: string) => void;
  removeItem: (sectionIndex: number, itemId: number) => void;
  duplicateItem: (sectionId: number, options: BurgerOption[]) => void;
}

const useCraftStore = create<CraftStore>()(
  persist(
    (set, get) => ({
      craftedBurgers: [],
      burgerOptions,
      selections: initialSelections,
      activeDropdown: null,
      setActiveDropdown: (id) => set({ activeDropdown: id }),
      addToCart: (burgerName) => {
        const ingredients = get().selections.flat();
        const price = ingredients.reduce((sum, item) => sum + (item.price ?? 0), 0);
        const weight = ingredients.reduce((sum, item) => sum + (item.weight ?? 0), 0);
        set((state) => {
          const updatedBurgers = state.craftedBurgers.find((burger) => {
            return JSON.stringify(burger.selectedItems) === JSON.stringify(ingredients);
          });

          if (updatedBurgers) {
            const updatedBurgersCopy = state.craftedBurgers.map((burger) => {
              return burger === updatedBurgers ? { ...burger, orders: burger.orders + 1 } : burger;
            });
            updatedBurgers.orders++;
            return { craftedBurgers: updatedBurgersCopy };
          } else {
            return {
              craftedBurgers: [
                ...state.craftedBurgers,
                {
                  img: "/images/craftedBurger.png",
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
                  i === index ? { ...item, value: text, weight, price, img } : item
                )
              : section
          ),
        })),

      removeItem: (sectionIndex, itemId) =>
        set((state) => ({
          selections: state.selections.map((section, idx) =>
            idx === sectionIndex ? section.filter((item) => item.id !== itemId) : section
          ),
        })),

      duplicateItem: (sectionId, options) =>
        set((state) => {
          const sectionIndex = sectionId - 1;
          const section = state.selections[sectionIndex];
          const maxId = Math.max(...section.map((item) => item.id));

          return {
            selections: state.selections.map((s, idx) =>
              idx === sectionIndex
                ? [
                    ...s,
                    {
                      id: maxId + 1,
                      value: options[0].text,
                      price: options[0].price,
                      weight: options[0].weight,
                      img: options[0].img,
                    },
                  ]
                : s
            ),
          };
        }),
    }),
    {
      name: "CraftStore",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        craftedBurgers: state.craftedBurgers,
      }),
    }
  )
);

export default useCraftStore;
