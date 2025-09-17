import useCraftStore from "../../store/useCraftStore";

function SelectedItems() {
  const { duplicate } = useCraftStore();
  const { totalWeight, totalPrice } = duplicate.reduce(
    (totals, selectBoxItems) => {
      selectBoxItems.forEach((item) => {
        if (item.weight !== null) {
          totals.totalWeight += item.weight;
        }
        if (item.price !== null) {
          totals.totalPrice += item.price;
        }
      });
      return totals;
    },
    { totalWeight: 0, totalPrice: 0 }
  );
  return (
    <div className="w-full h-fit border-2 flex flex-col p-4 text-xl">
      {duplicate.flatMap((selectBoxItems, selectBoxIndex) =>
        selectBoxItems.map((item, itemIndex) => {
          if (item.value !== "-") {
            return (
              <div key={`${selectBoxIndex}-${itemIndex}`}>
                {item.value} {item.weight}g
              </div>
            );
          }
          return null;
        })
      )}
      <div className="text-2xl">
        <span>
          Total: <span className="text-blue-900">{totalPrice}lei</span> (
          {totalWeight}) g
        </span>
      </div>
    </div>
  );
}

export default SelectedItems;
