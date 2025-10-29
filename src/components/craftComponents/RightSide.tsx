import useCraftStore from "../../store/useCraftStore"

function RightSide() {
  const { selections } = useCraftStore()
  return (
    <div className="flex flex-col justify-center items-center">
      <div >
        {selections
          .flat()
          .filter((item) => item.img)
          .map((item, index) => (
            <img
              key={`ingredient-${index}`}
              className="w-100 mb-2 object-contain"
              src={item.img!}
              alt="burger-ingredient"
            />
          ))}
      </div>
      <img className="w-100 " src="/images/botBun.svg" alt="" />
    </div>
  )
}

export default RightSide
