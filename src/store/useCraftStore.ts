import { create } from "zustand";
import topBun from "../assets/Images/topBun.png";
import beefPatty from "../assets/Images/katleta.png";
import chickenPatty from "../assets/Images/chicken.png";
import ketchup from "../assets/Images/ketchup.png";
import garlicSauce from "../assets/Images/garlicSauce.png";
import mayonnaise from "../assets/Images/mazik.png";
import srirachaSauce from "../assets/Images/sriracha.png";
import cheeseCheddar from "../assets/Images/cheese.png";
import cheeseDorblu from "../assets/Images/dorblu.png";
import bacon from "../assets/Images/bacon.png";
import friedEgg from "../assets/Images/egg.png";
import onions from "../assets/Images/onions.png";
import caramelizedOnions from "../assets/Images/caramelizedOnions.png";
import pickles from "../assets/Images/pikles.png";
import cucumbers from "../assets/Images/cucumber.png";
import tomatoes from "../assets/Images/tomatoes.png";
import salat from "../assets/Images/salat.png";
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
  burgerOptions: [
    {
      title: "Chiflă",
      options: [
        { text: "Chiflă brioche (10 lei)", price: 10, weight: 60, img: topBun },
      ],
    },
    {
      title: "Carne",
      options: [
        {
          text: "Pârjoală vită (45 lei)",
          price: 45,
          weight: 150,
          img: beefPatty,
        },
        {
          text: "Fileu pui pane (32 lei)",
          price: 32,
          weight: 100,
          img: chickenPatty,
        },
        {
          text: "Fileu pui Grill (32 lei)",
          price: 32,
          weight: 100,
          img: chickenPatty,
        },
      ],
    },
    {
      title: "Sos chiflă jos",
      options: [
        { text: "-", price: null, weight: null, img: null },
        { text: "Sos ketchup (8 lei)", price: 8, weight: 20, img: ketchup },
        { text: "Sos tartar (8 lei)", price: 8, weight: 30, img: garlicSauce },
        { text: "Sos maioneză (8 lei)", price: 8, weight: 20, img: mayonnaise },
        {
          text: "Sos usturoi&bbq (8 lei)",
          price: 8,
          weight: 20,
          img: garlicSauce,
        },
        {
          text: "Sos sriracha (iute) (10 lei)",
          price: 10,
          weight: 20,
          img: srirachaSauce,
        },
        { text: "Sos classy (8 lei)", price: 8, weight: 20, img: garlicSauce },
        { text: "Sos usturoi (8 lei)", price: 8, weight: 20, img: garlicSauce },
      ],
    },
    {
      title: "Sos chiflă top",
      options: [
        { text: "-", price: null, weight: null, img: null },
        { text: "Sos ketchup (8 lei)", price: 8, weight: 20, img: ketchup },
        { text: "Sos tartar (8 lei)", price: 8, weight: 30, img: garlicSauce },
        { text: "Sos maioneză (8 lei)", price: 8, weight: 20, img: mayonnaise },
        {
          text: "Sos usturoi&bbq (8 lei)",
          price: 8,
          weight: 20,
          img: garlicSauce,
        },
        {
          text: "Sos sriracha (iute) (10 lei)",
          price: 10,
          weight: 20,
          img: srirachaSauce,
        },
        { text: "Sos classy (8 lei)", price: 8, weight: 20, img: garlicSauce },
        { text: "Sos usturoi (8 lei)", price: 8, weight: 20, img: garlicSauce },
      ],
    },
    {
      title: "Cașcaval",
      options: [
        { text: "-", price: null, weight: null, img: null },
        {
          text: "Cascaval 'Cheddar' (16 lei)",
          price: 16,
          weight: 20,
          img: cheeseCheddar,
        },
        {
          text: "Cascaval Dorblu (19 lei)",
          price: 19,
          weight: 25,
          img: cheeseDorblu,
        },
      ],
    },
    {
      title: "Topping",
      options: [
        { text: "-", price: null, weight: null, img: null },
        { text: "Bacon crocant (16 lei)", price: 16, weight: 10, img: bacon },
        { text: "Ou prăjit (13 lei)", price: 13, weight: 40, img: friedEgg },
        { text: "Ceapă marin. (5 lei)", price: 5, weight: 10, img: onions },
        {
          text: "Ceapă caramel. (8 lei)",
          price: 8,
          weight: 20,
          img: caramelizedOnions,
        },
        {
          text: "Castraveți murați (6 lei)",
          price: 6,
          weight: 30,
          img: pickles,
        },
        {
          text: "Castraveți proaspeți (7 lei)",
          price: 7,
          weight: 20,
          img: cucumbers,
        },
        { text: "Roșii (7 lei)", price: 7, weight: 40, img: tomatoes },
        { text: "Iceberg (8 lei)", price: 8, weight: 15, img: salat },
      ],
    },
  ],
  duplicate: [
    [
      {
        id: 0,
        value: "Chiflă brioche (10 lei)",
        price: 10,
        weight: 60,
        img: topBun,
      },
    ],
    [
      {
        id: 0,
        value: "Pârjoală vită (45 lei)",
        price: 45,
        weight: 150,
        img: beefPatty,
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
      const mainArray = [...state.duplicate];
      const targetSelectBox = mainArray[selectBoxIndex];

      if (targetSelectBox) {
        const updatedTargetArray = targetSelectBox.filter(
          (item) => item.id !== itemId
        );

        mainArray[selectBoxIndex] = updatedTargetArray;
      }
      return { ...state, duplicate: mainArray };
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
