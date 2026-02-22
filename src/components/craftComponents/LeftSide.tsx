import useCraftStore from "../../store/useCraftStore"
import AddButton from "./AddButon"
import SelectedItems from "./SelectedItems"
import Selector from "./Selector"
import BurgerNameInput from "./BurgerNameInput"
import { useState } from "react"
const LeftSide = () => {
  const { burgerOptions, selections } = useCraftStore()
  const [burgerName, setBurgerName] = useState("Burger Creat")
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
      <BurgerNameInput onChange={setBurgerName}/>
      <AddButton name={burgerName}/> 
    </div>
  )
}

export default LeftSide
