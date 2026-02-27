import { Facebook, Info, Instagram, Mail, Phone, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useHomeStore from "@/store/useHomeStore";
import logo from "../../assets/logo.png";
import { MobileNavbar } from "./MobileNavbar";
import useCraftStore from "@/store/useCraftStore";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { cart } = useHomeStore();
  const { craftedBurgers } = useCraftStore();
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
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  useEffect(isScrolled, []);

  return (
    <nav
      className={`flex gap-5 fixed text-white items-center w-screen justify-evenly z-1 ${
        scrolled
          ? "bg-gradient-to-b from-[#041b1b] via-[#0c1c1b] via-[#0b2424] via-[#132c2c] via-[#0e242c] via-[#0b241c] via-[#142422] via-[#132c23] via-[#0c1c24] to-[#0c1414]"
          : "bg-transparent"
      }`}
    >
      <div className="md:w-40 w-30">
        <img className="w-full h-auto object-fit" src={logo} alt="" />
      </div>

      <div className="hidden md:flex flex-col 1024:w-200 w-100 text-xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col 1024:flex-row  gap-4 p-4">
            <span className="flex items-center cursor-pointer">
              <Phone color="royalblue" size={23} />
              000 000 000
            </span>
            <span className="flex items-center cursor-pointer">
              <Mail color="royalblue" size={25} />
              burgerCraft@gmail.com
            </span>
            <span className="flex items-center cursor-pointer">
              <Info color="royalblue" size={25} />
              Livrare
            </span>
          </div>
          <Link to="/cart" className="flex items-center cursor-pointer relative h-fit">
            {(cart.length > 0 || craftedBurgers.length > 0) && (
              <span className="absolute flex items-center justify-center h-6 w-6 right-[-50%] top-[30%] transform -translate-y-[80%] bg-emerald-600  rounded-full p-3 text-sm">
                {cart.length + craftedBurgers.length}
              </span>
            )}
            <ShoppingCart color="royalblue" size={30}/>
          </Link>
        </div>
        <hr />
        <div className="flex justify-around">
          <Link className="transition-colors duration-300 cursor-pointer p-2 text-2xl hover:text-sky-600" to="/">
            {t("ui.home")}
          </Link>
          <Link className="transition-colors duration-300 cursor-pointer p-2 text-2xl hover:text-sky-600" to="/craft">
            {t("ui.craft")}
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
          <button
            onClick={() => changeLanguage("ro")}
            className={`transition-colors duration-300 cursor-pointer hover:text-sky-600 ${i18n.language === "ro" ? "text-sky-600" : ""}`}
          >
            RO
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className={`transition-colors duration-300 cursor-pointer hover:text-sky-600 ${i18n.language === "en" ? "text-sky-600" : ""}`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("ru")}
            className={`transition-colors duration-300 cursor-pointer hover:text-sky-600 ${i18n.language === "ru" ? "text-sky-600" : ""}`}
          >
            RU
          </button>
        </div>
      </div>

      <MobileNavbar />
    </nav>
  );
}

export default Navbar;
