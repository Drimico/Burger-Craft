import { useState } from "react";
import BurgerCardInfo from "./BurgerCardInfo";

interface BurgerCardProps {
  index: number;
  name: string;
  price: number;
  weight: number;
  adds: {
    id: string;
    weight: number;
    price: number;
  }[];
  img: string;
  windowWidth: number;
}

const BurgerCard = ({ name, price, adds, img, index, weight, windowWidth }: BurgerCardProps) => {
  const [checkedAdds, setCheckedAdds] = useState<boolean[]>(() => adds.map(() => false));
  const currentPrice = checkedAdds.reduce((sum, checked, idx) => sum + (checked ? adds[idx].price : 0), price);
  return (
    <div
      className={`flex lg:flex-row flex-col lg:gap-2  items-center justify-center w-full h-fit relative ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="relative flex w-fit ">
        <img className="object-contain" src={img} alt="burger-image" />
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[100%] md:border-4 border-2 border-emerald-700 lg:h-20 md:h-16 h-12 lg:min-w-64 md:w-44 w-24 flex justify-center items-center ">
          <div className="bg-black lg:text-4xl md:text-3xl text-2xl lg:h-16 md:h-12 h-9 lg:min-w-60 md:w-40 w-21 flex items-center justify-center text-emerald-700 ">
            {currentPrice} lei
          </div>
        </div>
      </div>
      <BurgerCardInfo
        checkedAdds={checkedAdds}
        setCheckedAdds={setCheckedAdds}
        index={index}
        adds={adds}
        name={name}
        weight={weight}
        windowWidth={windowWidth}
      />
    </div>
  );
};

export default BurgerCard;
