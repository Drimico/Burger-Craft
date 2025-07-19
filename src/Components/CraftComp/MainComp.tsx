import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function MainComp() {
  return (
    <div className="flex justify-around ">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default MainComp;
