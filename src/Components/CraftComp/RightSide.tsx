import botBun from "../../assets/Images/bottBun.png";
import useCraftStore from "../../store/useCraftStore";

function RightSide() {
  const { duplicate } = useCraftStore();
  return (
    <div className="flex flex-col mt-10 mr-10">
      <div>
        {duplicate.map((item1, index1) =>
          item1.map((item2, index2) => {
            if (item2.img) {
                return (
                  <img
                    className="w-80 mb-2"
                    key={`${index1}-${index2}-${item2.img}`}
                    src={item2.img}
                  />
                );
              
            }
          })
        )}
      </div>
      <img className="w-80 " src={botBun} alt="" />
    </div>
  );
}

export default RightSide;
