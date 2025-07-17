import { ArrowDown } from "lucide-react";
import MainComp from "../Components/CraftComp/MainComp";
import burgerCraft from "../assets/Images/burgerCraft.png";
import { Link, Element } from "react-scroll";
function Craft() {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute flex w-screen h-screen items-center justify-center text-neutral-600 text-9xl">
          Crează-ți Burgerul <Element name="bottom" />
        </div>
        <div className="-z-1 ">
          <img
            className="w-screen h-screen object-cover "
            src={burgerCraft}
            alt=""
          />
        </div>
        <div className="absolute  cursor-pointer bottom-10 left-[50%] border-3 border-white rounded-full hover:border-cyan-800">
          <Link to="bottom" smooth={true} offset={320}>
            <ArrowDown color="white" />
          </Link>
        </div>
      </div>
      <MainComp />
    </div>
  );
}

export default Craft;
