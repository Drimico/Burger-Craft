import { Facebook, Info, Instagram, Mail, Phone, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useHomeStore from "@/store/useHomeStore";
import logo from "../../assets/logo.png";
import { MobileNavbar } from "./MobileNavbar";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const { cart } = useHomeStore();
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
    <nav
      className={`flex fixed text-white items-center w-screen justify-evenly  z-1 ${
        scrolled
          ? "bg-gradient-to-br from-[#041b1b] via-[#0c1c1b] via-[#0b2424] via-[#132c2c] via-[#0e242c] via-[#0b241c] via-[#142422] via-[#132c23] via-[#0c1c24] to-[#0c1414]"
          : "bg-transparent"
      }`}
    >
      <div className="w-40">
        <img className="w-full h-auto object-fit" src={logo} alt="" />
      </div>

      <div className="hidden md:flex flex-col w-200 text-xl min-w-sm ml-5 mr-5">
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row p-4">
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
          <Link to="/cart" className="flex items-center cursor-pointer relative">
            {cart.length > 0 && (
              <span className="absolute flex items-center justify-center h-6 w-6 top-1 right-[-50%] bg-emerald-600  rounded-full p-3 text-sm">
                {cart.length}
              </span>
            )}
            <ShoppingCart color="royalblue " />
          </Link>
        </div>
        <hr />
        <div className="flex justify-around">
          <Link className="transition-colors duration-300 cursor-pointer p-2 text-2xl hover:text-sky-600" to="/">
            Acasă
          </Link>
          <Link className="transition-colors duration-300 cursor-pointer p-2 text-2xl hover:text-sky-600" to="/craft">
            Crează-ți burgerul
          </Link>
        </div>
      </div>
      <div className="hidden md:flex flex-col w-40 h-full items-center justify-center text-xl">
        <div className="flex justify-center w-40 gap-4">
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">
            <Instagram />
          </span>
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">
            <Facebook />
          </span>
        </div>
        <div className="flex justify-center w-40 gap-4">
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">RO</span>
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">EN</span>
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">RU</span>
        </div>
      </div>

      <MobileNavbar />
    </nav>
  );
}

export default Navbar;
