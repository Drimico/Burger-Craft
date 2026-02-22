export const initialSelections = [
  [
    {
      id: 0,
      value: "Chiflă brioche",
      price: 10,
      weight: 60,
      img: "/images/topBun.svg",
    },
  ],
  [
    {
      id: 0,
      value: "Pârjoală vită",
      price: 45,
      weight: 150,
      img: "/images/beefPatty.svg",
    },
  ],
  ...Array(4).fill([
    { id: 0, value: "-", price: null, weight: null, img: null },
  ]),
]