import { MdAddChart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";


const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-indigo-500 text-white py-3 px-4">
      <div className="text-3xl ">REACT-REDUX UYGULAMA</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 rounded-lg"
            name=""
            id=""
          >
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(searchDataFunc(e.target.value))}
            className="h-10 rounded-lg px-4 text-black outline-none"
            type="text"
            placeholder="Arama yapınız..."
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-blue-300 rounded-full justify-center items-center flex cursor-pointer w-12 h-12 hover:bg-zinc-300"
        >
          <MdAddChart size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;