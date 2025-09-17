import {
  Facebook,
  Info,
  Instagram,
  Mail,
  Menu,
  Phone,
  ShoppingCart,
  X,
} from "lucide-react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  console.log(scrolled);
  
  return (
    <nav
      className={`flex fixed text-white items-center w-screen justify-between sm:justify-evenly z-1 " ${
        scrolled
          ? "bg-gradient-to-br from-[#041b1b] via-[#0c1c1b] via-[#0b2424] via-[#132c2c] via-[#0e242c] via-[#0b241c] via-[#142422] via-[#132c23] via-[#0c1c24] to-[#0c1414]"
          : "bg-transparent"
      }`}
    >
      <img className="sm:w-40 xxs:w-20 xxxs:w-15 " src={logo} alt="" />
      {/* Desktop nav */}
      <div className="hidden sm:flex flex-col w-200 min-w-sm ml-5 mr-5">
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
            className="transition-colors duration-300 cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            onClick={() => {
              navigate("/");
            }}
          >
            Acasă
          </div>
          <div
            className="transition-colors duration-300 cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            onClick={() => {
              navigate("/craft");
            }}
          >
            Crează-ți burgerul
          </div>
        </div>
      </div>
      <div className="hidden sm:flex flex-col w-20 h-full items-center justify-evenly">
        <div className="flex justify-around w-full ">
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">
            <Instagram />
          </span>
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">
            <Facebook />
          </span>
        </div>
        <div className="flex justify-between w-full gap-2">
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">RO</span>
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">EN</span>
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">RU</span>
        </div>
      </div>

      {/*mobile nav */}
      <div className="flex gap-2">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="sm:hidden p-1 z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="sm:hidden flex justify-between gap-2">
          <span className="cursor-pointer hover:text-sky-600 p-1">RO</span>
          <span className="cursor-pointer hover:text-sky-600 p-1">EN</span>
          <span className="cursor-pointer hover:text-sky-600 p-1">RU</span>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden 
            ${
              isMenuOpen
                ? "oppacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
      >
        <div className="flex flex-col text-xl space-y-8">
          <div
            className="cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
          >
            Acasă
          </div>
          <div
            className="cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            onClick={() => {
              navigate("/craft");
              setIsMenuOpen(false);
            }}
          >
            Crează-ți burgerul
          </div>
          <div
            className="cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            onClick={() => {
              navigate("/cart");
              setIsMenuOpen(false);
            }}
          >
            Coșul de cumpărături
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
