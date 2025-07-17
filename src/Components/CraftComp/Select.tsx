import { useState } from "react";
import x from "../../assets/Images/x.png";
import arrow from "../../assets/Images/arrow.png";

interface imgProps {
  topBun?: string;
  beefPatty?: string;
  chickenPatty?: string;
  ketchup?: string;
  mayonnaise?: string;
  salat?: string;
  tomatoes?: string;
  friedEgg?: string;
  pickles?: string;
  cucumbers?: string;
  cheeseDorblu?: string;
  cheeseCheddar?: string;
  bacon?: string;
  botBun?: string;
}

interface selectProps {
  selectBoxIndex: number;
  optionIndex: number;
  itemId: number;
  duplicate: {
    id: number;
    value: string;
    price: number | null;
    weight: number | null;
    img: imgProps | null;
  }[];
  index: number;
  id: number;
  options: {
    text: string;
    weight: number | null;
    price: number | null;
    img: imgProps | null;
  }[];
  handleRemove: (selectBoxIndex: number, itemId: number) => void;
  handleSelectedText: (
    text: string,
    weight: number | null,
    price: number | null,
    itemIndex: number,
    selectBoxIndex: number,
    img: imgProps | null
  ) => void;
}

const Select = ({
  duplicate,
  index,
  id,
  options,
  handleRemove,
  handleSelectedText,
  itemId,
  optionIndex,
  selectBoxIndex,
}: selectProps) => {
  const [dropDown, setDropDown] = useState<number | null>(null);
  const [text, setText] = useState(options[id].text);

  const handleText = (id: number) => {
    setText(options[id].text);
  };

  const handleDropDown = (index: number) => {
    setDropDown((prev) => (prev === index ? null : index));
  };

  return (
    <div
      key={`${selectBoxIndex}-${itemId}`}
      className="select-wrap cursor-pointer flex w-full h-fit relative "
    >
      <div className="p-[2px] mb-3 rounded-full bg-gradient-to-r from-[#041b1b] via-[#0c1c1b] via-[#0b2424] via-[#132c2c] via-[#0e242c] via-[#0b241c] via-[#142422] via-[#132c23] via-[#0c1c24] to-[#0c1414] w-full">
        <div
          onClick={() => handleDropDown(index)}
          tabIndex={0}
          onBlur={() => setDropDown(null)}
          className=" flex justify-between w-full rounded-xl p-2 text-2xl group"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            {text}
          </span>
          <div className="arrow">
            <img
              className="w-3 m-3 transition-transform duration-300 group-hover:rotate-180"
              src={arrow}
              alt=""
            />
          </div>
          {dropDown === index && (
            <div className="z-1 border-2  flex left-0 w-full justify-center absolute top-[calc(100%+.25em)] bg-gradient-to-r from-[#041b1b] via-[#0c1c1b] via-[#0b2424] via-[#132c2c] via-[#0e242c] via-[#0b241c] via-[#142422] via-[#132c23] via-[#0c1c24] to-[#0c1414] ">
              <ul className="m-0 p-0 list-none w-full ">
                {options.map((item, i) => (
                  <li
                    className="w-full p-2  hover:bg-gradient-to-r from-[#0c2f2f] via-[#1a302f] via-[#1a3a3a] via-[#264646] via-[#1d3c46] via-[#1d3a30] via-[#2a3c3a] via-[#274638] via-[#1d3340] to-[#1e2a2a]"
                    key={i}
                    onClick={() => {
                      handleText(i);
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
                    <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
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
            handleRemove(index, itemId);
          }}
          className="w-8 h-8 ml-3 mt-3 absolute left-[calc(100%+.25em)] transition-transform duration-300 hover:rotate-90"
          src={x}
          alt=""
        />
      )}
    </div>
  );
};

export default Select;
