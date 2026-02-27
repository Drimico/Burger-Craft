import { ChevronUp } from "lucide-react";
import useCraftStore from "../../store/useCraftStore";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface SelectorDropMenuProps {
  sectionIndex: number;
  optionIndex: number;
  itemId: number;
  options: {
    text: string;
    weight: number | null;
    price: number | null;
    img: string | null;
  }[];
}

const SelectorDropMenu = ({ options, itemId, optionIndex, sectionIndex }: SelectorDropMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const selections = useCraftStore((state) => state.selections[sectionIndex]);
  const updateSelection = useCraftStore((state) => state.updateSelection);
  const removeSelection = useCraftStore((state) => state.removeSelection);

  const selectedItem = selections.find((item) => item.id === itemId) ?? {
    id: itemId,
    value: "-",
    price: null,
    weight: null,
    img: null,
  };
  const displayText = selectedItem?.value === "-" ? "-" : `${t(selectedItem.value)} (${selectedItem?.price} lei)`;
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSelect = (option: (typeof options)[0]) => {
    updateSelection(option.text, option.weight, option.price, optionIndex, sectionIndex, option.img);
    setIsOpen(false);
  };

  return (
    <div className="relative mb-2 bg-custom-emerald rounded-2xl p-1">
      <div className="flex items-center justify-between p-2 rounded-full cursor-pointer relative" onClick={handleToggle}>
        <span>{selectedItem?.price ? displayText : "-"}</span>
        <span>
          <ChevronUp className={`${isOpen ? "transition-transform rotate-360 duration-300" : "transition-transform rotate-180 duration-300"}`} />
        </span>

        {selections.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeSelection(sectionIndex, itemId);
            }}
            className={`cursor-pointer absolute ${sectionIndex % 2 === 1 ? "-right-[15%]" : "-left-[15%]"} transition-transform hover:rotate-90 duration-300`}
          >
            <img className="w-10" src="/images/x.png" alt="" />
          </button>
        )}
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-custom-emerald md:text-2xl sm:text-xl border rounded mt-5">
          {options.map((option, index) => (
            <li key={index} className="p-3 hover:text-white cursor-pointer hover:bg-white/10" onClick={() => handleSelect(option)}>
              {t(option.text)} {option.price && `(${option.price} lei)`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectorDropMenu;
