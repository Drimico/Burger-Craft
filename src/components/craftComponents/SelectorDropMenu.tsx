import { useState } from "react";
import useCraftStore from "../../store/useCraftStore";

interface selectProps {
  selectBoxIndex: number;
  optionIndex: number;
  itemId: number;
  options: {
    text: string;
    weight: number | null;
    price: number | null;
    img: string | null;
  }[];
}

const SelectorDropMenu = ({
  options,
  itemId,
  optionIndex,
  selectBoxIndex,
}: selectProps) => {
  const [dropDown, setDropDown] = useState<number | null>(null);
  const handleDropDown = (index: number) => {
    setDropDown((prev) => (prev === index ? null : index));
  };
  const handleRemove = useCraftStore((store) => store.handleRemove);
  const handleSelectedText = useCraftStore((store) => store.handleSelectedText);
  const duplicate = useCraftStore((state) => state.duplicate[selectBoxIndex]);

  const selectedItem = duplicate.find((item) => item.id === itemId);
  const text = selectedItem ? selectedItem.value : "";

  return (
    <div
      key={`${selectBoxIndex}-${itemId}`}
      className="cursor-pointer flex w-full h-fit relative justify-between"
    >
      <div className="p-[2px] mb-3 rounded-full bg-gradient-to-r from-[#041b1b] via-[#0c1c1b] via-[#0b2424] via-[#132c2c] via-[#0e242c] via-[#0b241c] via-[#142422] via-[#132c23] via-[#0c1c24] to-[#0c1414] w-full">
        <div
          onClick={() => handleDropDown(optionIndex)}
          tabIndex={0}
          onBlur={() => setDropDown(null)}
          className=" flex justify-between items-center w-full rounded-xl p-4 text-2xl group"
        >
          <span className="lg:text-3xl md:text-2xl sm:text-1xl xs:text-lg   xxs:text-lg xxxs:text-sm font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            {text}
          </span>
          <div className="flex h-full w-3">
            <img
              className=" transition-transform duration-300 group-hover:rotate-180"
              src="/images/arrow.png"
              alt=""
            />
          </div>
          {dropDown === optionIndex && (
            <div className="z-1 border-2 flex left-0 w-full justify-center absolute top-[calc(100%+.05em)] bg-gradient-to-r from-[#041b1b] via-[#0c1c1b] via-[#0b2424] via-[#132c2c] via-[#0e242c] via-[#0b241c] via-[#142422] via-[#132c23] via-[#0c1c24] to-[#0c1414] ">
              <ul className="m-0 p-0 list-none w-full ">
                {options.map((item, i) => (
                  <li
                    className="w-full sm:p-2 pb-0.5 pl-0.5 hover:bg-gradient-to-r from-[#0c2f2f] via-[#1a302f] via-[#1a3a3a] via-[#264646] via-[#1d3c46] via-[#1d3a30] via-[#2a3c3a] via-[#274638] via-[#1d3340] to-[#1e2a2a]"
                    key={i}
                    onClick={() => {
                      handleSelectedText(
                        options[i].text,
                        options[i].weight,
                        options[i].price,
                        optionIndex,
                        selectBoxIndex,
                        item.img
                      );
                    }}
                  >
                    <span className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl   xxs:text-lg xxxs:text-sm font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {duplicate.length > 1 && (
        

        <img
          onClick={() => {
            handleRemove(selectBoxIndex, itemId);
          }}
          className="sm:size-8 size-6 absolute sm:top-5 top-4 left-[calc(100%+.25em)] transition-transform duration-300 hover:rotate-90"
          src="/images/x.png"
          alt=""
          />
          
      )}
    </div>
  );
};

export default SelectorDropMenu;
