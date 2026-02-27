import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useCraftStore from "@/store/useCraftStore";
import useHomeStore from "@/store/useHomeStore";

export const MobileNavbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { t, i18n } = useTranslation();
	const { cart } = useHomeStore();
	const { craftedBurgers } = useCraftStore();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};
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
					<span
						onClick={() => changeLanguage("ro")}
						className={`cursor-pointer hover:text-sky-600 p-1 ${i18n.language === "ro" ? "text-sky-700" : ""}`}
					>
						RO
					</span>
					<span
						onClick={() => changeLanguage("en")}
						className={`cursor-pointer hover:text-sky-600 p-1 ${i18n.language === "en" ? "text-sky-700" : ""}`}
					>
						EN
					</span>
					<span
						onClick={() => changeLanguage("ru")}
						className={`cursor-pointer hover:text-sky-600 p-1 ${i18n.language === "ru" ? "text-sky-700" : ""}`}
					>
						RU
					</span>
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
						{t("ui.home")}
					</Link>
					<Link
						className="cursor-pointer p-2 text-xl hover:text-sky-600"
						to="/craft"
						onClick={() => {
							setIsMenuOpen(false);
						}}
					>
						{t("ui.craft")}
					</Link>
					<Link
						className="cursor-pointer p-2 text-xl hover:text-sky-600 relative"
						to="/cart"
						onClick={() => {
							setIsMenuOpen(false);
						}}
					>
						{(cart.length > 0 || craftedBurgers.length > 0) && (
							<span className="absolute flex items-center justify-center h-6 w-6 right-[65%] top-[40%] transform -translate-y-[70%] bg-emerald-600  rounded-full p-3 text-sm">
								{cart.length + craftedBurgers.length}
							</span>
						)}
						{t("ui.cart")}
					</Link>
				</div>
			</div>
		</>
	);
};
