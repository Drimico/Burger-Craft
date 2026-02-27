import { burgerOptions } from "@/consts/burgerOptions";
import useCraftStore from "../../store/useCraftStore";
import SelectedItems from "./SelectedItems";
import Selector from "./Selector";
const LeftSide = () => {
  const { selections } = useCraftStore();

  return (
    <div className="1024:grid 1024:grid-cols-2 1024:grid-rows-[repeat(3,auto)] 1024:gap-x-auto 1024:gap-y-20 flex flex-col items-center lg:items-start justify-start gap-10 ">
      {selections.map((_, index) => (
        <Selector
          key={`section-${index}`}
          id={index + 1}
          title={burgerOptions[index].title}
          options={burgerOptions[index].options}
          sectionIndex={index}
        />
      ))}
      <div className="row-start-4 col-span-2 items-center justify-center flex">
        <SelectedItems />
      </div>
    </div>
  );
};

export default LeftSide;
