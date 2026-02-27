import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Main = () => {
	return (
		<div className="flex flex-col md:flex-row justify-around items-center md:items-start px-12 pt-[50px] text-gray-200 gap-10">
			<LeftSide />
			<RightSide />
		</div>
	);
};

export default Main;
