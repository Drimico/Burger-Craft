export interface BurgerData {
	name: string
	description: string
	weight: number
	price: number
	img: string
	orders: number
	adds: {
		name: string
		weight: number
		price: number
	}[]
}
export const burgers: BurgerData[] = [
	{
		name: "Bacon Monster",
		description:
			"Chiflă 'Brioche', pârjoală de vită dublă, cașcaval Cheddar dublu, sos chilli, mult becon crocant, sos BBQ, salată iceberg, roșii, sos de susan",
		weight: 400,
		price: 129,
		adds: [
			{ name: "ceapă marinată", weight: 10, price: 5 },
			{ name: "sos sriracha (iute)", weight: 20, price: 10 },
			{ name: "cașcaval dorblu", weight: 25, price: 19 },
			{ name: "ou prăjit", weight: 40, price: 13 },
		],
		img: "/images/baconMonster.jpg",
		orders:0
	},
	{
		name: "Chicken Grill",
		description:
			"Chiflă 'Brioche', fileu de pui grill, cașcaval Gouda, sos trufe, sos Grill, castraveți murați, roșii, ceapă grill, iceberg",
		weight: 320,
		price: 85,
		adds: [
			{ name: "sos sriracha (iute)", weight: 20, price: 10 },
			{ name: "ou prăjit", weight: 40, price: 13 },
			{ name: "bacon crocant", weight: 10, price: 16 },
		],
		img: "/images/chickenGrill.jpg",
		orders:0
	},
	{
		name: "Dijon",
		description:
			"Chiflă “Brioche”, pârjoală de vită, cașcaval Gouda, Bacon crocant, castraveti murati, ceapa rosie marinata,rosii, salata iceberg, sos Dijon",
		weight: 320,
		price: 95,
		adds: [
			{ name: "sos sriracha (iute)", weight: 20, price: 10 },
			{ name: "ou prăjit", weight: 40, price: 13 },
			{ name: "ceapă caramel", weight: 20, price: 8 },
		],
		img: "/images/dijon.jpg",
		orders:0
	},
	{
		name: "Chicken Fresh",
		description:
			"Chifla 'Brioche', carne de gaina 'pane', castraveti sarati, sos Tartar, salată COLESLAW, sos Usturoi&BBQ",
		weight: 300,
		price: 89,
		adds: [
			{ name: "ceapă marinată", weight: 10, price: 5 },
			{ name: "cașcaval dorblu", weight: 25, price: 19 },
			{ name: "bacon crocant", weight: 10, price: 16 },
			{ name: "cașcaval 'cheddar'", weight: 20, price: 16 },
		],
		img: "/images/chickenFresh.jpg",
		orders:0
	},
	{
		name: "Cheese Burger",
		description:
			"Chifla 'Brioche', carne de vita, cascaval 'Chedar' dublu, ceapă marinată, sos de rosii, roșii proaspete, salată iceberg, sos Grill",
		weight: 300,
		price: 89,
		adds: [
			{ name: "ceapă marinată", weight: 10, price: 5 },
			{ name: "ou prăjit", weight: 40, price: 13 },
			{ name: "bacon crocant", weight: 10, price: 16 },
			{ name: "cașcaval 'cheddar'", weight: 20, price: 16 },
		],
		img: "/images/cheeseBurger.jpg",
		orders:0
	},
]
