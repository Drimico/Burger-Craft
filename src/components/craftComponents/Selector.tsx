import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import useCraftStore from "../../store/useCraftStore";
import SelectorDropMenu from "./SelectorDropMenu";

interface SelectorProps {
	sectionIndex: number;
	id: number;
	title: string;
	options: {
		text: string;
		price: number | null;
		weight: number | null;
		img: string | null;
	}[];
}

const Selector = ({ sectionIndex, id, options, title }: SelectorProps) => {
	const { t } = useTranslation();
	const selections = useCraftStore((state) => state.selections[sectionIndex]);
	const addSelection = useCraftStore((state) => state.addSelection);

	return (
		<div className="flex flex-col 1280:text-2xl 300:text-xl 1280:w-90 400:w-70 w-full  h-fit gap-3 ">
			<div className="1280:text-4xl sm:text-3xl 300:text-2xl text-xl">
				{t(title)}
			</div>
			{selections.map((item, index) => (
				<SelectorDropMenu
					key={item.id}
					options={options}
					itemId={item.id}
					optionIndex={index}
					sectionIndex={sectionIndex}
				/>
			))}
			{id !== 1 && (
				<div className="w-full h-fit flex justify-center items-center">
					<button
						onClick={() => addSelection(id, options)}
						className="flex items-center justify-center gap-2 rounded-full 1280:text-2xl sm:text-lg px-2 bg-emerald-900 text-white cursor-pointer group"
					>
						<Plus className="group-hover:rotate-90 transition-transform duration-300" />
						{t("ui.add_item")}
					</button>
				</div>
			)}
		</div>
	);
};

export default Selector;
