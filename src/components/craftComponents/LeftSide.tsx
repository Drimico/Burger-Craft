import useCraftStore from "../../store/useCraftStore"
import SelectedItems from "./SelectedItems"
import Selector from "./Selector"

function LeftSide() {
  const { burgerOptions, selections } = useCraftStore()

  return (
    <div className="flex flex-col gap-6 text-gray-300 pt-[50px]">
      {selections.map((_, index) => (
        <Selector
          key={`section-${index}`}
          id={index + 1}
          title={burgerOptions[index].title}
          options={burgerOptions[index].options}
          sectionIndex={index}
        />
      ))}
      <SelectedItems />
    </div>
  )
}

export default LeftSide
