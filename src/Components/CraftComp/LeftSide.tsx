import SelectBox from "./SelectBox";
import SelectedItems from "./SelectedItems";

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

interface LeftSideProps {
  duplicate: {
    id: number;
    value: string;
    price: number | null;
    weight: number | null;
    img: imgProps | null;
  }[][];
  handleRemove: (selectBoxIndex: number, itemId: number) => void;
  titles: string[];
  allOptions: (
    | { text: string; price: null; weight: null; img: imgProps | null }
    | { text: string; price: number; weight: number; img: imgProps | null }
  )[][];
  handleDuplicate: (
    id: number,
    options: {
      text: string;
      price: number | null;
      weight: number | null;
      img: imgProps | null;
    }[]
  ) => void;
  handleSelectedText: (
    text: string,
    weight: number | null,
    price: number | null,
    index: number,
    selectBoxIndex: number,
    img: imgProps | null
  ) => void;
}

function LeftSide({
  duplicate,
  handleRemove,
  titles,
  allOptions,
  handleDuplicate,
  handleSelectedText,
}: LeftSideProps) {
  return (
    <div className="flex flex-col text-emerald-500 pt-[50px]">
      {duplicate.map((item1, index1) => (
        <SelectBox
          handleRemove={handleRemove}
          duplicate={item1}
          key={index1}
          id={index1 + 1}
          title={titles[index1]}
          options={allOptions[index1]}
          handleDuplicate={handleDuplicate}
          selectBoxMainIndex={index1}
          handleSelectedText={handleSelectedText}
        />
      ))}
      <SelectedItems duplicate={duplicate} />
    </div>
  );
}
export default LeftSide;
