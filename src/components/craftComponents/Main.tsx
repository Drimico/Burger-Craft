import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

const Main = () => {
	return (
		<div className="flex lg:flex-row md:flex-row sm:flex-row justify-around items-center  xxs:flex-col flex-col gap-20 px-12">
			<LeftSide />
			<RightSide />
		</div>
	)
}

export default Main
