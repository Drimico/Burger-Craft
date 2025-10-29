import { Plus } from "lucide-react"
import useCraftStore from "../../store/useCraftStore"
import SelectorDropMenu from "./SelectorDropMenu"

interface SelectorProps {
  sectionIndex: number
  id: number
  title: string
  options: {
    text: string
    price: number | null
    weight: number | null
    img: string | null
  }[]
}

function Selector({ sectionIndex, id, options,title }: SelectorProps) {
  const selections = useCraftStore((state) => state.selections[sectionIndex])
  const duplicateItem = useCraftStore((state) => state.duplicateItem)

  return (
    <div className="flex flex-col md:text-3xl sm:text-xl lg:w-120 md:w-100 sm:w-80 mb-3 gap-3 ">
      <div className="md:text-4xl sm:text-2xl xxxs:text-xl ">{title}</div>
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
            onClick={() => duplicateItem(id, options)}
            className="flex items-center justify-center gap-2 rounded-full md:text-2xl sm:text-xl px-2 bg-emerald-900 text-white cursor-pointer group"
          >
            <Plus className="group-hover:rotate-90 transition-transform duration-300"/>
            Adauga Item{" "}
          </button>
        </div>
      )}
    </div>
  )
}

export default Selector
