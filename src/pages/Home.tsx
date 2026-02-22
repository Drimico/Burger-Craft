import useHomeStore from "@/store/useHomeStore";
import BurgerCard from "../components/homeComponents/BurgerCard";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Element, Link } from "react-scroll";

const Home = () => {
  const { burgers } = useHomeStore();
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
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src="/images/home-background.png" alt="" />
        <Element name="bottom" />
      </div>
      <div className="absolute top-[93%] left-[50%] text-white border-3 p-1 border-gray-300 rounded-full hover:border-cyan-800 animate-bounce cursor-pointer">
        <Link to="bottom" smooth={true} offset={windowWidth > 640 ? -160 : -80}>
          <ArrowDown color="#317676" />
        </Link>
      </div>
      <div className="flex flex-col lg:gap-30 gap-20 justify-center items-center p-10">
        <div className="text-7xl text-white text-shadow-lg mt-10">Burgere</div>
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
			windowWidth={windowWidth}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
