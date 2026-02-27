import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useHomeStore from "@/store/useHomeStore";

interface BurgerCardProps {
	checkedAdds: boolean[];
	setCheckedAdds: React.Dispatch<React.SetStateAction<boolean[]>>;
	index: number;
	name: string;
	adds: {
		id: string;
		weight: number;
		price: number;
	}[];
	weight: number;
	windowWidth: number;
}

const BurgerCardInfo = ({
	checkedAdds,
	setCheckedAdds,
	index,
	adds,
	weight,
	windowWidth,
	name,
}: BurgerCardProps) => {
	const [orders, setOrders] = useState(1);
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();
	const { addToCart } = useHomeStore();
	const currentWeight = checkedAdds.reduce(
		(sum, checked, idx) => sum + (checked ? adds[idx].weight : 0),
		weight,
	);

	const handleToggleAdd = (id: number) => {
		setCheckedAdds((prev) =>
			prev.map((check, idx) => (idx === id ? !check : check)),
		);
	};

	useEffect(() => {
		if (windowWidth >= 1024) {
			setIsOpen(true);
		}
		if (windowWidth < 1024) {
			setIsOpen(false);
		}
	}, [windowWidth]);

	return (
		<div className="w-full lg:max-w-140 h-fit lg:rounded-2xl bg-black/30 rounded-b-xl shadow-[5px_0_5px_-2px_white,_-5px_0_5px_-2px_white,_0_5px_5px_-2px_white] lg:shadow-[0px_0px_5px_0px_white]">
			<div
				onClick={() => setIsOpen((prev) => !prev)}
				className={`w-full h-10 bg-black/30 flex justify-end items-center px-3 text-white/80 cursor-pointer ${isOpen ? "" : "rounded-b-xl"} lg:hidden`}
			>
				{isOpen ? t("ui.close") : t("ui.open")}
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="overflow-hidden bg-black/30 rounded-b-xl lg:rounded-2xl"
					>
						<div className="flex flex-col gap-2 h-fit w-full items-center justify-between p-[0px_1rem_1rem_1rem] text-white/80">
							<div className="md:text-4xl text-2xl font-bold text-shadow-2xs">
								{t(`burgers.${name}.name`)}
							</div>
							<div className="md:text-xl text-lg text-shadow-2xs text-center">
								{t(`burgers.${name}.description`)}.
							</div>
							<span className="md:text-2xl text-xl font-bold text-emerald-700 ">
								{currentWeight} gr
							</span>

							<div className="w-full flex flex-wrap justify-center items-center gap-2">
								{adds.map((ingredient, id) => (
									<div
										key={`ingredient-${id}`}
										onClick={() => handleToggleAdd(id)}
										className={`flex items-center justify-center rounded-full w-fit h-fit px-1 py-1 border-2 border-white/50 cursor-pointer ${
											checkedAdds[id] ? "bg-emerald-700" : "bg-white/10"
										} transition-colors duration-300 md:text-lg text-sm`}
									>
										{t(`adds.${ingredient.id}`)}
									</div>
								))}
							</div>
							<div className="flex lg:flex-col w-full justify-center items-center gap-2">
								<div className="flex gap-3 lg:text-2xl text-lg justify-center items-center">
									<button
										type="button"
										onClick={() => setOrders((prev) => Math.max(1, prev - 1))}
									>
										<Minus size={20} className="text-red-700 cursor-pointer" />
									</button>
									<span>{orders}</span>
									<button
										type="button"
										onClick={() => setOrders((prev) => prev + 1)}
									>
										<Plus
											size={20}
											className="text-emerald-800 cursor-pointer"
										/>
									</button>
								</div>

								<button
									type="button"
									onClick={() => {
										const selectedAdds = adds
											.filter((_, idx) => checkedAdds[idx])
											.map((add) => add.id);
										addToCart(index, orders, selectedAdds);
										setOrders(1);
										setCheckedAdds(adds.map(() => false));
									}}
									className="flex md:w-50 w-40 p-2 md:text-xl text-lg items-center justify-center bg-linear-120 from-emerald-500/60 to-emerald-900/60 text-emerald-200 cursor-pointer rounded-md hover:from-emerald-500/80 hover:to-emerald-900/80 transition-colors duration-300"
								>
									{t("ui.add_to_cart")}
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
export default BurgerCardInfo;
