import { ChevronUp } from "lucide-react"
import useCraftStore from "../../store/useCraftStore"

interface SelectorDropMenuProps {
  sectionIndex: number
  optionIndex: number
  itemId: number
  options: {
    text: string
    weight: number | null
    price: number | null
    img: string | null
  }[]
}

const SelectorDropMenu = ({
  options,
  itemId,
  optionIndex,
  sectionIndex,
}: SelectorDropMenuProps) => {
  const selections = useCraftStore((state) => state.selections[sectionIndex])
  const updateSelection = useCraftStore((state) => state.updateSelection)
  const removeItem = useCraftStore((state) => state.removeItem)
  const activeDropdown = useCraftStore((state) => state.activeDropdown)
  const setActiveDropdown = useCraftStore((state) => state.setActiveDropdown)

  const dropdownId = `${sectionIndex}-${itemId}`
  const isOpen = activeDropdown === dropdownId
  const selectedItem = selections.find((item) => item.id === itemId)
  const displayText = selectedItem?.value || "Select option"

  const handleToggle = () => {
    setActiveDropdown(isOpen ? null : dropdownId)
  }
  const handleSelect = (option: (typeof options)[0]) => {
    updateSelection(
      option.text,
      option.weight,
      option.price,
      optionIndex,
      sectionIndex,
      option.img,
    )
    setActiveDropdown(null)
  }

  return (

    <div className="relative mb-2 bg-custom-emerald rounded-2xl p-1">
      <div
        className="flex items-center justify-between p-2 rounded-full cursor-pointer"
        onClick={handleToggle}
      >
        <span>{displayText}</span>
        <div className="flex items-center gap-2">
          {selections.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                removeItem(sectionIndex, itemId)
              }}
              className="cursor-pointer relative right-[-120%] transition-transform hover:rotate-90 duration-300"
            >
              <img className="w-10" src="/images/x.png" alt="" />
            </button>
          )}
          <span>
            <ChevronUp
              className={`${isOpen ? "transition-transform rotate-360 duration-300" : "transition-transform rotate-180 duration-300"}`}
            />
          </span>
        </div>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-custom-emerald md:text-2xl sm:text-xl border rounded mt-5">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-3 hover:text-white cursor-pointer hover:bg-white/10"
              onClick={() => handleSelect(option)}
            >
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SelectorDropMenu
