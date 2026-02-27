import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Element, Link } from "react-scroll";
import useHomeStore from "@/store/useHomeStore";
import BurgerCard from "../components/homeComponents/BurgerCard";

const Home = () => {
	const { burgers } = useHomeStore();
	const { t } = useTranslation();
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [windowWidth]);
	return (
		<div className="w-screen min-h-screen">
			<div className="w-full h-full">
				<img
					className="w-full h-full object-cover"
					src="/images/home-background.webp"
					alt=""
				/>
				<Element name="bottom" />
			</div>
			<div className="absolute top-[93%] left-[50%] text-white border-3 p-1 border-gray-300 rounded-full hover:border-cyan-800 animate-bounce cursor-pointer">
				<Link to="bottom" smooth={true} offset={windowWidth > 640 ? -160 : -80}>
					<ArrowDown color="#317676" />
				</Link>
			</div>
			<div className="flex flex-col lg:gap-30 gap-20 justify-center items-center p-10">
				<div className="text-7xl text-white text-shadow-lg mt-10">
					{t("ui.burgers_title")}
				</div>
				{burgers.map((burger, index) => (
					<BurgerCard
						index={index}
						key={burger.id}
						name={burger.id}
						adds={burger.adds}
						weight={burger.weight}
						price={burger.price}
						img={burger.img}
						windowWidth={windowWidth}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
