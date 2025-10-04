import { ArrowDown } from "lucide-react";
import Main from "../components/craftComponents/Main";
import { Link, Element } from "react-scroll";
import { useEffect, useState } from "react";

const Craft = () => {
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
    <>
      <div className="-z-1 w-full h-full bg-[url(/images/craft-background.png)] bg-cover bg-center">
        <div className="font-bold font-mono pointer-events-none lg:text-8xl md:text-7xl sm:text-6xl xs:text-4xl xxs:text-3xl text-2xl text-cyan-600 flex justify-around w-screen items-center h-screen z-10 relative">
          <span>Creazati</span>
          <span>burgerul</span>
        </div>
        <Element name="bottom" />
      </div>
      <div className="absolute top-[95%] left-[50%] text-white border-2 border-gray-300 rounded-full hover:border-cyan-800 animate-bounce cursor-pointer">
        <Link to="bottom" smooth={true} offset={windowWidth > 640 ? -160 : -80}>
          <ArrowDown color="#317676" />
        </Link>
      </div>
      <div className="w-full">
        <Main />
      </div>
    </>
  );
};

export default Craft;
