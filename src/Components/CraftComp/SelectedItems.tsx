interface SelectedItemsProps {
    duplicate: {id: number;
        value: string;
        price: number | null;
        weight: number | null;
        }[][]
}

function SelectedItems ({duplicate}:SelectedItemsProps) {


 
        let newTotalWeight = 0
        duplicate.forEach((selectBoxIndex) => {
            selectBoxIndex.forEach((item) => {
                if (item.weight !== null) {
                    newTotalWeight += item.weight
                }
            })
        })
        let newTotalPrice = 0
        duplicate.forEach((selectBoxIndex) => {
            selectBoxIndex.forEach((item) => {
                if (item.price !== null) {
                    newTotalPrice += item.price
                }
            })
        })
        

    console.log(duplicate);
    
    return(
        <div className="w-full h-fit border-2 flex flex-col p-4 text-xl">
            {duplicate.map((item1,index1) => (
                item1.map((item2, index2) =>{ 
                if(item2.value !== "-"){
                    return(<div key={`${index1}-${index2}`}>{item2.value} {item2.weight}g</div>)
                }
                return( 
                null
            )})
            ))}
            <div className="text-2xl"><span>Total: <span className="text-blue-900">{newTotalPrice}lei</span> ({newTotalWeight}) g</span></div>
        </div>
    )
}

export default SelectedItems