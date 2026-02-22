import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="flex gap-2 md:hidden">
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className=" p-1 z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex justify-between gap-2">
          <span className="cursor-pointer hover:text-sky-600 p-1">RO</span>
          <span className="cursor-pointer hover:text-sky-600 p-1">EN</span>
          <span className="cursor-pointer hover:text-sky-600 p-1">RU</span>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden 
            ${isMenuOpen ? "oppacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col text-xl space-y-8">
          <Link
            className="cursor-pointer p-2 text-xl hover:text-sky-600"
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Acasă
          </Link>
          <Link
            className="cursor-pointer p-2 text-xl hover:text-sky-600"
            to="/craft"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Crează-ți burgerul
          </Link>
          <Link
            className="cursor-pointer p-2 text-xl hover:text-sky-600"
            to="/cart"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Coșul de cumpărături
          </Link>
        </div>
      </div>
    </>
  );
};
