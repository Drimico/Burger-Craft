import useHomeStore from "@/store/useHomeStore"
import BurgerCard from "../components/homeComponents/BurgerCard"

const Home = () => {
	const {burgers} = useHomeStore()
	
	return (
		<div className="w-screen h-screen">
			<img
				className="w-full h-full object-cover"
				src="/images/home-background.png"
				alt=""
			/>
			<div className="flex flex-col gap-30 justify-center items-center">
				<div className="text-7xl text-white text-shadow-lg mt-10 font-mono">Burgere</div>
				{burgers.map((burger, index) => (
					<BurgerCard
						index={index}
						key={burger.name}
						description={burger.description}
						name={burger.name}
						adds={burger.adds}
						weight={burger.weight}
						price={burger.price}
						img={burger.img}
					/>
				))}
			</div>
		</div>
	)
}

export default Home
