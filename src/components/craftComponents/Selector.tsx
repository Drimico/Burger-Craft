import useCraftStore from "../../store/useCraftStore";
import SelectorDropMenu from "./SelectorDropMenu";

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
}

function Selector({ selectBoxMainIndex, id, title, options }: SelectBoxProps) {
  const handleDuplicate = useCraftStore((state) => state.handleDuplicate);
  const duplicate = useCraftStore(
    (state) => state.duplicate[selectBoxMainIndex]
  );
  return (
    <div className="flex flex-col lg:w-120 md:w-100  mb-3">
      <span className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl  font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
        {id}.{title}
      </span>
      {duplicate.map((item1, index1) => (
        <SelectorDropMenu
          options={options}
          key={item1.id}
          itemId={item1.id}
          optionIndex={index1}
          selectBoxIndex={selectBoxMainIndex}
        />
      ))}
      {id !== 1 && (
        <div className="w-full flex justify-center items-center">
          <div
            onClick={() => handleDuplicate(id, options)}
            className="md:text-xl flex p-3 group items-center"
          >
            <img
              className="cursor-pointer lg:size-10 md:size-8 size-6 border-2 rounded-full p-1 transition-transform duration-300 
                    group-hover:rotate-90"
              src="/images/plus.png"
              alt=""
              
            />
            <span className="ml-2 cursor-pointer">Adaugă item</span>
          </div>
        </div>
      )}
    </div>
  );
}
export default Selector;
