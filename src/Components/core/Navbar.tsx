import {
  Facebook,
  Info,
  Instagram,
  Mail,
  Phone,
  ShoppingCart,
} from "lucide-react";
import logo from "../../assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const isScrolled = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    window.addEventListener("scroll", isScrolled);
    return () => {
      window.removeEventListener("scroll", isScrolled);
    };
  };

  useEffect(isScrolled, []);

  return (
    <div
      className={`flex fixed text-white items-center w-full justify-center z-1 ${
        scrolled
          ? "bg-gradient-to-br from-[#041b1b] via-[#0c1c1b] via-[#0b2424] via-[#132c2c] via-[#0e242c] via-[#0b241c] via-[#142422] via-[#132c23] via-[#0c1c24] to-[#0c1414]"
          : "bg-transparent"
      }`}
    >
      <img className="w-40" src={logo} alt="" />
      <div className="flex flex-col w-200 min-w-md ml-5 mr-5">
        <div className="flex justify-between">
          <div className="flex p-4">
            <span className="flex mr-4 cursor-pointer">
              <Phone color="royalblue " />
              000 000 000
            </span>
            <span className="flex mr-4 cursor-pointer">
              <Mail color="royalblue " />
              burgerCraft@gmail.com
            </span>
            <span className="flex cursor-pointer">
              <Info color="royalblue " />
              Livrare
            </span>
          </div>
          <span
            onClick={() => {
              navigate("/cart");
            }}
            className="flex items-center cursor-pointer"
          >
            <ShoppingCart color="royalblue " />
          </span>
        </div>
        <hr />
        <div className="flex justify-around">
          <div
            className="cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            onClick={() => {
              navigate("/");
            }}
          >
            Acasă
          </div>
          <div
            className="cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            onClick={() => {
              navigate("/craft");
            }}
          >
            Crează-ți burgerul
          </div>
        </div>
      </div>
      <div className="flex flex-col w-20 h-full items-center justify-evenly">
        <div className="flex justify-around w-full ">
          <span className="cursor-pointer hover:text-sky-600">
            <Instagram />
          </span>
          <span className="cursor-pointer hover:text-sky-600">
            <Facebook />
          </span>
        </div>
        <div className="flex justify-between w-full">
          <span className="cursor-pointer hover:text-sky-600">RO</span>
          <span className="cursor-pointer hover:text-sky-600">EN</span>
          <span className="cursor-pointer hover:text-sky-600">RU</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
