export interface BurgerData {
	id: string;
	weight: number;
	price: number;
	img: string;
	orders: number;
	adds: {
		id: string;
		weight: number;
		price: number;
	}[];
}

export const burgers: BurgerData[] = [
	{
		id: "bacon_monster",
		weight: 400,
		price: 129,
		adds: [
			{ id: "caramel_onion", weight: 10, price: 5 },
			{ id: "sriracha_sauce", weight: 20, price: 10 },
			{ id: "dorblu_cheese", weight: 25, price: 19 },
			{ id: "fried_egg", weight: 40, price: 13 },
		],
		img: "/images/baconMonster.webp",
		orders: 0,
	},
	{
		id: "chicken_grill",
		weight: 320,
		price: 85,
		adds: [
			{ id: "sriracha_sauce", weight: 20, price: 10 },
			{ id: "fried_egg", weight: 40, price: 13 },
			{ id: "crispy_bacon", weight: 10, price: 16 },
		],
		img: "/images/chickenGrill.webp",
		orders: 0,
	},
	{
		id: "dijon",
		weight: 320,
		price: 95,
		adds: [
			{ id: "sriracha_sauce", weight: 20, price: 10 },
			{ id: "fried_egg", weight: 40, price: 13 },
			{ id: "caramel_onion", weight: 20, price: 8 },
		],
		img: "/images/dijon.webp",
		orders: 0,
	},
	{
		id: "chicken_fresh",
		weight: 300,
		price: 89,
		adds: [
			{ id: "marinated_onion", weight: 10, price: 5 },
			{ id: "dorblu_cheese", weight: 25, price: 19 },
			{ id: "crispy_bacon", weight: 10, price: 16 },
			{ id: "cheddar_cheese", weight: 20, price: 16 },
		],
		img: "/images/chickenFresh.webp",
		orders: 0,
	},
	{
		id: "cheese_burger",
		weight: 300,
		price: 89,
		adds: [
			{ id: "marinated_onion", weight: 10, price: 5 },
			{ id: "fried_egg", weight: 40, price: 13 },
			{ id: "crispy_bacon", weight: 10, price: 16 },
			{ id: "cheddar_cheese", weight: 20, price: 16 },
		],
		img: "/images/cheeseBurger.webp",
		orders: 0,
	},
];
