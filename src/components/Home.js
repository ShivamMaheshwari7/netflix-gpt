import { Link } from "react-router-dom";
import { BG_URL, LOGO_URL } from "../utils/constants";

const Home = () => {
  return (
    <div>
      <div className="absolute w-[100%] h-[100%] flex justify-center items-center">
        <div className="text-6xl font-extrabold text-white bg-gradient-to-b from-black">
          Unlimited movies, TV shows and more
        </div>
      </div>
      <div className="absolute w-[100%] px-36 py-2 flex justify-between bg-gradient-to-b from-black">
        <div>
          <img className="w-52" src={LOGO_URL} alt="logo" />
        </div>
        <div className="my-auto">
          <Link to="/login">
            <button className="px-4 py-2 bg-red-600 text-white text-lg rounded-lg font-semibold">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <img src={BG_URL} alt="background" />
    </div>
  );
};

export default Home;
