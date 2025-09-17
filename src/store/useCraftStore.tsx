import { create } from "zustand";
import { burgerOptions } from "../consts/burgerOptions";

interface CraftProps {
  burgerOptions: BurgerOptions[];
  duplicate: DuplicateProps[][];
  handleSelectedText: (
    text: string,
    weight: number | null,
    price: number | null,
    index: number,
    selectBoxIndex: number,
    img: string | null
  ) => void;
  handleRemove: (selectBoxIndex: number, itemId: number) => void;
  handleDuplicate: (
    id: number,
    options: {
      text: string;
      price: number | null;
      weight: number | null;
      img: string | null;
    }[]
  ) => void;
}
interface DuplicateProps {
  id: number;
  value: string;
  price: number | null;
  weight: number | null;
  img: string | null;
}
interface BurgerOptions {
  title: string;
  options: {
    text: string;
    price: number | null;
    weight: number | null;
    img: string | null;
  }[];
}
const useCraftStore = create<CraftProps>((set) => ({
  burgerOptions: burgerOptions,
  duplicate: [
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
    [{ id: 0, value: "-", price: null, weight: null, img: null }],
    [{ id: 0, value: "-", price: null, weight: null, img: null }],
    [{ id: 0, value: "-", price: null, weight: null, img: null }],
    [{ id: 0, value: "-", price: null, weight: null, img: null }],
  ],
  handleSelectedText: (
    text: string,
    weight: number | null,
    price: number | null,
    index: number,
    selectBoxIndex: number,
    img: string | null
  ) => {
    set((state: CraftProps) => {
      const newDuplicate = [...state.duplicate];
      if (newDuplicate[selectBoxIndex]) {
        newDuplicate[selectBoxIndex] = newDuplicate[selectBoxIndex].map(
          (item, i) =>
            i === index
              ? {
                  ...item,
                  value: text,
                  weight: weight ?? null,
                  price: price ?? null,
                  img: img ?? null,
                }
              : item
        );
      }
      return { ...state, duplicate: newDuplicate };
    });
  },
  handleRemove: (selectBoxIndex: number, itemId: number) => {
    set((state: CraftProps) => {
      const newDuplicate = [...state.duplicate];
      newDuplicate[selectBoxIndex] = newDuplicate[selectBoxIndex].filter(
        (item) => item.id !== itemId
      );
      return { ...state, duplicate: newDuplicate };
    });
  },
  handleDuplicate: (
    id: number,
    options: {
      text: string;
      price: number | null;
      weight: number | null;
      img: string | null;
    }[]
  ) => {
    set((state: CraftProps) => {
      const newDuplicate = [...state.duplicate];

      const targetArrayIndex = id - 1;

      if (targetArrayIndex >= 0 && targetArrayIndex < newDuplicate.length) {
        const targetArray = newDuplicate[targetArrayIndex];
        const maxIndex =
          targetArray.length > 0
            ? Math.max(...targetArray.map((item) => item.id))
            : 0;

        const newObject = {
          id: maxIndex + 1,
          value: options[0].text,
          price: options[0].price || null,
          weight: options[0].weight || null,
          img: options[0].img || null,
        };
        newDuplicate[targetArrayIndex] = [...targetArray, newObject];
      } else {
        console.warn(
          `Target array with index ${targetArrayIndex} not found for SelectBox ID: ${id}`
        );
      }

      return { ...state, duplicate: newDuplicate };
    });
  },
}));
export default useCraftStore;
