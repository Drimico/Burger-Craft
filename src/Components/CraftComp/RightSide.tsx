import botBun from "../../assets/Images/bottBun.png"
interface imgProps {
  topBun?: string;
  beefPatty?: string;
  chickenPatty?: string;
  ketchup?: string;
  mayonnaise?: string;
  salat?: string;
  tomatoes?: string;
  friedEgg?: string;
  pickles?: string;
  cucumbers?: string;
  cheeseDorblu?: string;
  cheeseCheddar?: string;
  bacon?: string;
  botBun?: string;
}

interface RightSideProps {
    duplicate: {id: number,value: string,price: number | null,weight: number | null, img: imgProps | null}[][]
}


function RightSide ({duplicate}: RightSideProps) {
    return (
        <div className="flex flex-col mt-10 mr-10">
            <div>
                {duplicate.map((item1, index1) => (
                    item1.map((item2, index2) => {
                        if(item2.img) {
                            const imagePaths = Object.values(item2.img).filter(Boolean)
                            
                            if(imagePaths.length > 0) {
                                const imageSrc = imagePaths[0]
                                return(
                                    <img
                                    className="w-80 mb-2"
                                    key={`${index1}-${index2}-${imageSrc}`}
                                    src={imageSrc}
                                    />
                                )
                            }    
                        }
                    }
                )
                ))}
            </div>
            <img className="w-80 " src={botBun} alt="" />

        </div>
    )
}

export default RightSide