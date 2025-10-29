import {
  Facebook,
  Info,
  Instagram,
  Mail,
  Menu,
  Phone,
  ShoppingCart,
  X,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = () => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

    window.addEventListener("scroll", isScrolled)
    return () => {
      window.removeEventListener("scroll", isScrolled)
    }
  }

  useEffect(isScrolled, [])
  console.log(scrolled)

  return (
    <nav
      className={`flex fixed text-white items-center w-screen gap-20 justify-center  z-1 " ${
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
          <Link to="/cart" className="flex items-center cursor-pointer">
            <ShoppingCart color="royalblue " />
          </Link>
        </div>
        <hr />
        <div className="flex justify-around">
          <Link
            className="transition-colors duration-300 cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            to="/"
          >
            Acasă
          </Link>
          <Link
            className="transition-colors duration-300 cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            to="/craft"
          >
            Crează-ți burgerul
          </Link>
        </div>
      </div>
      <div className="hidden sm:flex flex-col w-40 h-full items-center justify-center ">
        <div className="flex justify-center w-40 gap-4">
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">
            <Instagram />
          </span>
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">
            <Facebook />
          </span>
        </div>
        <div className="flex justify-center w-40 gap-4">
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">
            RO
          </span>
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">
            EN
          </span>
          <span className="transition-colors duration-300 cursor-pointer hover:text-sky-600">
            RU
          </span>
        </div>
      </div>

      {/*mobile nav */}
      <div className="flex gap-2">
        <button
          type="button"
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
          <Link
            className="cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            to="/"
            onClick={() => {
              setIsMenuOpen(false)
            }}
          >
            Acasă
          </Link>
          <Link
            className="cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            to="/craft"
            onClick={() => {
              setIsMenuOpen(false)
            }}
          >
            Crează-ți burgerul
          </Link>
          <Link
            className="cursor-pointer p-2 text-xl font-mono hover:text-sky-600"
            to="/cart"
            onClick={() => {
              setIsMenuOpen(false)
            }}
          >
            Coșul de cumpărături
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
