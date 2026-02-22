import useCraftStore from "@/store/useCraftStore"

const AddButton = ({name}: {name: string}) => {
  const { addToCart } = useCraftStore()
  return (
    <button
      onClick={() => addToCart(name)}
      className="w-full bg-blue-950 text-2xl p-3 cursor-pointer hover:bg-blue-900 hover:text-white rounded-2xl"
    >
      <span>Adauga in cos</span>
    </button>
  )
}

export default AddButton
