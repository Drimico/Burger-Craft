import SelectBox from "./SelectBox";
import SelectedItems from "./SelectedItems";
import useCraftStore from "../../store/useCraftStore";
function LeftSide() {
  const { burgerOptions, duplicate } = useCraftStore();

  return (
    <div className="flex flex-col text-emerald-500 pt-[50px]">
      {duplicate.map((item1, index1) => (
        <SelectBox
          duplicate={item1}
          key={index1}
          id={index1 + 1}
          title={burgerOptions[index1].title}
          options={burgerOptions[index1].options}
          selectBoxMainIndex={index1}
        />
      ))}
      <SelectedItems />
    </div>
  );
}
export default LeftSide;
