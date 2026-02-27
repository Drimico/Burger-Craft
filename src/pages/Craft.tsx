import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Element, Link } from "react-scroll";
import Main from "../components/craftComponents/Main";

const Craft = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { t } = useTranslation();
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
		<div className="min-h-screen">
			<div className="-z-1 w-screen h-full bg-[url(/images/craft-background.webp)] bg-cover bg-center">
				<div className="font-bold pointer-events-none lg:text-8xl md:text-7xl sm:text-6xl 400:text-4xl 300:text-3xl text-2xl text-sky-600 flex justify-around  items-center h-screen z-10 relative">
					<div className="bg-black/10 backdrop-blur-sm border border-white/10 shadow-2xl rounded-full px-10 py-5">
						{t("ui.craft_title")}
					</div>
				</div>
				<Element name="bottom" />
			</div>
			<div className="absolute top-[93%] left-[50%] text-white border-3 p-1 border-gray-300 rounded-full hover:border-cyan-800 animate-bounce cursor-pointer">
				<Link to="bottom" smooth={true} offset={windowWidth > 640 ? -160 : -80}>
					<ArrowDown color="#317676" />
				</Link>
			</div>
			<div className="w-full">
				<Main />
			</div>
		</div>
	);
};

export default Craft;
