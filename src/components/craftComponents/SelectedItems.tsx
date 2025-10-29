import useCraftStore from "../../store/useCraftStore"

function SelectedItems() {
  const { selections } = useCraftStore()

  const totals = selections.flat().reduce(
    (acc, item) => ({
      weight: acc.weight + (item.weight ?? 0),
      price: acc.price + (item.price ?? 0),
    }),
    { weight: 0, price: 0 },
  )

  return (
    <div className="w-full border-t-4 h-fit flex flex-col p-4 text-2xl font-bold font-mono pt-20 mt-10 ">
      
      {selections
        .flat()
        .filter((item) => item.value !== "-")
        .map((item, index) => (
          <div key={`selected-${index}`}>
            {item.value} {item.weight}g
          </div>
        ))}

      <div className="text-3xl">
        Total: <span className="text-blue-900">{totals.price} lei</span>( 
        {totals.weight}g)
      </div>
    </div>
  )
}

export default SelectedItems
