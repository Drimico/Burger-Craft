import Select from "./Select";
import plus from "../../assets/Images/plus.png";
import useCraftStore from "../../store/useCraftStore";

interface SelectBoxProps {
  selectBoxMainIndex: number;
  id: number;
  title: string;
  options: {
    text: string;
    price: number | null;
    weight: number | null;
    img: string | null;
  }[];
  duplicate: {
    id: number;
    value: string;
    price: number | null;
    weight: number | null;
    img: string | null;
  }[];
}

function SelectBox({
  selectBoxMainIndex,
  id,
  title,
  options,
  duplicate,
}: SelectBoxProps) {
  const handleDuplicate = useCraftStore((state) => state.handleDuplicate);
  return (
    <div className="flex flex-col w-160 mb-3">
      <span className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
        {id}.{title}
      </span>
      {duplicate.map((item1, index1) => (
        <Select
          duplicate={duplicate}
          options={options}
          id={0}
          key={item1.id}
          index={selectBoxMainIndex}
          itemId={item1.id}
          optionIndex={index1}
          selectBoxIndex={selectBoxMainIndex}
        />
      ))}
      {id !== 1 && (
        <div className="w-full flex justify-center items-center">
          <div
            onClick={() => handleDuplicate(id, options)}
            className=" text-xl flex p-3 group "
          >
            <img
              className="cursor-pointer border-2 rounded-full p-1 transition-transform duration-300 
                    group-hover:rotate-90"
              src={plus}
              alt=""
            />
            <span className="ml-2 cursor-pointer">Adaugă item</span>
          </div>
        </div>
      )}
    </div>
  );
}
export default SelectBox;
