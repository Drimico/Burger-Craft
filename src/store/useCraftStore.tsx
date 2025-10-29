import { create } from "zustand"
import { burgerOptions } from "../consts/burgerOptions"

interface BurgerOption {
  text: string
  price: number | null
  weight: number | null
  img: string | null
}

interface BurgerSection {
  title: string
  options: BurgerOption[]
}

interface SelectedItem {
  id: number
  value: string
  price: number | null
  weight: number | null
  img: string | null
}

interface CraftStore {
  burgerOptions: BurgerSection[]
  selections: SelectedItem[][]
  activeDropdown: string | null
  setActiveDropdown: (id: string | null) => void
  updateSelection: (
    text: string,
    weight: number | null,
    price: number | null,
    index: number,
    sectionIndex: number,
    img: string | null,
  ) => void
  removeItem: (sectionIndex: number, itemId: number) => void
  duplicateItem: (sectionId: number, options: BurgerOption[]) => void
}

const initialSelections = [
  [
    {
      id: 0,
      value: "Chiflă brioche (10 lei)",
      price: 10,
      weight: 60,
      img: "/images/topBun.svg",
    },
  ],
  [
    {
      id: 0,
      value: "Pârjoală vită (45 lei)",
      price: 45,
      weight: 150,
      img: "/images/beefPatty.svg",
    },
  ],
  ...Array(4).fill([
    { id: 0, value: "-", price: null, weight: null, img: null },
  ]),
]

const useCraftStore = create<CraftStore>((set) => ({
  burgerOptions,
  selections: initialSelections,
  activeDropdown: null,
  setActiveDropdown: (id) => set({ activeDropdown: id }),
  updateSelection: (text, weight, price, index, sectionIndex, img) =>
    set((state) => ({
      selections: state.selections.map((section, idx) =>
        idx === sectionIndex
          ? section.map((item, i) =>
              i === index ? { ...item, value: text, weight, price, img } : item,
            )
          : section,
      ),
    })),

  removeItem: (sectionIndex, itemId) =>
    set((state) => ({
      selections: state.selections.map((section, idx) =>
        idx === sectionIndex
          ? section.filter((item) => item.id !== itemId)
          : section,
      ),
    })),

  duplicateItem: (sectionId, options) =>
    set((state) => {
      const sectionIndex = sectionId - 1
      const section = state.selections[sectionIndex]
      const maxId = Math.max(...section.map((item) => item.id))

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
            : s,
        ),
      }
    }),
}))

export default useCraftStore
