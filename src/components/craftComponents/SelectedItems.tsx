import { useState } from "react";
import { useTranslation } from "react-i18next";
import useCraftStore from "../../store/useCraftStore";

const SelectedItems = () => {
	const [burgerName, setBurgerName] = useState("");
	const { t } = useTranslation();
	const { selections, resetSelections } = useCraftStore();
	const { addToCart } = useCraftStore();
	const totals = selections.flat().reduce(
		(acc, item) => ({
			weight: acc.weight + (item.weight ?? 0),
			price: acc.price + (item.price ?? 0),
		}),
		{ weight: 0, price: 0 },
	);

	return (
		<div className="w-fit h-fit flex flex-col justify-center items-center gap-5">
			<input
				type="text"
				value={burgerName}
				placeholder="Numele burgerului"
				className="focus:outline-none bg-black/30 shadow-[0px_0px_5px_0px_white] p-1 rounded-md"
				onChange={(e) => setBurgerName(e.target.value)}
			/>

			<div className="w-full h-fit bg-black/30 shadow-[0px_0px_5px_0px_white] justify-center items-center flex flex-col gap-5 p-3 400:text-2xl text-xl rounded-2xl">
				<div className="flex flex-col">
					{selections
						.flat()
						.filter((item) => item.value !== "-")
						.map((item, index) => (
							<div key={`selected-${index}`}>
								{t(item.value)} {`(${item.price} lei)`} {item.weight}g
							</div>
						))}
					<div className="1024:text-4xl text-2xl font-bold">
						{t("ui.total")}:{" "}
						<span className="text-emerald-400">{totals.price} lei</span>(
						{totals.weight}g)
					</div>
				</div>
				<div className="flex gap-2">
					<button
						onClick={() => resetSelections()}
						className="w-fit bg-linear-120 from-red-500/60 to-red-900/60 hover:from-red-500/80 hover:to-red-900/80 transition-colors duration-300 text-2xl p-2 cursor-pointer hover:text-white rounded-2xl"
					>
						<span>{t("ui.restart")}</span>
					</button>
					<button
						onClick={() => {
							addToCart(
								burgerName === "" ? "ui.default_burger_name" : burgerName,
							);
							setBurgerName("");
						}}
						className="w-fit bg-linear-120 from-emerald-500/60 to-emerald-900/60 hover:from-emerald-500/80 hover:to-emerald-900/80 transition-colors duration-300 text-2xl p-2 cursor-pointer hover:text-white rounded-2xl"
					>
						<span>{t("ui.add_to_cart")}</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SelectedItems;
